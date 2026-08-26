import Footer from "./Footer";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useNavigate } from "react-router-dom";

import EpicHeroMockup from "../assets/epic_trading_mockup.png";
import EpicCTA1 from "../assets/epicCTA1.png";
import EpicCTA2 from "../assets/epicCTA2.png";
import EpicCTA3 from "../assets/epicCTA3.png";
import ExploreProducts from "../assets/explore_product_UF.png";
import RequestQuote from "../assets/Rfq_UF.png";
import LowFidEpic from "../assets/low_fid_epic.png";
import HighFidEpic from "../assets/high_fid_epic.png";
import IAEpic from "../assets/IA_epic.png";
import KeySectionsEpic from "../assets/Key_sections_epic.png";
import DesignSystemEpic from "../assets/design_system_epic.png";
import UiLoopEpic1 from "../assets/ui_loop_epic1.mp4";
import UiLoopEpic2 from "../assets/ui_loop_epic2.mp4";

gsap.registerPlugin(ScrollTrigger);

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

function SceneLabel({ number, title }) {
  return (
    <p className="font-dudu text-[#C33E23] text-[13px] sm:text-[15px] tracking-[0.1em] uppercase mb-3">
      {number} — {title}
    </p>
  );
}

function ScreenGrid({
  screens,
  cols = "grid-cols-2 sm:grid-cols-3 lg:grid-cols-5",
}) {
  return (
    <div className={`grid ${cols} gap-4`}>
      {screens.map((screen) => (
        <div key={screen.label} className="flex flex-col gap-2">
          <div
            className="aspect-[9/16] rounded-lg overflow-hidden"
            style={{
              background: screen.g || "#eee",
            }}
          >
            {screen.src && (
              <img
                src={screen.src}
                alt={screen.label}
                className="w-full h-full object-cover"
              />
            )}

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

export default function EpicTradingCaseStudy() {
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
      <main className="-mt-8 px-4 sm:px-8 lg:px-[60px] xl:px-[100px] pt-[100px] sm:pt-[130px] pb-[80px]">
<section className="relative">
  <div className="w-full max-w-[1200px] mx-auto">

    <div className="mb-6 sm:mb-8">
      <SceneLabel number="Hero" />

      <h1 className="font-whatnot font-bold text-[32px] sm:text-[48px] lg:text-[60px] leading-[1.05] max-w-[820px]">
        Epic Trading
      </h1>

      <p className="font-whatnot text-[16px] sm:text-[20px] lg:text-[22px] text-[#5E3C2F] mt-4 max-w-[640px]">
        Designing a full B2B commodities trading website from
        navigation and product architecture to the request-for-quote
        experience.
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
        src={EpicHeroMockup}
        alt="Epic Trading website mockup"
        className="w-full h-auto block"
      />
    </div>
  </div>
</div>

  </div>
</section>

        <section className="max-w-[1200px] mx-auto mt-[10px] sm:mt-[50px] lg:mt-[70px]">
          <Reveal>
            <SceneLabel number="01" title="About" />
            <div className="font-whatnot text-[15px] sm:text-[18px] leading-relaxed text-[#190A07]/85 space-y-4 max-w-[780px]">
              <p>
                Epic Trading is a B2B commodities trading company operating
                across sugar, palm oil, refined hydrocarbons, and gold &
                precious metals. Buyers and partners come to the site to
                understand what Epic sources, how the company operates, and how
                to start a request.
              </p>
              <p>
                I designed the full website experience there was no existing
                design system or prior site to build on. My role covered the
                complete process: structuring the information architecture,
                designing the UI system, and building the core flows a B2B
                buyer would need to move from "discovering a product" to
                "requesting a quote."
              </p>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <p className="font-whatnot text-[14px] sm:text-[16px] text-[#5E3C2F] mt-8 mb-4 max-w-[780px]">
              A few key actions from the site.
            </p>
            <ScreenGrid
              cols="grid-cols-3"
              screens={[
                { label: "Explore Products", src: EpicCTA1 },
                { label: "Request a Quote", src: EpicCTA2 },
                { label: "Become a Partner", src: EpicCTA3 },
              ]}
            />
          </Reveal>
        </section>

        <section className="max-w-[1200px] mx-auto mt-[80px] sm:mt-[110px] lg:mt-[120px]">
          <Reveal>
            <SceneLabel number="02" title="User Flows" />
            <p className="font-whatnot text-[15px] sm:text-[18px] leading-relaxed text-[#190A07]/85 max-w-[780px] mb-10">
              Rather than mapping every possible path, I focused on the two
              flows that matter most to a B2B buyer.
            </p>
          </Reveal>

          <Reveal delay={100} className="mb-10">
            <h3 className="font-whatnot font-bold text-[17px] sm:text-[19px] mb-3">
              Explore a product
            </h3>
            <div className="w-full rounded-2xl overflow-hidden">
              <img
                src={ExploreProducts}
                alt="Explore a product user flow"
                className="w-full h-auto block"
              />
            </div>
          </Reveal>

          <Reveal delay={200}>
            <h3 className="font-whatnot font-bold text-[17px] sm:text-[19px] mb-3">
              Submit a request
            </h3>
            <div className="w-full rounded-2xl overflow-hidden">
              <img
                src={RequestQuote}
                alt="Request a quote user flow"
                className="w-full h-auto block"
              />
            </div>
          </Reveal>
        </section>

        <section className="max-w-[1200px] mx-auto mt-[80px] sm:mt-[110px] lg:mt-[120px]">
          <Reveal>
            <SceneLabel number="03" title="Low-Fidelity Wireframes" />
            <p className="font-whatnot text-[15px] sm:text-[18px] leading-relaxed text-[#190A07]/85 max-w-[780px] mb-8">
              Before starting any visual design, I started with low-fidelity
              wireframes to organize the content, establish the hierarchy, and
              put the structure I sketched into place.
            </p>
          </Reveal>

          <Reveal delay={100}>
            <div className="w-full rounded-2xl overflow-hidden bg-[#343333] p-6 sm:p-10"> 
              <img
                src={LowFidEpic}
                alt="EPIC Trading low-fidelity wireframes"
                className="w-full h-auto block"
              />
            </div>
          </Reveal>
        </section>

        <section className="max-w-[1200px] mx-auto mt-[80px] sm:mt-[110px] lg:mt-[120px]">
          <Reveal>
            <SceneLabel number="04" title="High-Fidelity Wireframes" />
            <p className="font-whatnot text-[15px] sm:text-[18px] leading-relaxed text-[#190A07]/85 max-w-[780px] mb-8">
              Here are a few of the key pages in high-fidelity wireframes.
            </p>
          </Reveal>

          <Reveal delay={100}>
            <div className="w-full rounded-2xl overflow-hidden bg-[#0F2A43] p-6 sm:p-10">
              <img
                src={HighFidEpic}
                alt="EPIC Trading high-fidelity wireframes"
                className="w-full h-auto block"
              />
            </div>
          </Reveal>
        </section>

        <section className="max-w-[1200px] mx-auto mt-[80px] sm:mt-[110px] lg:mt-[120px]">
          <Reveal>
            <SceneLabel number="05" title="Site Map" />
            <p className="font-whatnot text-[15px] sm:text-[18px] leading-relaxed text-[#190A07]/85 max-w-[780px] mb-10">
              Here is the full sitemap of the EPIC website, showing how the
              pages and content are organized across the site.
            </p>
          </Reveal>

          <Reveal delay={100}>
            <div className="w-full rounded-2xl overflow-hidden">
              <img
                src={IAEpic}
                alt="EPIC Trading information architecture"
                className="w-full h-auto block"
              />
            </div>
          </Reveal>
        </section>

        <section className="max-w-[1200px] mx-auto mt-[80px] sm:mt-[110px] lg:mt-[120px]">
          <Reveal className="mb-8 sm:mb-10">
            <SceneLabel number="06" title="Key Sections & UX Decisions" />
          </Reveal>

          <Reveal delay={100}>
            <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,800px)_minmax(260px,1fr)] gap-8 lg:gap-10">
              <div className="w-full min-w-0">
                <img
                  src={KeySectionsEpic}
                  alt="EPIC Trading key sections and UX decisions"
                  className="w-full max-w-full h-auto block rounded-2xl"
                />
              </div>

              <div className="w-full min-w-0 mb-10 lg:mb-0 flex items-center">
                <p className="font-whatnot text-[13px] sm:text-[15px] leading-relaxed text-[#190A07]/80 w-full lg:max-w-[350px]">
                  <span className="block">
                    I chose these sections in particular because they contain
                    important B2B corporate information, and the goal was to
                    simplify it as much as possible while keeping the user
                    experience clear.
                  </span>

                  <span className="block mt-5">
                    I used structured text, icons, and media to make the
                    information easier to understand while maintaining visual
                    harmony across the pages.
                  </span>

                  <span className="block mt-5">
                    For example, the How We Work section presents clear steps
                    in a simple way, while the Services section uses split media
                    and text sections for better readability and a more
                    comfortable visual experience.
                  </span>
                </p>
              </div>
            </div>
          </Reveal>
        </section>

        <section className="max-w-[1200px] mx-auto mt-[80px] sm:mt-[110px] lg:mt-[120px]">
          <Reveal>
            <SceneLabel number="07" title="Design System" />
            <p className="font-whatnot text-[15px] sm:text-[18px] leading-relaxed text-[#190A07]/85 max-w-[780px] mb-8">
              Since there was no existing system to inherit, I built one from
              scratch, focusing on reusable components, sections, buttons,
              colors, and other UI elements to maintain consistency throughout
              the website.
            </p>
          </Reveal>

          <Reveal delay={100}>
            <div className="w-[1200px] max-w-full rounded-2xl overflow-hidden">
              <img
                src={DesignSystemEpic}
                alt="EPIC Trading design system"
                className="w-full h-auto block"
              />
            </div>
          </Reveal>
        </section>

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
                src={UiLoopEpic1}
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                className="w-full h-auto block"
              />
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="w-full max-w-[1200px] rounded-2xl overflow-hidden">
              <video
                src={UiLoopEpic2}
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

       <section className="max-w-[1200px] mx-auto mt-[120px] sm:mt-[160px]">
  <Reveal>
    <div className="flex justify-end border-t border-[#190A07]/15 pt-6">
      <button
        onClick={() => navigate("/nowe-money-onboarding")}
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