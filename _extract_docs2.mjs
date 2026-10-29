import fs from "fs";
import path from "path";
import { execFileSync } from "child_process";
import os from "os";

const out = path.join("C:/Users/HP/Desktop/Web-Builder/mgw-website-2", "_docs_extract");
fs.mkdirSync(out, { recursive: true });

const files = [
  {
    src: "C:/Users/HP/Desktop/Web-Builder/MGW/MGW Training Manual/Chapter 1 - The Digital Landscape of Pakistan's Healthcare Sector.docx",
    name: "Chapter 1 - Digital Landscape.txt",
  },
  {
    src: "C:/Users/HP/Desktop/Web-Builder/MGW/MGW Training Manual/Chapter 4 - Security, Reliability & Support .docx",
    name: "Chapter 4 - Security Reliability Support.txt",
  },
  {
    src: "C:/Users/HP/Downloads/ClinTa_Web_Builder_Catalogue.docx",
    name: "ClinTa_Web_Builder_Catalogue.txt",
  },
];

function extract(docxPath) {
  const tmpRoot = fs.mkdtempSync(path.join(os.tmpdir(), "mgwdoc-"));
  const zipPath = path.join(tmpRoot, "doc.zip");
  const unzipDir = path.join(tmpRoot, "unzipped");
  fs.copyFileSync(docxPath, zipPath);
  fs.mkdirSync(unzipDir);

  // Use tar (Windows 10+) which handles paths better, or Expand-Archive with short paths
  try {
    execFileSync("tar", ["-xf", zipPath, "-C", unzipDir], { stdio: "pipe" });
  } catch {
    execFileSync(
      "powershell.exe",
      [
        "-NoProfile",
        "-Command",
        `Expand-Archive -LiteralPath "${zipPath}" -DestinationPath "${unzipDir}" -Force`,
      ],
      { stdio: "pipe" }
    );
  }

  const xmlPath = path.join(unzipDir, "word", "document.xml");
  const xml = fs.readFileSync(xmlPath, "utf8");
  const paras = [];
  for (const chunk of xml.split(/<\/w:p>/)) {
    const texts = [...chunk.matchAll(/<w:t[^>]*>([^<]*)<\/w:t>/g)].map((m) => m[1]);
    const line = texts
      .join("")
      .replace(/&amp;/g, "&")
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">")
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'")
      .trim();
    if (line) paras.push(line);
  }
  fs.rmSync(tmpRoot, { recursive: true, force: true });
  return paras.join("\n");
}

for (const f of files) {
  try {
    const text = extract(f.src);
    fs.writeFileSync(path.join(out, f.name), text, "utf8");
    console.log("OK", f.name, text.length);
  } catch (e) {
    console.log("FAIL", f.name, e.message);
  }
}
