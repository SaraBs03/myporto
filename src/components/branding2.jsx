import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import primaryFZ from "../assets/primaryFZ.jpg" 
import primarylogo from "../assets/primarylogo.jpg" 
import icon from "../assets/icon.png" 
import FZloop from "../assets/FZloop.mp4"
import FZmonochromeloop from "../assets/FZmonochromeloop.mp4"
import logosizes from "../assets/logosizes.jpg"
import FZlogov1 from "../assets/FZlogov1.png"
import FZlogov2 from "../assets/FZlogov2.png"
import FZlogov3 from "../assets/FZlogov3.png"
import FZslogan1 from "../assets/FZslogan1.png"
import FZslogan2 from "../assets/FZslogan2.png"
import FZslogan3 from "../assets/FZslogan3.png"
import mockupFZ1 from "../assets/mockupFZ1.png"
import mockupFZ2 from "../assets/mockupFZ2.png"
import mockupFZ3 from "../assets/mockupFZ3.png"
import mockupFZ4 from "../assets/mockupFZ4.png"
import mockupFZ5 from "../assets/mockupFZ5.png"


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
  navigate("/", { 
    replace: false,
    state: { scrollToTop: true } 
  });
};

const goBranding = () => {
  navigate("/TG/branding");
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
            Fantazia Festival
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
           "Festival Branding",
           "Visual Identity",
           "Logo Design",
           "Art Direction",
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
          Fantazia is a cultural festival where horses, art, and traditional craftsmanship 
          come together to connect people and celebrate heritage.
        </motion.p>

        {/* VIDEO SHOWCASE */}
       <motion.div
  className="w-full"
  initial={{ opacity: 0, y: 120 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1.2, ease: "easeOut" }}
  viewport={{ once: true, amount: 0.2 }}
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
              src={FZloop}
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
       

        {/* ABOUT SECTION */}
        <div className="xl:ml-[-73px] lg:ml-[-55px] md:ml-[-32px] max-w-full">
          <h3 className="font-whatnot font-bold text-[#190A07] text-[13px] md:text-[15px] lg:text-[30px] xl:text-[30px] mb-2">
            About:
          </h3>
          <p className="text-[#5E3C2F] font-dudu leading-relaxed text-[11px] md:text-[13px] lg:text-[17px] xl:text-[25px] xl:mt-[1rem] mt-[1rem] sm:mt-[1rem] lg:mt-[1rem] md:mt-[1rem]">
            This visual identity was designed for Fantazia to represent the 
            festival in a modern, vibrant and visually aesthetic way while
            still keeping the traditional and cultural aspects of the event. 
          </p>
        </div>

        {/* BREAK OUT OF CONTAINER - MARQUEE */}
        <div className="relative">
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
                  <span className="mx-6">Primary logo - Monochrome</span>
                  <span className="mx-6 arrow-long"></span>
                  <span className="mx-6">Color palette and typography</span>
                  <span className="mx-6 arrow-long"></span>
                  <span className="mx-6">Slogan and typography</span>
                  <span className="mx-6 arrow-long"></span>
                  <span className="mx-6">Logo variations</span>
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
                  <span className="mx-6">Primary logo - Monochrome</span>
                  <span className="mx-6 arrow-long"></span>
                  <span className="mx-6">Color palette and typography</span>
                  <span className="mx-6 arrow-long"></span>
                  <span className="mx-6">Slogan and typography</span>
                  <span className="mx-6 arrow-long"></span>
                  <span className="mx-6">Logo variations</span>
                  <span className="mx-6 arrow-long"></span>
                  <span className="mx-6">Mockups</span>
                  <span className="mx-6 arrow-long"></span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        
<motion.div 
  className="flex items-baseline sm:gap-3 lg:gap-6 gap-2 xl:ml-[-73px] lg:ml-[-55px] md:ml-[-32px] mt-16"
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
   Primary logo - Monochrome version
  </motion.h2>
</motion.div>

  {/* CENTERED LOGO CONCEPT IMAGE */}
     
        <motion.div
  className="w-full"
  initial={{ opacity: 0, y: 120 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1.2, ease: "easeOut" }}
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
              
             
              rounded-2xl sm:rounded-3xl md:rounded-[28px]
              lg:rounded-[32px] xl:rounded-[40px]
              overflow-hidden shadow-xl
            "
          >
            <video
              src={FZmonochromeloop}
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* logo concept Description — aligned with previous paragraphs */}
        <motion.div 
          className="xl:ml-[-73px] lg:ml-[-55px] md:ml-[-32px] mt-2 max-w-full"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
        
          {/* Main description */}
          <p className="text-[#5E3C2F] font-dudu leading-relaxed 
            text-[11px] md:text-[13px] lg:text-[17px] xl:text-[25px]">
This is the primary logo for the Fantazia Festival in its monochrome version,
 stacked vertically with a bold and modern Arabic typography style for a strong and memorable visual presence.          </p>
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
     md:ml-[-32px]
      lg:ml-[-55px]
      xl:ml-[-70px]
    "
  >
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
 {[
  { name: "أحمر", hex: "#C80A14" },
  { name: "أزرق", hex: "#0A3A5A" },
  { name: "أخضر زيتوني", hex: "#AAAA6E" },
  { name: "أبيض", hex: "#FFFFFF" },
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
      {/* Arabic color name (default font) */}
      <span
        className="text-sm"
        style={{
          color: color.hex === "#FFFFFF" ? "#000" : "#fff",
        }}
      >
        {color.name}
      </span>

      {/* Hex code (Whatnot font) */}
      <span
        className="font-semibold"
        style={{
          fontFamily: "whatnot",
          color: color.hex === "#FFFFFF" ? "#000" : "#fff",
        }}
      >
        {color.hex}
      </span>
    </div>
  </motion.div>
))}
    </div>
  </div>
</motion.div>

{/* TYPOGRAPHY – MAHEEB */}
<motion.div
  className="xl:ml-[-73px] lg:ml-[-55px] md:ml-[-32px] mt-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>
  {/* LEFT — BIG HERO FONT NAME */}
  <motion.h2
    className="leading-none text-[52px] sm:text-[72px] md:text-[96px] lg:text-[120px] xl:text-[140px]"
    style={{
      fontFamily: "maheeb",
      fontWeight: 800,
      color: "#190A07",
    }}
    initial={{ y: 40, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    viewport={{ once: true }}
  >
    ماهيب
  </motion.h2>

  {/* RIGHT — FONT VARIANTS */}
  <div
    className="
      relative w-full
      md:w-[calc(100%+90px)]
      lg:w-[calc(100%+110px)]
      xl:w-[calc(100%+140px)]
      md:ml-[10px]
      lg:ml-[-55px]
      xl:ml-[-73px]
    "
  >
    <div className="flex flex-col gap-6 mt-2">
      {[
        { label: "العادي", weight: 400 },
        { label: "مائل", italic: true },
        { label: "ثقيل", weight: 700 },
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
          className="border-b border-[#190A07]/20 pb-3 "
        >
          <span
            className="text-[#5E3C2F] text-[18px] sm:text-[20px] md:text-[24px] lg:text-[28px]"
            style={{
              fontFamily: "maheeb",
              fontWeight: font.weight ?? 400,
              fontStyle: font.italic ? "italic" : "normal",
            }}
          >
         فنتازيا
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
 Slogan and typography
  </motion.h2>
</motion.div>


 

          {/* Slogan variations and typography */}
<motion.div 
  className="flex flex-col items-center gap-8 mt-2"
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

 {/* Top two SLOGAN variations */}
<div className="flex justify-center md:sm:gap-16 sm:gap-16 gap-8 xl:gap-24 w-full">
  <motion.img
    src={FZslogan1}
    alt="SLOGAN variation 1"
    className="w-[38%] sm:w-[40%] md:w-[45%] lg:w-[48%] xl:w-[48%] max-w-[480px] object-contain"
    variants={{
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 }
    }}
  />

  <motion.img
    src={FZslogan2}
    alt="SLOGAN variation 2"
    className="w-[38%] sm:w-[40%] md:w-[45%] lg:w-[48%] xl:w-[48%] max-w-[480px] object-contain"
    variants={{
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 }
    }}
  />
</div>

{/* Bottom centered SLOGAN variation */}
<div className="flex justify-center w-full">
  <motion.img
    src={FZslogan3}
    alt="SLOGAN variation 3"
    className="w-[38%] sm:w-[40%] md:w-[45%] lg:w-[48%] xl:w-[48%] max-w-[480px] object-contain"
    variants={{
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 }
    }}
  />
</div>
</motion.div>


<motion.div
  className="xl:ml-[-73px] lg:ml-[-55px] md:ml-[-32px] mt-8 grid grid-cols-1 gap-16"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>
  {/* ===== MUNA SECTION ===== */}
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
    {/* LEFT — BIG HERO FONT NAME (MUNA) */}
    <motion.h2
      className="leading-none text-[52px] sm:text-[72px] md:text-[96px] lg:text-[80px] xl:text-[100px]"
      style={{
        fontFamily: "munafont",
        fontWeight: 800,
        color: "#190A07",
      }}
      initial={{ y: 40, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      مُنا
    </motion.h2>

    {/* RIGHT — FONT VARIANTS (MUNA) */}
    <div className="flex flex-col gap-6 -mt-8 lg:mt-2 xl:mt-2">
      {[
        { label: "العادي", weight: 400 },
        { label: "مائل", italic: true },
        { label: "ثقيل", weight: 700 },
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
            className="text-[#5E3C2F] text-[18px] sm:text-[20px] md:text-[24px] lg:text-[28px]"
            style={{
              fontFamily: "munafont",
              fontWeight: font.weight ?? 400,
              fontStyle: font.italic ? "italic" : "normal",
            }}
          >
            مُنا
          </span>
        </motion.div>
      ))}
    </div>
  </div>

 {/* ===== HALVAR SECTION ===== */}
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
  {/* LEFT — BIG HERO FONT NAME (HALVAR) */}
  <motion.h2
    className="leading-none text-[52px] sm:text-[72px] md:text-[96px] lg:text-[80px] xl:text-[100px]"
    style={{
      fontFamily: "'Halvar-Breitschrift-Bold-Demo', Arial, sans-serif",
      fontWeight: 400, 
      color: "#190A07",
    }}
    initial={{ y: 40, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    viewport={{ once: true }}
  >
    Halvar<br />Breitschrift
  </motion.h2>

    {/* RIGHT — FONT VARIANTS (HALVAR) */}
    <div className="flex flex-col gap-6 -mt-8 lg:mt-2 xl:mt-2">
      {[
        { label: "Regular", weight: 400 },
        { label: "Italic", italic: true },
        { label: "Bold", weight: 700 },
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
            className="text-[#5E3C2F] text-[18px] sm:text-[20px] md:text-[24px] lg:text-[28px]"
           style={{
  fontFamily: "HalvarBreitschrift, Arial, sans-serif",
  fontWeight: font.weight ?? 400,
  fontStyle: font.italic ? "italic" : "normal",
}}
          >
            HalvarBreitschrift
          </span>
        </motion.div>
      ))}
    </div>
  </div>
</motion.div>

{/*  Slogan and typography Description — aligned with previous paragraphs */}
        <motion.div 
          className="xl:ml-[-73px] lg:ml-[-55px] md:ml-[-32px] mt-2 max-w-full"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
        
          {/* Main description */}
          <p className="text-[#5E3C2F] font-dudu leading-relaxed 
            text-[11px] md:text-[13px] lg:text-[17px] xl:text-[25px]">
This is the festival’s slogan. It translates to “Equestrian Festival at Bazina,” a small town in the
 city of Bizerte, Tunisia, known for its strong horse culture and traditional craftsmanship. 
The slogan is used on posters beneath the logo.    </p>
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
   Logo variations
  </motion.h2>
</motion.div>



          {/* Logo variations */}
<motion.div 
  className="flex flex-col items-center gap-4 mt-2"
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

  {/* Top two logo variations */}
<div className="flex justify-center md:sm:gap-16 sm:gap-16 gap-8 xl:gap-24 w-full">
    <motion.img
      src={FZlogov1}
      alt="logo variation 1"
    className="w-[30%] sm:w-[30%] md:w-[32%] lg:w-[32%] xl:w-[23%] max-w-[480px] object-contain"
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
      }}
    />
    <motion.img
      src={FZlogov2}
      alt="logo variation 2"
    className="w-[30%] sm:w-[30%] md:w-[32%] lg:w-[32%] xl:w-[23%] max-w-[480px] object-contain"
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
      }}
    />
  </div>

  {/* Bottom centered logo variation */}
  <div className="flex justify-center w-full">
    <motion.img
      src={FZlogov3}
      alt="logo variation 3"
    className="w-[30%] sm:w-[30%] md:w-[32%] lg:w-[32%] xl:w-[23%] max-w-[480px] object-contain"
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
      }}
    />
  </div>

</motion.div>

        {/* Primary logo Description — aligned with previous paragraphs */}
        <motion.div 
          className="xl:ml-[-73px] lg:ml-[-55px] md:ml-[-32px] mt-2 max-w-full"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
        
          {/* Main description */}
          <p className="text-[#5E3C2F] font-dudu leading-relaxed 
            text-[11px] md:text-[13px] lg:text-[17px] xl:text-[25px]">
These are the logo variations for Fantazia in all it's different colors, keeping it simple and consistent.
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
   Mockups
  </motion.h2>
</motion.div>

{/* MOCKUPS SECTION */}
{[mockupFZ1, mockupFZ2, mockupFZ3, mockupFZ4, mockupFZ5].map((img, index) => (
  <motion.div
    key={index}
    className="mb-6"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    viewport={{ once: true }}
  >
   <div
    className="
      relative w-full
      md:w-[calc(100%+60px)]
      lg:w-[calc(100%+110px)]
      xl:w-[calc(100%+145px)]
      md:ml-[-32px]
      lg:ml-[-55px]
      xl:ml-[-73px]
    
  
        rounded-2xl sm:rounded-3xl md:rounded-[28px]
        lg:rounded-[32px] xl:rounded-[40px]
        overflow-hidden shadow-xl
      "
    >
      <img
        src={img}
        alt={`Fantazia mockup ${index + 1}`}
        className="w-full h-full object-cover"
      />
    </div>

    {/* NB note under the 4th mockup */}
    {index === 3 && (
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="
          text-[#5E3C2F]/70 font-dudu italic leading-relaxed
          text-[10px] md:text-[12px] lg:text-[12px] xl:text-[20px]
          mt-16 md:ml-[-32px] xl:ml-[-75px]
        "
      >
        NB: On the right side is the festival's program panel,
         which is in french as the project was originally presented in that language.
      </motion.p>
    )}
  </motion.div>
))}



        
        

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
      onClick={goBranding}
         className="font-dudu text-[#5E3C2F] text-sm md:text-base lg:text-lg group-hover:text-[#C33E23] transition-colors duration-200">
        Previous
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