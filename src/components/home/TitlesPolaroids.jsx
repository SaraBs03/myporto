import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import TG_thumbnail from "../../assets/TG_thumbnail.jpg";
import TG_thumbnail2 from "../../assets/TG_thumbnail2.jpg";
import DT_thumbnail from "../../assets/DT_thumbnail.jpg";
import DT_thumbnail2 from "../../assets/DT_thumbnail2.jpg";
import FZ_thumbnail from "../../assets/FZ_thumbnail.jpg";
import FZ_thumbnail2 from "../../assets/FZ_thumbnail2.jpg";
import FROY from "../../assets/FROY.jpg";

/* ---------- iOS DETECTION ---------- */
const checkIsIOS = () => {
  if (typeof window === "undefined") return false;
  return (
    /iPad|iPhone|iPod/.test(navigator.userAgent) ||
    (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1)
  );
};

export default function Home() {
  const navigate = useNavigate();
  const [isIOS, setIsIOS] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    setIsIOS(checkIsIOS());
  }, []);

  const handleTap = (path, index) => {
    setActiveIndex(index);
    setTimeout(() => {
      navigate(path);
    }, 250);
  };

  return (
    <main className="min-h-screen bg-[#F3E6D4] mb-[-22vh] flex items-center justify-center p-4">
      <div
        className={`${isIOS ? "pt-[20px]" : "mt-[6rem]"} relative w-full max-w-[600px] xl:max-w-none xl:w-full mb-[37vh] md:mt-[3rem] xl:px-8 mb-96 md:mb-96`}
      >
        {/* ---------- TOP ROW ---------- */}
        <div className="relative w-fit left-1/2 -translate-x-1/2 flex justify-center items-center mb-8 mt-[-75px] xs:mt-[-30px] sm:mt-[-50px] md:mt-[20px] lg:mt-[4rem]">

          {/* POLAROID 1 */}
          <div
            onPointerUp={() => handleTap("/TG/uxui", 0)}
            className={`relative group touch-manipulation
              w-[140px] xs:w-[150px] sm:w-[160px] md:w-[210px]
              lg:w-[clamp(180px,35vw,320px)]
              aspect-square bg-[#190A07] border-4 border-[#C33E23]
              rotate-[6deg] z-10 cursor-pointer transition-all duration-300
              hover:-translate-y-4 hover:scale-110 interactive-hover
              lg:hover:-translate-y-10 lg:hover:scale-125 lg:hover:rotate-0 lg:hover:z-50
              ${activeIndex === 0 ? "-translate-y-2 scale-105" : ""}
            `}
            style={{ touchAction: "manipulation" }}
          >
            <div className="absolute inset-[6%] bottom-[18%] overflow-hidden">
              <img src={TG_thumbnail} className="w-full h-full object-cover" draggable={false} />
              <img src={TG_thumbnail2} className="absolute inset-0 object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300" draggable={false} />
            </div>
            <p className="absolute bottom-[6%] w-full text-center text-[#F3E6D4] xl:text-[18px] font-dudu sm:text-[11px] md:text-[14px] lg:text-[16px] text-[10px]">
              Trend Grabber
            </p>
          </div>

          {/* POLAROID 2 */}
          <div
            onPointerUp={() => handleTap("/Diamate", 1)}
            className={`relative group touch-manipulation
              w-[140px] xs:w-[150px] sm:w-[160px] md:w-[210px]
              lg:w-[clamp(180px,35vw,320px)]
              aspect-square bg-[#190A07] border-4 border-[#C33E23]
              -rotate-[7deg] z-20 cursor-pointer transition-all duration-300
              hover:-translate-y-4 hover:scale-110 interactive-hover
              lg:hover:-translate-y-10 lg:hover:scale-125 lg:hover:rotate-0 lg:hover:z-50
              -ml-4 xs:-ml-6 sm:-ml-8 md:-ml-10 lg:-ml-20
              ${activeIndex === 1 ? "-translate-y-2 scale-105" : ""}
            `}
            style={{ touchAction: "manipulation" }}
          >
            <div className="absolute inset-[6%] bottom-[18%] overflow-hidden">
              <img src={DT_thumbnail} className="w-full h-full object-cover" draggable={false} />
              <img src={DT_thumbnail2} className="absolute inset-0 object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300" draggable={false} />
            </div>
            <p className="absolute bottom-[6%] w-full text-center text-[#F3E6D4] xl:text-[18px] font-dudu sm:text-[11px] md:text-[14px] lg:text-[16px] text-[10px]">
              Diamate
            </p>
          </div>
        </div>

        {/* ---------- BOTTOM ROW ---------- */}
        <div className="relative w-fit left-1/2 -translate-x-1/2 flex justify-center items-center -mt-8">

          {/* POLAROID 3 */}
          <div
            onPointerUp={() => handleTap("/Fantazia", 2)}
            className={`relative group touch-manipulation
              w-[140px] xs:w-[150px] sm:w-[160px] md:w-[210px]
              lg:w-[clamp(180px,35vw,320px)]
              aspect-square bg-[#190A07] border-4 border-[#C33E23]
              -rotate-[4deg] cursor-pointer transition-all duration-300
              hover:-translate-y-4 hover:scale-110 interactive-hover
              lg:hover:-translate-y-10 lg:hover:scale-125 lg:hover:rotate-0 lg:hover:z-50
              ${activeIndex === 2 ? "-translate-y-2 scale-105" : ""}
            `}
            style={{ touchAction: "manipulation" }}
          >
            <div className="absolute inset-[6%] bottom-[18%] overflow-hidden">
              <img src={FZ_thumbnail} className="w-full h-full object-cover" draggable={false} />
              <img src={FZ_thumbnail2} className="absolute inset-0 object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300" draggable={false} />
            </div>
            <p className="absolute bottom-[6%] w-full text-center text-[#F3E6D4] xl:text-[18px] font-dudu sm:text-[11px] md:text-[14px] lg:text-[16px] text-[10px]">
              Fantazia
            </p>
          </div>

          {/* POLAROID 4 (NO NAV) */}
          <div
            className="relative touch-manipulation
              w-[140px] xs:w-[150px] sm:w-[160px] md:w-[210px]
              lg:w-[clamp(180px,35vw,320px)]
              aspect-square bg-[#190A07] border-4 border-[#C33E23]
              rotate-[8deg] -ml-4 xs:-ml-6 sm:-ml-8 md:-ml-10 lg:-ml-20"
            style={{ touchAction: "manipulation" }}
          >
            <div className="absolute inset-[6%] bottom-[18%] overflow-hidden">
              <img src={FROY} className="w-full h-full object-cover" draggable={false} />
            </div>
            <p className="absolute bottom-[6%] w-full text-center text-[#F3E6D4] font-dudu sm:text-[11px] md:text-[14px] lg:text-[16px] text-[10px]">
              Froy
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
