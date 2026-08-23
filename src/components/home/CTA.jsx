import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const MESSAGES = [
  "Hello there",
  "want to see what I've been building?",
  "let's explore together :)",
];

export default function CTA() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [typedMessages, setTypedMessages] = useState([]);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [showTypingDots, setShowTypingDots] = useState(false);
  const [inputVisible, setInputVisible] = useState(false);
  const [inputFocused, setInputFocused] = useState(false);
  const [clock, setClock] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setIsVisible(true);
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  // HUD clock, ticks every second
  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const h = String(now.getHours()).padStart(2, "0");
      const m = String(now.getMinutes()).padStart(2, "0");
      setClock(`${h}:${m}`);
    };
    updateClock();
    const t = setInterval(updateClock, 1000 * 30);
    return () => clearInterval(t);
  }, []);

  // typewriter sequence, message by message
  useEffect(() => {
    if (!isVisible) return;
    let cancelled = false;
    const timers = [];

    const typeMessage = (index) =>
      new Promise((resolve) => {
        setShowTypingDots(true);
        const pauseBeforeTyping = 650 + Math.random() * 400;
        const t1 = setTimeout(() => {
          if (cancelled) return;
          setShowTypingDots(false);
          setActiveIndex(index);
          const text = MESSAGES[index];
          let charIndex = 0;
          const charInterval = setInterval(() => {
            if (cancelled) {
              clearInterval(charInterval);
              return;
            }
            charIndex++;
            setTypedMessages((prev) => {
              const next = [...prev];
              next[index] = text.slice(0, charIndex);
              return next;
            });
            if (charIndex >= text.length) {
              clearInterval(charInterval);
              resolve();
            }
          }, 32);
          timers.push(charInterval);
        }, pauseBeforeTyping);
        timers.push(t1);
      });

    const run = async () => {
      setTypedMessages(MESSAGES.map(() => ""));
      for (let i = 0; i < MESSAGES.length; i++) {
        await typeMessage(i);
        await new Promise((resolve) => {
          const t = setTimeout(resolve, 450);
          timers.push(t);
        });
      }
      if (!cancelled) setInputVisible(true);
    };

    run();

    return () => {
      cancelled = true;
      timers.forEach((t) => {
        clearTimeout(t);
        clearInterval(t);
      });
    };
  }, [isVisible]);

  const goToContact = () => navigate("/contact");

  return (
    <section
      ref={sectionRef}
      className="
  w-full bg-[#F3E6D4] flex items-center justify-center
        min-h-[350px] sm:min-h-[520px] md:min-h-[580px] lg:min-h-[760px] relative
        overflow-hidden mt-0 px-4
      "
style={{
  backgroundImage: `
    linear-gradient(to right, rgba(94,60,47,0.12) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(94,60,47,0.12) 1px, transparent 1px)
  `,
  backgroundSize: "40px 40px",
}}
    >
      

     

<div
  className="
    relative z-10 w-full 
    max-w-[320px] xs:max-w-[360px] sm:max-w-[430px] md:max-w-[500px] lg:max-w-[680px]
    flex flex-col gap-2 sm:gap-3 lg:gap-4
    rounded-[28px] sm:rounded-[36px]
    border border-[#5E3C2F]/15
    bg-[#F7EBDD]/50
    backdrop-blur-sm
    px-4 py-5
    sm:px-6 sm:py-7
    md:px-8 md:py-8
    shadow-[0_10px_40px_rgba(94,60,47,0.08)]
  "
>        <div
  className={`flex items-center justify-between mb-1 sm:mb-2 transition-all duration-700 ${
    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
  }`}
>
  <div className="flex items-center gap-2 sm:gap-3">
    {/* avatar */}
    <div
      className="
        w-7 h-7 sm:w-9 sm:h-9
        rounded-full
        bg-[#5E3C2F]
        flex items-center justify-center
      "
    >
      <span className="font-dudu text-[#F3E6D4] text-[12px] sm:text-[15px]">
        S
      </span>
    </div>

    <span className="font-dudu text-[#5E3C2F]/70 text-[14px] sm:text-[18px] md:text-[22px] tracking-[0.04em]">
      Sara
    </span>
  </div>

  <span className="font-dudu font-bold text-[10px] sm:text-[12px] md:text-[15px] text-[#5E3C2F]/60 italic">
    online
  </span>
</div>

        {/* message bubbles */}
        <div className="flex flex-col gap-2 sm:gap-3 min-h-[120px] xs:min-h-[140px] sm:min-h-[170px] md:min-h-[200px] lg:min-h-[280px]">
          {MESSAGES.map((_, i) => {
            if (i > activeIndex) return null;
            const text = typedMessages[i] || "";
            const isTypingThis = i === activeIndex && text.length < MESSAGES[i].length;
            return (
              <div
                key={i}
                className="max-w-[85%] xs:max-w-[80%] bg-[#5E3C2F] text-[#F3E6D4] font-dudu
                  text-[13px] xs:text-[14px] sm:text-[15px] md:text-[17px] lg:text-[24px]
                  rounded-2xl rounded-bl-sm px-3 py-2.5 xs:px-4 xs:py-3 sm:px-4 sm:py-3 md:px-5 md:py-3.5 lg:px-8 lg:py-5
                  animate-[fadeUp_0.3s_ease-out]"
              >
                {text}
                {isTypingThis && (
                  <span className="inline-block w-[2px] h-[1em] bg-[#F3E6D4]/80 ml-0.5 align-middle animate-pulse" />
                )}
              </div>
            );
          })}

          {showTypingDots && (
            <div className="max-w-[48px] xs:max-w-[55px] sm:max-w-[70px] bg-[#5E3C2F] rounded-2xl rounded-bl-sm px-2.5 py-2 xs:px-3 xs:py-2.5 sm:px-4 sm:py-3.5 flex gap-1 xs:gap-1.5 items-center">
  <span className="w-1 h-1 xs:w-1.5 xs:h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#F3E6D4]/40 animate-bounce [animation-delay:-0.3s]" />
  <span className="w-1 h-1 xs:w-1.5 xs:h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#F3E6D4]/40 animate-bounce [animation-delay:-0.15s]" />
  <span className="w-1 h-1 xs:w-1.5 xs:h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#F3E6D4]/40 animate-bounce" />
</div>
          )}

          {inputVisible && (
            <span className="font-dudu font-bold text-[9px] xs:text-[10px] sm:text-[12px] md:text-[14px] text-[#5E3C2F]/35 ml-1 mt-0.5">
              seen
            </span>
          )}
        </div>
{/* input bar acting as the CTA */}
<button
  onClick={goToContact}
  onFocus={() => setInputFocused(true)}
  onBlur={() => setInputFocused(false)}
  className={`
    group flex items-center justify-between gap-2
    border-2 rounded-full
    px-3 py-2
    xs:px-4 xs:py-2.5
    sm:px-4 sm:py-2.5
    md:px-5 md:py-3
    lg:px-6 lg:py-3
    mt-2 sm:mt-3
    transition-all duration-500 ease-out
    interactive-hover
    ${
      inputVisible
        ? "opacity-100 translate-y-0"
        : "opacity-0 translate-y-3 pointer-events-none"
    }
    ${
      inputFocused
        ? "border-[#C33E23] bg-[#5E3C2F]"
        : "border-[#5E3C2F]/25 bg-transparent hover:border-[#5E3C2F]/50"
    }
  `}
>
  <span className="font-dudu text-[11px] xs:text-[12px] sm:text-[13px] md:text-[15px] lg:text-[17px] text-[#5E3C2F]/50 group-hover:text-[#5E3C2F]/80 transition-colors">
    say something...
  </span>

  <span
    className="
      flex-shrink-0
      w-7 h-7
      xs:w-8 xs:h-8
      sm:w-8 sm:h-8
      md:w-9 md:h-9
      lg:w-11 lg:h-11
      rounded-full bg-[#C33E23]
      flex items-center justify-center
      group-hover:brightness-110 transition-all
    "
  >
    <span className="font-dudu text-[#F3E6D4] text-[11px] xs:text-[12px] sm:text-[13px] md:text-[15px] lg:text-[15px] -rotate-45 group-hover:rotate-0 transition-transform duration-300">
      →
    </span>
  </span>
</button>
      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}