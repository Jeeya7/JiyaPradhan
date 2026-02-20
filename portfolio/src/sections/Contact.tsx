import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-28 bg-[#fff7fa]">
      <div className="mx-auto max-w-4xl px-6">

        {/* CTA Card */}
        <div className="rounded-[2.5rem] bg-[#ec4899] text-white px-10 py-16 text-center">
          <h2 className="text-4xl md:text-5xl font-semibold leading-tight">
            Let’s build something meaningful.
          </h2>

          <p className="mt-6 text-white/90 max-w-xl mx-auto">
            Open to Summer 2026 internships and research collaborations in AI and systems engineering.
          </p>

          <div className="mt-10">
            <a
              href="mailto:pradhanj@oregonstate.edu"
              className="inline-flex items-center justify-center rounded-full bg-white text-zinc-900 px-8 py-3 text-sm font-medium hover:opacity-90 transition"
            >
              Start a Conversation
            </a>
          </div>
        </div>

        {/* Minimal Social Row */}
        <div className="flex items-center justify-center gap-12 mt-16">

          <a
            href="https://linkedin.com/in/jiyapradhan"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-700 hover:text-[#ec4899] hover:scale-110 transition-all duration-200"
          >
            <FaLinkedin size={24} />
          </a>

          <a
            href="https://github.com/Jeeya7"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-700 hover:text-[#ec4899] hover:scale-110 transition-all duration-200"
          >
            <FaGithub size={24} />
          </a>

          <a
            href="mailto:pradhanj@oregonstate.edu"
            className="text-zinc-700 hover:text-[#ec4899] hover:scale-110 transition-all duration-200"
          >
            <FaEnvelope size={24} />
          </a>

        </div>

        {/* Tiny Copyright */}
        <p className="text-center text-xs text-zinc-500 mt-12">
          © {new Date().getFullYear()} Jiya Pradhan
        </p>

      </div>
    </section>
  );
}