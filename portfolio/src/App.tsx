import "./style/App.css";
import Overview from "./overview";
import Navbar from "./Navbar";
import Journey from "./Journey";
import Stack from "./Stack";
import Projects from "./Projects";
import Contact from "./Contact";

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
