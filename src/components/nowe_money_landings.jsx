import Footer from "./Footer";
import { useEffect, useRef, useState } from "react";

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

export default function NoweLandingsCaseStudy() {
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
              <SceneLabel number="Hero" title="Nowe Landings" />

              <h1 className="font-whatnot font-bold text-[32px] sm:text-[48px] lg:text-[60px] leading-[1.05] max-w-[820px]">
                Nowe Landings
              </h1>

              <p className="font-whatnot text-[16px] sm:text-[20px] lg:text-[22px] text-[#5E3C2F] mt-4 max-w-[640px]">
                Designing a set of responsive landing pages for Nowe, focused
                on presenting its services and information in a structured,
                engaging, and consistent way.
              </p>
            </div>

            <MediaPlaceholder
              label="Hero mockup"
              className="mb-10 sm:mb-14"
            />
          </div>
        </section>

        {/* ================= 01 — ABOUT ================= */}
        <section className="max-w-[1200px] mx-auto mt-[80px] sm:mt-[110px] lg:mt-[120px]">
          <Reveal>
            <SceneLabel number="01" title="About" />

            <div className="font-whatnot text-[15px] sm:text-[18px] leading-relaxed text-[#190A07]/85 space-y-4 max-w-[780px]">
              <p>
                Nowe Landings is a collection of landing pages created to
                communicate Nowe's different offerings and provide focused
                entry points for users.
              </p>

              <p>
                I worked on the landing page experience from structure and
                content organization to the final UI, focusing on creating
                layouts that could communicate each offering while remaining
                consistent across the wider Nowe website.
              </p>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <p className="font-whatnot text-[14px] sm:text-[16px] text-[#5E3C2F] mt-8 mb-4 max-w-[780px]">
              A few key sections from the landing pages.
            </p>

            <ScreenGrid
              cols="grid-cols-3"
              screens={[
                {
                  label: "Hero Section",
                  g: "linear-gradient(160deg,#0F2A43,#1B3D5C)",
                },
                {
                  label: "Services",
                  g: "linear-gradient(160deg,#1B3D5C,#C9A227)",
                },
                {
                  label: "Call to Action",
                  g: "linear-gradient(160deg,#0F2A43,#C9A227)",
                },
              ]}
            />
          </Reveal>
        </section>

        {/* ================= 02 — USER FLOWS ================= */}
        <section className="max-w-[1200px] mx-auto mt-[80px] sm:mt-[110px] lg:mt-[120px]">
          <Reveal>
            <SceneLabel number="02" title="User Flows" />

            <p className="font-whatnot text-[15px] sm:text-[18px] leading-relaxed text-[#190A07]/85 max-w-[780px] mb-10">
              Rather than mapping every possible path, I focused on the key
              journeys users would take through the landing pages and the
              actions they were expected to complete.
            </p>
          </Reveal>

          <Reveal delay={100} className="mb-10">
            <h3 className="font-whatnot font-bold text-[17px] sm:text-[19px] mb-3">
              Explore a landing page
            </h3>

            <MediaPlaceholder label="Explore a landing page — flow" />
          </Reveal>

          <Reveal delay={200}>
            <h3 className="font-whatnot font-bold text-[17px] sm:text-[19px] mb-3">
              Take action
            </h3>

            <MediaPlaceholder label="CTA — flow" />
          </Reveal>
        </section>

        {/* ================= 03 — LOW-FIDELITY WIREFRAMES ================= */}
        <section className="max-w-[1200px] mx-auto mt-[80px] sm:mt-[110px] lg:mt-[120px]">
          <Reveal>
            <SceneLabel number="03" title="Low-Fidelity Wireframes" />

            <p className="font-whatnot text-[15px] sm:text-[18px] leading-relaxed text-[#190A07]/85 max-w-[780px] mb-8">
              Before starting any visual design, I started with low-fidelity
              wireframes to organize the content, establish the hierarchy,
              and put the structure I sketched into place.
            </p>
          </Reveal>

          <Reveal delay={100}>
            <MediaPlaceholder label="Low-fidelity wireframes" />
          </Reveal>
        </section>

        {/* ================= 04 — HIGH-FIDELITY WIREFRAMES ================= */}
        <section className="max-w-[1200px] mx-auto mt-[80px] sm:mt-[110px] lg:mt-[120px]">
          <Reveal>
            <SceneLabel number="04" title="High-Fidelity Wireframes" />

            <p className="font-whatnot text-[15px] sm:text-[18px] leading-relaxed text-[#190A07]/85 max-w-[780px] mb-8">
              Here are a few of the key landing pages developed in
              high-fidelity wireframes.
            </p>
          </Reveal>

          <Reveal delay={100}>
            <MediaPlaceholder label="High-fidelity wireframes" />
          </Reveal>
        </section>

        {/* ================= 05 — SITE MAP ================= */}
        <section className="max-w-[1200px] mx-auto mt-[80px] sm:mt-[110px] lg:mt-[120px]">
          <Reveal>
            <SceneLabel number="05" title="Site Map" />

            <p className="font-whatnot text-[15px] sm:text-[18px] leading-relaxed text-[#190A07]/85 max-w-[780px] mb-10">
              Here is the site map of the Nowe Landings project, showing how
              the landing pages and their content are organized.
            </p>
          </Reveal>

          <Reveal delay={100}>
            <MediaPlaceholder label="Site map" />
          </Reveal>
        </section>

        {/* ================= 06 — KEY SECTIONS / UX DECISIONS ================= */}
        <section className="max-w-[1200px] mx-auto mt-[80px] sm:mt-[110px] lg:mt-[120px]">
          <Reveal className="mb-10">
            <SceneLabel number="06" title="Key Sections & UX Decisions" />
          </Reveal>

          <Reveal delay={100}>
            <div className="grid grid-cols-1 lg:grid-cols-[800px_1fr] gap-8 items-end">

              {/* Placeholder */}
              <div className="w-full lg:w-[800px]">
                <MediaPlaceholder label="Key sections & UX decisions" />
              </div>

              {/* Right column */}
              <div className="lg:pb-[250px]">
                <p className="font-whatnot text-[14px] sm:text-[15px] leading-relaxed text-[#190A07]/80">
                  I focused on the sections that carried the most important
                  information for users, simplifying the content while
                  keeping the experience structured and easy to follow.

                  <br />
                  <br />

                  I used a combination of structured text, visual hierarchy,
                  icons, imagery, and clear calls to action to make each
                  landing page easier to scan and understand.

                  <br />
                  <br />

                  The goal was to create a consistent visual language across
                  the different landing pages while allowing each one to
                  communicate its specific purpose.
                </p>
              </div>

            </div>
          </Reveal>
        </section>

        {/* ================= 07 — DESIGN SYSTEM ================= */}
        <section className="max-w-[1200px] mx-auto mt-[80px] sm:mt-[110px] lg:mt-[120px]">
          <Reveal>
            <SceneLabel number="07" title="Design System" />

            <p className="font-whatnot text-[15px] sm:text-[18px] leading-relaxed text-[#190A07]/85 max-w-[780px] mb-8">
              Since there was no existing system to inherit, I built one from
              scratch, focusing on reusable components, sections, buttons,
              colors, and other UI elements to maintain consistency throughout
              the landing pages.
            </p>
          </Reveal>

          <Reveal delay={100}>
            <MediaPlaceholder
              label="Design system"
              className="max-w-[1100px]"
            />
          </Reveal>
        </section>

        {/* ================= 08 — FINAL PRODUCT / INTERACTIONS ================= */}
        <section className="max-w-[1200px] mx-auto mt-[80px] sm:mt-[110px] lg:mt-[120px]">
          <Reveal>
            <SceneLabel number="08" title="Final Product & Interactions" />

            <p className="font-whatnot text-[15px] sm:text-[18px] leading-relaxed text-[#190A07]/85 max-w-[780px] mb-10">
              Snippets of the finished landing pages in motion.
            </p>
          </Reveal>

          {/* Interaction 01 */}
          <Reveal delay={100} className="mb-10">
            <MediaPlaceholder
              label="Interaction — clip 01"
              className="aspect-video"
            />
          </Reveal>

          {/* Interaction 02 */}
          <Reveal delay={150}>
            <MediaPlaceholder
              label="Interaction — clip 02"
              className="aspect-video"
            />
          </Reveal>
        </section>

        {/* ================= NEXT PROJECT ================= */}
        <section className="max-w-[1200px] mx-auto mt-[120px] sm:mt-[160px]">
          <Reveal>
            <div className="flex items-center justify-between border-t border-[#190A07]/15 pt-6">
              <button className="font-dudu text-[14px] sm:text-[16px] text-[#190A07]/60 hover:text-[#190A07] transition-colors interactive-hover">
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