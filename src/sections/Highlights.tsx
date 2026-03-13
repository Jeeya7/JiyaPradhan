const highlights = [
  {
    image: `${import.meta.env.BASE_URL}BeaverHacks.jpg`,
    title: "BeaverHacks Winner",
    description:
            "Our team Psych2Learn winning BeaverHacks.",
  },
  {
    image: `${import.meta.env.BASE_URL}BeaverHacks2.jpg`,
    title: "Project Demo",
    description:
          "Our team with NVIDIA representative.",
  },
  {
    image: `${import.meta.env.BASE_URL}LEAP.jpg`,
    title: "LEAP",
    description:
      "Leadership, Empowerment, and Purpose (LEAP) graduation ceremoney",
  },
];

export default function Highlights() {
  return (
    <section id="highlights" className="bg-white py-24">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-semibold text-zinc-900">
            Highlights
          </h2>
          <p className="mx-auto max-w-2xl text-zinc-600">
            Moments from hackathons, demos, and collaborative builds that shaped
            my journey in AI and software development.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {highlights.map((item, index) => (
            <div key={index} className="min-w-0">
              <div className="overflow-hidden rounded-2xl">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-[260px] w-full object-cover transition-transform duration-300 hover:scale-[1.03]"
                />
              </div>

              <div className="mt-5 px-1">
                <h3 className="text-lg font-semibold text-zinc-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}