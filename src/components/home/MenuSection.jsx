import { useState, useRef } from "react";

export default function MenuSection() {
  const [activeItem, setActiveItem] = useState(null);
  const [isMarqueePaused, setIsMarqueePaused] = useState(false);
  const marqueeRef = useRef(null);
  const pauseTimeout = useRef(null);

  const handleTap = (item) => {
    setActiveItem(item);
    setTimeout(() => setActiveItem(null), 300);
  };

  const getItemClass = (item, rotation) => {
    const baseClass =
      "font-dudu font-normal text-[#F3E6D4] mt-[15px] lg:mt-[-7px] text-[18px] sm:text-3xl lg:text-5xl cursor-pointer transition-all duration-300 ease-out ";
    const hoverClass =
      "hover:scale-110 hover:rotate-0 hover:font-bold hover:text-[#F3E6D4] hover:drop-shadow-[0_0_8px_rgba(243,230,212,0.5)] hover:tracking-wider ";
    const activeClass =
      activeItem === item
        ? "scale-110 rotate-0 font-bold drop-shadow-[0_0_8px_rgba(243,230,212,0.5)] tracking-wider "
        : "";

    return `${baseClass} ${hoverClass} ${activeClass} transform ${rotation}`;
  };

  const handleMarqueeInteraction = (pause) => {
    if (pauseTimeout.current) clearTimeout(pauseTimeout.current);

    setIsMarqueePaused(pause);

    if (pause) {
      pauseTimeout.current = setTimeout(() => {
        setIsMarqueePaused(false);
      }, 3000);
    }
  };

  const handleMarqueeClick = () => {
    handleMarqueeInteraction(!isMarqueePaused);
  };

  return (
    <section
  className="relative pt-3 sm:pt-7 lg:pt-[69px] min-h-[260px] sm:min-h-[400px] lg:min-h-[550px]"
  style={{
    backgroundColor: "#5E3C2F",
    backgroundImage: `
      linear-gradient(to right, rgba(243,230,212,0.1) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(243,230,212,0.1) 1px, transparent 1px)
    `,
    backgroundSize: "40px 40px",
  }}
>
  <div className="max-w-[1260px] mx-auto px-3 sm:px-6 lg:px-0 text-[#F3E6D4]">
    {/* TITLE */}
    <h2 className="font-whatnot font-bold text-center mt-[15px] sm:mt-[30px] text-base sm:text-2xl lg:text-5xl relative">
      <span
        className="
          relative inline-block
          after:content-['']
          after:absolute after:left-0 after:-bottom-2
          after:h-[2px] after:w-full
          after:bg-[#F3E6D4]
          after:origin-left
          after:scale-x-100
          lg:after:scale-x-0
          lg:hover:after:scale-x-100
          after:transition-transform after:duration-500 after:ease-out
        "
      >
       What can I do for your brand ?
      </span>
    </h2>

    {/* Menu items */}
    <div className="mt-[20px] sm:mt-[40px] lg:mt-[55px] flex flex-col items-center space-y-3 sm:space-y-6 lg:space-y-10">
      {/* UX/UI */}
      <div
        className={` ${getItemClass("ux/ui", "-rotate-1")}`}
        onClick={() => handleTap("ux/ui")}
      >
        UX/UI
      </div>

      {/* BRANDING */}
      <div
        className={`${getItemClass("branding", "rotate-2")}`}
        onClick={() => handleTap("branding")}
      >
        BRANDING
      </div>

      {/* LOGOS */}
      <div
        className={`${getItemClass("logos", "-rotate-3")}`}
        onClick={() => handleTap("logos")}
      >
        LOGOS
      </div>
    </div>
  </div>

  <div className="marquee-container absolute bottom-0 left-0 w-full bg-[#C33E23] py-1.5 sm:py-3">
  <div
    className="interactive-hover overflow-hidden w-full cursor-pointer"
    onClick={handleMarqueeClick}
    onMouseEnter={() => handleMarqueeInteraction(true)}
    onMouseLeave={() => handleMarqueeInteraction(false)}
    onTouchStart={() => handleMarqueeInteraction(true)}
    onTouchEnd={() => setTimeout(() => handleMarqueeInteraction(false), 100)}
  >
    <div className="flex w-max rect-track">
      
      {/* FIRST COPY */}
      <div className="inline-flex text-[#F3E6D4] font-whatnot text-sm sm:text-lg lg:text-xl">
        <span className="mx-4">Available now for freelance work and collaborations. •</span>
        <span className="mx-4">Comfortable working remotely and delivering on deadlines. •</span>
        <span className="mx-4">Open for collaborations with designers and developers. •</span>
      </div>

      {/* SECOND COPY (IDENTICAL) */}
      <div className="inline-flex text-[#F3E6D4] font-whatnot text-sm sm:text-lg lg:text-xl">
        <span className="mx-4">Available now for freelance work and collaborations. •</span>
        <span className="mx-4">Comfortable working remotely and delivering on deadlines. •</span>
        <span className="mx-4">Open for collaborations with designers and developers. •</span>
      </div>

    
  </div>
</div>
</div>
</section>


  );
}