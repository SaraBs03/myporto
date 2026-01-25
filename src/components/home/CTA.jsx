import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CTA() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();
   const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      {
        threshold: 0.1, 
        rootMargin: "0px 0px -100px 0px", 
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  const goToContact = () => {
  navigate("/contact");
  setMenuOpen(false); 
};

  return (
    <section
  ref={sectionRef}
  className="
    w-full bg-[#190A07] -mt-[20rem] flex items-center
    h-[35vh] md:h-[clamp(52vh,55vw,55vh)] lg:h-[70vh] relative
    overflow-hidden
  "
  style={{
    backgroundImage: `
      linear-gradient(to right, rgba(243,230,212,0.1) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(243,230,212,0.1) 1px, transparent 1px)
    `,
    backgroundSize: '40px 40px',
  }}
>
      {/* Main CTA text - bigger on iPhone */}
{/* Main CTA text - bigger on iPhone and iPad */}
<h1
  className={`
    font-whatnot text-[#F3E6D4] 
    text-[68px] sm:text-[120px] md:text-9xl lg:text-[13rem]  xl:text-[16rem]
    
    text-center
    leading-tight
    tracking-tight
    w-full
    transition-all duration-1000 ease-out
    transform
    md:mt-6
    ${isVisible 
      ? 'translate-x-0 opacity-100' 
      : 'translate-x-[100vw] opacity-0 lg:translate-x-[50vw]'
    }
  `}
>
  Let's Create<br />Together
</h1>

{/* Right-side tilted button - smaller on iPhone */}
<button
  className={`
    max-sm:right-[3rem]
    max-sm:translate-x-0
    cta-button-container absolute right-[3rem] md:right-[6rem] lg:right-[10rem]
    top-[23vh] sm:top-[19rem] md:top-[23rem] lg:top-[33rem] xl:top-[26rem]
    text-[10px] sm:text-base md:text-2xl lg:text-4xl font-dudu text-[#F3E6D4]
    leading-tight rotate-[-6deg] px-2 py-1 sm:px-4 sm:py-2 bg-[#C33E23]
    group cursor-pointer interactive-hover
    transition-all duration-1000 ease-out delay-300
    transform
    md:mt-16 
    animate-heartbeat-slow
    hover:animate-none active:animate-none
    xl:rounded-lg lg:rounded-lg rounded-md
    ${isVisible 
      ? 'translate-x-0 opacity-100' 
      : 'translate-x-[100vw] opacity-0 lg:translate-x-[50vw]'
    }
  `}
  onClick={() => {
    
    const btn = document.querySelector('.cta-button-container');
    btn?.classList.remove('animate-heartbeat-slow');
  
    goToContact();
  }}
>
  <span className="group-hover:hidden active:hidden">Tell me what you're thinking :)</span>
  <span className="hidden group-hover:inline active:inline">Tell me what you're thinking :D</span>
</button>

    </section>
  );
}