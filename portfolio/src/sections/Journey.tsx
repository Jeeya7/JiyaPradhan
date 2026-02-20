
const experiences = [
  {
    year: "May 2025 – Present",
    title: "Software Developer",
    company: "Center for Applied Systems & Software (CASS)",
    description:
      "Develop backend services for enterprise-level government systems using ASP.NET Core and PostgreSQL. Design RESTful controllers, refactor legacy modules, optimize relational schemas, and resolve production issues to improve system reliability and performance. Implement structured logging with Serilog and analyze backend data to enhance observability and support AI-ready architecture decisions.",
    skills: ["ASP.NET Core", "PostgreSQL", "C#", "SQL", "Serilog"],
  },
  {
    year: "May 2025 – Present",
    title: "Systems Contributor — ODOT & OFRS",
    company: "Oregon Department of Transportation & DEQ Oregon Fuels Reporting System",
    description:
      "Contributed to transportation and environmental compliance systems by supporting DevOps-driven development, debugging frontend and backend malfunctions, and improving reporting infrastructure. Designed and maintained SSRS solutions and integrated Python-based data processing pipelines to generate structured outputs for compliance and internal analytics.",
    skills: ["SSRS", "Python", "DevOps", "Backend Debugging", "Reporting Systems"],
  },
  {
    year: "Dec 2023 – Present",
    title: "Undergraduate Research Assistant",
    company: "Oregon State University",
    description:
      "Assist in machine learning research focused on memory-efficient model optimization. Build and profile PyTorch models, analyze performance bottlenecks, and visualize experimental results using Pandas and Matplotlib. Contribute to bi-weekly research discussions and maintain detailed progress documentation.",
    skills: ["PyTorch", "Model Profiling", "Pandas", "Matplotlib", "ML Optimization"],
  },
  {
    year: "Mar 2024 – Present",
    title: "Writing Consultant",
    company: "Undergrad Research & Writing Studio — Oregon State University",
    description:
      "Provide one-on-one non-evaluative writing consultations for students and faculty, helping develop structured strategies for academic and technical writing. Collaborate with peers and staff in weekly reflection sessions and maintain detailed consultation reports.",
    skills: ["Technical Communication", "Mentorship", "Collaboration", "Documentation"],
  },
  {
    year: "Sep 2023 – Jun 2027",
    title: "B.S. Computer Science & Artificial Intelligence",
    company: "Oregon State University",
    description:
      "Pursuing a 4.0 GPA with focused coursework in Machine Learning, Deep Learning, AI Systems, Algorithms, Database Systems, and Operating Systems. Building strong foundations in AI-driven system design and scalable software engineering.",
    skills: ["Machine Learning", "AI Systems", "Algorithms", "Database Systems"],
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
                  <div className="w-full md:w-[45%] bg-white rounded-2xl p-8 shadow-sm border border-black/5">
                    <p className="text-xs tracking-widest text-[#ec4899] font-semibold mb-2">
                      {exp.year}
                    </p>

                    <h3 className="text-lg font-semibold">
                      {exp.title}
                    </h3>

                    <p className="text-sm text-[#ec4899] mb-4">
                      {exp.company}
                    </p>

                    <p className="text-sm text-zinc-600 mb-6">
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