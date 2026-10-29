import { Reveal } from "./Reveal";

/** Swap these YouTube video IDs when review films are ready. */
const reviews = [
  {
    id: "",
    title: "Clinic director on going live with MGW",
    label: "Clinic review",
  },
  {
    id: "",
    title: "A solo doctor on owning the patient journey",
    label: "Doctor review",
  },
  {
    id: "",
    title: "Hospital team on portals, billing and support",
    label: "Hospital review",
  },
];

export function VideoReviews() {
  return (
    <section id="reviews" className="bg-ink px-5 py-16 md:px-8 md:py-20">
      <div className="mx-auto max-w-6xl">
        <Reveal className="max-w-2xl">
          <p className="text-sm font-semibold tracking-[0.18em] text-orange uppercase">
            From the field
          </p>
          <h2 className="mt-3 font-display text-3xl leading-tight font-semibold text-cream md:text-4xl text-balance">
            Practices telling the story in their own words.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-cream/65">
            Short video reviews from doctors, clinics and hospitals using MGW — add your YouTube
            links here as they go live.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {reviews.map((review, i) => (
            <Reveal key={review.title} delay={((i % 3) + 1) as 1 | 2 | 3} as="article">
              <div className="overflow-hidden border border-white/10 bg-surface">
                {review.id ? (
                  <div className="relative aspect-video bg-green-deep">
                    <iframe
                      className="absolute inset-0 h-full w-full"
                      src={`https://www.youtube-nocookie.com/embed/${review.id}`}
                      title={review.title}
                      loading="lazy"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    />
                  </div>
                ) : (
                  <div className="relative flex aspect-video items-center justify-center bg-surface-2">
                    <div
                      className="absolute inset-0 opacity-40"
                      style={{
                        backgroundImage:
                          "radial-gradient(circle at 30% 40%, rgba(244,129,32,0.25), transparent 50%), radial-gradient(circle at 70% 60%, rgba(0,140,68,0.2), transparent 45%)",
                      }}
                      aria-hidden
                    />
                    <div className="relative text-center px-4">
                      <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-orange/40 bg-orange/15 text-orange">
                        <PlayIcon />
                      </span>
                      <p className="mt-3 text-xs font-semibold tracking-[0.16em] text-cream/45 uppercase">
                        YouTube review soon
                      </p>
                    </div>
                  </div>
                )}
              </div>
              <p className="mt-3 text-xs font-semibold tracking-[0.14em] text-green uppercase">
                {review.label}
              </p>
              <h3 className="mt-1 font-display text-lg font-semibold text-cream">{review.title}</h3>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function PlayIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M8 5.14v13.72L19 12 8 5.14z" />
    </svg>
  );
}
