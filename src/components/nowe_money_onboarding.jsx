import Footer from "./Footer";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { useNavigate } from "react-router-dom";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import NoweOnboardingHero from "../assets/nowe_onboarding_hero.png"
import NoweOnboardingUserFlow from "../assets/nowe_onboarding_user_flow.png"
import NoweOnboardingLow from "../assets/nowe_onboarding_low.png"
import NoweOnboardingHigh from "../assets/nowe_onboarding_high.png"
import NoweOnboardingKeySections from "../assets/nowe_onboarding_key_sections.png"
import NoweOnboardingDesignSystem from "../assets/nowe_onboarding_design_system.png"

gsap.registerPlugin(ScrollTrigger);

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

/* ---------- SCENE LABEL (section eyebrow) ---------- */
function SceneLabel({ number, title }) {
  return (
    <p className="font-dudu font-bold text-[#C33E23] text-[15px] sm:text-[17px] lg:text-[18px] tracking-[0.08em] uppercase mb-4">
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

/* ---------- MEDIA PLACEHOLDER (rounded rectangle space for a jpeg / video) ---------- */
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
        absolute top-0 right-0 sm:top-2 sm:right-2 lg:top-2 lg:right-2
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

        <circle cx="70" cy="70" r="62" fill="none" stroke="#C33E23" strokeWidth="2" />
        <circle cx="70" cy="70" r="50" fill="none" stroke="#C33E23" strokeWidth="1" />

        <text fill="#C33E23" fontSize="9.5" letterSpacing="2.5" fontFamily="inherit">
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

export default function NoweOnboardingCaseStudy() {
  const heroImageRef = useRef(null);
  const navigate = useNavigate();

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
      <main className="-mt-8 px-4 sm:px-4 md:px-8 lg:px-[150px] pt-[100px] sm:pt-[130px] pb-[80px]">
        {/* ================= HERO ================= */}
        <section className="relative">
          <NDAStamp />

          <div className="w-full max-w-[1200px] mx-auto">
            <div
              className="
                mb-6 sm:mb-8
                pr-[100px] xs:pr-[120px] sm:pr-[150px] md:pr-[180px] lg:pr-[200px]
              "
            >
              
              <h1 className="font-alegreya font-bold text-[32px] sm:text-[48px] lg:text-[60px] leading-[1.05] max-w-[820px]">
                Nowe Money Onboarding
              </h1>
             <p className="font-alegreya text-[16px] sm:text-[20px] lg:text-[22px] text-[#5E3C2F] mt-4 max-w-[640px]">
  Designing a complete fintech onboarding experience, from setting up an account
  to verification and activation.{" "}
  <span className="font-bold">
    Due to NDA restrictions, only a limited selection of screens and information
    can be shown.
  </span>
</p>
          <p className="font-alegreya font-bold text-[#5E3C2F] text-[12px] sm:text-[14px] lg:text-[16px] mt-6 sm:mt-8 md:mt-10">
    This project was made in partnership with Youth Geekers, A digital agency specializing in web, apps, UI/UX, branding, SEO, and gaming across Dubai, Europe, and beyond.
  </p>

            </div>

           {/* HERO IMAGE FRAME */}
  <div className="w-full mb-10 sm:mb-14 rounded-[28px]">
  <div className="w-full py-12 sm:py-16 lg:py-20">
    <div
      ref={heroImageRef}
      className="
        w-[100%] mx-auto
        sm:w-[100%]
        lg:w-full
        rounded-[28px]
        overflow-hidden
      "
    >
      <img
        src={NoweOnboardingHero}
        alt="Nowe Money Onboarding website mockup"
        fetchPriority="high"
        decoding="async"
        className="w-full h-auto block"
      />
    </div>
  </div>
</div>
          </div>
        </section>

        {/* ================= 01 — ABOUT ================= */}
    <section className="max-w-[1400px] mx-auto mt-[40px] sm:mt-[50px] md:mt-[50px] lg:mt-[70px]">
  <Reveal>
    <SceneLabel number="01" title="About" />
<div className="font-alegreya text-[15px] sm:text-[18px] leading-relaxed text-[#190A07]/85 space-y-4 max-w-[700px]">
      <p>
        NOWE Money is a cross-border fintech platform designed for individuals and businesses to manage multiple currencies,
        make international payments, and access European financial services.
      </p>

      <div className="space-y-1">
        <p className="font-semibold text-[13px] sm:text-[15px]">
          The challenge
        </p>
        <p>
          The onboarding experience needed to guide both personal and business users through account creation, verification,
          and setting up the services they needed, with each audience following a different journey.
        </p>
      </div>

      <div className="space-y-1">
        <p className="font-semibold text-[13px] sm:text-[15px]">
          My role
        </p>
        <p>
          I designed the full onboarding experience across 45+ screens for both personal and business users. My role covered
          structuring the onboarding flows, designing the UI system, and building the core journeys to help users move from
          creating an account to completing verification and activating their financial services.
        </p>
      </div>
    </div>
  </Reveal>
</section>

        {/* ================= 02 — USER FLOWS ================= */}
        <section className="max-w-[1400px] mx-auto mt-[80px] sm:mt-[110px] lg:mt-[120px]">
          <Reveal>
            <SceneLabel number="02" title="User Flow & Structure" />
            <p className="font-alegreya text-[15px] sm:text-[18px] leading-relaxed text-[#190A07]/85 max-w-[780px] mb-10">
              Mapped out the main steps for both personal and business users,
               keeping the onboarding experience clear and straightforward. Simplified for confidentiality.
            </p>
          </Reveal>

          <Reveal delay={100} className="mb-10">
            <h3 className="font-alegreya font-bold text-[17px] sm:text-[19px] mb-3">
              Simplified Onboarding User Flow
            </h3>
          </Reveal>
           <div className="w-full max-w-[800px] mx-auto rounded-2xl overflow-hidden">
              <img
                src={NoweOnboardingUserFlow}
                alt="Nowe onboarding user flow"
                className="w-full h-auto block"
              />
               <p className="font-alegreya text-[15px] sm:text-[18px] leading-relaxed text-[#190A07]/85 max-w-[880px] mt-8">
              This flow has been simplified for confidentiality, so some specific steps and internal details have been left out due to the NDA.
            </p>
            </div>
           


          
        </section>

        {/* ================= 03 — LOW-FIDELITY WIREFRAMES ================= */}
        <section className="max-w-[1400px] mx-auto mt-[80px] sm:mt-[110px] lg:mt-[120px]">
          <Reveal>
            <SceneLabel number="03" title="Low-Fidelity Wireframes" />
            <p className="font-alegreya text-[15px] sm:text-[18px] leading-relaxed text-[#190A07]/85 max-w-[780px] mb-8">
              Before getting into the visual design, I turned my initial sketches into
    low-fidelity wireframes to work out how the information should be organized
    on each page and how the screens would fit together across the onboarding flow.
            </p>
          </Reveal>

           <Reveal delay={100}>
<div className="w-full max-w-[1400px] mx-auto rounded-2xl overflow-hidden">  
              <img
                src={NoweOnboardingLow}
                alt="Nowe onboarding low-fidelity wireframes"
                className="w-full h-auto block"
              />
            </div>
          </Reveal>
        </section>


       

        {/* ================= 06 — KEY SECTIONS / UX DECISIONS ================= */}
        <section className="max-w-[1400px] mx-auto mt-[80px] sm:mt-[110px] lg:mt-[120px]">
          <Reveal className="mb-10">
            <SceneLabel number="04" title="Key Sections & UX Decisions" />
          </Reveal>

          <Reveal delay={100}>
<div className="w-full max-w-[1400px] mx-auto rounded-2xl overflow-hidden">  
    <img
      src={NoweOnboardingKeySections}
      alt="NOWE Money onboarding key sections and UX decisions"
      className="w-full h-auto block"
    />
  </div>
</Reveal>
        </section>

        {/* ================= 05 — DESIGN SYSTEM ================= */}
        <section className="max-w-[1400px] mx-auto mt-[80px] sm:mt-[110px] lg:mt-[120px]">
          <Reveal>
            <SceneLabel number="05" title="Design System" />
            <p className="font-alegreya text-[15px] sm:text-[18px] leading-relaxed text-[#190A07]/85 max-w-[1000px] mb-8">
              I created a consistent design system for both personal and business onboarding, covering typography, colors, buttons, and key UI elements. 
              <br>
              </br><strong>The selection shown here is only part of the full system.</strong>
            </p>
          </Reveal>

          <Reveal delay={100}>
            <div className="w-[1400px] max-w-full rounded-2xl overflow-hidden">
              <img
                src={NoweOnboardingDesignSystem}
                alt="NOWE Money design system"
                loading="lazy"
                decoding="async"
                className="w-full h-auto block"
              />
            </div>
          </Reveal>
        </section>

      
       
        {/* ================= 06 — HIGH-FIDELITY WIREFRAMES ================= */}
        <section className="max-w-[1400px] mx-auto mt-[80px] sm:mt-[110px] lg:mt-[120px]">
          <Reveal>
            <SceneLabel number="06" title="High-Fidelity Wireframes" />
            <p className="font-alegreya text-[15px] sm:text-[18px] leading-relaxed text-[#190A07]/85 max-w-[780px] mb-8">
Here are a few high-fidelity wireframes from the project. Due to NDA restrictions, the full set of screens cannot be shown.            </p>
          </Reveal>

          <Reveal delay={100}>
<div className="w-full max-w-[1400px] mx-auto rounded-2xl overflow-hidden">  
              <img
                src={NoweOnboardingHigh}
                loading="lazy"
                decoding="async"
                alt="Nowe onboarding high-fidelity wireframes"
                className="w-full h-auto block"
              />
            </div>
          </Reveal>
        </section>


        <section className="max-w-[1400px] mx-auto mt-[80px] sm:mt-[110px] lg:mt-[120px]">
  <Reveal>
    <SceneLabel number="07" title="Outcome & status" />
    <div className="font-alegreya text-[15px] sm:text-[18px] leading-relaxed text-[#190A07]/85 space-y-4 max-w-[780px]">
      <p>
        The onboarding experience was <strong>completed</strong>, <strong>handed off</strong>,
        and <strong>launched live</strong>.
        It covered both personal and business users, taking them through account
        creation, verification, and setting up their financial services.
      </p>

      <p>
        Due to the NDA, I can only share a limited selection of screens and
        can't disclose further project details.
      </p>
    </div>
  </Reveal>
</section>

        {/* ================= NEXT PROJECT ================= */}
        <section className="max-w-[1400px] mx-auto mt-[40px] sm:mt-[50px] lg:mt-[70px]">
  <Reveal>
    <div className="flex items-center justify-end border-t border-[#190A07]/15 pt-6">
      <button
        onClick={() => navigate("/epic-trading")}
        className="font-dudu text-[14px] sm:text-[16px] text-[#190A07]/60 hover:text-[#190A07] transition-colors interactive-hover"
      >
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