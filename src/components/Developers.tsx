import { Reveal } from "./Reveal";

export function Developers() {
  return (
    <section
      id="developers"
      className="relative overflow-hidden bg-green-mid px-5 py-14 text-cream md:px-8 md:py-16"
    >
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(circle_at_70%_50%,rgba(244,129,32,0.22),transparent_60%)]"
        aria-hidden
      />

      <div className="relative mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
        <Reveal className="max-w-xl">
          <p className="text-sm font-semibold tracking-[0.18em] text-orange-soft uppercase">
            Build with us
          </p>
          <h2 className="mt-3 font-display text-2xl leading-tight font-semibold md:text-3xl text-balance">
            Want to become a Medical Grade Web Developer?
          </h2>
          <p className="mt-3 text-base leading-relaxed text-cream/65">
            Build, customise and deploy MGW for doctors, clinics and hospitals. Join D-RIGHT and work
            on real healthcare websites from day one.
          </p>
        </Reveal>

        <Reveal delay={2}>
          <a
            href="#apply"
            className="inline-flex rounded-md bg-orange px-7 py-3.5 text-base font-semibold text-ink transition hover:bg-orange-dark"
          >
            Apply Now
          </a>
        </Reveal>
      </div>
    </section>
  );
}
