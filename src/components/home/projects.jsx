import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import placeholderImg from "../../assets/n.png";
import noweonboardingmockup from "../../assets/nowe_onboarding_mockup.png";
import noweseomockup from "../../assets/nowe_seo_mockup.png";
import epictradingmockup from "../../assets/epic_trading_mockup.png";
import nowelandingmockup from "../../assets/nowe_landings_mockup.png";
import diamatemockup from "../../assets/diamate_mockup.png";

export default function Projects({ isIOS, onPanelChange }) {
  const [activeIndex, setActiveIndex] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [rewindSeconds, setRewindSeconds] = useState(42);
  const [panelOpen, setPanelOpen] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const navigate = useNavigate();

  

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
    title: "Diamate",
    gradient: "linear-gradient(135deg, #60a5fa, #14b8a6)",
    image: diamatemockup,
    
    tags: ["Product Design", "UX Research", "UX Design", "UI Design"],
   
    
    route: null,
    inProgress: true,
    body:
      "A two-sided Type 1 diabetes care platform connecting patients and professionals before, during, and after appointments.",
  },
  {
    num: "02",
    title: "Nowe Money Onboarding",
    gradient: "linear-gradient(135deg, #fb923c, #dc2626)",
    image: noweonboardingmockup,
    
     tags: ["Product Design", "UX Design", "Interaction Design", "UI Design", "Design System"],
    route: "/nowe-money-onboarding",
    inProgress: false,
  },
  {
    num: "03",
    title: "Epic Trading",
    gradient: "linear-gradient(135deg, #f472b6, #e11d48)",
    image: epictradingmockup,
    
    tags: ["UX Design", "UI Design", "Design Systems"],
    route: "/epic-trading",
    inProgress: false,
  },
  {
    num: "04",
    title: "Nowe Money SEO Pages",
    gradient: "linear-gradient(135deg, #60a5fa, #9333ea)",
    image: noweseomockup,
    
    tags: ["UX Design", "UI Design", "Design Systems"],
    route: "/nowe-money-seo-pages",
    inProgress: false,
  },
  {
    num: "05",
    title: "Nowe Landing Pages",
    gradient: "linear-gradient(135deg, #4ade80, #0d9488)",
    image: nowelandingmockup,
    
    tags: ["UI Design", "UX Design", "UX Research"],
    
    route: "/nowe-money-landings",
    inProgress: false,
  },
];

const handleTap = (index) => {
  const project = projects[index];

  if (project.route) {
    navigate(project.route);
  }
};

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
              className={`group relative flex-none min-h-[110px] sm:min-h-[120px] lg:min-h-[160px] w-full flex items-center gap-3 sm:gap-6
  px-4 sm:px-8 md:px-12 lg:px-16
  py-4 sm:py-5 md:py-6 lg:py-8
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
              <span className="relative z-10 font-alegreya text-[#C33E23] text-[28px] sm:text-[40px] leading-none min-w-[2ch]">
                {p.num}
              </span>

              {/* Title */}
              <span className="relative z-10 flex-1 basis-0 min-w-0">
                <span className="block font-dudu text-[10px] sm:text-[12px] text-[#C33E23] uppercase tracking-[0.06em]">
                  Episode {i + 1}
                </span>

                <span className="block font-alegreya font-bold text-[16px] sm:text-[24px] text-[#F3E6D4] uppercase leading-tight">
                  {p.title}
                </span>

                {/* Tags - under title (below lg) */}
               
<div className="flex lg:hidden flex-wrap items-center gap-1.5 mt-2 w-full min-w-0 overflow-visible">
  {p.tags.map((tag) => (
    <span
      key={tag}
      className="inline-flex shrink-0 items-center
        font-dudu text-[8px] sm:text-[9px]
        uppercase tracking-[0.06em]
        leading-normal
        text-[#F3E6D4]
        border border-[#F3E6D4]/30
        px-1.5 sm:px-1.5 md:px-2
        py-0.5 rounded-full whitespace-nowrap"
    >
      {tag}
    </span>
  ))}
</div>
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

              {/* Tags - right side next to arrow (lg and up) */}
              <span className="relative z-10 hidden lg:flex flex-wrap justify-end content-center gap-1.5 xl:gap-2
                shrink min-w-0 basis-[38%] max-w-[460px]">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-dudu text-[9px] xl:text-[11px] uppercase tracking-[0.06em]
                      text-[#F3E6D4] border border-[#F3E6D4]/50 border-[0.2px] 
                      px-2.5 xl:px-3 py-0.5 rounded-full whitespace-nowrap"
                  >
                    {tag}
                  </span>
                ))}
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

     
    </main>
  );
}