import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import placeholderImg from "../../assets/n.png";
import noweonboardingmockup from "../../assets/nowe_onboarding_mockup.png";
import noweseomockup from "../../assets/nowe_seo_mockup.png";
import epictradingmockup from "../../assets/epic_trading_mockup.png";
import nowelandingmockup from "../../assets/nowe_landings_mockup.png";

export default function Projects({ isIOS, onPanelChange }) {
  const [activeIndex, setActiveIndex] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [rewindSeconds, setRewindSeconds] = useState(42);
  const [panelOpen, setPanelOpen] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const navigate = useNavigate();

  const handleTap = (index) => {
  setActiveIndex(index);
  setPanelOpen(true);

  window.dispatchEvent(new Event("project-panel-open"));
};

 const closePanel = () => {
  setPanelOpen(false);
  setActiveIndex(null);

  window.dispatchEvent(new Event("project-panel-close"));
};

  useEffect(() => {
    if (hoveredIndex === null) return;
    setRewindSeconds(42 + Math.floor(Math.random() * 20));
    const interval = setInterval(() => {
      setRewindSeconds((s) => (s > 0 ? s - 1 : 59));
    }, 90);
    return () => clearInterval(interval);
  }, [hoveredIndex]);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") closePanel();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  const formatTime = (s) => `00:${String(s).padStart(2, "0")}`;

  const projects = [
    {
      num: "01",
      title: "Epic Trading",
      gradient: "linear-gradient(135deg, #f472b6, #e11d48)",
      image: epictradingmockup,
      role: "UX/UI & Product Designer",
      tools: "Figma",
      year: "2026",
      route: "/epic-trading",
      inProgress: false,
    },
    {
      num: "02",
      title: "Nowe Money Onboarding",
      gradient: "linear-gradient(135deg, #fb923c, #dc2626)",
      image: noweonboardingmockup,
      role: "UX/UI Designer",
      tools: "Figma",
      year: "2026",
      route: "/nowe-money-onboarding",
      inProgress: true,
    },
    {
      num: "03",
      title: "Nowe Money SEO Pages",
      gradient: "linear-gradient(135deg, #60a5fa, #9333ea)",
      image: noweseomockup,
      role: "UX/UI Designer",
      tools: "Figma",
      year: "2026",
      route: "/nowe-money-seo-pages",
      inProgress: true,
    },
    {
      num: "04",
      title: "Nowe Landing Pages",
      gradient: "linear-gradient(135deg, #4ade80, #0d9488)",
      image: nowelandingmockup,
      role: "UX/UI Designer",
      tools: "Figma",
      year: "2026",
      route: null,
      inProgress: true,
    },
  ];

  const activeProject = activeIndex !== null ? projects[activeIndex] : null;

  return (
    <main
      id="projects"
      className="w-full bg-[#190A07] overflow-visible relative"
    >

      <div className={`${isIOS ? "pt-5" : ""} w-full flex flex-col`}>
        {/* ---------- EPISODE LIST ---------- */}
        <div className="relative w-full bg-[#190A07] flex flex-col">

          {/* Section Title */}
          <div className="px-4 sm:px-8 md:px-12 lg:px-16 py-6 sm:py-8 border-b border-[#C33E23]/20 flex-shrink-0">
            <h2 className="font-dudu text-[#F3E6D4] uppercase tracking-[0.08em] text-[16px] sm:text-[24px]">
              Case Studies
            </h2>
          </div>

          {projects.map((p, i) => (
            <button
              key={p.title}
              onClick={() => handleTap(i)}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              onMouseMove={(e) => setCursorPos({ x: e.clientX, y: e.clientY })}
              onFocus={() => setHoveredIndex(i)}
              onBlur={() => setHoveredIndex(null)}
              className={`group relative flex-1 min-h-[90px] sm:min-h-[120px] lg:min-h-[160px]w-full flex items-center gap-3 sm:gap-6
                px-4 sm:px-8 md:px-12 lg:px-16
                py-3 sm:py-5 md:py-6 lg:py-8
                border-b border-[#C33E23]/20 last:border-b-0
                text-left cursor-pointer touch-manipulation
                transition-colors duration-300 border-none interactive-hover pointer-events-auto
                ${activeIndex === i ? "bg-[#241109]" : ""}
              `}
              style={{ touchAction: "manipulation" }}
            >
              {/* background wash */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-500"
                style={{
                  backgroundImage: p.gradient,
                  filter: "saturate(0.6) brightness(0.5)",
                }}
              />

              <div className="absolute inset-0 bg-gradient-to-r from-[#190A07] via-[#190A07]/70 to-transparent" />

              {/* Number */}
              <span className="relative z-10 font-dudu text-[#C33E23] text-[28px] sm:text-[40px] leading-none min-w-[2ch]">
                {p.num}
              </span>

              {/* Title */}
              <span className="relative z-10 flex-1 min-w-0">
                <span className="block font-dudu text-[10px] sm:text-[12px] text-[#C33E23] uppercase tracking-[0.06em]">
                  Episode {i + 1}
                </span>

                <span className="block font-dudu text-[16px] sm:text-[24px] text-[#F3E6D4] uppercase leading-tight">
                  {p.title}
                </span>

                <span className="hidden sm:block text-[12px] text-[#F3E6D4]/50 mt-0.5 max-w-[38ch]">
                  
                </span>
              </span>

              {/* Timer */}
              <span
                className="relative z-10 hidden xs:block font-dudu
                  text-[11px] sm:text-[13px]
                  text-[#C33E23]
                  opacity-0 group-hover:opacity-100
                  group-focus-visible:opacity-100
                  transition-opacity duration-300
                  min-w-[4ch] text-right"
              >
                {hoveredIndex === i ? formatTime(rewindSeconds) : ""}
              </span>

              {/* Arrow */}
              <span
                className="relative z-10 font-dudu
                  text-[#F3E6D4]/40
                  group-hover:text-[#F3E6D4]
                  group-hover:translate-x-1
                  transition-all duration-300
                  text-[16px] sm:text-[20px]"
              >
                →
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* ---------- CURSOR-FOLLOWING PHOTO ---------- */}
      <div
        className={`hidden lg:block fixed top-0 left-0 z-30 pointer-events-none
          w-[440px] h-[440px]
          overflow-hidden border-4 border-[#C33E23]
          transition-[transform,opacity] duration-300 ease-out
          ${hoveredIndex !== null ? "opacity-100 scale-100" : "opacity-0 scale-90"}
        `}
        style={{
          transform: `translate(${cursorPos.x}px, ${cursorPos.y}px) translate(-50%, -50%) scale(${
            hoveredIndex !== null ? 1 : 0.9
          })`,
        }}
      >
        {hoveredIndex !== null && (
          <img
            src={projects[hoveredIndex].image}
            alt=""
            className="w-full h-full object-cover aspect-square"
          />
        )}
      </div>

      {/* ---------- CASE STUDY PANEL ---------- */}
      <div
        className={`fixed inset-0 z-[60] bg-black/55 flex justify-end transition-opacity duration-300 ${
          panelOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={(e) => {
          if (e.target === e.currentTarget) closePanel();
        }}
      >
        <div
          className={`relative w-full sm:w-[480px] h-full bg-[#F3E6D4] px-6 sm:px-10 py-8 sm:py-10 overflow-y-auto
            transition-transform duration-400 ease-out
            ${panelOpen ? "translate-x-0" : "translate-x-full"}
          `}
        >

          {activeProject && (
            <>
              
              

              {/* tape accent */}
              <div className="absolute top-[-8px] right-10 w-16 h-5 bg-[#C33E23]/50 rotate-[-3deg]" />

              <div className="flex items-start justify-between mb-6">
                <span className="font-dudu text-[#C33E23] text-[16px] uppercase tracking-[0.06em]">
                  Episode {activeProject.num}
                </span>

                <button
                  onClick={closePanel}
                  className="font-dudu text-[11px] interactive-hover tracking-[0.06em] border border-[#190A07] text-[#190A07] px-3 py-1 hover:bg-[#190A07] hover:text-[#F3E6D4] transition-colors duration-200"
                >
                  CLOSE ✕
                </button>
              </div>

              <h3 className="font-dudu text-[#190A07] uppercase text-[32px] sm:text-[40px] leading-none mb-5">
                {activeProject.title}
              </h3>

              {/* IN PROGRESS INFO */}
              {activeProject.inProgress && (
                <div className="mb-6 border border-[#C33E23]/40 bg-[#C33E23]/5 px-4 py-3">
                  <p className="font-dudu text-[#C33E23] text-[13px] uppercase tracking-[0.08em]">
                    Case Study In Progress
                  </p>

                  <p className="font-whatnot text-[#190A07]/70 text-[13px] mt-1 leading-relaxed">
                    This case study is currently being developed and will be
                    published soon.
                  </p>
                </div>
              )}

              <img
                src={activeProject.image}
                alt={activeProject.title}
                className="w-full h-[180px] sm:h-[220px] mb-6 object-cover aspect-square"
                style={{ filter: "saturate(0.9)" }}
              />

              <div className="flex flex-wrap gap-6 border-y border-dashed border-[#190A07]/25 py-4 mb-6">
                <div className="text-[16px]">
                  <span className="block font-whatnot font-bold text-[#C33E23] text-[14px]">
                    Role
                  </span>
                  <span className="font-whatnot text-[#190A07]">
                    {activeProject.role}
                  </span>
                </div>

                <div className="text-[16px]">
                  <span className="block font-whatnot font-bold text-[#C33E23] text-[14px]">
                    Tools
                  </span>
                  <span className="font-whatnot text-[#190A07]">
                    {activeProject.tools}
                  </span>
                </div>

                <div className="text-[16px]">
                  <span className="block font-whatnot font-bold text-[#C33E23] text-[14px]">
                    Year
                  </span>
                  <span className="font-whatnot text-[#190A07]">
                    {activeProject.year}
                  </span>
                </div>
              </div>

              <>
                <p className="text-[15px] text-[#190A07]/85 leading-relaxed">
                  {activeProject.body}
                </p>

                {/* Only Epic Trading gets the See More button */}
                {!activeProject.inProgress && activeProject.route && (
                  <button
                    onClick={() => navigate(activeProject.route)}
                    className="mt-8 inline-flex items-center gap-2
                      font-dudu uppercase tracking-[0.08em]
                      text-[#190A07]
                      border border-[#190A07]
                      px-5 py-2
                      hover:bg-[#190A07]
                      hover:text-[#F3E6D4]
                      transition-all duration-300
                      cursor-pointer interactive-hover pointer-events-auto"
                  >
                    See More
                    <span>→</span>
                  </button>
                )}
              </>
            </>
          )}
        </div>
      </div>
    </main>
  );
}