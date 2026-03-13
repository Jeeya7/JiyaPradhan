import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="bg-[#fff7fa] py-20 sm:py-24 lg:py-30">
      <div className="mx-auto max-w-4xl px-5 sm:px-6">
        {/* CTA Card */}
        <div className="rounded-[2rem] bg-[#ec4899] px-5 py-10 text-center text-white sm:rounded-[2.5rem] sm:px-8 sm:py-14 lg:px-10 lg:py-16">
          <h2 className="text-2xl font-semibold leading-tight sm:text-4xl md:text-5xl">
            Let’s build something meaningful.
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-white/90 sm:mt-6 sm:text-base">
            Open to Summer 2026 internships and research collaborations in AI and
            systems engineering.
          </p>

          <div className="mt-8 sm:mt-10">
            <a
              href="mailto:pradhanj@oregonstate.edu"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-medium text-zinc-900 transition hover:opacity-90 sm:px-8"
            >
              Start a Conversation
            </a>
          </div>
        </div>

        {/* Minimal Social Row */}
        <div className="mt-10 flex items-center justify-center gap-7 sm:mt-14 sm:gap-10 lg:mt-16 lg:gap-12">
          <a
            href="https://linkedin.com/in/jiyapradhan"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-700 transition-all duration-200 hover:scale-110 hover:text-[#ec4899]"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="h-5 w-5 sm:h-6 sm:w-6" />
          </a>

          <a
            href="https://github.com/Jeeya7"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-700 transition-all duration-200 hover:scale-110 hover:text-[#ec4899]"
            aria-label="GitHub"
          >
            <FaGithub className="h-5 w-5 sm:h-6 sm:w-6" />
          </a>

          <a
            href="mailto:pradhanj@oregonstate.edu"
            className="text-zinc-700 transition-all duration-200 hover:scale-110 hover:text-[#ec4899]"
            aria-label="Email"
          >
            <FaEnvelope className="h-5 w-5 sm:h-6 sm:w-6" />
          </a>
        </div>

        {/* Tiny Copyright */}
        <p className="mt-10 text-center text-[11px] text-zinc-500 sm:mt-12 sm:text-xs">
          © {new Date().getFullYear()} Jiya Pradhan
        </p>
      </div>
    </section>
  );
}