import { Reveal } from "./Reveal";

const fragments = [
  { title: "Rented listing", copy: "Found on an aggregator — next to competitors — on a page you do not own." },
  { title: "Brochure site", copy: "Informs patients, but every edit waits on a developer." },
  { title: "Front-desk till", copy: "Takes payment. Knows nothing of the appointment or prescription." },
  { title: "Separate clinical file", copy: "If an EMR exists, it lives apart from billing and the patient." },
];

export function BeforeScene() {
  return (
    <section className="relative bg-ink px-5 py-16 md:px-8 md:py-20">
      <div className="mx-auto max-w-6xl">
        <Reveal className="max-w-2xl">
          <p className="text-sm font-semibold tracking-[0.18em] text-green uppercase">
            Where most practices begin
          </p>
          <h2 className="mt-3 font-display text-3xl leading-tight font-semibold text-cream md:text-4xl text-balance">
            Already digital — just not in one place.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-cream/65 md:text-lg">
            Doctors, clinics and hospitals stitch together tools that each solve one slice. None share
            a thread — and patients rarely return to a door you actually own.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {fragments.map((item, i) => (
            <Reveal
              key={item.title}
              delay={((i % 3) + 1) as 1 | 2 | 3}
              className="border-t border-orange/35 pt-4"
            >
              <h3 className="font-display text-lg font-semibold text-cream">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-cream/55">{item.copy}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
