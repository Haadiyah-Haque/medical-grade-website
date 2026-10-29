import { Reveal } from "./Reveal";

export function FinalCta() {
  return (
    <section id="start" className="relative overflow-hidden bg-ink px-5 py-16 md:px-8 md:py-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,140,68,0.14),transparent_55%)]" />

      <div className="relative mx-auto max-w-3xl text-center">
        <Reveal>
          <p className="text-sm font-semibold tracking-[0.18em] text-orange uppercase">
            Your next chapter
          </p>
          <h2 className="mt-3 font-display text-3xl leading-tight font-semibold text-cream md:text-4xl text-balance">
            Your complete practice platform, live in 10 days.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-cream/65">
            From signup to a working practice website — setup handled by our team.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:hello@mgw.example"
              className="rounded-md bg-orange px-7 py-3.5 text-base font-semibold text-ink transition hover:bg-orange-dark"
            >
              Talk to the MGW team
            </a>
            <a
              href="#journey"
              className="rounded-md border border-cream/20 px-7 py-3.5 text-base font-medium text-cream/80 transition hover:border-cream/40 hover:text-cream"
            >
              Revisit the journey
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
