
import { useState, useEffect } from "react";
import MenuIcon from "../assets/menu.svg";
import LinkIconLight from "../assets/Linkiconlight.svg";
import { useNavigate, useLocation } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuMounted, setMenuMounted] = useState(false);
  const [showCopied, setShowCopied] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navigate = useNavigate();
  const location = useLocation();

  // reset scroll position on every route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);



// Track active navigation section
useEffect(() => {
  const updateActiveSection = () => {
    // Contact page
    if (location.pathname.toLowerCase() === "/contact") {
      setActiveSection("contact");
      return;
    }

    // Other pages
    if (location.pathname !== "/") {
      setActiveSection("");
      return;
    }

    const projectsSection = document.getElementById("projects");

    if (!projectsSection) {
      setActiveSection("home");
      return;
    }

    const rect = projectsSection.getBoundingClientRect();

    if (rect.top <= 100 && rect.bottom > 100) {
      setActiveSection("work");
    } else {
      setActiveSection("home");
    }
  };

  updateActiveSection();

  window.addEventListener("scroll", updateActiveSection);
  window.addEventListener("resize", updateActiveSection);

  return () => {
    window.removeEventListener("scroll", updateActiveSection);
    window.removeEventListener("resize", updateActiveSection);
  };
}, [location.pathname]);

  

  const openMenu = () => {
    setMenuMounted(true);
    requestAnimationFrame(() => setMenuOpen(true));
  };

  const closeMenu = () => {
    setMenuOpen(false);
    setTimeout(() => setMenuMounted(false), 500); // matches transition duration below
  };

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

  const goToProjects = () => {
    setMenuOpen(false);

    if (location.pathname === "/") {
      document.getElementById("projects")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      navigate("/");
      setTimeout(() => {
        document.getElementById("projects")?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 300);
    }
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


  function Typewriter({ text, speed = 70, className = "" }) {
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    let i = 0;
    let timeout;

    setDisplayed("");
    setTyping(true);

    const type = () => {
      i++;
      setDisplayed(text.slice(0, i));

      if (i < text.length) {
        timeout = setTimeout(
          type,
          speed + Math.random() * 40 // slight variation like handwriting
        );
      } else {
        timeout = setTimeout(() => {
          setTyping(false);
        }, 800);
      }
    };

    timeout = setTimeout(type, speed);

    return () => clearTimeout(timeout);
  }, [text, speed]);

  return (
    <p className={className}>
      {displayed}
      
    </p>
  );
}

  return (
    <>
      {/* Navbar wrapper - no longer fixed, scrolls with the page */}
      <div className="relative top-0 left-0 w-full z-50">
        

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
            className="text-[#190A07] font-alegreya font-bold text-[12px] sm:text-[14px] lg:text-lg whitespace-nowrap bg-transparent border-none cursor-pointer hover:opacity-50 transition-opacity interactive-hover pointer-events-auto"
          >
            SARA BEN SALEM
          </button>

          
          {/* Right side - Desktop links AND menu button */}
          <div className="flex items-center space-x-0 lg:space-x-[20px]">
            {/* Desktop links - SHOW on xl screens */}
            <div className="hidden xl:flex items-center space-x-[20px]">

  {/* Home */}
  <span
    onClick={goHome}
    className={`text-[#190A07] font-alegreya text-lg uppercase cursor-pointer hover:opacity-50 transition-all interactive-hover ${
      activeSection === "home" ? "font-bold" : "font-normal"
    }`}
  >
    Home
  </span>

  {/* Work */}
  <span
    onClick={goToProjects}
    className={`text-[#190A07] font-alegreya text-lg uppercase cursor-pointer hover:opacity-50 transition-all interactive-hover ${
      activeSection === "work" ? "font-bold" : "font-normal"
    }`}
  >
    Work
  </span>

  {/* Contact */}
  <span
    onClick={goToContact}
    className={`text-[#190A07] font-alegreya text-lg uppercase cursor-pointer hover:opacity-50 transition-all interactive-hover ${
      activeSection === "contact" ? "font-bold" : "font-normal"
    }`}
  >
    Contact
  </span>

</div>

            {/* Mobile menu icon */}
            <button
              className="p-0 bg-transparent border-none cursor-pointer hover:opacity-80 transition-opacity xl:hidden interactive-hover pointer-events-auto"
              onClick={() => (menuOpen ? closeMenu() : openMenu())}
            >
              <img src={MenuIcon} alt="Menu" className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </nav>
      </div>

      {/* ---------- MOBILE JOURNAL PAGE ---------- */}
      {menuMounted && (
        <div
          className={`fixed top-0 left-0 w-full h-[40vh] sm:h-[40vh] md:h-[43vh] lg:h-[45vh] xl:hidden z-50
            transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
            ${menuOpen ? "translate-y-0 opacity-100" : "-translate-y-8 opacity-0"}
          `}
          style={{
            backgroundColor: "#F3E6D4",
          }}
        >
          <div
            className={`relative flex flex-col h-full px-6 sm:px-10 pt-8 pb-4 text-[#190A07] font-whatnot pointer-events-auto
              transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] delay-75
              ${menuOpen ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"}
            `}
          >
            {/* close, styled as a journal dismissal rather than an icon button */}
            <button
  onClick={closeMenu}
  className="absolute top-6 right-6 sm:top-8 sm:right-8 hover:opacity-60 transition-opacity interactive-hover pointer-events-auto"
>
  <img src={MenuIcon} alt="Close menu" className="w-4 h-4 sm:w-5 sm:h-5" />
</button>

            

            {/* Today's menu */}
<div className="mt-8 sm:mt-10">

  <p className="font-alegreya font-bold text-2xl sm:text-3xl text-[#C33E23] mb-5">
    Today's menu:
  </p>

  <div className="flex flex-col gap-3 sm:gap-4">

    <span
      onClick={() => { goHome(); closeMenu(); }}
      className="font-alegreya text-2xl sm:text-3xl cursor-pointer hover:translate-x-1 transition-transform duration-200 interactive-hover"
    >
      <span className="text-[#C33E23] mr-2">→</span>Home
    </span>

    <span
      onClick={() => { goToProjects(); closeMenu(); }}
      className="font-alegreya text-2xl sm:text-3xl cursor-pointer hover:translate-x-1 transition-transform duration-200 interactive-hover"
    >
      <span className="text-[#C33E23] mr-2">→</span>Case Studies
    </span>

    <span
      onClick={() => { goToContact(); closeMenu(); }}
      className="font-alegreya text-2xl sm:text-3xl cursor-pointer hover:translate-x-1 transition-transform duration-200 interactive-hover"
    >
      <span className="text-[#C33E23] mr-2">→</span>Contact
    </span>

  </div>
</div>

            

          



          </div>
        </div>
      )}

      {/* Overlay */}
      {menuMounted && (
        <div
          className={`fixed inset-0 bg-black xl:hidden interactive-hover pointer-events-auto
            transition-opacity duration-500
            ${menuOpen ? "bg-opacity-30" : "bg-opacity-0"}
          `}
          style={{ zIndex: 40 }}
          onClick={closeMenu}
        />
      )}
    </>
  );
}