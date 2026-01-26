import { useState, useEffect, useRef } from "react"
import UILOOP_GIF from "../assets/UILOOP_GIF.gif";
import { motion } from "framer-motion";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import MarqueeMockups from "../components/MarqueeMockups";

import InteractCursor from "../assets/InteractCursor.svg"
import TG_sitemap from "../assets/TG_sitemap.jpg"
import userflowDM from "../assets/userflowDM.png"
import userflowDM2 from "../assets/userflowDM2.png"
import FlipIcon from "../assets/FlipIcon.svg" 
import DMlogo from "../assets/DMlogo.jpg"
import TG1 from "../assets/TG1.png"
import lowDM1 from "../assets/lowDM1.png";
import lowDM2 from "../assets/lowDM2.png";
import lowDM3 from "../assets/lowDM3.png";
import lowDM4 from "../assets/lowDM4.png";
import lowDM5 from "../assets/lowDM5.png";
import lowDM6 from "../assets/lowDM6.png";
import lowDM7 from "../assets/lowDM7.png";
import lowDM8 from "../assets/lowDM8.png";
import lowDM9 from "../assets/lowDM9.png";
import lowDM10 from "../assets/lowDM10.png";
import high1 from "../assets/high1.png"
import high2 from "../assets/high2.png"
import high3 from "../assets/high3.png"
import high4 from "../assets/high4.png"
import high5 from "../assets/high5.png"
import high6 from "../assets/high6.png"
import high7 from "../assets/high7.png"
import high8 from "../assets/high8.png"
import high9 from "../assets/high9.png"
import high10 from "../assets/high10.png"
import high11 from "../assets/high11.png"
import high12 from "../assets/high12.png"
import high13 from "../assets/high13.png"
import high14 from "../assets/high14.png"

import persona2 from "../assets/persona2.png"
import persona3 from "../assets/persona3.png"
import persona4 from "../assets/persona4.png"
import journeyDM from "../assets/journeyDM.png"

import right from "../assets/right.svg"
import left from "../assets/left.svg"

export default function UxUi2() {
  const [isFlipCardHovered, setIsFlipCardHovered] = useState(false)

  const [isIOS, setIsIOS] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [isFlipped, setIsFlipped] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })
  const imageRef = useRef(null)
  const flipCardRef = useRef(null)
  const [showTapHint, setShowTapHint] = useState(false)
  const navigate = useNavigate();


  const low = [lowDM1, lowDM2, lowDM3, lowDM4, lowDM5, lowDM6, lowDM7, lowDM8, lowDM9, lowDM10];
const high = [high1, high2, high3, high4, high5, high6, high7, high8, high9, high10, high11, high12, high13, high14];

  const goToUxUi = () => {
    navigate("/TG/uxui");
  };

  function RectRow() {
    const images = []

    return (
      <div className="flex gap-5">
        {Array.from({ length: 11 }).map((_, i) => (
          <div
            key={i}
            className="
              h-[330px] w-[480px]
              sm:h-[350px] sm:w-[620px]
              md:h-[450px] md:w-[800px]
              lg:h-[550px] lg:w-[1000px]
              xl:h-[750px] xl:w-[1150px]
              rounded-3xl bg-white shadow-sm py-4 px-4 flex items-center justify-center overflow-hidden flex-shrink-0
            "
          >
            {i === 0 && (
              <img
                src={UILOOP_GIF}
                alt="UI animation"
                className="
                  h-[calc(100%-5px)] w-[calc(100%-5px)]
                  sm:h-[calc(100%-30px)] sm:w-[calc(100%-30px)]
                  md:h-[calc(100%-40px)] md:w-[calc(100%-40px)]
                  lg:h-[calc(100%-50px)] lg:w-[calc(100%-50px)]
                  xl:h-[calc(100%-70px)] xl:w-[calc(100%-70px)]
                  rounded-2xl object-cover pointer-events-none
                "
              />
            )}
            {i > 0 && i <= 10 && (
              <img
                src={images[i - 1]}
                alt={`UI preview ${i}`}
                className="
                  h-[calc(100%-5px)] w-[calc(100%-5px)]
                  sm:h-[calc(100%-30px)] sm:w-[calc(100%-30px)]
                  md:h-[calc(100%-40px)] md:w-[calc(100%-40px)]
                  lg:h-[calc(100%-50px)] lg:w-[calc(100%-50px)]
                  xl:h-[calc(100%-70px)] xl:w-[calc(100%-70px)]
                  rounded-2xl object-cover
                "
              />
            )}
          </div>
        ))}
      </div>
    )
  }

  useEffect(() => {
    const isTouchDevice =
      "ontouchstart" in window || navigator.maxTouchPoints > 0

    setIsIOS(isTouchDevice)
    if (isTouchDevice) setShowTapHint(true)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px"
      }
    )

    if (imageRef.current) {
      observer.observe(imageRef.current)
    }

    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current)
      }
    }
  }, [])

  const handleMouseMove = (e) => {
    if (window.innerWidth >= 1024) {
      setCursorPosition({
        x: e.clientX,
        y: e.clientY
      })
    }
  }

  const handleMouseEnter = () => {
    if (window.innerWidth >= 1024) {
      document.body.classList.add("interact-cursor-active")
    }
  }

  const handleMouseLeave = () => {
    if (window.innerWidth >= 1024) {
      document.body.classList.remove("interact-cursor-active")
    }
  }

  useEffect(() => {
    return () => {
      document.documentElement.style.cursor = 'auto'
      document.body.style.cursor = 'auto'
    }
  }, [])

  const handleFlipCardClick = () => {
    setIsFlipped(!isFlipped)
    setShowTapHint(false)
  }

  // 🔥 FIX: Inject correct marquee CSS for seamless loop + iPhone
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      .animate-marquee, .animate-marquee-delayed {
        display: flex;
        will-change: transform;
        backface-visibility: hidden;
        -webkit-backface-visibility: hidden;
        transform: translate3d(0, 0, 0);
      }

      .animate-marquee {
        animation: marquee 14s linear infinite;
        -webkit-animation: marquee 14s linear infinite;
      }

      .animate-marquee-delayed {
        animation: marquee 18s linear infinite;
        -webkit-animation: marquee 18s linear infinite;
      }

      @keyframes marquee {
        0% { transform: translate3d(0, 0, 0); }
        100% { transform: translate3d(-50%, 0, 0); }
      }

      @-webkit-keyframes marquee {
        0% { -webkit-transform: translate3d(0, 0, 0); }
        100% { -webkit-transform: translate3d(-50%, 0, 0); }
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    }
  }, []);

  return (
   <main
  className="w-full min-h-[200vh] bg-[#F3E6D4] relative ios-fix cursor-none"
  onMouseEnter={() => setIsHovering(true)}
  onMouseLeave={() => setIsHovering(false)}
  onMouseMove={handleMouseMove}
>
      {/* Custom cursor - only shows on hover devices when hovering flip card */}
     {isFlipCardHovered && window.innerWidth >= 1024 && (
  <div
    className="default-cursor fixed pointer-events-none z-50 transition-transform duration-100"
    style={{
      left: `${cursorPosition.x}px`,
      top: `${cursorPosition.y}px`,
      transform: 'translate(-50%, -50%)'
    }}
  >
          <img
            src={InteractCursor}
            alt="Interact cursor"
            className="w-8 h-8"
          />
        </div>
      )}

      {/* PROJECT HEADER */}
      <section className="w-full flex flex-col -mt-[0.3rem] xl:gap-10 gap-8 px-4 sm:px-4 md:px-[3.8rem] lg:px-[6rem] xl:px-28 xl:mt-2 lg:pt-[2.8rem] pt-[2rem]">
        <motion.div 
          className="flex items-baseline lg:gap-7 sm:gap-3 gap-2 xl:ml-[-80px] lg:ml-[-55px] md:ml-[-32px]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="font-whatnot font-bold italic text-[#5E3C2F] text-[20px] md:text-[30px] lg:text-[38px] xl:text-[50px]">
            01
          </span>
          <h1 className="font-whatnot font-bold text-[#190A07] leading-tight text-[22px] md:text-[34px] lg:text-[42px] xl:text-[60px]">
            Diamate
          </h1>
        </motion.div>

        <motion.div 
          className="flex flex-wrap xl:gap-4 gap-2 xl:ml-[-80px] lg:ml-[-55px] md:ml-[-32px] -mt-[10px]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          {[
            "App Design",
            "UI",
            "UX",
            "Figma",
            "Health",
            "Health management",
            "Medical App",
          ].map(tag => (
            <motion.span
              key={tag}
              className="border border-[#190A07] rounded-lg font-whatnot text-[#190A07] px-3 py-1 text-[11px] xl:text-[25px] sm:text-[12px]"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              {tag}
            </motion.span>
          ))}
        </motion.div>

        <motion.div 
          className="xl:ml-[-80px] lg:ml-[-55px] md:ml-[-32px] max-w-full xl:mt-[1rem] mt-[1rem] sm:mt-[1rem] lg:mt-[1rem] md:mt-[1rem]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-[#5E3C2F] font-dudu leading-relaxed text-[15px] md:text-[16px] lg:text-[17px] xl:text-[35px] -mt-[25px]">
          Helping people with Type 1 diabetes understand their glucose, stay safe during severe lows,
           and learn how to manage their condition every day.

          </p>
        </motion.div>

        {/* FLIP CARD */}
<div 
  ref={imageRef}
  className={`w-full transition-all duration-[1800ms] ease-out ${
    isVisible 
      ? 'opacity-100 translate-y-0' 
      : 'opacity-0 translate-y-32'
  }`}
  style={{ perspective: '1500px' }}
>
  <div
    ref={flipCardRef}
    onClick={handleFlipCardClick}
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
    className="cursor-interact relative w-full md:w-[calc(100%+60px)] lg:w-[calc(100%+110px)] xl:w-[calc(100%+160px)] md:ml-[-32px] lg:ml-[-55px] xl:ml-[-80px] cursor-none transition-transform duration-700 ease-in-out"
    style={{
      transformStyle: 'preserve-3d',
      transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
    }}
  >
    {/* Flip Icon - stays until tap */}
    {isIOS && showTapHint && (
      <img
        src={FlipIcon.src || FlipIcon}
        alt="Tap to flip"
        className="absolute top-2     md:top-4 md:right-6 lg:top-4 lg:right-6 
 right-2 w-4 h-4 z-50 " 
      />
    )}

    {/* FRONT - Image */}
    <div
      className="w-full rounded-2xl sm:rounded-3xl md:rounded-[28px] lg:rounded-[32px] xl:rounded-[40px] overflow-hidden shadow-xl cursor-none"
      style={{ backfaceVisibility: 'hidden' }}
    >
      <img
        src={DMlogo}
        alt="Diamate Logo"
        className="w-full h-full object-cover"
      />
    </div>

    {/* BACK - Challenge/Solution */}
    <div
      className="absolute inset-0 w-full h-full bg-gradient-to-br from-[#190A07] to-[#2d1810] rounded-2xl sm:rounded-3xl md:rounded-[28px] lg:rounded-[32px] xl:rounded-[40px] shadow-xl flex flex-col items-center justify-center p-4 sm:p-8 md:p-12 lg:p-16 xl:p-20 cursor-none"
      style={{
        backfaceVisibility: 'hidden',
        transform: 'rotateY(180deg)',
      }}
    >
      <div className="text-center w-full px-2 sm:px-0">
        <h3 className="font-whatnot font-bold text-[#F3E6D4] text-[12px] min-[500px]:text-[14px] sm:text-[16px] md:text-[20px] lg:text-[28px] xl:text-[35px] mb-2 sm:mb-3 md:mb-4 lg:mb-6">
          THE CHALLENGE
        </h3>
        <p className="text-[#E8D5C4] font-dudu leading-relaxed text-[10px] min-[500px]:text-[9px] sm:text-[13px] md:text-[15px] lg:text-[20px] xl:text-[28px] mb-4 sm:mb-6 md:mb-8 lg:mb-12">
          How can a digital solution help people with Type 1 diabetes better manage their daily life and health in an effective way?
        </p>
        
        <div className="w-8 h-[1px] min-[500px]:w-10 min-[500px]:h-[1.5px] sm:w-16 sm:h-[2px] md:w-20 lg:w-24 xl:w-32 bg-[#5E3C2F] mx-auto mb-4 sm:mb-6 md:mb-8 lg:mb-12"></div>
        
        <h3 className="font-whatnot font-bold text-[#F3E5D4] text-[12px] min-[500px]:text-[10px] sm:text-[16px] md:text-[20px] lg:text-[28px] xl:text-[35px] mb-2 sm:mb-3 md:mb-4 lg:mb-6">
          SOLUTION
        </h3>
        <p className="text-[#E8D5C4] font-dudu leading-relaxed text-[10px] min-[500px]:text-[9px] sm:text-[13px] md:text-[15px] lg:text-[20px] xl:text-[28px]">
         Real-time glucose + emergency glucagon + informative insights
        </p>
      </div>
    </div>
  </div>
</div>
        
        <div className="relative">

  <div className="xl:ml-[-80px] lg:ml-[-55px] md:ml-[-32px] max-w-full">
  <h3 className="font-whatnot font-bold text-[#190A07] text-[13px] md:text-[15px] lg:text-[30px] xl:text-[30px] mb-2">
    About:
  </h3>

  <p className="text-[#5E3C2F] font-dudu leading-relaxed text-[11px] md:text-[13px] lg:text-[17px] xl:text-[25px] xl:mt-[1rem] mt-[1rem] sm:mt-[1rem] lg:mt-[1rem] md:mt-[1rem]">
   Diamate is an app for people with Type 1 diabetes that helps you track your glucose in real time, 
   stay safe during severe lows with emergency glucagon, and learn how to manage your health more easily
every day.
  </p>
</div>

  {/* BREAK OUT OF CONTAINER */}
  <div className="absolute inset-x-0">
    <motion.div 
      className="bg-[#C33E23] py-2.5 mt-10 sm:mt-12 md:mt-14 lg:mt-16 xl:mt-18"
      style={{
        width: '100vw',
        position: 'relative',
        left: '50%',
        right: '50%',
        marginLeft: '-50vw',
        marginRight: '-50vw'
      }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, type: "spring" }}
      viewport={{ once: true }}
    >
      <div className="rect-track flex w-max">
        
        {/* FIRST COPY */}
        <div className="flex items-center font-whatnot text-[#F3E6D4] 
          text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
          
          <span className="mx-6">Introduction</span>
          <span className="mx-6 arrow-long"></span>

          <span className="mx-6">About</span>
          <span className="mx-6 arrow-long"></span>

          <span className="mx-6">Personas</span>
          <span className="mx-6 arrow-long"></span>

          <span className="mx-6">Journey Map</span>
          <span className="mx-6 arrow-long"></span>

          <span className="mx-6">User flows</span>
          <span className="mx-6 arrow-long"></span>

          <span className="mx-6">Low fidelity</span>
          <span className="mx-6 arrow-long"></span>

            <span className="mx-6">Ui Design</span>
          <span className="mx-6 arrow-long"></span>
        </div>

        {/* SECOND COPY (for seamless loop) */}
        <div className="flex items-center font-whatnot text-[#F3E6D4] 
          text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
          
       <span className="mx-6">Introduction</span>
          <span className="mx-6 arrow-long"></span>

          <span className="mx-6">About</span>
          <span className="mx-6 arrow-long"></span>

          <span className="mx-6">Personas</span>
          <span className="mx-6 arrow-long"></span>

          <span className="mx-6">Empathy Map</span>
          <span className="mx-6 arrow-long "></span>

          <span className="mx-6">Journey Map</span>
          <span className="mx-6 arrow-long"></span>

          <span className="mx-6">User flows</span>
          <span className="mx-6 arrow-long"></span>

          <span className="mx-6">Site Map</span>
          <span className="mx-6 arrow-long"></span>

          <span className="mx-6">Low fidelity</span>
          <span className="mx-6 arrow-long"></span>

            <span className="mx-6">Ui Design</span>
          <span className="mx-6 arrow-long"></span>
        </div>

      </div>
      
    </motion.div>
  </div>
</div>

<motion.div 
  className="flex items-baseline sm:gap-3 lg:gap-6 gap-2 xl:ml-[-80px] lg:ml-[-55px] md:ml-[-32px] mt-[6rem] sm:mt-[6.8rem] md:mt-[6.5rem] lg:mt-[8.5rem] xl:mt-[9rem]"
  initial={{ opacity: 0, x: -20 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>
  <motion.span 
    className="font-whatnot font-bold italic text-[#5E3C2F] 
      text-[16px] md:text-[22px] lg:text-[28px] xl:text-[34px]"
    whileHover={{ scale: 1.1 }}
    transition={{ type: "spring", stiffness: 400 }}
  >
    02
  </motion.span>

  <motion.h2 
    className="font-whatnot font-bold text-[#190A07] leading-tight 
      text-[20px] md:text-[28px] lg:text-[36px] xl:text-[48px]"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ delay: 0.1 }}
    viewport={{ once: true }}
  >
    UX / UI
  </motion.h2>
</motion.div>

{/* PERSONA title */}
<motion.div 
  className="xl:ml-[-80px] lg:ml-[-55px] md:ml-[-32px] xl:-mt-[0.7rem] -mt-[0.7rem] sm:-mt-[0.7rem] lg:-mt-[0.7rem] md:-mt-[0.7rem]"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 0.5 }}
  viewport={{ once: true }}
>
  <h3 className="font-dudu font-bold text-[#5E3C2F] 
    text-[11px] md:text-[18px] lg:text-[22px] xl:text-[30px]">
    Personas
  </h3>
</motion.div>

{/* Top two personas */}
  <div className="flex justify-center gap-4 w-full">
    <motion.img
      src={persona2}
      alt="persona 1"
      className="w-[48%] sm:w-[40%] md:w-[45%] lg:w-[48%] xl:w-[50%]"
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
      }}
    />
    <motion.img
      src={persona3}
      alt="persona 2"
      className="w-[48%] sm:w-[40%] md:w-[45%] lg:w-[48%] xl:w-[50%]"
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
      }}
    />
  </div>

  {/* Bottom centered empathy map */}
  <div className="flex justify-center w-full">
    <motion.img
      src={persona4}
      alt="persona 3"
      className="w-[50%] sm:w-[50%] md:w-[45%] lg:w-[48%] xl:w-[50%]"
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
      }}
    />
  </div>

{/* persona Description — aligned with previous paragraphs */}
<motion.div 
  className="xl:ml-[-80px] lg:ml-[-55px] md:ml-[-32px] xl:-mt-[0.7rem] -mt-[0.7rem] sm:-mt-[0.7rem] lg:-mt-[0.7rem] md:-mt-[0.7rem] max-w-full"
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>
  {/* NB note */}
  <p className="text-[#5E3C2F]/70 font-dudu italic leading-relaxed
    text-[10px] md:text-[12px] lg:text-[12px] xl:text-[20px] mb-2">
    NB: These personas intros were created in French, as the project was originally presented in that language.
  </p>

  {/* Main description */}
  <p className="text-[#5E3C2F] font-dudu leading-relaxed 
    text-[11px] md:text-[13px] lg:text-[17px] xl:text-[25px]">
These personas represent Diamate’s main users: adults living with Type 1 diabetes who want to stay 
independent and in control, children who need a simple and reassuring way to understand their condition
 while enjoying daily life, and busy, tech-savvy users looking for an easier and smarter way to
  manage their health.
  </p>
</motion.div>

{/* journeymap title */}
<motion.div 
  className="xl:ml-[-80px] lg:ml-[-55px] md:ml-[-32px] -mt-4"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 0.5 }}
  viewport={{ once: true }}
>
  <h3 className="font-dudu font-bold text-[#5E3C2F] 
    text-[11px] md:text-[18px] lg:text-[22px] xl:text-[30px]">
    Journey Map
  </h3>
</motion.div>

{/* journey Maps */}
<motion.div 
  className="flex flex-col items-center gap-4 -mt-[0.9rem]"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={{
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }}
>
  {/* Single journey map */}
  <div className="flex justify-center w-full">
    <motion.img
      src={journeyDM}
      alt="Journey map"
      className="w-full max-w-[800px] sm:w-[90%] md:w-[85%] lg:w-[80%] xl:w-[75%]"
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
      }}
    />
  </div>
</motion.div>

{/* journey map Description — aligned with previous paragraphs */}
<motion.div 
  className="xl:ml-[-80px] lg:ml-[-55px] md:ml-[-32px] xl:-mt-[0.7rem] -mt-[0.7rem] sm:-mt-[0.7rem] lg:-mt-[0.7rem] md:-mt-[0.7rem] max-w-full"
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>
  {/* NB note */}
  <p className="text-[#5E3C2F]/70 font-dudu italic leading-relaxed
    text-[10px] md:text-[12px] lg:text-[12px] xl:text-[20px] mb-2">
    NB: These journey maps were created in French, as the project was originally presented in that language.
  </p>

  {/* Main description */}
  <p className="text-[#5E3C2F] font-dudu leading-relaxed 
    text-[11px] md:text-[13px] lg:text-[17px] xl:text-[25px]">
The journey maps above follow users through their experience, from getting started to using it every day,
highlighting their feelings, struggles, and needs. </p>
</motion.div>

{/* userflow title */}
<motion.div 
  className="xl:ml-[-80px] lg:ml-[-55px] md:ml-[-32px] -mt-4"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 0.5 }}
  viewport={{ once: true }}
>
  <h3 className="font-dudu font-bold text-[#5E3C2F] 
    text-[11px] md:text-[18px] lg:text-[22px] xl:text-[30px]">
    Userflows
  </h3>
</motion.div>

{/* userflow Image 1 */}
<motion.div 
  className="flex justify-center -mt-[0.5rem]"
  initial={{ opacity: 0, x: -20 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.7 }}
  viewport={{ once: true }}
>
  <div className="flex justify-center w-full">
    <img
      src={userflowDM}
      alt="user flow 1"
      className="w-[250px] 
                sm:w-[400px]
                md:w-[500px] 
                lg:w-[700px] 
                xl:w-[950px]
                h-auto"
    />
  </div>
</motion.div>

{/* userflow Image 2 */}
<motion.div 
  className="flex justify-center -mt-4"
  initial={{ opacity: 0, x: 20 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.7 }}
  viewport={{ once: true }}
>
  <div className="flex justify-center w-full">
    <img
      src={userflowDM2}
      alt="user flow 2"
      className="w-[250px] 
                sm:w-[400px]
                md:w-[500px] 
                lg:w-[700px] 
                xl:w-[950px]
                h-auto"
    />
  </div>
</motion.div>

{/* userflow Description — aligned with previous paragraphs */}
<motion.div 
  className="xl:ml-[-80px] lg:ml-[-55px] md:ml-[-32px] xl:-mt-[0.7rem] -mt-[0.7rem] sm:-mt-[0.7rem] lg:-mt-[0.7rem] md:-mt-[0.7rem] max-w-full"
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>
  {/* NB note */}
  <p className="text-[#5E3C2F]/70 font-dudu italic leading-relaxed
    text-[10px] md:text-[12px] lg:text-[12px] xl:text-[20px] mb-2">
    NB: This user flow was created in French, as the project was originally presented in that language.
  </p>

  {/* Main description */}
  <p className="text-[#5E3C2F] font-dudu leading-relaxed 
    text-[11px] md:text-[13px] lg:text-[17px] xl:text-[25px]">
The user flows above show how someone starts using Diamate by creating an account, 
and how they can update it later, step by step.</p>
</motion.div>

{/* low fidelity title */}
<div 
  className="xl:ml-[-80px] lg:ml-[-55px] md:ml-[-32px] -mt-4"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 0.5 }}
  viewport={{ once: true }}
>
  <h3 className="font-dudu font-bold text-[#5E3C2F] 
    text-[11px] md:text-[18px] lg:text-[22px] xl:text-[30px]">
    Low-fidelity wireframes
  </h3>
</div>

     <MarqueeMockups low={low} mode="low" />
 


 {/* Main description aligned with first paragraph */}
<motion.div 
  className="xl:ml-[-80px] lg:ml-[-55px] md:ml-[-32px] sm:-mt-[0.8rem] md:-mt-[0.9rem] -mt-[0.9rem]"
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>
  <p className="text-[#5E3C2F] font-dudu leading-relaxed 
    text-[11px] md:text-[13px] lg:text-[17px] xl:text-[25px]">
These are a complete set of low-fidelity wireframes for the diamate app from which I created the high-fidelity designs.
  </p>
</motion.div>

{/* UI design title */}
<motion.div 
  className="xl:ml-[-80px] lg:ml-[-55px] md:ml-[-32px] sm:-mt-4 -mt-4"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 0.5 }}
  viewport={{ once: true }}
>
  <h3 className="font-dudu font-bold text-[#5E3C2F] 
    text-[11px] md:text-[18px] lg:text-[22px] xl:text-[30px]">
    UI design
  </h3>
</motion.div>

     <MarqueeMockups high={high} mode="high" />


{/* Arrows positioned directly on top of footer */}
<div className="relative">
  {/* Left arrow with "Home" text */}
  <div className="absolute left-4 lg:left-[40px] xl:-ml-[120px] md:ml-[-32px] lg:ml-[-95px] -ml-[0.8rem] bottom-full -mb-[2rem]">
    <div className="flex items-center gap-2 group cursor-pointer interactive-hover hover:scale-105 transition-transform duration-200 ease-in-out">
      {/* Arrow with hover effect */}
      <img 
        src={left}
        alt="Left arrow"
        className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 group-hover:-translate-x-1 transition-transform duration-200"
      />
      {/* Text with hover effect */}
      < button
      onClick={goToUxUi}
         className="font-dudu text-[#5E3C2F] text-sm md:text-base lg:text-lg group-hover:text-[#C33E23] transition-colors duration-200">
        previous
      </button>
    </div>
  </div>
</div>

{/* Footer at the end - GUARANTEED FULL WIDTH */}
<div 
  className="relative w-screen"
  style={{
    position: 'relative',
    left: '50%',
    right: '50%',
    marginLeft: '-50vw',
    marginRight: '-50vw',
    width: '100vw'
  }}
>
  <Footer />
</div>

      </section>
      
    </main>
  )
}
