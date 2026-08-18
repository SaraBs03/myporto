import { useState, useRef, useEffect } from "react";

export default function MenuSection() {
  const [activeItem, setActiveItem] = useState(null);
  const [isMarqueePaused, setIsMarqueePaused] = useState(false);
  const marqueeRef = useRef(null);
  const pauseTimeout = useRef(null);

  const handleTap = (item) => {
  setActiveItem((prev) => prev === item ? null : item);
};

const menuRef = useRef(null);

useEffect(() => {
  const closeNote = (e) => {
    if (menuRef.current && !menuRef.current.contains(e.target)) {
      setActiveItem(null);
    }
  };

  document.addEventListener("mousedown", closeNote);

  return () => {
    document.removeEventListener("mousedown", closeNote);
  };
}, []);

  const serviceDescriptions = {
  "ux/ui": "User research, wireframes, prototypes, and improving digital experiences through thoughtful UX flows.",
  "branding": "Mobile apps, dashboards, and digital products designed with clear and intuitive experiences.",
  "logos": "Creating user journeys, interactions, and flows that make products easier to use."
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
  className="
relative 
pt-3 sm:pt-7 lg:pt-[69px]
pb-16 sm:pb-20
min-h-[300px] sm:min-h-[500px] lg:min-h-[570px]
"
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
    <div className="w-full flex flex-col items-center">
    {/* TITLE */}
    <h2 className="font-whatnot font-bold text-center mt-[30px] sm:mt-[60px] lg:mt-[20px] text-base sm:text-2xl lg:text-5xl relative">
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
       What can I do for you ?
      </span>
    </h2>

{/* Menu items */}
<div
  ref={menuRef}
  className="
    mt-[20px] sm:mt-[40px] lg:mt-[55px]
    flex flex-col items-center
    space-y-2 sm:space-y-5 md:space-y-6 lg:space-y-14
    interactive-hover
  "
>
  
  {[
    {
      name: "ux/ui 1",
      label: "Websites",
      rotation: "-rotate-1",
      noteTitle: "WEBSITES",
      note:
        "Designing websites that balance your needs, audience, aesthetics, and functionality."
    },
    {
      name: "ux/ui 2",
      label: "Apps",
      rotation: "rotate-2",
      noteTitle: "DIGITAL PRODUCTS",
      note:
        "Designing clear, user-friendly apps and digital products."
    },
    {
      name: "ux/ui 3",
      label: "Ux & Flow",
      rotation: "-rotate-3",
      noteTitle: "UX & FLOW",
      note:
        "Creating purposeful, user-centered experiences that guide users toward clear goals."
    }
  ].map((item) => {
 
    
    const isLeft = item.name === "ux/ui 2";

    return (
      <div
        key={item.name}
        className="relative flex flex-col items-center"
      >

        {/* Main title */}
        <div
          className={getItemClass(item.name, item.rotation)}
          onClick={() => handleTap(item.name)}
        >
          {item.label}
        </div>

        {/* Side note */}
        <div
          className={`
            absolute top-1/2 -translate-y-1/2

            ${
              isLeft
                ? "right-full mr-6 sm:mr-10 md:mr-14 lg:mr-20"
                : "left-full ml-6 sm:ml-10 md:ml-14 lg:ml-20"
            }

            transition-all duration-500 ease-[cubic-bezier(.22,1,.36,1)]

            ${
              activeItem === item.name
                ? "opacity-100 translate-x-0 scale-100"
                : isLeft
                  ? "opacity-0 translate-x-10 scale-90 pointer-events-none"
                  : "opacity-0 -translate-x-10 scale-90 pointer-events-none"
            }
          `}
        >

          {/* Paper */}
          <div
            className="
              relative
              w-[105px]
xs:w-[115px]
sm:w-[180px]
md:w-[220px]
lg:w-[320px]

              bg-[#F3E6D4]
              text-[#190A07]

              px-2.5
              py-2
              sm:px-3
              sm:py-2.5
              md:px-4
              md:py-3
              lg:px-5
              lg:py-4

              shadow-[0_15px_35px_rgba(0,0,0,0.25)]
              rotate-[-2deg]
            "
          >

            {/* Pin */}
            <div
              className="
                absolute
                -top-1.5
                left-1/2
                -translate-x-1/2

                w-2.5
                h-2.5

                sm:w-3
                sm:h-3

                lg:w-4
                lg:h-4

                rounded-full
                bg-[#C33E23]
                border
                sm:border-2
                border-[#F3E6D4]
                shadow-md
                z-20
              "
            />

            {/* Tape */}
            <div
              className="
                absolute
                -top-2
                left-1/2
                -translate-x-1/2

                w-8
                h-3

                sm:w-10
                sm:h-3.5

                lg:w-14
                lg:h-5

                bg-[#d6bfa6]/70
                rotate-3
                z-10
              "
            />

            {/* Note title */}
            <p
              className="
                font-whatnot
                uppercase
                tracking-[0.12em]
                text-[9px]
                sm:text-[10px]
                lg:text-xs
                mb-1
                sm:mb-1.5
                lg:mb-2
              "
            >
              {item.noteTitle}
            </p>

            {/* Note text */}
            <p
              className="
                font-whatnot
                text-[9px]
                sm:text-[10px]
                md:text-[11px]
                lg:text-base
                leading-[1.35]
                sm:leading-[1.4]
                lg:leading-relaxed
              "
            >
              {item.note}
            </p>

          </div>
        </div>

      </div>
      
    );
  })}
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