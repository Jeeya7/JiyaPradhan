import { useEffect, useState } from "react";
import { Diamond } from "lucide-react";

const NAV_ITEMS = [
  { id: "overview", label: "Overview" },
  { id: "journey", label: "Journey" },
  { id: "projects", label: "Projects" },
  { id: "stack", label: "Stack" },
  { id: "contact", label: "Contact" },
];

const NAV_HEIGHT = 72;

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("overview");

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;

    const y =
      element.getBoundingClientRect().top + window.scrollY - NAV_HEIGHT - 16;

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const sections = NAV_ITEMS
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (!sections.length) return;

    const visibleRatios = new Map<string, number>();

    const setBestVisibleSection = () => {
      if (!visibleRatios.size) return;
      const [bestId] = [...visibleRatios.entries()].sort(
        (a, b) => b[1] - a[1]
      )[0];
      setActiveSection(bestId);
    };

    const setFallbackSection = () => {
      let closestId = sections[0].id;
      let closestDistance = Number.POSITIVE_INFINITY;

      for (const section of sections) {
        const distance = Math.abs(
          section.getBoundingClientRect().top - (NAV_HEIGHT + 16)
        );
        if (distance < closestDistance) {
          closestDistance = distance;
          closestId = section.id;
        }
      }

      setActiveSection(closestId);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const id = (entry.target as HTMLElement).id;
          if (entry.isIntersecting) {
            visibleRatios.set(id, entry.intersectionRatio);
          } else {
            visibleRatios.delete(id);
          }
        }

        if (visibleRatios.size) {
          setBestVisibleSection();
        } else {
          setFallbackSection();
        }
      },
      {
        root: null,
        rootMargin: `-${NAV_HEIGHT + 8}px 0px -55% 0px`,
        threshold: [0, 0.1, 0.2, 0.35, 0.5, 0.65, 0.8, 1],
      }
    );

    sections.forEach((section) => observer.observe(section));

    const onScroll = () => {
      if (!visibleRatios.size) setFallbackSection();
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/70 shadow-[0_8px_30px_rgba(0,0,0,0.25)] backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-3 text-white sm:px-6 sm:py-4 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div className="flex items-center justify-center gap-2 lg:justify-start">
          <Diamond className="h-4 w-4 sm:h-5 sm:w-5" />
          <div className="font-['Playfair_Display'] text-sm uppercase tracking-[0.08em] sm:text-base lg:text-lg">
            JIYA PRADHAN
          </div>
        </div>

        <div className="-mx-1 flex items-center gap-1 overflow-x-auto whitespace-nowrap px-1 text-xs scrollbar-none sm:gap-2 sm:text-sm lg:mx-0 lg:justify-end lg:overflow-visible lg:px-0">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollToSection(item.id)}
                aria-current={isActive ? "page" : undefined}
                className={`px-3 py-1.5 transition-colors sm:px-4 sm:py-2 ${
                  isActive
                    ? "text-pink-400"
                    : "text-white/85 hover:text-pink-400"
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>
      </nav>
    </header>
  );
}