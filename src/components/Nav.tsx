import { useEffect, useState } from "react";

const links = [
  { href: "#medical-grade", label: "What it is" },
  { href: "#journey", label: "The journey" },
  { href: "#reviews", label: "Reviews" },
  { href: "#variants", label: "Variants" },
  { href: "#developers", label: "Developers" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-green-deep/90 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8">
        <a href="#top" className="group flex items-baseline gap-2 text-cream">
          <span className="font-display text-2xl font-semibold tracking-tight">MGW</span>
          <span className="hidden text-xs font-medium tracking-[0.14em] text-cream/55 uppercase sm:inline">
            Medical Grade Website
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-cream/70 transition hover:text-cream"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#start"
            className="rounded-md bg-orange px-4 py-2 text-sm font-semibold text-ink transition hover:bg-orange-dark"
          >
            Start your journey
          </a>
        </nav>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-cream md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <div className="flex w-5 flex-col gap-1.5">
            <span
              className={`h-0.5 w-full bg-cream transition ${open ? "translate-y-2 rotate-45" : ""}`}
            />
            <span className={`h-0.5 w-full bg-cream transition ${open ? "opacity-0" : ""}`} />
            <span
              className={`h-0.5 w-full bg-cream transition ${open ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </div>
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-green-deep/95 px-5 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="py-2 text-sm font-medium text-cream/80"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#start"
              className="mt-1 rounded-md bg-orange px-4 py-3 text-center text-sm font-semibold text-ink"
              onClick={() => setOpen(false)}
            >
              Start your journey
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
