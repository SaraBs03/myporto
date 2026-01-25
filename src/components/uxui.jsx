
import { useState, useEffect, useRef, memo } from "react"
import UILOOP_GIF from "../assets/UILOOP_GIF.gif";
import { motion } from "framer-motion";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

import InteractCursor from "../assets/InteractCursor.svg"
import TG_sitemap from "../assets/TG_sitemap.jpg"
import userflow1 from "../assets/userflow1.png"
import userflow2 from "../assets/userflow2.png"
import FlipIcon from "../assets/FlipIcon.svg" 
import TG1logo from "../assets/TG1logo.jpg"
import TG1 from "../assets/TG1.png"
import low1 from "../assets/low1.png"
import low3 from "../assets/low3.png"
import low5 from "../assets/low5.png"
import low6 from "../assets/low6.png"






import persona from "../assets/persona.jpg"
import empathy1 from "../assets/empathy1.png"
import empathy2 from "../assets/empathy2.png"
import empathy3 from "../assets/empathy3.png"
import journey1 from "../assets/journey1.jpg"
import journey2 from "../assets/journey2.jpg"
import journey3 from "../assets/journey3.jpg"
import UI1 from "../assets/UI1.png"
import UI2 from "../assets/UI2.png"
import UI3 from "../assets/UI3.png"
import UI4 from "../assets/UI4.png"
import UI5 from "../assets/UI5.png"
import UI6 from "../assets/UI6.png"
import UI7 from "../assets/UI7.png"
import UI8 from "../assets/UI8.png"
import UI9 from "../assets/UI9.png"
import UI10 from "../assets/UI10.png"
import UI11 from "../assets/UI11.png"
import right from "../assets/right.svg"
import left from "../assets/left.svg"




export default function UxUi() {
  const [isIOS, setIsIOS] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [isFlipped, setIsFlipped] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })
  const imageRef = useRef(null)
  const flipCardRef = useRef(null)
  const [showTapHint, setShowTapHint] = useState(false)
  
    const navigate = useNavigate();


const goHome = () => {
  window.scrollTo(0, 0);
  
  navigate("/", { 
    replace: false,
    state: { scrollToTop: true }
  });
};

  
 function RectRow() {
  const images = [UI1, UI2, UI3, UI4, UI5, UI6, UI7, UI8, UI9, UI10]

  return (
  <div className="flex gap-5">
    {Array.from({ length: 11 }).map((_, i) => (
      <div
        key={i}
        className="
          h-[330px] w-[480px]           /* Mobile default - less than half of XL */
          sm:h-[350px] sm:w-[620px]     /* Small tablets */
          md:h-[450px] md:w-[800px]     /* Tablets */
          lg:h-[550px] lg:w-[1000px]    /* Laptops */
          xl:h-[750px] xl:w-[1150px]    /* Desktop */
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
              h-[calc(100%-5px)] w-[calc(100%-5px)]  /* Mobile */
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

  return (
    <main
      className="w-full min-h-[200vh] bg-[#F3E6D4] relative ios-fix"
       onMouseEnter={() => setIsHovering(true)}
  onMouseLeave={() => setIsHovering(false)}
    >
      {/* Custom cursor - only shows on hover devices when hovering flip card */}
      {isHovering && window.innerWidth >= 1024 && (
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
          className="flex items-baseline lg:gap-7 sm:gap-3 gap-2 xl:ml-[-75px] lg:ml-[-55px] md:ml-[-32px]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="font-whatnot font-bold italic text-[#5E3C2F] text-[20px] md:text-[30px] lg:text-[38px] xl:text-[50px]">
            01
          </span>
          <h1 className="font-whatnot font-bold text-[#190A07] leading-tight text-[22px] md:text-[34px] lg:text-[42px] xl:text-[60px]">
            Trend Grabber
          </h1>
        </motion.div>

        <motion.div 
          className="flex flex-wrap xl:gap-4 gap-2 xl:ml-[-75px] lg:ml-[-55px] md:ml-[-32px] -mt-[10px]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          {[
            "Website Design",
            "UI",
            "UX",
            "Figma",
            "E-commerce",
            "Amazon Affiliation",
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
          className="xl:ml-[-75px] lg:ml-[-55px] md:ml-[-32px] max-w-full xl:mt-[1rem] mt-[1rem] sm:mt-[1rem] lg:mt-[1rem] md:mt-[1rem]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-[#5E3C2F] font-dudu leading-relaxed text-[15px] md:text-[16px] lg:text-[17px] xl:text-[35px] -mt-[25px]">
            Introducing online shoppers with the latest trends, providing a real
            e-commerce experience, and improving how people discover products
            online.
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
    className="cursor-interact relative w-full md:w-[calc(100%+60px)] lg:w-[calc(100%+110px)] xl:w-[calc(100%+160px)] md:ml-[-32px] lg:ml-[-55px] xl:ml-[-75px] cursor-none transition-transform duration-700 ease-in-out"
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
        src={TG1logo}
        alt="Trend Grabber Logo"
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
          How do we help users discover trending products without overwhelming them?
        </p>
        
        <div className="w-8 h-[1px] min-[500px]:w-10 min-[500px]:h-[1.5px] sm:w-16 sm:h-[2px] md:w-20 lg:w-24 xl:w-32 bg-[#5E3C2F] mx-auto mb-4 sm:mb-6 md:mb-8 lg:mb-12"></div>
        
        <h3 className="font-whatnot font-bold text-[#F3E5D4] text-[12px] min-[500px]:text-[10px] sm:text-[16px] md:text-[20px] lg:text-[28px] xl:text-[35px] mb-2 sm:mb-3 md:mb-4 lg:mb-6">
          SOLUTION
        </h3>
        <p className="text-[#E8D5C4] font-dudu leading-relaxed text-[10px] min-[500px]:text-[9px] sm:text-[13px] md:text-[15px] lg:text-[20px] xl:text-[28px]">
          Clean categorization + personalized recommendations
        </p>
      </div>
    </div>
  </div>
</div>
        
        <div className="relative">

  <div className="xl:ml-[-75px] lg:ml-[-55px] md:ml-[-32px] max-w-full">
  <h3 className="font-whatnot font-bold text-[#190A07] text-[13px] md:text-[15px] lg:text-[30px] xl:text-[30px] mb-2">
    About:
  </h3>

  <p className="text-[#5E3C2F] font-dudu leading-relaxed text-[11px] md:text-[13px] lg:text-[17px] xl:text-[25px] xl:mt-[1rem] mt-[1rem] sm:mt-[1rem] lg:mt-[1rem] md:mt-[1rem]">
    Trend Grabber is an e-commerce platform that combines Amazon affiliate products with its own curated selection, organized into categories and sub-categories 
    ranging from fashion to electronics and beyond, offering users direct access to top-rated products from Amazon in one easy and seamless shopping experience.
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
      <div className="marquee-track flex w-max">
        
        {/* FIRST COPY */}
        <div className="flex items-center font-whatnot text-[#F3E6D4] 
          text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl interactive-hover">
          
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

          <span className="mx-6">Site Map</span>
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

          <span className="mx-6">Site Map</span>
          <span className="mx-6 arrow-long"></span>

          <span className="mx-6">User flows</span>
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
  className="flex items-baseline sm:gap-3 lg:gap-6 gap-2 xl:ml-[-75px] lg:ml-[-55px] md:ml-[-32px] mt-[6rem] sm:mt-[6.8rem] md:mt-[8rem] lg:mt-[9rem] xl:mt-[10.5rem]"
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
  className="xl:ml-[-75px] lg:ml-[-55px] md:ml-[-32px] xl:-mt-[0.7rem] -mt-[0.7rem] sm:-mt-[0.7rem] lg:-mt-[0.7rem] md:-mt-[0.7rem]"
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


{/* personas Image */}
<motion.div 
  className="xl:ml-[20px] lg:ml-[21px] sm:ml-[20px] md:ml-[17px] -mt-4"
  initial={{ opacity: 0, scale: 0.95 }}
  whileInView={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.7 }}
  viewport={{ once: true }}
>
  <div
    className="w-full rounded-2xl sm:rounded-3xl md:rounded-[28px] 
      lg:rounded-[32px] xl:rounded-[40px] overflow-hidden"
  >
    <motion.img
      src={persona}
      alt="persona"
      className="w-full h-full object-cover"
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3 }}
    />
  </div>
</motion.div>

{/* persona Description — aligned with previous paragraphs */}
<motion.div 
  className="xl:ml-[-75px] lg:ml-[-55px] md:ml-[-32px] xl:-mt-[0.7rem] -mt-[0.7rem] sm:-mt-[0.7rem] lg:-mt-[0.7rem] md:-mt-[0.7rem] max-w-full"
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
These personas represent Trend Grabber's three main user types: the end user, 
who is an online shopper looking for trending products with a simple and trustworthy
purchase experience, the potential user who is interested in the product (website) and could become an end user; and the administrator, 
who manages products, affiliate content, and the overall functionality of the platform.
  </p>
</motion.div>

{/* empathy map title */}
<motion.div 
  className="xl:ml-[-75px] lg:ml-[-55px] md:ml-[-32px] -mt-4"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 0.5 }}
  viewport={{ once: true }}
>
  <h3 className="font-dudu font-bold text-[#5E3C2F] 
    text-[11px] md:text-[18px] lg:text-[22px] xl:text-[30px]">
    Empathy Map
  </h3>
</motion.div>

{/* Empathy Maps */}
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

  {/* Top two empathy maps */}
  <div className="flex justify-center gap-4 w-full">
    <motion.img
      src={empathy1}
      alt="Empathy map 1"
      className="w-[48%] sm:w-[40%] md:w-[45%] lg:w-[48%] xl:w-[50%]"
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
      }}
    />
    <motion.img
      src={empathy2}
      alt="Empathy map 2"
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
      src={empathy3}
      alt="Empathy map 3"
      className="w-[50%] sm:w-[50%] md:w-[45%] lg:w-[48%] xl:w-[50%]"
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
      }}
    />
  </div>

</motion.div>


{/* empathy map Description — aligned with previous paragraphs */}
<motion.div 
  className="xl:ml-[-75px] lg:ml-[-55px] md:ml-[-32px] xl:-mt-[0.7rem] -mt-[0.7rem] sm:-mt-[0.7rem] lg:-mt-[0.7rem] md:-mt-[0.7rem] max-w-full"
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>
  {/* NB note */}
  <p className="text-[#5E3C2F]/70 font-dudu italic leading-relaxed
    text-[10px] md:text-[12px] lg:text-[12px] xl:text-[20px] mb-2">
    NB: These empathy maps were created in French, as the project was originally presented in that language.
  </p>

  {/* Main description */}
  <p className="text-[#5E3C2F] font-dudu leading-relaxed 
    text-[11px] md:text-[13px] lg:text-[17px] xl:text-[25px]">
The empathy maps I made for each persona helped me better understand user needs, motivations, frustrations, 
and behaviors, allowing me to design more user-centered interfaces.  </p>
</motion.div>

{/* journeymap title */}
<motion.div 
  className="xl:ml-[-75px] lg:ml-[-55px] md:ml-[-32px] -mt-4"
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

  {/* Top two empathy maps */}
  <div className="flex justify-center gap-4 w-full">
    <motion.img
      src={journey1}
      alt="Journey map 1"
      className="w-[48%] sm:w-[40%] md:w-[45%] lg:w-[48%] xl:w-[50%]"
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
      }}
    />
    <motion.img
      src={journey2}
      alt="Journey map 2"
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
      src={journey3}
      alt="Journey map 3"
      className="w-[50%] sm:w-[50%] md:w-[45%] lg:w-[48%] xl:w-[50%]"
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
      }}
    />
  </div>

</motion.div>

{/* journey map Description — aligned with previous paragraphs */}
<motion.div 
  className="xl:ml-[-75px] lg:ml-[-55px] md:ml-[-32px] xl:-mt-[0.7rem] -mt-[0.7rem] sm:-mt-[0.7rem] lg:-mt-[0.7rem] md:-mt-[0.7rem] max-w-full"
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
The journey maps above show the different stages of the user experience, from discovery to creating the platform to purchase,
along with the emotions and challenges encountered. </p>
</motion.div>


{/* SiteMap title */}
<motion.div 
  className="xl:ml-[-75px] lg:ml-[-55px] md:ml-[-32px] -mt-4"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 0.5 }}
  viewport={{ once: true }}
>
  <h3 className="font-dudu font-bold text-[#5E3C2F] 
    text-[11px] md:text-[18px] lg:text-[22px] xl:text-[30px]">
    Sitemap
  </h3>
</motion.div>

{/* SiteMap Image */}
<motion.div 
  className="xl:ml-[20px] sm:-mt-[2rem] lg:ml-[21px] sm:ml-[20px] md:ml-[17px] -mt-[0.9rem]"
  initial={{ opacity: 0, scale: 0.95 }}
  whileInView={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.7 }}
  viewport={{ once: true }}
>
  <div
    className="w-full rounded-2xl sm:rounded-3xl md:rounded-[28px] 
      lg:rounded-[32px] xl:rounded-[40px] overflow-hidden"
  >
    <motion.img
      src={TG_sitemap}
      alt="Trend Grabber Sitemap"
      className="w-full h-full object-cover"
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3 }}
    />
  </div>
</motion.div>

{/* SiteMap Description — aligned with previous paragraphs */}
<motion.div 
  className="xl:ml-[-75px] lg:ml-[-55px] md:ml-[-32px] xl:-mt-[0.7rem] -mt-[0.7rem] sm:-mt-[0.7rem] lg:-mt-[0.7rem] md:-mt-[0.7rem]max-w-full"
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>
  <p className="text-[#5E3C2F] font-dudu leading-relaxed 
    text-[11px] md:text-[13px] lg:text-[17px] xl:text-[25px]">
    This is the Trend Grabber simplified sitemap to give an idea of what we can find on the website, 
    showing the main pages, categories, and sub-categories to clarify the overall user navigation 
    and information architecture.
  </p>
</motion.div>

{/* userflow title */}
<motion.div 
  className="xl:ml-[-75px] lg:ml-[-55px] md:ml-[-32px] -mt-4"
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

{/* userflow Image */}
<motion.div 
  className="xl:-ml-[8rem] -ml-[1.7rem] lg:-ml-[2.2rem] sm:-ml-[2.5rem] md:-ml-[4rem]
  w-[calc(100%+43px)] 
    xl:w-[calc(100%+160px)] 
    lg:w-[calc(100%+20px)] 
    md:w-[calc(100%+90px)]
  -mt-[1.5rem]"
  initial={{ opacity: 0, x: -20 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.7 }}
  viewport={{ once: true }}
>
  <div
    className="w-full overflow-hidden"
  >
    <motion.img
      src={userflow1}
      alt="user flow 1"
      className="w-full h-full object-cover"
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3 }}
    />
  </div>
</motion.div>

{/* userflow Image */}
<motion.div 
  className="xl:-ml-[4rem] -ml-[0.5rem] sm:-ml-[0.4rem] lg:-ml-[2.2rem] sm:ml-[20px] md:-ml-[2rem]
  w-[calc(100%+20px)] 
  xl:w-[calc(100%+160px)] 
    lg:w-[calc(100%+40px)] 
    md:w-[calc(100%+90px)]
  -mt-4"
  initial={{ opacity: 0, x: 20 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.7 }}
  viewport={{ once: true }}
>
  <div
    className="w-full overflow-hidden"
  >
    <motion.img
      src={userflow2}
      alt="user flow 2"
      className="w-full h-full object-cover"
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3 }}
    />
  </div>
</motion.div>

{/* userflow Description — aligned with previous paragraphs */}
<motion.div 
  className="xl:ml-[-75px] lg:ml-[-55px] md:ml-[-32px] xl:-mt-[0.7rem] -mt-[0.7rem] sm:-mt-[0.7rem] lg:-mt-[0.7rem] md:-mt-[0.7rem] max-w-full"
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
    The user flows above show the process of buying a product from the website, whether it's a Trend Grabber product or from the Amazon affiliation section, 
and the addition of the product to a wishlist. <br/>
</p>
</motion.div>

{/* low fidelity title */}
<motion.div 
  className="xl:ml-[-75px] lg:ml-[-55px] md:ml-[-32px] -mt-4"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 0.5 }}
  viewport={{ once: true }}
>
  <h3 className="font-dudu font-bold text-[#5E3C2F] 
    text-[11px] md:text-[18px] lg:text-[22px] xl:text-[30px]">
    Low-fidelity wireframes
  </h3>
</motion.div>

 
  
{/* Low-Fidelity Wireframes - Side by Side Grid (smaller) */}
<motion.div 
  className="flex flex-wrap justify-center sm:gap-4 lg:gap-2 gap-2 xl:-mt-[0.7rem] -mt-[0.7rem] sm:-mt-[0.7rem] lg:-mt-[0.7rem] md:-mt-[0.7rem]"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={{
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  }}
>
  <motion.img 
    src={low1} 
    alt="Low-fidelity wireframe 1" 
    className="w-[14%] xl:w-[22%] md:w-[16%]" 
    variants={{
      hidden: { opacity: 0, scale: 0.9 },
      visible: { opacity: 1, scale: 1 }
    }}
  />
  <motion.img 
    src={low5} 
    alt="Low-fidelity wireframe 5" 
    className="w-[14%] xl:w-[22%]" 
    variants={{
      hidden: { opacity: 0, scale: 0.9 },
      visible: { opacity: 1, scale: 1 }
    }}
  />
  <motion.img 
    src={low3} 
    alt="Low-fidelity wireframe 3" 
    className="w-[14%] xl:w-[22%]" 
    variants={{
      hidden: { opacity: 0, scale: 0.9 },
      visible: { opacity: 1, scale: 1 }
    }}
  />
  <motion.img 
    src={low6} 
    alt="Low-fidelity wireframe 6" 
    className="w-[14%] xl:w-[22%]" 
    variants={{
      hidden: { opacity: 0, scale: 0.9 },
      visible: { opacity: 1, scale: 1 }
    }}
  />
</motion.div>

 {/* Main description aligned with first paragraph */}
<motion.div 
  className="xl:ml-[-75px] lg:ml-[-55px] md:ml-[-32px] sm:-mt-[0.8rem] md:-mt-[0.9rem] -mt-[0.9rem]"
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>
  <p className="text-[#5E3C2F] font-dudu leading-relaxed 
    text-[11px] md:text-[13px] lg:text-[17px] xl:text-[25px]">
    These are some of the main pages low-fidelity designs. These user flows guided me in creating
    the wireframes, helping me structure the website layout and user interactions effectively.
  </p>
</motion.div>

{/* UI design title */}
<motion.div 
  className="xl:ml-[-75px] lg:ml-[-55px] md:ml-[-32px] sm:-mt-4 -mt-4"
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


<motion.div 
  className="relative left-1/2 -translate-x-1/2 w-screen mt-10 py-6 rect-track 
    xl:-mt-[0.7rem] -mt-[1.9rem] sm:-mt-[0.7rem] lg:-mt-[0.7rem] md:-mt-[0.7rem]"
  initial={{ opacity: 0, scale: 0.9 }}
  whileInView={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.8, type: "spring" }}
  viewport={{ once: true, margin: "-100px" }}
>
  {/* Soft fade edges – no overflow hidden */}
  <div className="pointer-events-none absolute inset-0 z-10
    [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]" />

  <div className="flex w-max animate-rect-marquee gap-3 md:gap-3 sm:gap-2 gap-1.5 sm:-mt-[1rem]  md:-mt-[1rem] -mt-[4.7rem]">
    <RectRow />
    
  </div>
</motion.div>

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
      onClick={goHome}
         className="font-dudu text-[#5E3C2F] text-sm md:text-base lg:text-lg group-hover:text-[#C33E23] transition-colors duration-200">
        Home
      </button>
    </div>
  </div>
  
  {/* Right arrow with "Next" text */}
  <div className="absolute right-4 lg:right-[40px] -mr-[0.8rem] xl:-mr-[120px] lg:mr-[-95px] md:mr-[-32px] bottom-full -mb-[2rem]">
    <div className="flex items-center gap-2 group cursor-pointer interactive-hover hover:scale-105 transition-transform duration-200 ease-in-out"
              onClick={() => navigate("/Diamate")} 
>
      {/* Text with hover effect */}
      <span className="font-dudu text-[#5E3C2F] text-sm md:text-base lg:text-lg group-hover:text-[#C33E23] transition-colors duration-200">
        Next
      </span>
      {/* Arrow with hover effect */}
      <img 
        src={right}
        alt="Right arrow"
        className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 group-hover:translate-x-1 transition-transform duration-200"
      />
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

