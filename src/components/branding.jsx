import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import logoconcept from "../assets/logoconcept.png"
import primarylogo from "../assets/primarylogo.jpg" 
import icon from "../assets/icon.png"
import TGLoop from "../assets/tgloop.mp4"
import logosizes from "../assets/logosizes.jpg"
import protectionzoneTG from "../assets/protectionzoneTG.png"
import gridsystemTG from "../assets/gridsystemTG.png"

import mockupsTG from "../assets/mockupsTG.png" 
import { useNavigate } from "react-router-dom";
import right from "../assets/right.svg"
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

export default function Branding() {
  const imageRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)
  const [isIOS, setIsIOS] = useState(false)
  const navigate = useNavigate();



const goHome = () => {
  
  window.scrollTo(0, 0);
  
  navigate("/", { 
    replace: false,
    state: { scrollToTop: true }
  });
};

  /* ---------- iOS CHECK ---------- */
  useEffect(() => {
    setIsIOS(checkIsIOS())
  }, [])

  /* ---------- INTERSECTION OBSERVER ---------- */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.2 }
    )

    if (imageRef.current) observer.observe(imageRef.current)

    return () => {
      if (imageRef.current) observer.unobserve(imageRef.current)
    }
  }, [])

  return (
    <main className="w-full min-h-[200vh] bg-[#F3E6D4] relative ios-fix">
      {/* PROJECT HEADER */}
      <section className="w-full flex flex-col gap-8 xl:gap-10 px-4 md:px-[3.8rem] xl:mt-2 lg:px-[6rem] xl:px-28 pt-[2rem] lg:pt-[2.8rem]">
        <motion.div
          className="flex items-baseline gap-2 sm:gap-3 lg:gap-7 xl:ml-[-73px] lg:ml-[-55px] md:ml-[-32px]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="font-whatnot font-bold italic text-[#5E3C2F] text-[20px] md:text-[30px] lg:text-[38px] xl:text-[50px]">
            01
          </span>
          <h1 className="font-whatnot font-bold text-[#190A07] text-[22px] md:text-[34px] lg:text-[42px] xl:text-[60px]">
            Trend Grabber
          </h1>
        </motion.div>

        {/* TAGS */}
        <motion.div
          className="flex flex-wrap gap-2 xl:gap-4 xl:ml-[-73px] lg:ml-[-55px] md:ml-[-32px]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          {[
           "Brand Identity",
           "Brand Design",
           "Visual Identity",
           "Logo Design",
          ].map((tag) => (
            <span
              key={tag}
              className="border border-[#190A07] rounded-lg font-whatnot text-[#190A07] px-3 py-1 text-[11px] sm:text-[12px] xl:text-[25px]"
            >
              {tag}
            </span>
          ))}
        </motion.div>

        {/* DESCRIPTION */}
        <motion.p
          className="xl:ml-[-73px] lg:ml-[-55px] md:ml-[-32px] text-[#5E3C2F] font-dudu leading-relaxed text-[15px] md:text-[16px] lg:text-[17px] xl:text-[35px]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Introducing online shoppers with the latest trends, providing a real
          e-commerce experience, and improving how people discover products
          online.
        </motion.p>

        {/* VIDEO SHOWCASE */}
        <div
          ref={imageRef}
          className={`w-full transition-all duration-[1800ms] ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-32"
          }`}
        >
                <div
            className="
              relative w-full
              md:w-[calc(100%+60px)]
              lg:w-[calc(100%+110px)]
              xl:w-[calc(100%+142px)]
            md:ml-[-32px] md:mr-[-32px]
lg:ml-[-55px]
xl:ml-[-70px] 
              
             
              rounded-2xl sm:rounded-3xl md:rounded-[28px]
              lg:rounded-[32px] xl:rounded-[40px]
              overflow-hidden shadow-xl
            "
          >
            <video
              src={TGLoop}
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* ABOUT SECTION */}
        <div className="xl:ml-[-73px] lg:ml-[-55px] md:ml-[-32px] max-w-full">
          <h3 className="font-whatnot font-bold text-[#190A07] text-[13px] md:text-[15px] lg:text-[30px] xl:text-[30px] mb-2">
            About:
          </h3>
          <p className="text-[#5E3C2F] font-dudu leading-relaxed text-[11px] md:text-[13px] lg:text-[17px] xl:text-[25px] xl:mt-[1rem] mt-[1rem] sm:mt-[1rem] lg:mt-[1rem] md:mt-[1rem]">
            This is the visual identity created for Trend Grabber, made sure the design went well with the brand's mission of being modern, 
            easy to the eye and accessible for all users. 
          </p>
        </div>

        {/* BREAK OUT OF CONTAINER - MARQUEE */}
        <div className="relative interactive-hover">
          <div className="absolute inset-x-0">
            <motion.div 
              className="bg-[#C33E23] py-2.5 mt-2"
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
                  text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
               <span className="mx-6">Introduction</span>
                  <span className="mx-6 arrow-long"></span>
                  <span className="mx-6">About</span>
                  <span className="mx-6 arrow-long"></span>
                  <span className="mx-6">Logo concept</span>
                  <span className="mx-6 arrow-long"></span>
                  <span className="mx-6">Primary logo</span>
                  <span className="mx-6 arrow-long "></span>
                  <span className="mx-6">Secondary logo</span>
                  <span className="mx-6 arrow-long"></span>
                  <span className="mx-6">Logo sizes</span>
                  <span className="mx-6 arrow-long"></span>
                  <span className="mx-6">Protection zone and grid system</span>
                  <span className="mx-6 arrow-long"></span>
                  <span className="mx-6">Color palette and typography</span>
                  <span className="mx-6 arrow-long"></span>
                  <span className="mx-6">Mockups</span>
                  <span className="mx-6 arrow-long"></span>
                </div>

                {/* SECOND COPY (for seamless loop) */}
                <div className="flex items-center font-whatnot text-[#F3E6D4] 
                  text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
                  <span className="mx-6">Introduction</span>
                  <span className="mx-6 arrow-long"></span>
                  <span className="mx-6">About</span>
                  <span className="mx-6 arrow-long"></span>
                  <span className="mx-6">Logo concept</span>
                  <span className="mx-6 arrow-long"></span>
                  <span className="mx-6">Primary logo</span>
                  <span className="mx-6 arrow-long "></span>
                  <span className="mx-6">Secondary logo</span>
                  <span className="mx-6 arrow-long"></span>
                  <span className="mx-6">Logo sizes</span>
                  <span className="mx-6 arrow-long"></span>
                  <span className="mx-6">Protection zone and grid system</span>
                  <span className="mx-6 arrow-long"></span>
                  <span className="mx-6">Color palette and typography</span>
                  <span className="mx-6 arrow-long"></span>
                  <span className="mx-6">Mockups</span>
                  <span className="mx-6 arrow-long"></span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        
<motion.div 
  className="flex items-baseline sm:gap-3 lg:gap-6 gap-2 xl:ml-[-73px] lg:ml-[-55px] md:ml-[-32px] xl:mt-[5rem] mt-[4rem]"
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
   Logo concept
  </motion.h2>
</motion.div>

  {/* CENTERED LOGO CONCEPT IMAGE */}
        <motion.div 
          className="flex justify-center items-center w-full -mt-2 "
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-center w-full">
            <img
              src={logoconcept}
              alt="Logo concept"
              className="max-w-[80%] sm:max-w-[90%] md:max-w-[85%] lg:max-w-[80%] xl:max-w-[75%] h-auto object-contain"
            />
          </div>
        </motion.div>

        {/* logo concept Description — aligned with previous paragraphs */}
        <motion.div 
          className="xl:ml-[-73px] lg:ml-[-55px] md:ml-[-32px] -mt-4 max-w-full"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
        
          {/* Main description */}
          <p className="text-[#5E3C2F] font-dudu leading-relaxed 
            text-[11px] md:text-[13px] lg:text-[17px] xl:text-[25px]">
       The final concept of the logo basically combines the two first letters of the brand name "T" and "G" into a paperclip shape (Trombone in french) to represent the idea of linking users to the 
       latest trends. The logo is designed to be simple and memorable so that it can be easily understood and recognized by the users.
          </p>
        </motion.div>


                
<motion.div 
  className="flex items-baseline sm:gap-3 lg:gap-6 gap-2 xl:ml-[-73px] lg:ml-[-55px] md:ml-[-32px] mt-2"
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
    03
  </motion.span>

  <motion.h2 
    className="font-whatnot font-bold text-[#190A07] leading-tight 
      text-[20px] md:text-[28px] lg:text-[36px] xl:text-[48px]"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ delay: 0.1 }}
    viewport={{ once: true }}
  >
   Primary logo
  </motion.h2>
</motion.div>

          {/* CENTERED primary logo IMAGE */}
        <motion.div 
          className="flex justify-center items-center w-full mt-2"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1.5 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-center w-full">
            <img
              src={primarylogo}
              alt="Primary Logo"
              className="max-w-[70%] sm:max-w-[90%] md:max-w-[67%] lg:max-w-[55%] xl:max-w-[40%] h-auto object-contain"
            />
          </div>
        </motion.div>

        {/* Primary logo Description — aligned with previous paragraphs */}
        <motion.div 
          className="xl:ml-[-73px] lg:ml-[-55px] md:ml-[-32px] xl:mt-24 mt-8 max-w-full"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
        
          {/* Main description */}
          <p className="text-[#5E3C2F] font-dudu leading-relaxed 
            text-[11px] md:text-[13px] lg:text-[17px] xl:text-[25px]">
Above is the primary logo for Trend grabber, a more clear and refined version of the concept logo
 with the brand name included presnted horizontally next to the symbol.
          </p>
        </motion.div>


<motion.div 
  className="flex items-baseline sm:gap-3 lg:gap-6 gap-2 xl:ml-[-73px] lg:ml-[-55px] md:ml-[-32px] mt-2"
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
    04
  </motion.span>

  <motion.h2 
    className="font-whatnot font-bold text-[#190A07] leading-tight 
      text-[20px] md:text-[28px] lg:text-[36px] xl:text-[48px]"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ delay: 0.1 }}
    viewport={{ once: true }}
  >
   Secondary logo
  </motion.h2>
</motion.div>

          {/* CENTERED secondary logo IMAGE */}
        <motion.div 
          className="flex justify-center items-center w-full -mt-[3rem]"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 0.5 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-center w-full">
            <img
              src={icon}
              alt="Secondary Logo"
              className="max-w-[40%] max-w-[40%] sm:max-w-[40%] md:max-w-[35%] lg:max-w-[30%] xl:max-w-[30%] h-auto object-contain"
            />
          </div>
        </motion.div>

        {/* Secondary logo Description — aligned with previous paragraphs */}
        <motion.div 
          className="xl:ml-[-73px] lg:ml-[-55px] md:ml-[-32px] -mt-[3rem]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
        
          {/* Main description */}
          <p className="text-[#5E3C2F] font-dudu leading-relaxed 
            text-[11px] md:text-[13px] lg:text-[17px] xl:text-[25px]">
Above is the secondary logo for Trend grabber, that is the icon version of the primary logo, 
designed to be used in smaller spaces where the primary logo may not fit well. 
          </p>
        </motion.div>



        <motion.div 
  className="flex items-baseline sm:gap-3 lg:gap-6 gap-2 xl:ml-[-73px] lg:ml-[-55px] md:ml-[-32px] mt-2"
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
    05
  </motion.span>

  <motion.h2 
    className="font-whatnot font-bold text-[#190A07] leading-tight 
      text-[20px] md:text-[28px] lg:text-[36px] xl:text-[48px]"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ delay: 0.1 }}
    viewport={{ once: true }}
  >
  Logo sizes
  </motion.h2>
</motion.div>

           {/* CENTERED logo SIZES IMAGE */}
        <motion.div 
          className="flex justify-center items-center w-full lg:mt-4 mt-2"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1.2 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-center w-full">
            <img
              src={logosizes}
              alt="Secondary Logo"
              className="max-w-[90%] sm:max-w-[90%] md:max-w-[85%] lg:max-w-[80%] xl:max-w-[75%] h-auto object-contain"
            />
          </div>
        </motion.div>

         {/* Secondary logo sizes Description — aligned with previous paragraphs */}
        <motion.div 
          className="xl:ml-[-80px] lg:ml-[-55px] md:ml-[-32px] xl:mt-8 mt-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
        
          {/* Main description */}
          <p className="text-[#5E3C2F] font-dudu leading-relaxed 
            text-[11px] md:text-[13px] lg:text-[17px] xl:text-[25px]">
These are the different sizes and variations of the logo from small to large sizes to make sure it looks good on all screens and devices.
          </p>
        </motion.div>

           <motion.div 
  className="flex items-baseline sm:gap-3 lg:gap-6 gap-2 xl:ml-[-73px] lg:ml-[-55px] md:ml-[-32px] mt-2"
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
    06
  </motion.span>

  <motion.h2 
    className="font-whatnot font-bold text-[#190A07] leading-tight 
      text-[20px] md:text-[28px] lg:text-[36px] xl:text-[48px]"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ delay: 0.1 }}
    viewport={{ once: true }}
  >
  Protection zone and grid system
  </motion.h2>
</motion.div>

  {/* CENTERED protection zone IMAGE */}
        <motion.div 
          className="flex justify-center items-center w-full mt-4 lg:mt-8"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1.2 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-center w-full">
            <img
              src={protectionzoneTG}
              alt="Secondary Logo"
              className="max-w-[60%] max-w-[60%] sm:max-w-[50%] md:max-w-[50%] lg:max-w-[40%] xl:max-w-[35%] h-auto object-contain"
            />
          </div>
        </motion.div>

        
  {/* CENTERED grid system IMAGE */}
        <motion.div 
          className="flex justify-center items-center w-full mt-4 "
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 0.7 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-center w-full">
            <img
              src={gridsystemTG}
              alt="Secondary Logo"
              className="max-w-[60%] sm:max-w-[70%] md:max-w-[70%] lg:max-w-[60%] xl:max-w-[45%] h-auto object-contain"
            />
          </div>
        </motion.div>

         <motion.div 
  className="flex items-baseline sm:gap-3 lg:gap-6 gap-2 xl:ml-[-73px] lg:ml-[-55px] md:ml-[-32px] mt-2"
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
    07
  </motion.span>

  <motion.h2 
    className="font-whatnot font-bold text-[#190A07] leading-tight 
      text-[20px] md:text-[28px] lg:text-[36px] xl:text-[48px]"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ delay: 0.1 }}
    viewport={{ once: true }}
  >
  Color palette and typography
  </motion.h2>
</motion.div>

{/* COLOR PALETTE */}
<motion.div
  className="mt-2"
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>
        <div
            className="
              relative w-full
              md:w-[calc(100%+60px)]
              lg:w-[calc(100%+110px)]
              xl:w-[calc(100%+142px)]
            md:ml-[-32px] md:mr-[-32px]
lg:ml-[-55px]
xl:ml-[-70px] 
              
             
          
            "
          >
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {[
        { name: "Black", hex: "#000000" },
        { name: "Primary Purple", hex: "#5A2F9D" },
        { name: "White", hex: "#FFFFFF" },
        { name: "Accent Purple", hex: "#6E3ADB" },
      ].map((color) => (
        <motion.div
          key={color.hex}
          whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 1.06 }}   
          transition={{ type: "spring", stiffness: 300 }}
          className="cursor-pointer"
        >
          <div
            className="h-36 lg:h-44 rounded-2xl shadow-md flex flex-col justify-end p-4"
            style={{
              backgroundColor: color.hex,
              border: color.hex === "#FFFFFF" ? "1px solid #e5e5e5" : "none",
            }}
          >
            <span
              className={`font-dudu text-sm ${
                color.hex === "#FFFFFF" ? "text-black" : "text-white"
              }`}
            >
              {color.name}
            </span>
            <span
              className={`font-dudu font-semibold ${
                color.hex === "#FFFFFF" ? "text-black" : "text-white"
              }`}
            >
              {color.hex}
            </span>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</motion.div>

{/* TYPOGRAPHY – ZONA PRO */}
<motion.div
  className="xl:ml-[-73px] lg:ml-[-55px] md:ml-[-32px] mt-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>
  {/* LEFT — BIG HERO FONT NAME */}
  <motion.h2
    className="font-zona text-[#190A07] leading-none
      text-[52px] sm:text-[72px] md:text-[96px] lg:text-[120px] xl:text-[160px]"
    style={{ fontWeight: 800 }}
    initial={{ y: 40, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    viewport={{ once: true }}
  >
    Zona<br />Pro
  </motion.h2>

  {/* RIGHT — FONT VARIANTS */}
  <div
  className="
    relative w-full
    md:w-[calc(100%+30px)]
    lg:w-[calc(100%+110px)]
    xl:w-[calc(100%+140px)]
    md:ml-[10px]
    lg:ml-[-55px]
    xl:ml-[-73px]
  "
>


  <div className="flex flex-col gap-6 mt-2">
    {[
      { label: "Hairline", weight: 100 },
      { label: "Thin", weight: 200 },
      { label: "Light", weight: 300 },
      { label: "Regular", weight: 400 },
      { label: "SemiBold", weight: 600 },
      { label: "Bold", weight: 700 },
      { label: "ExtraBold Italic", weight: 800, italic: true },
    ].map((font, i) => (
      <motion.div
        key={font.label}
        initial={{ x: 40, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{
          duration: 0.6,
          delay: i * 0.08,
          ease: "easeOut",
        }}
        viewport={{ once: true }}
        className="border-b border-[#190A07]/20 pb-3"
      >
        <span
          className="font-zona text-[#5E3C2F]
            text-[18px] sm:text-[20px] md:text-[24px] lg:text-[28px]"
          style={{
            fontWeight: font.weight,
            fontStyle: font.italic ? "italic" : "normal",
          }}
        >
          Trend Grabber
        </span>
      </motion.div>
    ))}
  </div>
  </div>
</motion.div>

 <motion.div 
  className="flex items-baseline sm:gap-3 lg:gap-6 gap-2 xl:ml-[-73px] lg:ml-[-55px] md:ml-[-32px] mt-2"
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
    08
  </motion.span>

  <motion.h2 
    className="font-whatnot font-bold text-[#190A07] leading-tight 
      text-[20px] md:text-[28px] lg:text-[36px] xl:text-[48px]"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ delay: 0.1 }}
    viewport={{ once: true }}
  >
  Mockups
  </motion.h2>
</motion.div>

<motion.div
  className="relative left-1/2 right-1/2 w-screen -ml-[50vw] -mr-[50vw]
             -mt-[0.3rem] sm:mt-2 md:mt-2 lg:mt-2 xl:mt-2"
  initial={{ opacity: 0, scale: 0.95 }}
  whileInView={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.7 }}
  viewport={{ once: true }}
>
  <img
    src={mockupsTG}
    alt="Components"
    className="w-screen h-auto object-cover"
  />
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
                onClick={() => navigate("/Fantazia")} 
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