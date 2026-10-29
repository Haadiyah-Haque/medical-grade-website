import { useEffect, useRef, useState } from "react";
import { Reveal } from "./Reveal";

type Step = {
  chapter: string;
  title: string;
  scene: string;
  copy: string;
};

const steps: Step[] = [
  {
    chapter: "01",
    title: "Own the front door",
    scene: "Discovery",
    copy: "Patients land on your domain — your brand, specialties and doctors — not a marketplace booth. Aggregators can still discover you; loyalty lives on a site you own.",
  },
  {
    chapter: "02",
    title: "Shape it without waiting",
    scene: "Control",
    copy: "New specialty on Tuesday? Banners, sections and colours update from your admin CMS the same day — no code, no change-request invoice.",
  },
  {
    chapter: "03",
    title: "Patients arrive before they arrive",
    scene: "Booking",
    copy: "Chatbot-guided booking cuts incomplete requests. SMS, email and WhatsApp confirm because the booking happened — not because someone remembered.",
  },
  {
    chapter: "04",
    title: "Run the consultation day",
    scene: "Care day",
    copy: "Doctor portal for schedule, notes and e-prescription. Healthcare billing with packages, panels and doctor-share — one thread from visit to invoice.",
  },
  {
    chapter: "05",
    title: "Stay between visits",
    scene: "Loyalty",
    copy: "Patients revisit prescriptions, track vitals and plan meals in their portal — so when care is needed again, you are already the first call.",
  },
  {
    chapter: "06",
    title: "See the practice clearly",
    scene: "Insight",
    copy: "Traffic, appointments, feedback and billing surface as clinical, admin and financial reports — one live picture instead of scattered notebooks.",
  },
];

const AUTOPLAY_MS = 4500;
const PAUSE_AFTER_INTERACT_MS = 10000;

export function Journey() {
  const [active, setActive] = useState(0);
  const [userPaused, setUserPaused] = useState(false);
  const [hoverPaused, setHoverPaused] = useState(false);
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);
  const resumeTimer = useRef<number | null>(null);
  const paused = userPaused || hoverPaused;
  const step = steps[active];
  const progress = (active / (steps.length - 1)) * 100;

  const goTo = (index: number, fromUser = false) => {
    setActive(((index % steps.length) + steps.length) % steps.length);
    if (fromUser) {
      setUserPaused(true);
      if (resumeTimer.current) window.clearTimeout(resumeTimer.current);
      resumeTimer.current = window.setTimeout(() => setUserPaused(false), PAUSE_AFTER_INTERACT_MS);
    }
  };

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting && entry.intersectionRatio > 0.25),
      { threshold: [0.25, 0.4] }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion || paused || !inView) return;

    const id = window.setInterval(() => {
      setActive((i) => (i + 1) % steps.length);
    }, AUTOPLAY_MS);

    return () => window.clearInterval(id);
  }, [paused, inView]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      if (target && ["INPUT", "TEXTAREA", "SELECT"].includes(target.tagName)) return;
      if (!inView) return;

      if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        e.preventDefault();
        goTo(active + 1, true);
      }
      if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        e.preventDefault();
        goTo(active - 1, true);
      }
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, inView]);

  useEffect(() => {
    return () => {
      if (resumeTimer.current) window.clearTimeout(resumeTimer.current);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="journey"
      className="relative overflow-hidden bg-surface px-5 py-16 md:px-8 md:py-24"
      onMouseEnter={() => setHoverPaused(true)}
      onMouseLeave={() => setHoverPaused(false)}
      onFocusCapture={() => setHoverPaused(true)}
      onBlurCapture={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setHoverPaused(false);
      }}
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_0%,rgba(244,129,32,0.12),transparent_45%),radial-gradient(ellipse_at_90%_80%,rgba(0,140,68,0.14),transparent_40%)]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl">
        <Reveal className="max-w-2xl">
          <p className="text-sm font-semibold tracking-[0.18em] text-orange uppercase">
            The practice journey
          </p>
          <h2 className="mt-3 font-display text-3xl leading-tight font-semibold text-cream md:text-4xl text-balance">
            Walk the day with your practice.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-cream/65">
            Six moments. One path. Watch how a doctor, clinic or hospital moves from first search to
            lasting care.
          </p>
        </Reveal>

        <Reveal delay={1} className="mt-12">
          <div className="relative">
            <div className="absolute top-[18px] right-3 left-3 h-px bg-white/10 md:top-[22px]" aria-hidden />
            <div
              className="absolute top-[18px] left-3 h-px origin-left bg-gradient-to-r from-orange to-green transition-transform duration-500 ease-out md:top-[22px]"
              style={{
                width: "calc(100% - 1.5rem)",
                transform: `scaleX(${Math.max(progress / 100, 0.02)})`,
              }}
              aria-hidden
            />

            <ol className="relative flex justify-between gap-1">
              {steps.map((s, i) => {
                const isActive = i === active;
                const isDone = i < active;
                return (
                  <li key={s.chapter} className="flex flex-1 flex-col items-center">
                    <button
                      type="button"
                      onClick={() => goTo(i, true)}
                      aria-current={isActive ? "step" : undefined}
                      aria-label={`Step ${s.chapter}: ${s.title}`}
                      className={`relative z-10 flex h-9 w-9 items-center justify-center rounded-full border text-xs font-bold transition duration-300 md:h-11 md:w-11 md:text-sm ${
                        isActive
                          ? "border-orange bg-orange text-ink scale-110 shadow-[0_0_0_6px_rgba(244,129,32,0.2)]"
                          : isDone
                            ? "border-green bg-green text-cream"
                            : "border-white/20 bg-surface-2 text-cream/50 hover:border-orange/50 hover:text-cream"
                      }`}
                    >
                      {s.chapter}
                    </button>
                    <span
                      className={`mt-3 hidden text-center text-[11px] font-semibold tracking-wide uppercase sm:block ${
                        isActive ? "text-orange-soft" : "text-cream/40"
                      }`}
                    >
                      {s.scene}
                    </span>
                  </li>
                );
              })}
            </ol>
          </div>

          <div className="mt-10 grid items-end gap-8 border-t border-white/10 pt-10 md:grid-cols-[1fr_auto] md:gap-12">
            <div key={step.chapter} className="journey-stage">
              <p className="text-sm font-semibold tracking-[0.18em] text-green uppercase">
                Chapter {step.chapter}
                <span className="mx-2 text-cream/25">·</span>
                <span className="text-orange-soft">{step.scene}</span>
              </p>
              <h3 className="mt-3 font-display text-2xl leading-tight font-semibold text-cream md:text-4xl text-balance">
                {step.title}
              </h3>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-cream/70 md:text-lg">
                {step.copy}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 md:pb-1">
              <button
                type="button"
                onClick={() => goTo(active - 1, true)}
                className="rounded-md border border-white/15 px-4 py-2.5 text-sm font-medium text-cream/80 transition hover:border-cream/35 hover:text-cream"
              >
                Previous
              </button>
              <button
                type="button"
                onClick={() => goTo(active + 1, true)}
                className="rounded-md bg-orange px-4 py-2.5 text-sm font-semibold text-ink transition hover:bg-orange-dark"
              >
                Next moment
              </button>
              <button
                type="button"
                onClick={() => {
                  if (resumeTimer.current) window.clearTimeout(resumeTimer.current);
                  setUserPaused((p) => !p);
                }}
                className="rounded-md border border-white/10 px-3 py-2.5 text-xs font-medium tracking-wide text-cream/50 uppercase transition hover:border-white/25 hover:text-cream/80"
                aria-pressed={userPaused}
              >
                {userPaused ? "Play" : "Pause"}
              </button>
            </div>
          </div>

          <div className="mt-6 flex items-center gap-3 text-xs text-cream/35">
            <span>
              {active + 1} of {steps.length}
            </span>
            <span className="h-1 flex-1 max-w-[120px] overflow-hidden rounded-full bg-white/10" aria-hidden>
              <span
                key={`${active}-${paused}-${inView}`}
                className={`block h-full origin-left rounded-full bg-orange/70 ${
                  paused || !inView ? "w-full" : "journey-progress"
                }`}
              />
            </span>
            <span className="hidden sm:inline">{paused ? "Paused" : inView ? "Autoplaying" : "Scroll to play"}</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
