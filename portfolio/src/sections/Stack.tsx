import React from "react";

const stack = [
  {
    category: "Languages",
    skills: [
      "Python",
      "JavaScript (ES6+)",
      "TypeScript",
      "SQL (PostgreSQL)",
    ],
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
    skills: [
      "FastAPI",
      "Flask",
      "PostgreSQL",
      "Redis",
      "Docker",
      "AWS Lambda",
    ],
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
    <section id="stack" className="py-28 bg-[#f4f0f2]">
      <div className="mx-auto max-w-6xl px-6">

        {/* Layout Container */}
        <div className="grid md:grid-cols-5 gap-12">

          {/* Left Intro Column */}
          <div className="md:col-span-1">
            <h2 className="text-4xl font-semibold mb-6">
              Technical Stack
            </h2>

            <p className="text-zinc-600 leading-relaxed">
              A specialized toolkit focused on the intersection of data science,
              robust backend engineering, and intuitive front-end delivery.
            </p>
          </div>

          {/* Skills Columns */}
          <div className="md:col-span-4 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">

            {stack.map((section, index) => (
              <div key={index}>
                <h3 className="text-lg font-semibold mb-4">
                  {section.category}
                </h3>

                <ul className="space-y-3">
                  {section.skills.map((skill, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 text-sm text-zinc-700"
                    >
                      <span className="w-2 h-2 bg-[#ec4899] rounded-full" />
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