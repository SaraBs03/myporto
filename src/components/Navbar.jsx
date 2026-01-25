import { useState } from "react";
import MenuIcon from "../assets/menu.svg";
import LinkIconLight from "../assets/Linkiconlight.svg";
import MenuLight from "../assets/Menulight.svg";
import { useNavigate } from "react-router-dom";


export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showCopied, setShowCopied] = useState(false);
  const navigate = useNavigate();
  

  const handleCopyEmail = () => {
  const email = "Sara.bs.contact@gmail.com";
  
  
  if (window.innerWidth < 1024) {
    const tooltip = document.querySelector('.email-tooltip');
    if (tooltip) {
      tooltip.classList.remove('hidden', 'opacity-0');
      tooltip.classList.add('block', 'opacity-100');
      setTimeout(() => {
        tooltip.classList.remove('block', 'opacity-100');
        tooltip.classList.add('hidden', 'opacity-0');
      }, 2000);
    }
  }

  
  
  const textArea = document.createElement('textarea');
  textArea.value = email;
  textArea.style.position = 'fixed';
  textArea.style.opacity = '0';
  document.body.appendChild(textArea);
  textArea.select();
  
  try {
    const successful = document.execCommand('copy');
    if (successful) {
      setShowCopied(true);
      setTimeout(() => setShowCopied(false), 2000);
    } else {
      window.location.href = `mailto:${email}`;
    }
  } catch (err) {
    console.error('Copy failed: ', err);
    window.location.href = `mailto:${email}`;
  } finally {
    document.body.removeChild(textArea);
  }
};

 const goHome = () => {
  navigate("/");
  setMenuOpen(false); 
};

 const goToContact = () => {
  navigate("/Contact");
  setMenuOpen(false); 
};

const goToUxUi = () => {
  navigate("/TG/uxui");
  setMenuOpen(false);
};

const goToBranding = () => {
  navigate("/TG/branding");
  setMenuOpen(false);
};

const goToUxUi2 = () => {
  navigate("/diamate");
  setMenuOpen(false);
};

const goToBranding2 = () => {
  navigate("/Fantazia");
  setMenuOpen(false);
};

const goToLogos = () => {
  navigate("/Logos");
  setMenuOpen(false);
};


  return (
  <>
    {/* ✅ NAVBAR SPACER — THIS IS THE FIX */}
    {/* This reserves real layout space so iOS Safari behaves */}
    <div className="h-[51px] sm:h-[69px]" />

    {/* Navbar wrapper - fixed and semi-transparent */}
    <div className="fixed top-0 left-0 w-full z-50">
      {/* Small top line */}
      <div className="w-full h-[3px] sm:h-[5px] bg-[#5E3C2F]" />

      {/* Navbar */}
   <nav
  className="
    w-full flex items-center font-whatnot
    px-4 md:px-8 lg:px-[40px]
    h-12 sm:h-16
    justify-between
    bg-[#F3E6D4]/80 backdrop-blur-md
    pt-[max(4px,env(safe-area-inset-top))]
   
  "
>
        {/* Left: Name */}
        <button
          onClick={goHome}
          className="text-[#190A07] font-bold text-[12px] sm:text-[14px] lg:text-lg whitespace-nowrap bg-transparent border-none cursor-pointer hover:opacity-50 transition-opacity interactive-hover pointer-events-auto"
        >
          SARA BEN SALEM
        </button>

        {/* Middle: Email */}
        <button
          onClick={handleCopyEmail}
          className="text-[#190A07] font-bold text-[11px] sm:text-[14px] lg:text-lg underline whitespace-nowrap mx-auto hover:opacity-50 relative group interactive-hover pointer-events-auto"
        >
          sara.bs.contact@gmail.com

          <span
            className="email-tooltip hidden lg:block absolute left-1/2 -translate-x-1/2 top-full mt-2 px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none"
            style={{
              backgroundColor: "#C33E23",
              color: "#F3E6D4",
            }}
          >
            Click to copy email
            <span
              className="absolute left-1/2 -translate-x-1/2 -top-2"
              style={{
                width: 0,
                height: 0,
                borderLeft: "5px solid transparent",
                borderRight: "5px solid transparent",
                borderBottom: "5px solid #C33E23",
              }}
            />
          </span>
        </button>

        {showCopied && (
          <div
            className="fixed top-16 sm:top-20 left-1/2 transform -translate-x-1/2 px-3 py-1 sm:px-4 sm:py-2 rounded-lg shadow-lg z-50 animate-fade-in-out text-sm sm:text-base"
            style={{
              backgroundColor: "#C33E23",
              color: "#F3E6D4",
            }}
          >
            Email copied to clipboard!
          </div>
        )}


    {/* Right side - Desktop links AND menu button */}
    <div className="flex items-center space-x-0 lg:space-x-[20px]">
      {/* Desktop links - SHOW on xl screens */}
      <div className="hidden xl:flex items-center space-x-[20px]">
        <span 
        onClick={goToUxUi}
        className="text-[#190A07] font-bold text-lg uppercase cursor-pointer hover:opacity-50 transition-opacity interactive-hover">
          UX/UI
        </span>
        <span
         onClick={goToBranding}
         className="text-[#190A07] font-bold text-lg uppercase cursor-pointer hover:opacity-50 transition-opacity interactive-hover">
          BRANDING
        </span>
        <span
         onClick={goToLogos}
         className="text-[#190A07] font-bold text-lg uppercase cursor-pointer hover:opacity-50 transition-opacity interactive-hover">
          LOGOS
        </span>
        <span 
          onClick={goToContact} 
          className="text-[#190A07] font-bold text-lg uppercase cursor-pointer hover:opacity-50 transition-opacity ml-[20px] interactive-hover">
          CONTACT
        </span>
      </div>

      {/* Mobile menu icon */}
      <button
        className="p-0 bg-transparent border-none cursor-pointer hover:opacity-80 transition-opacity xl:hidden interactive-hover pointer-events-auto"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <img src={MenuIcon} alt="Menu" className="w-4 h-4 sm:w-5 sm:h-5" />
      </button>
    </div>
  </nav>
</div>
      {/* Mobile full-screen dropdown - HIDE on lg screens */}
      <div
  className={`fixed top-0 left-0 w-full h-full transform transition-transform duration-300 ease-in-out xl:hidden z-50
    ${menuOpen ? "translate-y-0" : "-translate-y-full"}`}
        style={{
          backgroundColor: "#5E3C2F",
          backgroundImage: `linear-gradient(to right, rgba(243,230,212,0.1) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(243,230,212,0.1) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      >
        <div className="flex flex-col justify-start h-full p-4 sm:p-6 text-[#F3E6D4] font-whatnot pointer-events-auto">
          {/* Main menu links */}
          <div className="flex flex-col space-y-3 sm:space-y-4 mt-4">
            <span
  onClick={goHome}
  className="font-bold text-xl sm:text-2xl uppercase cursor-pointer hover:opacity-80 transition-opacity interactive-hover"
>
  HOME
</span>

            <span 
            onClick={goToUxUi}
            className="font-bold text-xl sm:text-2xl uppercase cursor-pointer hover:opacity-80 transition-opacity interactive-hover">
              UX/UI
            </span>
            <span 
            onClick={goToBranding}
            className="font-bold text-xl sm:text-2xl uppercase cursor-pointer hover:opacity-80 transition-opacity interactive-hover">
              BRANDING
            </span>
            <span 
            onClick={goToLogos}
            className="font-bold text-xl sm:text-2xl uppercase cursor-pointer hover:opacity-80 transition-opacity interactive-hover">
              LOGOS
            </span>
            <span onClick={goToContact}
            className="font-bold text-xl sm:text-2xl uppercase cursor-pointer hover:opacity-80 transition-opacity interactive-hover">
              CONTACT
            </span>
          </div>

          {/* Social links */}
          <div className="flex flex-col space-y-3 sm:space-y-4 mt-12 sm:mt-20">
            <a
              href="https://www.linkedin.com/in/sara-ben-salem03/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 font-bold text-xl sm:text-2xl underline hover:opacity-80 transition-opacity interactive-hover"
            >
              <span>LINKEDIN</span>
              <img src={LinkIconLight} alt="Link Icon" className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
            <a
              href="https://www.behance.net/saracc2"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 font-bold text-xl sm:text-2xl underline hover:opacity-80 transition-opacity interactive-hover"
            >
              <span>BEHANCE</span>
              <img src={LinkIconLight} alt="Link Icon" className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
          </div>

          {/* Call-to-action */}
<div className="mt-8 sm:mt-12 text-left">
  <p className="text-base sm:text-base font-medium">
    ready to start a project? <br />
    Let's create together
  </p>
  <button
    onClick={(e) => {
      if ('ontouchstart' in window) {
       
        e.preventDefault();
        window.location.href = "mailto:sara.bs.contact@gmail.com?subject=Project Inquiry&body=Hi Sara, I'd like to discuss a project with you.";
      } else {
        
        handleCopyEmail();
      }
    }}
    className="text-base sm:text-base text-[#F3E6D4] font-bold underline block mt-2 hover:opacity-80 transition-opacity text-left interactive-hover pointer-events-auto"
  >
          sara.bs.contact@gmail.com
  </button>
</div>
{/* ADDED: Copyright at the end - centered */}
    <div className="mt-auto text-center text-[#F3E6D4] text-xs sm:text-base font-medium pt-6 pb-4">
      © Website created by Sara Ben Salem
    </div>

         {/* Close button - Exact match to navbar padding */}
<button
  className="absolute top-6 right-4 sm:top-5 sm:right-5 lg:top-6 lg:right-[40px] xl:top-5 xl:right-[40px] p-0 bg-transparent border-none cursor-pointer hover:opacity-80 transition-opacity interactive-hover pointer-events-auto"
  onClick={() => setMenuOpen(false)}
>
  <img src={MenuLight} alt="Close menu" className="w-4 h-4 sm:w-5 sm:h-5" />
</button>
        </div>
      </div>

  

      {/* Overlay */}
      {menuOpen && (
       <div
  className="fixed inset-0 bg-black bg-opacity-50 z-40 xl:hidden interactive-hover pointer-events-auto"
  onClick={() => setMenuOpen(false)}
/>
      )}
    </>
  );
}
