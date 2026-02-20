import "./style/App.css";
import Overview from "./overview";
import Navbar from "./Navbar";
import Journey from "./Journey";

export default function App() {
  return (
    <div className="min-h-screen bg-[#fff7fa] text-zinc-900">
      
      <Navbar />

      {/* Sections */}
      <main className="w-full">
        <Overview />

        <Journey />

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
