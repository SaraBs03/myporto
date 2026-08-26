import Footer from "./Footer";
import { useEffect, useRef, useState } from "react";
import NoweSeoComponents from "../assets/nowe_seo_components.png";
import NoweSeoMockup from "../assets/nowe_seo_mockup.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useNavigate } from "react-router-dom";
import NoweSeoSections from "../assets/nowe_seo_sections.png";
import UiLoopNoweSeo from "../assets/ui_loop_nowe_seo.mp4";
import UiLoopNoweSeo2 from "../assets/ui_loop_nowe_seo2.mp4";

/* ---------- SHARED SCROLL-REVEAL WRAPPER ---------- */
function Reveal({ children, className = "", delay = 0 }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setVisible(true);
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -80px 0px" }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

/* ---------- SCENE LABEL ---------- */
function SceneLabel({ number, title }) {
  return (
    <p className="font-dudu text-[#C33E23] text-[13px] sm:text-[15px] tracking-[0.1em] uppercase mb-3">
      {number} — {title}
    </p>
  );
}

/* ---------- REUSABLE SCREEN GRID ---------- */
function ScreenGrid({
  screens,
  cols = "grid-cols-2 sm:grid-cols-3 lg:grid-cols-5",
}) {
  return (
    <div className={`grid ${cols} gap-4`}>
      {screens.map((screen) => (
        <div key={screen.label} className="flex flex-col gap-2">
          <div
            className="aspect-[9/16] rounded-lg overflow-hidden flex items-end p-3"
            style={{
              background: screen.g || "#eee",
            }}
          >
            {screen.wireframe && (
              <span className="font-dudu text-[#0F2A43]/50 text-[11px]">
                {screen.label}
              </span>
            )}
          </div>

          {!screen.wireframe && (
            <span className="font-dudu text-[#190A07]/60 text-[12px] text-center">
              {screen.label}
            </span>
          )}
        </div>
      ))}
    </div>
  );
}

/* ---------- MEDIA PLACEHOLDER ---------- */
function MediaPlaceholder({ label, className = "" }) {
  return (
    <div
      className={`w-full aspect-[16/10] rounded-2xl bg-[#190A07]/5 border border-[#190A07]/15 flex items-center justify-center ${className}`}
    >
      <span className="font-dudu text-[#190A07]/35 text-[12px] sm:text-[13px] uppercase tracking-[0.06em]">
        {label}
      </span>
    </div>
  );
}

/* ---------- NDA STAMP ---------- */
function NDAStamp() {
  return (
    <div
      className="
        absolute top-0 right-0 sm:top-2 sm:right-2 lg:top-2 lg:right-4
        z-20 pointer-events-none select-none
        w-[90px] h-[90px]
        xs:w-[105px] xs:h-[105px]
        sm:w-[130px] sm:h-[130px]
        md:w-[155px] md:h-[155px]
        lg:w-[175px] lg:h-[175px]
        xl:w-[190px] xl:h-[190px]
      "
      style={{ transform: "rotate(-10deg)" }}
    >
      <svg
        viewBox="0 0 140 140"
        className="w-full h-full"
        style={{ opacity: 0.7 }}
      >
        <defs>
          <path
            id="ndaStampPath"
            d="M 70,70 m -54,0 a 54,54 0 1,1 108,0 a 54,54 0 1,1 -108,0"
          />
        </defs>

        <circle
          cx="70"
          cy="70"
          r="62"
          fill="none"
          stroke="#C33E23"
          strokeWidth="2"
        />

        <circle
          cx="70"
          cy="70"
          r="50"
          fill="none"
          stroke="#C33E23"
          strokeWidth="1"
        />

        <text
          fill="#C33E23"
          fontSize="9.5"
          letterSpacing="2.5"
          fontFamily="inherit"
        >
          <textPath href="#ndaStampPath" startOffset="0%">
            NON-DISCLOSURE AGREEMENT • NON-DISCLOSURE AGREEMENT •
          </textPath>
        </text>

        <text
          x="70"
          y="78"
          textAnchor="middle"
          fill="#C33E23"
          fontSize="26"
          fontWeight="bold"
          fontFamily="inherit"
        >
          NDA
        </text>
      </svg>
    </div>
  );
}

export default function NoweSeoPagesCaseStudy() {

   const navigate = useNavigate();
   const heroImageRef = useRef(null);

useEffect(() => {
  const image = heroImageRef.current;
  if (!image) return;

  const mm = gsap.matchMedia();

  mm.add("(min-width: 1024px)", () => {
    const animation = gsap.fromTo(
      image,
      { scale: 0.78 },
      {
        scale: 1.23,
        ease: "none",
        scrollTrigger: {
          trigger: image,
          start: "top 85%",
          end: "bottom 15%",
          scrub: 0.6,
        },
      }
    );

    return () => {
      animation.kill();
    };
  });

  mm.add("(max-width: 1023px)", () => {
    gsap.set(image, { scale: 1, clearProps: "transform" });
  });

  return () => {
    mm.revert();
  };
}, []);
  return (
    <div className="min-h-screen bg-[#F3E6D4] text-[#190A07] overflow-x-hidden">
      <main className="px-4 sm:px-8 lg:px-[60px] xl:px-[100px] pt-[100px] sm:pt-[130px] pb-[80px]">

        {/* ================= HERO ================= */}
        <section className="relative">
          <NDAStamp />

          <div className="w-full max-w-[1200px] mx-auto">
            <div
              className="
                mb-6 sm:mb-8
                pr-[100px] xs:pr-[120px] sm:pr-[150px] md:pr-[180px] lg:pr-0
              "
            >

   
              <SceneLabel number="Hero" />

              <h1 className="font-whatnot font-bold text-[32px] sm:text-[48px] lg:text-[60px] leading-[1.05] max-w-[820px]">
                Nowe SEO Pages
              </h1>

              <p className="font-whatnot text-[16px] sm:text-[20px] lg:text-[22px] text-[#5E3C2F] mt-4 max-w-[640px]">
                Creating SEO-focused pages for NOWE with clear content, simple navigation, and a consistent look and feel.{" "}
  <span className="font-bold">
    Due to NDA restrictions, only a limited selection of screens and information
    can be shown.
  </span>
              </p>

               <p className="font-whatnot font-bold text-[#5E3C2F] text-[12px] sm:text-[14px] lg:text-[16px] mt-6 sm:mt-8 md:mt-10">
    This project was made in partnership with Youth Geekers, A digital agency specializing in web, apps, UI/UX, branding, SEO, and gaming across Dubai, Europe, and beyond.
  </p>
            </div>

             {/* HERO IMAGE FRAME */}
  <div className="w-full mb-10 sm:mb-14 rounded-[28px]">
  <div className="w-full py-12 sm:py-16 lg:py-20">
    <div
      ref={heroImageRef}
      className="
        w-[92%] mx-auto
        sm:w-[95%]
        lg:w-full
        rounded-[28px]
        overflow-hidden
      "
    >
      <img
        src={NoweSeoMockup}
        alt="NOWE SEO Pages website mockup"
        className="w-full h-auto block"
      />
    </div>
  </div>
</div>
          </div>
        </section>

        {/* ================= 01 — ABOUT ================= */}
        <section className="max-w-[1200px] mx-auto mt-[80px] sm:mt-[110px] lg:mt-[120px]">
          <Reveal>
            <SceneLabel number="01" title="About" />

            <div className="font-whatnot text-[15px] sm:text-[18px] leading-relaxed text-[#190A07]/85 space-y-4 max-w-[780px]">
              <p>
               NOWE SEO Pages is a collection of 17 pages created to showcase NOWE’s
                different services and make it easier for users to find the information they need.
              </p>

              <p>
                I worked on the pages from start to finish, organizing the content, creating the layouts, and designing the final UI.
                 I first designed the main components,
                 then combined and adapted them across the pages to keep everything consistent, clear, and visually engaging.
              </p>
            </div>
          </Reveal>

          
        </section>

        {/* ================= 02 — Components ================= */}
        <section className="max-w-[1200px] mx-auto mt-[80px] sm:mt-[110px] lg:mt-[120px]">
          <Reveal>
            <SceneLabel number="02" title="Building the Visual System" />

            <p className="font-whatnot text-[15px] sm:text-[18px] leading-relaxed text-[#190A07]/85 max-w-[780px] mb-10">
              I first created the main components, then adapted them across the 17 pages to keep the pages clear and 
              consistent. Below is a selection of the components I worked with.
            </p>
          </Reveal>

          

          <Reveal delay={100}>
            <div className="w-[1200px] max-w-full rounded-2xl overflow-hidden">
              <img
                src={NoweSeoComponents}
                alt="NOWE Money design system"
                className="w-full h-auto block"
              />
            </div>
          </Reveal>
        </section>

        {/* ================= 03 — shaping pages ================= */}
        <section className="max-w-[1200px] mx-auto mt-[80px] sm:mt-[110px] lg:mt-[120px]">
          <Reveal>
            <SceneLabel number="03" title="Shaping the pages" />

            <p className="font-whatnot text-[15px] sm:text-[18px] leading-relaxed text-[#190A07]/85 max-w-[780px] mb-8">
              I selected sections from different pages to show how the same design system was adapted to different types of content, 
              while keeping each page clear, consistent, and easy to follow.
            </p>
          </Reveal>

           <Reveal delay={100}>
            <div className="w-[1200px] max-w-full rounded-2xl overflow-hidden">
              <img
                src={NoweSeoSections}
                alt="Nowe SEO shaping pages"
                className="w-full h-auto block"
              />
            </div>
          </Reveal>
        </section>

       
        

        {/* ================= 08 — FINAL PRODUCT / INTERACTIONS ================= */}
        <section className="max-w-[1200px] mx-auto mt-[80px] sm:mt-[110px] lg:mt-[120px]">
                  <Reveal>
                    <SceneLabel number="08" title="Final Product & Interactions" />
                    <p className="font-whatnot text-[15px] sm:text-[18px] leading-relaxed text-[#190A07]/85 max-w-[780px] mb-10">
                      Snippets of the finished site in motion.
                    </p>
                  </Reveal>
        
                  <Reveal delay={100} className="mb-10">
                    <div className="w-full max-w-[1200px] rounded-2xl overflow-hidden">
                      <video
                        src={UiLoopNoweSeo}
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="metadata"
                        className="w-full h-auto block"
                      />
                    </div>
                  </Reveal>

                  <Reveal delay={100} className="mb-10">
                    <div className="w-full max-w-[1200px] rounded-2xl overflow-hidden">
                      <video
                        src={UiLoopNoweSeo2}
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="metadata"
                        className="w-full h-auto block"
                      />
                    </div>
                  </Reveal>
        
                  
                </section>

        {/* ================= NEXT PROJECT ================= */}
        <section className="max-w-[1200px] mx-auto mt-[120px] sm:mt-[160px]">
          <Reveal>
            <div className="flex items-center justify-between border-t border-[#190A07]/15 pt-6">
              <button 
              onClick={() => navigate("/nowe-money-onboarding")}
              className="font-dudu text-[14px] sm:text-[16px] text-[#190A07]/60 hover:text-[#190A07] transition-colors interactive-hover">
                ← Previous
              </button>

              <button className="font-dudu text-[14px] sm:text-[16px] text-[#190A07]/60 hover:text-[#190A07] transition-colors interactive-hover">
                Next →
              </button>
            </div>
          </Reveal>
        </section>

      </main>

      <Footer />
    </div>
  );
}