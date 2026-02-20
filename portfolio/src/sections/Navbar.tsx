import { Diamond } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-black/70 backdrop-blur-xl border-b border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.25)]">
      <nav className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between text-white">
        <div className="font-semibold flex items-center gap-2">
          <Diamond className="text-white-500" />
          Jiya Pradhan
        </div>

        <div className="flex gap-6 text-sm">
          <a href="#overview" className="hover:text-pink-400 transition-colors">Overview</a>
          <a href="#journey" className="hover:text-pink-400 transition-colors">Journey</a>
          <a href="#stack" className="hover:text-pink-400 transition-colors">Stack</a>
          <a href="#projects" className="hover:text-pink-400 transition-colors">Projects</a>
          <a href="#contact" className="hover:text-pink-400 transition-colors">Contact</a>
        </div>
      </nav>
    </header>
  );
}
