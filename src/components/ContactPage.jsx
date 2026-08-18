import Footer from "./Footer";
import { useEffect, useRef, useState } from "react";


function Reel({ spinning }) {
  return (
    <div
      className={`relative w-14 h-14
sm:w-18 sm:h-18
lg:w-24 lg:h-24 rounded-full border-[3px] border-[#F3E6D4]/70 flex items-center justify-center ${
        spinning ? "animate-[spin_1.4s_linear_infinite]" : ""
      }`}
    >
      <div className="absolute w-full h-[2px] bg-[#F3E6D4]/40" />
      <div className="absolute w-[2px] h-full bg-[#F3E6D4]/40" />
      <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-[#F3E6D4]/70" />
    </div>
  );
}

export default function ContactPage() {
  const [isIOS, setIsIOS] = useState(false);
  const [activeButton, setActiveButton] = useState(null); // null | "linkedin" | "email"
  const [counterMs, setCounterMs] = useState(0);
  const intervalRef = useRef(null);
  const actionTimeoutRef = useRef(null);
  const resetTimeoutRef = useRef(null);
  const [showCopied, setShowCopied] = useState(false);

  useEffect(() => {
    const checkIOS = () => {
      const userAgent = window.navigator.userAgent.toLowerCase();
      const isIOSDevice = /iphone|ipad|ipod/.test(userAgent);
      const isMac = navigator.platform.toUpperCase().indexOf("MAC") >= 0;
      const isTouchDevice = navigator.maxTouchPoints && navigator.maxTouchPoints > 1;
      const isIpadOS = isMac && isTouchDevice;
      setIsIOS(isIOSDevice || isIpadOS);
    };
    checkIOS();
  }, []);

  const formatCounter = (ms) => {
    const totalSeconds = Math.floor(ms / 100); // tenths, tape-counter style
    const seconds = Math.floor(totalSeconds / 10);
    const tenths = totalSeconds % 10;
    return `0:${String(seconds).padStart(2, "0")}.${tenths}`;
  };

  const copyFallback = (text) => {
  const textArea = document.createElement("textarea");
  textArea.value = text;
  textArea.style.position = "fixed";
  textArea.style.opacity = "0";
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();

  try {
    document.execCommand("copy");
    setShowCopied(true);
    setTimeout(() => setShowCopied(false), 2000);
  } finally {
    document.body.removeChild(textArea);
  }
};

  const press = (type) => {
  if (activeButton) return;

  setActiveButton(type);
  setCounterMs(0);

  intervalRef.current = setInterval(() => {
    setCounterMs((ms) => ms + 100);
  }, 100);

  actionTimeoutRef.current = setTimeout(() => {
    if (type === "linkedin") {
      window.open(
        "https://www.linkedin.com/in/sara-ben-salem03/",
        "_blank",
        "noopener,noreferrer"
      );
    } else if (type === "email") {
  const email = "sara.bs.contact@gmail.com";

  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard
      .writeText(email)
      .then(() => {
        setShowCopied(true);
        setTimeout(() => setShowCopied(false), 2000);
      })
      .catch(() => {
        copyFallback(email);
      });
  } else {
    copyFallback(email);
  }
}
  }, 900);

  resetTimeoutRef.current = setTimeout(() => {
    clearInterval(intervalRef.current);
    setActiveButton(null);
    setCounterMs(0);
  }, 1500);
};


  useEffect(() => {
    return () => {
      clearInterval(intervalRef.current);
      clearTimeout(actionTimeoutRef.current);
      clearTimeout(resetTimeoutRef.current);
    };
  }, []);

  return (
    <>
      <div className="min-h-screen bg-[#F3E6D4] flex flex-col -mt-[40px] sm:-mt-[130px] md:-mt-[150px] lg:-mt-[180px] xl:-mt-[190px]">
        <main
          className={`
            flex-grow flex flex-col items-center px-4 lg:px-[40px]
            ${isIOS ? "pt-[40px]" : "pt-[50px] sm:pt-[150px] md:pt-[160px]"}
            lg:pt-[190px]
          `}
        >
          <div className="text-center mt-[3rem] sm:mt-[4rem] md:mt-[5rem]">
            <h1 className="font-whatnot font-bold text-[#190A07] leading-tight text-[22px] xs:text-[26px] sm:text-[32px] md:text-[40px] lg:text-[50px] xl:text-[55px] 2xl:text-[60px]">
              Leave a message.
            </h1>
            <p className="font-dudu text-[#5E3C2F] text-[14px] sm:text-[17px] lg:text-[20px] mt-3">
              press play to reach me
            </p>
          </div>


{showCopied && (
  <div
  className="fixed top-16 sm:top-20 left-1/2 -translate-x-1/2
    px-3 py-1.5 sm:px-4 sm:py-2
    rounded-lg shadow-lg z-50
    animate-fade-in-out
    text-[11px] sm:text-sm
    font-dudu
    whitespace-nowrap"
  style={{
    backgroundColor: "#C33E23",
    color: "#F3E6D4",
  }}
>
  Email copied to clipboard!
</div>
)}
          {/* ---------- CASSETTE DEVICE ---------- */}
          <div className="w-full max-w-[430px] sm:max-w-[520px] lg:max-w-[620px] xl:max-w-[700px] mt-[50px] sm:mt-[40px] md:mt-[60px] lg:mt-[50px]">
            <div className="relative bg-[#190A07] rounded-2xl shadow-2xl px-7 py-8
sm:px-10 sm:py-10
lg:px-14 lg:py-12">
              {/* LED + counter row */}
              <div className="flex items-center justify-between mb-6 sm:mb-8">
                <span
                  className={`w-2.5 h-2.5 rounded-full transition-colors duration-300 ${
                    activeButton
    ? "bg-[#C33E23]"
    : "bg-[#3A241D]"
                  }`}
                  style={{
                    boxShadow: activeButton ? "0 0 8px 2px rgba(195,62,35,0.6)" : "none",
                  }}
                />
                <span className="font-mono text-[13px]
sm:text-[16px]
lg:text-[18px] text-[#F3E6D4]/70 tracking-wider tabular-nums">
                  {formatCounter(counterMs)}
                </span>
              </div>

              {/* reels */}
              <div className="flex justify-center gap-10 sm:gap-16 lg:gap-24 mb-7 sm:mb-9">
                <Reel spinning={activeButton !== null} />
                <Reel spinning={activeButton !== null} />
              </div>

              {/* tape progress strip */}
              <div className="h-1.5 w-full bg-[#F3E6D4]/10 rounded-full overflow-hidden mb-8 sm:mb-10">
                <div
                  className="h-full bg-[#C33E23] transition-all ease-linear"
                  style={{
                    width: activeButton ? "100%" : "0%",
                    transitionDuration: activeButton ? "900ms" : "300ms",
                  }}
                />
              </div>

              {/* controls */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <button
                  onClick={() => press("linkedin")}
                  disabled={activeButton !== null}
                  className={`
                    relative flex-1 flex items-center justify-center gap-2
                    font-whatnot font-bold text-[14px]
sm:text-[17px]
lg:text-[18px]
                    px-5 py-3.5
lg:px-7 lg:py-4 rounded-lg
                    border border-[#F3E6D4]/20
                    transition-all duration-200 interactive-hover
                    ${
                      activeButton === "linkedin"
                        ? "bg-[#C33E23] text-[#F3E6D4]"
                        : "bg-transparent text-[#F3E6D4]/80 hover:bg-[#F3E6D4]/10"
                    }
                    ${activeButton && activeButton !== "linkedin" ? "opacity-30" : ""}
                  `}
                >
                  <span className="absolute left-5 lg:left-7 text-[11px] sm:text-[12px]">
  
</span> LINKEDIN
                </button>

                <button
                  onClick={() => press("email")}
                  disabled={activeButton !== null}
                  className={`
                    relative flex-1 flex items-center justify-center gap-2
                    font-whatnot font-bold text-[14px] sm:text-[16px]
                    px-5 py-3.5 rounded-lg
                    border border-[#F3E6D4]/20
                    transition-all duration-200 interactive-hover
                    ${
                      activeButton === "email"
                        ? "bg-[#C33E23] text-[#F3E6D4]"
                        : "bg-transparent text-[#F3E6D4]/80 hover:bg-[#F3E6D4]/10"
                    }
                    ${activeButton && activeButton !== "email" ? "opacity-30" : ""}
                  `}
                >
                  <span className="absolute left-5 lg:left-7 text-[11px] sm:text-[12px]">
  
</span> EMAIL
                </button>
              </div>
            </div>

            {/* small caption under the device */}
            <p className="text-center font-whatnot text-[#5E3C2F] text-[11px] sm:text-[13px] mt-4 sm:mt-5">
              {activeButton ? "connecting..." : "tape ready"}
            </p>
          </div>

          {/* Bottom text */}
          <div className="mt-[30px] sm:-mt-[5px] md:mt-[6px] lg:mt-[30px] xl:mt-[30px] text-center text-[#5E3C2F] font-whatnot text-[12px] md:text-lg max-w-2xl">
            <p className="mb-4">
              <br />I typically respond within 24-48 hours.
            </p>
          </div>
        </main>

        <div className="mt-auto">
          <Footer />
        </div>
      </div>
    </>
  );
}