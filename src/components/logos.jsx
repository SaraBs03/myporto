import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useRef} from "react";


import logo1 from "../assets/logo1.png";
import logo2 from "../assets/logo2.png";
import logo3 from "../assets/logo3.png";
import logo4 from "../assets/logo4.png";
import logo5 from "../assets/logo5.png";
import logo6 from "../assets/logo6.png";
import logo1_mono from "../assets/logo1_mono.png";
import logo2_mono from "../assets/logo2_mono.png";
import logo3_mono from "../assets/logo3_mono.png";
import logo4_mono from "../assets/logo4_mono.png";
import logo5_mono from "../assets/logo5_mono.png";
import logo6_mono from "../assets/logo6_mono.png";
import left from "../assets/left.svg"
import Footer from "./Footer";

/* ---------- iOS DETECTION ---------- */
const checkIsIOS = () => {
  if (typeof window === "undefined") return false
  return (
    /iPad|iPhone|iPod/.test(navigator.userAgent) ||
    (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1)
  )
}

const logos = [
  { 
    src: logo1,
    monoSrc: logo1_mono,
    className: "object-contain w-5/6 h-4/5",
    name: "Trend Grabber"
  },
  { 
    src: logo2,
    monoSrc: logo2_mono,
    className: "object-contain w-2/3 h-3/5 xl:p-8 p-4", 
    name: "Fantazia"
  },
  { 
    src: logo3,
    monoSrc: logo3_mono,
    className: "object-contain w-4/5 h-4/5 p-4 -mt-4",
    name: "Medicloud"
  },
  { 
    src: logo4,
    monoSrc: logo4_mono,
    className: "object-contain w-4/5 h-4/5",
    name: "Diamate"
  },
  { 
    src: logo5,
    monoSrc: logo5_mono,
    className: "object-contain w-4/5 xl:w-5/6 h-4/5",
    name: "Zonapros"
  },
  { 
    src: logo6,
    monoSrc: logo6_mono,
    className: "object-contain w-4/5 xl:w-5/6 h-4/5",
    name: "Synapse"
  },
];



export default function Logo() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const navigate = useNavigate();
  const [isIOS, setIsIOS] = useState(false)
const gridRef = useRef(null);


useEffect(() => {
  const handleClickOutside = (event) => {
    if (gridRef.current && !gridRef.current.contains(event.target)) {
      setSelectedIndex(null);
    }
  };

  document.addEventListener("mousedown", handleClickOutside);
  document.addEventListener("touchstart", handleClickOutside);

  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
    document.removeEventListener("touchstart", handleClickOutside);
  };
}, []);



  useEffect(() => {
    setIsIOS(checkIsIOS())
  }, [])


  
  const handleLogoClick = (index) => {
    if (selectedIndex === index) {
      setSelectedIndex(null);
    } else {
      setSelectedIndex(index);
    }
  };

  const goHome = () => {
    navigate("/", { 
      replace: false,
      state: { scrollToTop: true } 
    });
  };


  
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#F3E6D4] to-[#E8D5C1] -mt-[3.2rem] sm:-mt-[4rem] md:-mt-[4.3rem] lg:-mt-[4.3rem] xl:-mt-24">
      {/* Header */}
      <div className={`${isIOS ? 'pt-[100px]' : 'mt-[7rem]'} md:mt-[15rem] pb-6 px-4 lg:px-[40px] text-center`}>
        <h1 className="font-whatnot font-bold text-[#190A07] text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-2">
          Logo Gallery
        </h1>
        <p className="font-dudu text-[#5E3C2F] text-sm sm:text-base md:text-lg max-w-2xl mx-auto opacity-80">
          Click to see the monochrome version of each logo.
        </p>
      </div>

      {/* Grid Container */}
      <section className="flex-grow flex items-center justify-center px-4 lg:px-[40px] py-8 interactive-hover">
        <div className="w-full max-w-6xl">
          {/* Grid Lines Background */}
          <div className="relative">
            {/* Vertical Lines - Show on all screens */}
            <div className="absolute inset-0 grid grid-cols-2 sm:grid-cols-3 pointer-events-none">
              <div className="border-r border-[#D4C2B0]"></div>
              <div className="border-r border-[#D4C2B0] sm:border-r"></div>
              <div className="hidden sm:block"></div>
            </div>
            
            {/* Horizontal Lines - Show on all screens */}
            <div className="absolute inset-0 grid grid-rows-3 sm:grid-rows-2 pointer-events-none">
              <div className="border-b border-[#D4C2B0]"></div>
              <div className="border-b border-[#D4C2B0] sm:border-b"></div>
              <div className="border-b border-[#D4C2B0] sm:border-b-0"></div>
            </div>
{/* Logos Grid */}

<div 
 ref={gridRef}
className="grid grid-cols-2 sm:grid-cols-3 place-items-center md:ml-[32px] md:mr-[32px] lg:ml-[40px] lg:mr-[40px] gap-3 sm:gap-6 md:gap-8 lg:gap-10 relative z-10 sm:px-0">
  {logos.map((logo, index) => (
    <motion.div
      key={index}
      className={`
        relative rounded-xl sm:rounded-2xl overflow-hidden
        transition-all duration-300 ease-out
       
        
        ${hoveredIndex === null 
          ? 'opacity-100' 
          : hoveredIndex === index 
            ? 'opacity-100 scale-102 shadow-2xl' 
            : 'opacity-40 scale-98 blur-sm'
        }
        ${selectedIndex === index 
          ? 'ring-2 sm:ring-3 ring-[#C33E23] shadow-lg' 
          : 'ring-0'
        }
        cursor-pointer
        aspect-square
        bg-gradient-to-br from-transparent via-transparent to-transparent
        flex items-center justify-center
      `}
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
      onTouchStart={() => {
        setHoveredIndex(index);
      }}
      onTouchEnd={() => {
        setTimeout(() => setHoveredIndex(null), 100);
      }}
      onClick={() => handleLogoClick(index)}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      animate={{
        scale: selectedIndex === index ? 1 : 1,
        zIndex: selectedIndex === index ? 50 : 1
      }}
    >
      {/* Logo Container with white background only for monochrome */}
      <div className={`w-full h-full flex items-center justify-center ${
        selectedIndex === index ? 'bg-white' : 'bg-transparent'
      } rounded-xl sm:rounded-2xl`}>
        <motion.img
          key={selectedIndex === index ? `${index}-mono` : `${index}-color`}
          src={selectedIndex === index ? logo.monoSrc : logo.src}
          alt={`Logo ${index + 1}`}
          className={logo.className}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Overlay with Name */}
      <AnimatePresence>
        {(hoveredIndex === index || selectedIndex === index) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#5E3C2F]/90 to-transparent p-2 sm:p-3 md:p-4"
          >
            <p className="font-dudu text-[#190A07] text-xs sm:text-sm md:text-base text-center">
              {logo.name}
            </p>
            
          </motion.div>
        )}
      </AnimatePresence>

      {/* Selection Indicator - smaller */}
      {selectedIndex === index && (
        <div className="absolute top-1 right-1 sm:top-2 sm:right-2 bg-[#C33E23] text-white rounded-full w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 flex items-center justify-center">
          <svg className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
          </svg>
        </div>
      )}
    </motion.div>
  ))}
</div>
          </div>
        </div>
      </section>

<div className="relative xl:mt-[10rem]">
      {/* Footer */}
      <Footer />
    </div>
    </div>
  );
}