const projects = [
  {
    title: "Model Explanation Dashboard",
    description:
      "An interactive ML visualization tool that trains and visualizes custom decision trees, displaying information gain, split logic, and model performance metrics through a full-stack architecture.",
    tech: ["React", "TypeScript", "FastAPI", "Python", "Scikit-Learn", "Render"],
    github: "https://github.com/Jeeya7/Model-Explanation-Dashboard",
    demo: "https://jeeya7.github.io/Model-Explanation-Dashboard/",
    demoLabel: "Website",
    image: `${import.meta.env.BASE_URL}model_explain.png`,
  },
  {
    title: "Spend-Aware",
    description:
      "A full-stack budgeting application that categorizes expenses using a custom Naive Bayes microservice and presents financial insights through intuitive data visualizations.",
    tech: ["React", "FastAPI", "Python", "PostgreSQL", "Naive Bayes"],
    github: "https://github.com/Jeeya7/Spend-Aware",
    demo: null,
    demoLabel: null,
    image: `${import.meta.env.BASE_URL}spend_aware.png`,
  },
  {
    title: "Psych2Learn (🏆 BeaverHacks Winner)",
    description:
      "An AI-powered educational game that generates real-time questions using the Gemini API, with gamified scoring, health points, and adaptive feedback across single-player and multiplayer modes.",
    tech: ["Gemini API", "Python", "Flask", "JavaScript", "Prompt Engineering"],
    github: "https://github.com/nansikom/educationgame-",
    demo: "https://devpost.com/software/elearn-6mbn10",
    demoLabel: "Demo",
    image: null,
  },
  {
    title: "Personal Portfolio Website",
    description:
      "A custom-designed AI-focused portfolio built from scratch using React and Tailwind, showcasing projects, technical growth, and interactive UI experiments.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/Jeeya7/JiyaPradhan",
    demo: null,
    demoLabel: null,
    image: null,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-[#fff7fa] py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-6">
        {/* Header */}
        <div className="mb-12 text-center sm:mb-16 lg:mb-20">
          <h2 className="mb-4 text-2xl font-semibold text-zinc-900 sm:text-3xl">
            Projects
          </h2>
          <p className="mx-auto max-w-xl text-sm leading-relaxed text-zinc-600 sm:text-base">
            Selected systems and tools I’ve built across machine learning,
            backend engineering, and full-stack development.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:gap-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex h-full flex-col rounded-3xl border border-black/5 bg-white p-6 shadow-sm transition hover:shadow-md sm:p-7 lg:p-8"
          >
            {project.image && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="mb-5 block overflow-hidden rounded-xl"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-[220px] sm:h-[250px] object-cover rounded-xl shadow-md transition-transform duration-300 hover:scale-[1.02]"
                />
              </a>
            )}

            <h3 className="mb-3 text-lg font-semibold leading-snug text-zinc-900 sm:text-xl">
              {project.title}
            </h3>

            <p className="mb-5 text-sm leading-relaxed text-zinc-600">
              {project.description}
            </p>

            <div className="mb-5 flex flex-wrap gap-2">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="rounded-full bg-[#ec4899]/10 px-3 py-1 text-[11px] text-[#ec4899] sm:text-xs"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-auto flex flex-wrap gap-x-4 gap-y-2 text-sm">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#ec4899] transition hover:opacity-70"
              >
                GitHub ↗
              </a>

              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#ec4899] transition hover:opacity-70"
                >
                  {project.demoLabel} ↗
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}