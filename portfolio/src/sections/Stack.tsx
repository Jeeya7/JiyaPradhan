const stack = [
  {
    category: "Languages",
    skills: ["Python", "JavaScript (ES6+)", "TypeScript", "SQL (PostgreSQL)"],
  },
  {
    category: "ML & AI",
    skills: [
      "PyTorch",
      "TensorFlow",
      "Scikit-Learn",
      "Hugging Face Transformers",
      "OpenCV",
      "MLOps",
    ],
  },
  {
    category: "Backend",
    skills: ["FastAPI", "Flask", "PostgreSQL", "Redis", "Docker", "AWS Lambda"],
  },
  {
    category: "Frontend",
    skills: [
      "React.js",
      "Tailwind CSS",
      "D3.js / Recharts",
      "Framer Motion",
      "Shadcn UI",
    ],
  },
];

export default function Stack() {
  return (
    <section id="stack" className="bg-[#f4f0f2] py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">

        {/* Layout Container */}
        <div className="grid gap-12 md:grid-cols-5">

          {/* Left Intro Column */}
          <div className="md:col-span-1">
            <h2 className="mb-4 text-2xl font-semibold text-zinc-900 sm:text-3xl lg:text-4xl">
              Technical Stack
            </h2>

            <p className="text-sm leading-relaxed text-zinc-600 sm:text-base">
              A specialized toolkit focused on the intersection of data science,
              robust backend engineering, and intuitive front-end delivery.
            </p>
          </div>

          {/* Skills Columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-2 md:col-span-4 lg:grid-cols-4 lg:gap-10">
            {stack.map((section, index) => (
              <div key={index}>
                <h3 className="mb-3 text-sm font-semibold text-zinc-900 sm:text-base lg:text-lg">
                  {section.category}
                </h3>

                <ul className="space-y-2 sm:space-y-3">
                  {section.skills.map((skill, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-xs text-zinc-700 sm:text-sm"
                    >
                      <span className="h-2 w-2 rounded-full bg-[#ec4899]" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}