import "./style/App.css";
import Overview from "./sections/overview";
import Navbar from "./sections/Navbar";
import Journey from "./sections/Journey";
import Stack from "./sections/Stack";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-[#fff7fa] text-zinc-900">
      
      <Navbar />

      {/* Sections */}
      <main className="w-full">
        <Overview />

        <Journey />

        <Projects />

        <Stack />

        <Contact />

      </main>
    </div>
  );
}
