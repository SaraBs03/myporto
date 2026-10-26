import Footer from "./Footer";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useNavigate } from "react-router-dom";
import ExploreProductFlow from "./ExploreProductFlow";
import EpicHeroMockup from "../assets/epic_trading_mockup.png";
import EpicCTA1 from "../assets/epicCTA1.png";
import EpicCTA2 from "../assets/epicCTA2.png";
import EpicCTA3 from "../assets/epicCTA3.png";
import ExploreProducts from "../assets/explore_product_UF.png";
import RequestQuote from "../assets/Rfq_UF.png";
import LowFidEpic from "../assets/low_fid_epic.png";
import KeySectionsEpic from "../assets/Key_sections_epic.png";
import DesignSystemEpic from "../assets/design_system_epic.png";
import UiLoopEpic1 from "../assets/ui_loop_epic1.mp4";
import UiLoopEpic2 from "../assets/ui_loop_epic2.mp4";
import SubmitRequestFlow from "./SubmitRequestFlow";
import HighFidEpic1 from "../assets/highfidepic1.png";
import HighFidEpic2 from "../assets/highfidepic2.png";
import HighFidEpic3 from "../assets/highfidepic3.png";
import EpicTradingSiteMap from "../assets/epictradingsitemap.png"



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

/* ---------- SCENE LABEL (section eyebrow) ---------- */
function SceneLabel({ number, title }) {
  return (
    <p className="font-dudu font-bold text-[#C33E23] text-[15px] sm:text-[17px] lg:text-[18px] tracking-[0.08em] uppercase mb-4">
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
      <main className="-mt-8 px-4 sm:px-4 md:px-8 lg:px-[150px] pt-[100px] sm:pt-[130px] pb-[80px]">
<section className="relative">
  <div className="w-full max-w-[1400px]">

    <div className="mb-6 sm:mb-8">
      

      <h1 className="font-alegreya  font-bold text-[32px] sm:text-[48px] lg:text-[60px] leading-[1.05] max-w-[820px]">
        Epic Trading
      </h1>

      <p className="font-alegreya  text-[16px] sm:text-[20px] lg:text-[22px] text-[#5E3C2F] mt-4 max-w-[640px]">
        Designing a full B2B commodities trading website from
        navigation and product architecture to the request-for-quote
        experience.
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
        src={EpicHeroMockup}
        alt="Epic Trading website mockup"
        className="w-full h-auto block"
      />
    </div>
  </div>
</div>

  </div>
</section>

        <section className="max-w-[1400px] mx-auto mt-[40px] sm:mt-[50px] md:mt-[50px] lg:mt-[70px]">
  <Reveal>
    <SceneLabel number="01" title="About" />
    <div className="font-alegreya text-[15px] sm:text-[18px] leading-relaxed text-[#190A07]/85 space-y-4 max-w-[780px]">
      <p>
        Epic Trading is a B2B commodities trading company operating
        across sugar, palm oil, refined hydrocarbons, and gold &
        precious metals. Buyers and partners come to the site to
        understand what Epic offers, how the company operates, and
        how to get in touch.
      </p>

      <div className="space-y-1">
        <p className="font-bold text-[14px] sm:text-[16px]">
          The challenge
        </p>
        <p>
          There was no existing website or design system to build on,
          so the goal was to bring everything together from scratch
          and make it easier for buyers and partners to find what
          they need, whether that's exploring products, requesting
          a quote, or becoming a partner.
        </p>
      </div>

      <div className="space-y-1">
        <p className="font-bold text-[14px] sm:text-[16px]">
          My role
        </p>
        <p>
          I designed the website from scratch, from structuring the
          information and mapping out the main flows to designing
          the UI system. I focused on the main things buyers and
          partners would come to the site for, making sure they had
          clear paths to explore products, request a quote, or get
          in touch about becoming a partner.
        </p>
      </div>
    </div>
  </Reveal>

  <Reveal delay={150}>
    <p className="font-alegreya text-[14px] sm:text-[16px] text-[#5E3C2F] mt-8 mb-4 max-w-[780px]">
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

        <section className="max-w-[1400px] mx-auto mt-[80px] sm:mt-[110px] lg:mt-[120px]">
         <Reveal>
    <SceneLabel number="02" title="User Flows" />
  <h3 className="font-alegreya font-bold text-[17px] sm:text-[19px] mb-3">
    Explore a product & Submit a request
  </h3>

  <ExploreProductFlow />
</Reveal>

          <Reveal delay={200}>
  <SubmitRequestFlow />
</Reveal>
        </section>

        <section className="max-w-[1400px] mx-auto mt-[80px] sm:mt-[110px] lg:mt-[120px]">
          <Reveal>
            <SceneLabel number="03" title="Low-Fidelity Wireframes" />
            <p className="font-alegreya text-[15px] sm:text-[18px] leading-relaxed text-[#190A07]/85 max-w-[780px] mb-8">
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

        <section className="max-w-[1400px] mx-auto mt-[80px] sm:mt-[110px] lg:mt-[120px]">
  <Reveal>
    <SceneLabel number="04" title="High-Fidelity Wireframes" />
    <p className="font-alegreya text-[15px] sm:text-[18px] leading-relaxed text-[#190A07]/85 max-w-[780px] mb-8">
      Here are a few of the key pages in high-fidelity wireframes.
    </p>
  </Reveal>

  <Reveal delay={100}>
    <div className="w-full rounded-2xl overflow-hidden bg-[#0F2A43] p-4 sm:p-8">
<div className="grid grid-cols-1 sm:grid-cols-3 gap-0 items-start">
  <img
    src={HighFidEpic1}
    alt="EPIC Trading high-fidelity wireframe 1"
    className="block w-full h-auto m-0 p-0"
    loading="lazy"
    decoding="async"
  />
  <img
    src={HighFidEpic2}
    alt="EPIC Trading high-fidelity wireframe 2"
    className="block w-full h-auto m-0 p-0"
    loading="lazy"
    decoding="async"
  />
  <img
    src={HighFidEpic3}
    alt="EPIC Trading high-fidelity wireframe 3"
    className="block w-full h-auto m-0 p-0"
    loading="lazy"
    decoding="async"
  />
</div>
    </div>
  </Reveal>
</section>

        <section className="max-w-[1400px] mx-auto mt-[80px] sm:mt-[110px] lg:mt-[120px]">
  <Reveal>
    <SceneLabel number="05" title="Site Map" />
    <p className="font-alegreya text-[15px] sm:text-[18px] leading-relaxed text-[#190A07]/85 max-w-[780px] mb-10">
      Here is the full sitemap of the EPIC website, showing how the
      pages and content are organized across the site.
    </p>
  </Reveal>

  <Reveal delay={100}>
  <img
    src={EpicTradingSiteMap}
    alt="EPIC Trading Co. website sitemap"
    className="w-full h-auto rounded-xl mx-auto block"
  />
</Reveal>
</section>

        <section className="max-w-[1400px] mx-auto mt-[80px] sm:mt-[110px] lg:mt-[120px]">
  <Reveal className="mb-8 sm:mb-10">
    <SceneLabel number="06" title="Key Sections & UX Decisions" />
  </Reveal>

  <Reveal delay={100}>
    
<div className="flex flex-col gap-6 lg:gap-8">
  <div className="w-full min-w-0">
    <img
      src={KeySectionsEpic}
      alt="EPIC Trading key sections and UX decisions"
      className="w-full max-w-full h-auto block rounded-2xl"
    />
  </div>

  <div className="w-full min-w-0 mb-10 lg:mb-0">
    <div className="font-alegreya text-[15px] sm:text-[17px] leading-relaxed text-[#190A07]/80 w-full max-w-[980px] space-y-5">
      <p>
        I focused on these sections because they cover the main things
        buyers and partners would want to understand before reaching out:
        the services Epic offers, how the company works, and its compliance
        and governance information.
      </p>

      <p>
        I used structured text, icons, and supporting visuals to break down
        the information across the pages, while keeping the layouts
        consistent throughout the website.
      </p>

      <p>
        For example, the How We Work section breaks the process into five
        steps, from Qualify to Execute & Close, so visitors can get a sense
        of how working with Epic progresses. In the Services section, I
        paired text with visuals to give each service its own space and
        make the information easier to scan.
      </p>
    </div>
  </div>
</div>

  </Reveal>
</section>

        <section className="max-w-[1400px] mx-auto mt-[80px] sm:mt-[110px] lg:mt-[120px]">
          <Reveal>
            <SceneLabel number="07" title="Design System" />
            <p className="font-alegreya text-[15px] sm:text-[18px] leading-relaxed text-[#190A07]/85 max-w-[780px] mb-8">
              Since there was no existing system to inherit, I built one from
              scratch, focusing on reusable components, sections, buttons,
              colors, and other UI elements to maintain consistency throughout
              the website.
            </p>
          </Reveal>

          <Reveal delay={100}>
            <div className="w-[1400px] max-w-full rounded-2xl overflow-hidden">
              <img
                src={DesignSystemEpic}
                alt="EPIC Trading design system"
                className="w-full h-auto block"
              />
            </div>
          </Reveal>
        </section>

        <section className="max-w-[1400px] mx-auto mt-[80px] sm:mt-[110px] lg:mt-[120px]">
          <Reveal>
            <SceneLabel number="08" title="Final Product & Interactions" />
            <p className="font-alegreya text-[15px] sm:text-[18px] leading-relaxed text-[#190A07]/85 max-w-[780px] mb-10">
              Snippets of the finished site in motion.
            </p>
          </Reveal>

          <Reveal delay={100} className="mb-10">
            <div className="w-full max-w-[1400px] mx-auto rounded-2xl overflow-hidden">
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
            <div className="w-full max-w-[1400px] mx-auto rounded-2xl overflow-hidden">
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


<section className="max-w-[1200px] mx-auto mt-[80px] sm:mt-[110px] lg:mt-[120px]">
  <Reveal>
    <SceneLabel number="09" title="Outcome & status" />
    <div className="font-alegreya text-[15px] sm:text-[18px] leading-relaxed text-[#190A07]/85 space-y-4 max-w-[780px]">
      <p>
        The website was <strong>completed</strong> and <strong>handed off</strong> for implementation.
        It covered the full website experience, from product exploration and service discovery to requesting a quote and becoming a partner, 
        supported by a consistent design system.
        
      </p>
    </div>
  </Reveal>
</section>


<section className="max-w-[1400px] mx-auto mt-[40px] sm:mt-[50px] lg:mt-[70px]">
  <Reveal>
    <div className="flex items-center justify-between border-t border-[#190A07]/15 pt-6">
      <button
        onClick={() => navigate("/nowe-money-onboarding")}
        className="font-dudu text-[14px] sm:text-[16px] text-[#190A07]/60 hover:text-[#190A07] transition-colors interactive-hover"
      >
        ← Previous
      </button>

      <button
        onClick={() => navigate("/nowe-money-seo-pages")}
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