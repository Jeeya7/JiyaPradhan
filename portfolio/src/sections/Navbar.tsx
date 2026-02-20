export default function Navbar() {
  return (
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
  );
}