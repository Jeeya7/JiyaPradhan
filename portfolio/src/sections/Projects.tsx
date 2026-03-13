const projects = [
  {
    title: "Model Explanation Dashboard",
    description:
      "An interactive ML visualization tool that trains and visualizes custom decision trees, displaying information gain, split logic, and model performance metrics through a full-stack architecture.",
    tech: ["React", "TypeScript", "FastAPI", "Python", "Scikit-Learn", "Render"],
    github: "https://github.com/Jeeya7/Model-Explanation-Dashboard",
    demo:"https://jeeya7.github.io/Model-Explanation-Dashboard/",
    demoLabel: "Website",
  },
  {
    title: "Spend-Aware",
    description:
      "A full-stack budgeting application that categorizes expenses using a custom Naive Bayes microservice and presents financial insights through intuitive data visualizations.",
    tech: ["React", "FastAPI", "Python", "PostgreSQL", "Naive Bayes"],
    github: "https://github.com/Jeeya7/Spend-Aware",
    demo: null,
    demoLabel: null,
  },
  {
    title: "Psych2Learn (🏆 BeaverHacks Winner)",
    description:
      "An AI-powered educational game that generates real-time questions using the Gemini API, with gamified scoring, health points, and adaptive feedback across single-player and multiplayer modes.",
    tech: ["Gemini API", "Python", "Flask", "JavaScript", "Prompt Engineering"],
    github: "https://github.com/nansikom/educationgame-",
    demo: "https://devpost.com/software/elearn-6mbn10",
    demoLabel: "Demo",
  },
  {
    title: "Personal Portfolio Website",
    description:
      "A custom-designed AI-focused portfolio built from scratch using React and Tailwind, showcasing projects, technical growth, and interactive UI experiments.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/Jeeya7/JiyaPradhan",
    demo: null,
    demoLabel: null,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-28 bg-[#fff7fa]">
      <div className="mx-auto max-w-6xl px-6">

        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-3xl font-semibold mb-4">
            Projects
          </h2>
          <p className="text-zinc-600 max-w-xl mx-auto">
            Selected systems and tools I’ve built across machine learning,
            backend engineering, and full-stack development.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 border border-black/5 shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold mb-4">
                {project.title}
              </h3>

              <p className="text-sm text-zinc-600 mb-6 leading-relaxed">
                {project.description}
              </p>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 bg-[#ec4899]/10 text-[#ec4899] rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-4 text-sm">
                <a
                  href={project.github} 
                  className="text-[#ec4899] hover:opacity-70"
                >
                  GitHub ↗
                </a>

                {project.demo && (
                  <a
                    href={project.demo} 
                    className="text-[#ec4899] hover:opacity-70"
                    target="_blank"
                    rel="noopener noreferrer"
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