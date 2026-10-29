import fs from "fs";
import path from "path";
import { execFileSync } from "child_process";
import { createRequire } from "module";

const out = path.join("C:/Users/HP/Desktop/Web-Builder/mgw-website-2", "_docs_extract");
fs.mkdirSync(out, { recursive: true });

const files = [
  "C:/Users/HP/Desktop/Web-Builder/MGW/MGW Training Manual/MGW Training Manual - Preface (Final Version).docx",
  "C:/Users/HP/Desktop/Web-Builder/MGW/MGW Training Manual/Chapter 1 - The Digital Landscape of Pakistan's Healthcare Sector.docx",
  "C:/Users/HP/Desktop/Web-Builder/MGW/MGW Training Manual/Chapter 2 - The real All-in-One MGW.docx",
  "C:/Users/HP/Desktop/Web-Builder/MGW/MGW Training Manual/Chapter 3 - SFPs.docx",
  "C:/Users/HP/Desktop/Web-Builder/MGW/MGW Training Manual/Chapter 4 - Security, Reliability & Support .docx",
  "C:/Users/HP/Desktop/Web-Builder/MGW/MGW Training Manual/Chapter 5 - CMS, UX-UI.docx",
  "C:/Users/HP/Desktop/Web-Builder/MGW/MGW Training Manual/Chapter 6 - VAS & IC.docx",
  "C:/Users/HP/Desktop/Web-Builder/MGW/MGW Training Manual/Chapter 7 - Integrated Portals.docx",
  "C:/Users/HP/Desktop/Web-Builder/MGW/MGW Training Manual/Chapter 8 - User Activity & Analytics.docx",
  "C:/Users/HP/Downloads/MGW Feedback and Direction.docx",
  "C:/Users/HP/Downloads/ClinTa_Web_Builder_Catalogue.docx",
];

function extractWithExpand(docxPath) {
  const base = path.basename(docxPath, ".docx").replace(/[<>:"/\\|?*]/g, "_");
  const tmpDir = path.join(out, `_tmp_${base}`);
  fs.rmSync(tmpDir, { recursive: true, force: true });
  fs.mkdirSync(tmpDir, { recursive: true });

  // Copy to .zip then expand with PowerShell
  const zipPath = path.join(tmpDir, "doc.zip");
  fs.copyFileSync(docxPath, zipPath);
  execFileSync(
    "powershell.exe",
    ["-NoProfile", "-Command", `Expand-Archive -LiteralPath '${zipPath}' -DestinationPath '${tmpDir}\\unzipped' -Force`],
    { stdio: "pipe" }
  );

  const xmlPath = path.join(tmpDir, "unzipped", "word", "document.xml");
  const xml = fs.readFileSync(xmlPath, "utf8");

  // Split paragraphs and strip tags roughly
  const paras = [];
  const pMatches = xml.split(/<\/w:p>/);
  for (const chunk of pMatches) {
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

  fs.rmSync(tmpDir, { recursive: true, force: true });
  return paras.join("\n");
}

for (const f of files) {
  const name = path.basename(f, ".docx").replace(/[<>:"/\\|?*]/g, "_") + ".txt";
  try {
    if (!fs.existsSync(f)) {
      console.log("MISS", name);
      continue;
    }
    const text = extractWithExpand(f);
    fs.writeFileSync(path.join(out, name), text, "utf8");
    console.log("OK", name, text.length);
  } catch (e) {
    console.log("FAIL", name, e.message);
  }
}
