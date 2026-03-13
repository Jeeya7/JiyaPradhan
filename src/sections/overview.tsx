export default function Overview() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;

    const NAV_HEIGHT = 72;

    const y =
      element.getBoundingClientRect().top + window.scrollY - NAV_HEIGHT - 16;

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="overview"
      className="relative overflow-hidden scroll-mt-24 border-b border-white/10 bg-[#0b0710]"
    >
      {/* HOT PINK GLOW */}
      <div className="pointer-events-none absolute left-[72%] top-[42%] -z-10 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ff2aa3] opacity-45 blur-[120px] sm:h-[720px] sm:w-[720px] sm:opacity-50 sm:blur-[160px] lg:h-[1200px] lg:w-[1200px] lg:opacity-60 lg:blur-[260px]" />

      {/* CORE POP */}
      <div className="pointer-events-none absolute left-[72%] top-[42%] -z-10 h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ff007f] opacity-80 blur-[70px] sm:h-[360px] sm:w-[360px] sm:blur-[90px] lg:h-[620px] lg:w-[620px] lg:opacity-95 lg:blur-[120px]" />

      {/* DARK WASH */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(11,7,16,0.92)_0%,rgba(11,7,16,0.80)_38%,rgba(11,7,16,0.45)_68%,rgba(11,7,16,0.15)_100%)] lg:bg-[linear-gradient(90deg,rgba(11,7,16,0.95)_0%,rgba(11,7,16,0.65)_45%,rgba(11,7,16,0.15)_70%,rgba(11,7,16,0)_100%)]" />

      <div className="relative mx-auto grid min-h-[100svh] max-w-7xl gap-12 px-5 pb-16 pt-24 sm:px-6 sm:pb-20 sm:pt-28 lg:min-h-[82vh] lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-14 lg:px-14 xl:px-20">
        {/* LEFT */}
        <div className="space-y-8 text-white sm:space-y-10">
          <span className="inline-flex rounded-full bg-white/80 px-3 py-1 text-xs font-semibold text-zinc-900 shadow-[0_10px_30px_rgba(0,0,0,0.15)] backdrop-blur-md sm:px-4 sm:text-sm">
            Available for Internships 2026
          </span>

          <div className="space-y-4 sm:space-y-5">
            <h1 className="text-4xl font-semibold leading-[1.02] tracking-tight drop-shadow-[0_4px_30px_rgba(236,72,153,0.25)] sm:text-5xl md:text-6xl lg:text-7xl">
              Jiya Pradhan
            </h1>

            <div className="flex flex-wrap items-center gap-2 text-xs text-zinc-300 sm:gap-3 sm:text-sm">
              <span className="opacity-70">
                LV. <span className="text-base sm:text-lg">∞</span>
              </span>
              <span className="h-1 w-1 rounded-full bg-zinc-500/70" />
              <span>ML Engineer</span>
            </div>

            <p className="text-sm font-medium text-pink-300 sm:text-base">
              Current Quest: Surviving Junior Year
            </p>

            <p className="text-2xl font-semibold text-[#f9a8d4] sm:text-3xl md:text-4xl">
              AI/ML Engineer
            </p>
          </div>

          <div className="max-w-2xl space-y-5 text-base leading-relaxed text-white/80 sm:text-lg">
            <p>
              I am curious about how machine learning models make decisions and
              why they behave the way they do. My work focuses on explainability
              and building visual tools that make complex models easier for
              people to understand.
            </p>
          </div>

          <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4 lg:gap-6">
            <button
              onClick={() => scrollToSection("journey")}
              className="group inline-flex w-full items-center justify-center gap-3 rounded-xl bg-pink-500 px-6 py-3.5 text-base font-semibold text-white shadow-[0_18px_45px_rgba(236,72,153,0.35)] transition hover:bg-pink-400 sm:w-auto sm:px-8 sm:py-4 sm:text-lg lg:px-10"
            >
              Experiences
              <span className="translate-x-0 transition group-hover:translate-x-0.5">
                →
              </span>
            </button>

            <button
              onClick={() => scrollToSection("projects")}
              className="group inline-flex w-full items-center justify-center gap-3 rounded-xl border border-white/15 bg-white px-6 py-3.5 text-base font-semibold text-zinc-900 shadow-[0_18px_45px_rgba(0,0,0,0.15)] transition hover:bg-white/95 sm:w-auto sm:px-8 sm:py-4 sm:text-lg lg:px-10"
            >
              Projects
              <span className="translate-x-0 transition group-hover:translate-x-0.5">
                →
              </span>
            </button>
          </div>
        </div>

        {/* RIGHT */}
        <div className="group relative mx-auto mt-4 h-[320px] w-full max-w-[360px] sm:h-[380px] sm:max-w-[420px] lg:mt-0 lg:h-[420px] lg:max-w-[520px]">
          <div className="pointer-events-none absolute left-1/2 top-[45%] h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ec4899] opacity-30 blur-[90px] sm:h-[420px] sm:w-[420px] sm:blur-[110px] lg:h-[520px] lg:w-[520px] lg:opacity-35 lg:blur-[140px]" />

          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="h-[240px] w-[240px] overflow-hidden rounded-full sm:h-[300px] sm:w-[300px] lg:h-[380px] lg:w-[380px]">
              <img
                src={`${import.meta.env.BASE_URL}JiyaPradhan.png`}
                alt="Jiya Pradhan"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div
            className="animate-drift [animation-delay:-2s] [animation-duration:7s] absolute right-1 top-4 rounded-2xl border border-white/40 bg-white/90 px-3 py-2 text-zinc-900 ring-1 ring-white/20 shadow-[0_30px_80px_rgba(236,72,153,0.35)] backdrop-blur-md transition-all duration-300 sm:right-0 sm:top-8 sm:px-4 sm:py-3 lg:-right-6 lg:top-14"
          >
            <pre className="whitespace-pre-wrap font-mono text-[10px] leading-relaxed sm:text-[11px]">
              {`> system_boot
> status: building things`}
            </pre>
          </div>

          <div className="absolute bottom-2 left-1/2 w-[190px] -translate-x-1/2 rounded-2xl border border-white/10 bg-black/35 p-3 text-white shadow-[0_22px_60px_rgba(0,0,0,0.35)] backdrop-blur-md opacity-0 transition-opacity group-hover:opacity-100 sm:bottom-0 sm:left-auto sm:right-2 sm:w-[220px] sm:translate-x-0 sm:p-4 lg:right-4">
            <p className="text-[10px] font-semibold uppercase tracking-wide text-pink-300 sm:text-xs">
              PLAYER STATS
            </p>
            <ul className="mt-2 space-y-1.5 text-xs text-white/80 sm:mt-3 sm:space-y-2 sm:text-sm">
              <li className="flex items-center gap-2">
                <span>🧠</span>
                Curiosity: High
              </li>
              <li className="flex items-center gap-2">
                <span>🐛</span>
                Debugging: Active
              </li>
              <li className="flex items-center gap-2">
                <span>📚</span>
                Learning: Ongoing
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}