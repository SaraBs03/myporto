import { useState, useEffect } from "react";

export default function Footer() {
  const [currentTime, setCurrentTime] = useState("");
  const [blink, setBlink] = useState(true);

 
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeString = now.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      }).toLowerCase(); 
      setCurrentTime(timeString);
    };

    updateTime();
    const timeInterval = setInterval(updateTime, 1000);

    
    const blinkInterval = setInterval(() => {
      setBlink((prev) => !prev);
    }, 500);

    return () => {
      clearInterval(timeInterval);
      clearInterval(blinkInterval);
    };
  }, []);

  const handleBehanceClick = () => {
    window.open("https://www.behance.net/saracc2", "_blank");
  };

  const handleLinkedInClick = () => {
    window.open("https://www.linkedin.com/in/sara-ben-salem03/", "_blank");
  };

  return (
    <footer id="site-footer" className="w-full bg-[#C33E23] py-4 border-t border-[#F3E6D4]/10">
      
      {/* Desktop layout */}
<div className="hidden md:flex w-full items-center justify-between font-whatnot text-[#F3E6D4]
                text-[12px] sm:text-[14px] lg:text-lg
                px-2 lg:px-[40px]">        
        {/* Left: Behance & LinkedIn */}
        <div className="flex items-center space-x-6">
          <button
            onClick={handleBehanceClick}
            className="hover:opacity-80 transition-opacity duration-200 interactive-hover whitespace-nowrap"
          >
            BEHANCE
          </button>
          <button
            onClick={handleLinkedInClick}
            className="hover:opacity-80 transition-opacity duration-200 interactive-hover whitespace-nowrap"
          >
            LINKEDIN
          </button>
        </div>

        {/* Middle: Copyright */}
        <div className="text-center whitespace-nowrap mx-auto">
          © Website created by Sara Ben Salem
        </div>

        {/* Right: Tunis, Tunisia | 1:32pm (with blinking colon) */}
        <div className="flex items-center space-x-2 whitespace-nowrap">
          <span>Tunis, Tunisia</span>
          <span className="mx-1">|</span>
          <span>{currentTime.split(":")[0]}</span> {/* Hours */}
          <span className={`${blink ? "opacity-100" : "opacity-30"} transition-opacity duration-100`}>:</span>
          <span>{currentTime.split(":")[1]}</span> {/* Minutes + am/pm */}
        </div>

      </div>

   {/* Mobile layout */}
<div className="md:hidden flex flex-col items-center space-y-2 py-1"> {/* smaller vertical spacing and padding */}
  
  {/* Top row: Behance & LinkedIn */}
  <div className="flex items-center space-x-3"> {/* reduced horizontal spacing */}
          <button
            onClick={handleBehanceClick}
            className="font-whatnot text-[#F3E6D4] text-sm hover:opacity-80 transition-opacity duration-200 interactive-hover"
          >
            BEHANCE 
            
                      </button>
          <button
            onClick={handleLinkedInClick}
            className="font-whatnot text-[#F3E6D4] text-sm hover:opacity-80 transition-opacity duration-200 interactive-hover"
          >
            LINKEDIN
          </button>
        </div>

        {/* Middle: Copyright */}
        <div className="font-whatnot text-[#F3E6D4] text-sm text-center">
          © Website created by Sara Ben Salem
        </div>

        {/* Bottom: Tunis, Tunisia | Time */}
        <div className="flex items-center space-x-2 font-whatnot text-[#F3E6D4] text-sm">
          <span>Tunis, Tunisia</span>
          <span className="mx-1">|</span>
          <span>{currentTime.split(":")[0]}</span>
          <span className={`${blink ? "opacity-100" : "opacity-30"} transition-opacity duration-100`}>:</span>
          <span>{currentTime.split(":")[1]}</span>
        </div>

      </div>
    </footer>
  );
}