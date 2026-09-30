import { useEffect, useState } from "react";
import CvIcon from "../assets/CvIcon.svg";

export default function FloatingCV() {
  const [hide, setHide] = useState(false);
  const [projectPanelOpen, setProjectPanelOpen] = useState(false);

  useEffect(() => {
    const footer = document.getElementById("site-footer");
    if (!footer) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setHide(entry.isIntersecting);
      },
      {
        threshold: 0.1,
      }
    );

    observer.observe(footer);

    return () => observer.disconnect();
  }, []);

  // Listen for the project preview panel opening/closing
  useEffect(() => {
    const openPanel = () => setProjectPanelOpen(true);
    const closePanel = () => setProjectPanelOpen(false);

    window.addEventListener("project-panel-open", openPanel);
    window.addEventListener("project-panel-close", closePanel);

    return () => {
      window.removeEventListener("project-panel-open", openPanel);
      window.removeEventListener("project-panel-close", closePanel);
    };
  }, []);

  return (
    <div
      className={`
        fixed bottom-4 right-4 z-[9999]
        transition-all duration-300 ease-in-out
        ${
          hide || projectPanelOpen
            ? "opacity-0 translate-y-6 pointer-events-none"
            : "opacity-100"
        }
      `}
    >
      <a
  href="/CV.pdf"
  download="Sara-Ben-Salem-CV.pdf"
        className="flex items-center gap-2
                   bg-[#F3E6D4]
                   px-3 py-2
                   rounded-full
                   lg:mr-[2.2rem]
                   shadow-lg
                   hover:scale-105
                   hover:opacity-90
                   transition
                   interactive-hover"
      >
        <img src={CvIcon} className="w-4 h-4" alt="ATS Resume icon" />

        <span className="font-dudu font-bold text-sm text-[#190A07]">
          CV
        </span>
      </a>
    </div>
  );
}