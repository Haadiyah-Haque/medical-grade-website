import { Reveal } from "./Reveal";

const variants = [
  {
    code: "DV",
    name: "Doctor Variant",
    forWho: "Solo practitioners building an owned digital practice.",
    setup: "20,000",
    annual: "10,000",
    note: "Includes automated CV builder from your profile.",
  },
  {
    code: "CV",
    name: "Clinic Variant",
    forWho: "Multi-doctor clinics running operations from one website.",
    setup: "30,000",
    annual: "15,000",
    note: "Shared portals, healthcare billing and patient continuity.",
  },
  {
    code: "HV",
    name: "Hospital Variant",
    forWho: "Hospitals needing departments, hiring and scale.",
    setup: "50,000",
    annual: "25,000",
    note: "Adds recruitment portal and searchable CV bank.",
  },
];

export function Variants() {
  return (
    <section id="variants" className="bg-surface px-5 py-16 md:px-8 md:py-20">
      <div className="mx-auto max-w-6xl">
        <Reveal className="max-w-2xl">
          <p className="text-sm font-semibold tracking-[0.18em] text-orange uppercase">
            Choose your path
          </p>
          <h2 className="mt-3 font-display text-3xl leading-tight font-semibold text-cream md:text-4xl text-balance">
            Three variants. One standard.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-cream/65">
            Deployment fee, annual at half of setup, plus light usage as you grow.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {variants.map((v, i) => (
            <Reveal
              key={v.code}
              delay={(i + 1) as 1 | 2 | 3}
              className="flex flex-col border border-white/10 bg-surface-2/80 p-6 transition hover:border-orange/40"
            >
              <span className="text-sm font-bold tracking-[0.2em] text-orange uppercase">{v.code}</span>
              <h3 className="mt-2 font-display text-xl font-semibold text-cream">{v.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-cream/55">{v.forWho}</p>

              <div className="mt-6 space-y-2 border-t border-white/10 pt-5">
                <PriceRow label="Deployment" value={`PKR ${v.setup}`} />
                <PriceRow label="Annual" value={`PKR ${v.annual}`} />
              </div>

              <p className="mt-5 text-sm leading-relaxed text-cream/45">{v.note}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={2} className="mt-8 text-sm text-cream/45">
          Usage: <span className="text-cream/70">PKR 1</span> per invoice ·{" "}
          <span className="text-cream/70">PKR 5</span> per prescription.
        </Reveal>
      </div>
    </section>
  );
}

function PriceRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline justify-between gap-4">
      <span className="text-sm text-cream/45">{label}</span>
      <span className="font-display text-lg font-semibold text-cream">{value}</span>
    </div>
  );
}
