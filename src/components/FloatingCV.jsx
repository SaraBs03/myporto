import { useEffect, useState } from "react";
import CvIcon from "../assets/CvIcon.svg";

export default function FloatingCV({ menuOpen }) {
  const [hide, setHide] = useState(false);

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

  


  return (
    <div
      className={`
        fixed bottom-4 right-4 z-[9999]
        transition-all duration-300 ease-in-out
        ${hide ? "opacity-0 translate-y-6 pointer-events-none" : "opacity-100"}
      `}
    >
      <a
        href="/CV_Sara_Ben_Salem.pdf"
        download
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
        <img src={CvIcon} className="w-4 h-4" alt="CV icon" />
        <span className="font-dudu font-bold text-sm text-[#190A07]">
          CV
        </span>
      </a>
    </div>
  );
}
