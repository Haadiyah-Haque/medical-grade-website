const parts = [
  { letter: "M", word: "Medical", hint: "Built for care" },
  { letter: "G", word: "Grade", hint: "Scored to a standard" },
  { letter: "W", word: "Website", hint: "One owned platform" },
];

export function MgwLine() {
  return (
    <section
      id="medical-grade"
      className="border-y border-white/10 bg-green-deep px-5 py-5 text-cream md:px-8 md:py-6"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-4 md:flex-row md:items-center md:justify-between md:gap-8">
        <p className="max-w-xl text-sm leading-relaxed text-cream/70 md:text-[15px]">
          <span className="font-semibold text-orange-soft">MGW</span>
          <span className="mx-2 text-cream/25">·</span>
          Not a better website — a{" "}
          <span className="text-cream">Medical Grade Website</span>: hospital-grade presence,
          portals, billing and records on one domain you own.
        </p>

        <ul className="flex flex-wrap items-center gap-x-5 gap-y-2 md:justify-end">
          {parts.map((part) => (
            <li key={part.letter} className="flex items-baseline gap-1.5">
              <span className="font-display text-lg font-semibold text-orange">{part.letter}</span>
              <span className="text-xs font-semibold tracking-wide text-cream/90">{part.word}</span>
              <span className="hidden text-xs text-cream/40 sm:inline">— {part.hint}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
