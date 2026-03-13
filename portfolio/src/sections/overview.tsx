export default function Overview() {
  return (
      <section
        id="overview"
        className="relative overflow-hidden scroll-mt-24 border-b border-white/10 bg-[#0b0710]"
      >
        {/* HOT PINK GLOW (behind everything) */}
        <div className="pointer-events-none absolute left-[70%] top-1/2 -z-10 h-[1200px] w-[1200px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ff2aa3] opacity-60 blur-[260px]" />

        {/* CORE POP (smaller + stronger, makes it look “hot”) */}
        <div className="pointer-events-none absolute left-[70%] top-1/2 -z-10 h-[620px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ff007f] opacity-95 blur-[120px]" />

        {/* DARK WASH so left side stays readable (NOT a vignette) */}
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(11,7,16,0.95)_0%,rgba(11,7,16,0.65)_45%,rgba(11,7,16,0.15)_70%,rgba(11,7,16,0)_100%)]" />

        <div className="relative mx-auto grid min-h-[82vh] max-w-7xl gap-14 px-8 lg:px-14 xl:px-20 pb-20 pt-28 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="space-y-10 text-white">
          <span className="inline-flex rounded-full border border-white/10 bg-black/30 px-6 py-2 text-sm font-semibold shadow-[0_10px_30px_rgba(0,0,0,0.25)]">
            Available for Internships 2026
          </span>

          <div className="space-y-5">
            <h1 className="text-6xl font-semibold leading-[1.05] tracking-tight sm:text-7xl">
              Jiya Pradhan
            </h1>

            <div className="flex items-center gap-3 text-sm text-zinc-300">
              <span className="opacity-70">
                  LV.  <span className="text-lg">∞</span>
              </span>
              <span className="h-1 w-1 rounded-full bg-zinc-500/70" />
              <span>ML Engineer</span>
            </div>

            <p className="text-sm font-medium text-pink-300">
              Current Quest: Scaling Explainable Systems
            </p>

            <p className="text-3xl font-medium tracking-tight text-amber-200/90">
              AI/ML Engineer
            </p>
          </div>

          <div className="max-w-2xl space-y-5 text-lg leading-relaxed text-white/80">
            <p>I’m a creative ML builder who loves solving ambitious problems.</p>
            <p>
              I turn ideas into custom models, scale them into production systems, and design
              visual experiences that make intelligence feel clear, human, and exciting.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 pt-2">
            <a
              href="#projects"
              className="group inline-flex items-center gap-3 rounded-xl bg-pink-500 px-10 py-4 text-lg font-semibold text-white shadow-[0_18px_45px_rgba(236,72,153,0.35)] transition hover:bg-pink-400"
            >
              View Portfolio
              <span className="translate-x-0 transition group-hover:translate-x-0.5">→</span>
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white px-10 py-4 text-lg font-semibold text-zinc-900 shadow-[0_18px_45px_rgba(0,0,0,0.15)] transition hover:bg-white/95"
            >
              Download CV
            </a>
          </div>
        </div>

        <div className="group relative mx-auto h-[420px] w-full max-w-[520px]">
          <div className="pointer-events-none absolute left-1/2 top-[42%] h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ec4899] opacity-35 blur-[140px]" />

          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="h-[380px] w-[380px] rounded-full overflow-hidden ">
              <img
                src="/JiyaPradhan.png"
                alt="Jiya Pradhan"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="animate-drift [animation-duration:9s] [animation-delay:-4s] absolute right-4 top-14 rounded-2xl 
          bg-white/90 backdrop-blur-md 
          px-4 py-3 text-zinc-900 
          border border-white/40 
          ring-1 ring-white/20
          shadow-[0_25px_60px_rgba(0,0,0,0.25)] 
          transition-all duration-300 
          hover:shadow-[0_30px_80px_rgba(236,72,153,0.35)]">
            <p className="text-[11px] font-semibold uppercase tracking-wide text-pink-300">
              GPU TEMP
            </p>
            <p className="text-3xl font-bold leading-none">67&deg;C</p>
          </div>

          <div className="animate-drift-reverse [animation-duration:10s] [animation-delay:-4s] absolute bottom-12 left-4 rounded-2xl 
          bg-white/90 backdrop-blur-md 
          px-4 py-3 text-zinc-900 
          border border-white/40 
          ring-1 ring-white/20
          shadow-[0_25px_60px_rgba(0,0,0,0.25)] 
          transition-all duration-300 
          hover:shadow-[0_30px_80px_rgba(236,72,153,0.35)]">
            <p className="text-[11px] font-semibold uppercase tracking-wide text-pink-300">
              UPTIME
            </p>
            <p className="text-3xl font-bold leading-none">99.9%</p>
          </div>

          <div className="absolute bottom-0.5 right-4 w-[220px] opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl border border-white/10 bg-black/30 p-4 text-white shadow-[0_22px_60px_rgba(0,0,0,0.35)] backdrop-blur-md">
            <p className="text-xs font-semibold uppercase tracking-wide text-pink-300">
              Current Loadout
            </p>
            <ul className="mt-3 space-y-2 text-sm text-white/80">
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-pink-400" />
                PyTorch
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-pink-400" />
                Transformers
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-pink-400" />
                CUDA
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}