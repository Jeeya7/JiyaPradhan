export default function Overview() {
  return (
    <section id="overview" className="relative overflow-hidden scroll-mt-24 border-b border-white/10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_40%,rgba(236,72,153,0.35),transparent_45%),linear-gradient(110deg,#111827_0%,#1f2937_45%,#581c87_100%)]" />

      <div className="relative mx-auto grid min-h-[80vh] max-w-7xl gap-14 px-6 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="space-y-8 text-white">
          <span className="inline-flex rounded-full border border-white/10 bg-black/40 px-5 py-2 text-sm font-semibold">
            Available for Internships 2026
          </span>

          <div className="space-y-3">
            <h1 className="text-5xl font-semibold leading-tight sm:text-6xl">Jiya Pradhan</h1>
            <p className="text-lg text-zinc-300">AI/ML Engineer</p>
            <p className="text-sm font-medium text-pink-300">Current Quest: Scaling Explainable Systems</p>
          </div>

          <div className="max-w-2xl space-y-4 text-xl leading-relaxed text-zinc-200">
            <p>I am a creative ML builder who loves solving ambitious problems.</p>
            <p>
              I turn ideas into custom models, scale them into production systems, and design visual
              experiences that make intelligence feel clear, human, and exciting.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="#projects"
              className="rounded-xl bg-pink-500 px-8 py-4 text-lg font-semibold text-white shadow-[0_10px_35px_rgba(236,72,153,0.35)] transition hover:bg-pink-400"
            >
              View Portfolio
            </a>
            <a
              href="#contact"
              className="rounded-xl border border-white/25 bg-white/90 px-8 py-4 text-lg font-semibold text-zinc-900 transition hover:bg-white"
            >
              Download CV
            </a>
          </div>
        </div>

        <div className="relative mx-auto h-[420px] w-full max-w-[560px]">
          <div className="absolute left-1/2 top-1/2 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-200/90 shadow-[0_0_120px_rgba(244,114,182,0.45)]" />
          <div className="absolute left-1/2 top-1/2 flex h-[290px] w-[290px] -translate-x-1/2 -translate-y-[44%] items-center justify-center rounded-full border border-white/20 bg-[linear-gradient(180deg,#312e81,#111827)] text-7xl font-semibold text-white">
            <img src="/JiyaPradhan.png" alt="Jiya Pradhan" className="h-full rounded-full object-cover" />
          </div>

          <div className="absolute right-2 top-8 rounded-2xl bg-white px-5 py-4 text-zinc-900 shadow-xl">
            <p className="text-xs font-semibold uppercase tracking-wide text-pink-300">GPU Temp</p>
            <p className="text-4xl font-bold">67&deg;C</p>
          </div>

          <div className="absolute bottom-8 left-2 rounded-2xl bg-white px-5 py-4 text-zinc-900 shadow-xl">
            <p className="text-xs font-semibold uppercase tracking-wide text-pink-300">Uptime</p>
            <p className="text-4xl font-bold">99.9%</p>
          </div>

          <div className="absolute bottom-8 right-2 rounded-2xl border border-pink-300/20 bg-black/40 p-5 text-zinc-100 shadow-xl backdrop-blur">
            <p className="text-sm font-semibold uppercase tracking-wide text-pink-300">Current Loadout</p>
            <ul className="mt-2 space-y-1 text-sm text-zinc-200">
              <li>PyTorch</li>
              <li>FastAPI</li>
              <li>Transformers</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
