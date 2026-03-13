
const experiences = [
  {
    year: "May 2025 – Present",
    title: "Software Developer",
    company: "Center for Applied Systems & Software (CASS)",
    description:
      "I worked on contract software projects for external partners, helping build and maintain production systems while resolving issues and supporting development across the stack.",
    skills: ["ASP.NET Core", "Database Management", "C#", "SQL", "Logging", "Python", "Docker", "Software Systems"],
    logo: "/CASS_logo.jpg",
  },
  {
    year: "May 2025 – Present",
    title: "Systems Contributor — ODOT & OFRS",
    company: "Oregon Department of Transportation & DEQ Oregon Fuels Reporting System",
    description:
      "I contributed to transportation and environmental compliance systems, helping debug application issues and improve reporting infrastructure used for regulatory data. I also supported data processing workflows that generate structured outputs for analytics and operational reporting.",
    skills: ["SSRS", "DevOps", "Backend Debugging", "Data Pipelines"],
    logo: "/ODOT_DEQ_logo.png",
  },
  {
    year: "Dec 2023 – Present",
    title: "Undergraduate Research Assistant",
    company: "Oregon State University",
    description:
      "I assist in machine learning research focused on improving the efficiency of neural network models. My work involves building and profiling models, analyzing performance bottlenecks, and visualizing experimental results to support ongoing research and experimentation.",
    skills: ["PyTorch", "Model Profiling", "Pandas", "Matplotlib", "ML Optimization"],
    logo: "/OSU_logo.png",
  },
  {
    year: "Sep 2023 – Jun 2027",
    title: "B.S. Computer Science & Artificial Intelligence",
    company: "Oregon State University",
    description:
      "I am pursuing a degree in Computer Science with a focus on artificial intelligence, building strong foundations in machine learning, algorithms, and scalable software systems.",
    skills: ["Machine Learning", "AI Systems", "Algorithms", "Deep Learning"],
    logo: "/OSU_logo.png",
  },
];

export default function Journey() {
  return (
    <section
      id="journey"
      className="relative py-28 bg-[#f6e7ee] overflow-hidden"
    >
      <div className="mx-auto max-w-6xl px-6">

        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-3xl font-semibold">
            The Growth Narrative
          </h2>
          <div className="w-16 h-[2px] bg-[#ec4899] mx-auto mt-4 mb-6" />
          <p className="text-zinc-600 max-w-xl mx-auto">
            A journey of continuous evolution, from fundamental algorithms
            to frontier artificial intelligence models.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">

          {/* Vertical Line */}
          <div className="absolute left-1/2 top-0 h-full w-[2px] bg-[#ec4899]/40 transform -translate-x-1/2" />

          <div className="space-y-24">
            {experiences.map((exp, index) => {
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`relative flex ${
                    isLeft ? "justify-start" : "justify-end"
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-1/2 top-6 w-4 h-4 bg-[#ec4899] rounded-full transform -translate-x-1/2 z-10" />

                  {/* Card */}
                  <div className="relative w-full md:w-[45%] bg-white rounded-2xl p-8 shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-black/5">
                    <div className="flex justify-between items-start mb-4">

                      <div>
                        <span className="inline-block text-xs font-semibold text-[#ec4899] bg-[#ec4899]/10 px-3 py-1 rounded-full mb-3">
                          {exp.year}
                        </span>

                        <h3 className="text-xl font-semibold text-zinc-900">
                          {exp.title}
                        </h3>

                        <p className="text-sm text-[#ec4899] font-medium">
                          {exp.company}
                        </p>
                      </div>

                      <img
                        src={exp.logo}
                        alt={exp.company}
                        className="h-20 w-20 object-contain ml-6"
                      />
                    </div>
                    <p className="text-sm text-zinc-600 leading-relaxed mb-6 max-w-lg">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, i) => (
                          <span
                            key={i}
                            className="text-xs px-3 py-1 bg-[#ec4899]/10 text-[#ec4899] rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}