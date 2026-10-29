export function Hero() {
  return (
    <section id="top" className="hero-grid relative min-h-[100svh] overflow-hidden text-cream">
      <div className="noise pointer-events-none absolute inset-0" aria-hidden />

      <div
        className="pointer-events-none absolute inset-0 opacity-35"
        aria-hidden
        style={{
          backgroundImage:
            "linear-gradient(rgba(245,250,247,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(245,250,247,0.04) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage: "radial-gradient(ellipse at center, black 20%, transparent 75%)",
        }}
      />

      <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-center px-5 pt-28 pb-16 md:px-8 md:pt-24 md:pb-20 lg:block lg:py-28">
        <div className="max-w-3xl lg:pt-16">
          <p className="reveal is-visible mb-5 text-sm font-semibold tracking-[0.22em] text-orange-soft uppercase">
            MGW · Medical Grade Website
          </p>

          <h1 className="reveal is-visible reveal-delay-1 font-display text-[clamp(2.4rem,7vw,5.2rem)] leading-[1.05] font-semibold tracking-tight text-balance">
            One website.
            <br />
            <span className="text-orange-soft">Your entire practice.</span>
          </h1>

          <p className="reveal is-visible reveal-delay-2 mt-6 max-w-xl text-base leading-relaxed text-cream/75 md:text-xl">
            Replace the brochure site, the billing software and the patient files with one platform
            you own — appointments, e-prescriptions, invoicing, portals and reports.
          </p>

          <div className="reveal is-visible reveal-delay-3 mt-8 flex flex-wrap items-center gap-4 md:mt-10">
            <a
              href="#start"
              className="rounded-md bg-orange px-6 py-3.5 text-base font-semibold text-ink transition hover:bg-orange-dark"
            >
              Begin with MGW
            </a>
            <a
              href="#journey"
              className="rounded-md border border-cream/25 bg-white/5 px-6 py-3.5 text-base font-medium text-cream backdrop-blur-sm transition hover:border-cream/45 hover:bg-white/10"
            >
              See the journey
            </a>
          </div>
        </div>

        <div className="reveal is-visible reveal-delay-3 relative mx-auto mt-12 w-[min(100%,240px)] sm:w-[260px] lg:absolute lg:right-[6%] lg:bottom-[18%] lg:mx-0 lg:mt-0 lg:w-[260px] xl:right-[10%] xl:w-[300px]">
          <div className="animate-float relative">
            <div
              className="animate-pulse-ring absolute -inset-5 rounded-full border border-orange/30 lg:-inset-6"
              aria-hidden
            />
            <HeroVisual />
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-ink to-transparent" />
    </section>
  );
}

function HeroVisual() {
  return (
    <svg viewBox="0 0 320 360" className="w-full drop-shadow-2xl" aria-hidden>
      <defs>
        <linearGradient id="hero-panel" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#123528" />
          <stop offset="100%" stopColor="#05140E" />
        </linearGradient>
      </defs>
      <rect
        x="24"
        y="20"
        width="272"
        height="320"
        rx="18"
        fill="url(#hero-panel)"
        stroke="#F48120"
        strokeOpacity="0.35"
      />
      <rect x="44" y="48" width="120" height="14" rx="7" fill="#F48120" opacity="0.9" />
      <rect x="44" y="78" width="200" height="10" rx="5" fill="#E8F2EC" opacity="0.25" />
      <rect x="44" y="98" width="160" height="10" rx="5" fill="#E8F2EC" opacity="0.18" />
      <rect x="44" y="140" width="100" height="72" rx="12" fill="#008C44" opacity="0.55" />
      <rect x="156" y="140" width="100" height="72" rx="12" fill="#F48120" opacity="0.35" />
      <rect x="44" y="230" width="212" height="12" rx="6" fill="#E8F2EC" opacity="0.2" />
      <rect x="44" y="254" width="180" height="12" rx="6" fill="#E8F2EC" opacity="0.14" />
      <rect x="44" y="278" width="140" height="12" rx="6" fill="#E8F2EC" opacity="0.1" />
      <circle cx="248" cy="68" r="18" fill="#F48120" />
      <path
        className="path-draw"
        d="M60 320 C120 290, 180 330, 260 300"
        fill="none"
        stroke="#FFB06A"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
