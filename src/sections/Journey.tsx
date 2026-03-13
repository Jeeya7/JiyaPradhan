const experiences = [
  {
    year: "May 2025 – Present",
    title: "Software Developer",
    company: "Center for Applied Systems & Software (CASS)",
    description:
      "I worked on contract software projects for external partners, helping build and maintain production systems while resolving issues and supporting development across the stack.",
    skills: [
      "ASP.NET Core",
      "Database Management",
      "C#",
      "SQL",
      "Logging",
      "Python",
      "Docker",
      "Software Systems",
    ],
    logo: "${import.meta.env.BASE_URL}CASS_logo.jpg",
  },
  {
    year: "May 2025 – Present",
    title: "Systems Contributor — ODOT & OFRS",
    company:
      "Oregon Department of Transportation & DEQ Oregon Fuels Reporting System",
    description:
      "I contributed to transportation and environmental compliance systems, helping debug application issues and improve reporting infrastructure used for regulatory data. I also supported data processing workflows that generate structured outputs for analytics and operational reporting.",
    skills: ["SSRS", "DevOps", "Backend Debugging", "Data Pipelines"],
    logo: "${import.meta.env.BASE_URL}ODOT_DEQ_logo.png",
  },
  {
    year: "Dec 2023 – Present",
    title: "Undergraduate Research Assistant",
    company: "Oregon State University",
    description:
      "I assist in machine learning research focused on improving the efficiency of neural network models. My work involves building and profiling models, analyzing performance bottlenecks, and visualizing experimental results to support ongoing research and experimentation.",
    skills: [
      "PyTorch",
      "Model Profiling",
      "Pandas",
      "Matplotlib",
      "ML Optimization",
    ],
    logo: "${import.meta.env.BASE_URL}OSU_logo.png",
  },
  {
    year: "Sep 2023 – Jun 2027",
    title: "B.S. Computer Science & Artificial Intelligence",
    company: "Oregon State University",
    description:
      "I am pursuing a degree in Computer Science with a focus on artificial intelligence, building strong foundations in machine learning, algorithms, and scalable software systems.",
    skills: ["Machine Learning", "AI Systems", "Algorithms", "Deep Learning"],
    logo: "${import.meta.env.BASE_URL}OSU_logo.png",
  },
];

export default function Journey() {
  return (
    <section
      id="journey"
      className="relative overflow-hidden bg-[#f6e7ee] py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        {/* Header */}
        <div className="mb-14 text-center sm:mb-16 lg:mb-20">
          <h2 className="text-2xl font-semibold text-zinc-900 sm:text-3xl">
            The Growth Narrative
          </h2>
          <div className="mx-auto mt-4 mb-5 h-[2px] w-16 bg-[#ec4899]" />
          <p className="mx-auto max-w-xl text-sm leading-relaxed text-zinc-600 sm:text-base">
            A journey of continuous evolution, from fundamental algorithms
            to frontier artificial intelligence models.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 top-0 h-full w-[2px] bg-[#ec4899]/35 md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-10 sm:space-y-12 lg:space-y-16">
            {experiences.map((exp, index) => {
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`relative flex pl-12 md:pl-0 ${
                    isLeft ? "md:justify-start" : "md:justify-end"
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-4 top-8 z-10 h-3.5 w-3.5 -translate-x-1/2 rounded-full bg-[#ec4899] md:left-1/2 md:top-8 md:h-4 md:w-4" />

                  {/* Card */}
                  <div className="relative w-full rounded-2xl border border-black/5 bg-white p-5 shadow-[0_20px_50px_rgba(0,0,0,0.08)] sm:p-6 md:w-[45%] lg:p-8">
                    <div className="mb-4 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                      <div className="min-w-0">
                        <span className="mb-3 inline-block rounded-full bg-[#ec4899]/10 px-3 py-1 text-[11px] font-semibold text-[#ec4899] sm:text-xs">
                          {exp.year}
                        </span>

                        <h3 className="text-lg font-semibold leading-snug text-zinc-900 sm:text-xl">
                          {exp.title}
                        </h3>

                        <p className="mt-1 text-sm font-medium leading-snug text-[#ec4899]">
                          {exp.company}
                        </p>
                      </div>

                      <img
                        src={exp.logo}
                        alt={exp.company}
                        className="h-14 w-14 shrink-0 object-contain sm:h-16 sm:w-16 md:ml-4 lg:h-20 lg:w-20"
                      />
                    </div>

                    <p className="mb-5 max-w-lg text-sm leading-relaxed text-zinc-600">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="rounded-full bg-[#ec4899]/10 px-3 py-1 text-[11px] text-[#ec4899] sm:text-xs"
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