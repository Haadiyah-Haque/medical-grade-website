export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink px-5 py-10 text-cream md:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-display text-2xl font-semibold">MGW</p>
          <p className="mt-2 max-w-sm text-sm leading-relaxed text-cream/45">
            Medical Grade Website — one platform you own for the whole practice.
          </p>
        </div>

        <div className="flex flex-wrap gap-6 text-sm text-cream/50">
          <a href="#medical-grade" className="hover:text-cream">
            Concept
          </a>
          <a href="#journey" className="hover:text-cream">
            Journey
          </a>
          <a href="#reviews" className="hover:text-cream">
            Reviews
          </a>
          <a href="#variants" className="hover:text-cream">
            Variants
          </a>
          <a href="#developers" className="hover:text-cream">
            Developers
          </a>
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-6xl border-t border-white/10 pt-5 text-xs text-cream/35">
        © {new Date().getFullYear()} MGW · Medical Grade Website. A D-RIGHT platform.
      </div>
    </footer>
  );
}
