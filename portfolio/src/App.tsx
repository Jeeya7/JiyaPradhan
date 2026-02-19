import "./style/App.css";
import Overview from "./overview";

export default function App() {
  return (
    <div className="min-h-screen bg-[#fff7fa] text-zinc-900">
      
      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-white/60 backdrop-blur border-b border-black/5">
        <nav className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
          <div className="font-semibold">Jiya Pradhan</div>
          <div className="flex gap-6 text-sm">
            <a href="#overview" className="hover:opacity-70">Overview</a>
            <a href="#journey" className="hover:opacity-70">Journey</a>
            <a href="#stack" className="hover:opacity-70">Stack</a>
            <a href="#projects" className="hover:opacity-70">Projects</a>
            <a href="#contact" className="hover:opacity-70">Contact</a>
          </div>
        </nav>
      </header>

      {/* Sections */}
      <main className="w-full">
        <Overview />

        <section id="journey" className="scroll-mt-24 py-20">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="text-2xl font-semibold">The Growth Narrative</h2>
          </div>
        </section>

        <section id="stack" className="scroll-mt-24 py-20">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="text-2xl font-semibold">Technical Stack</h2>
          </div>
        </section>

        <section id="projects" className="scroll-mt-24 py-20">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="text-2xl font-semibold">Projects</h2>
          </div>
        </section>

        <section id="contact" className="scroll-mt-24 py-20">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="text-2xl font-semibold">
              Let’s solve something extraordinary
            </h2>
          </div>
        </section>

      </main>
    </div>
  );
}
