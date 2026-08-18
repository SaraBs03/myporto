import { useEffect, useState, useRef } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";import Navbar from "./components/Navbar";
import IntroCV from "./components/home/IntroCV";

import MenuSection from "./components/home/MenuSection";
import Projects from "./components/home/projects";
import CTA from "./components/home/CTA";
import Footer from "./components/Footer";

import cursorSvg from "./assets/cursor.svg";
import cursor2Svg from "./assets/cursor2.svg";
import FloatingCV from "./components/FloatingCV";
import ContactPage from "./components/ContactPage";
import { useLocation } from "react-router-dom";
import NoweMoneyOnboarding from "./components/nowe_money_onboarding";
import NoweMoneySeoPages from "./components/nowe_money_seo_pages";
import NoweMoneyLandings from "./components/nowe_money_landings";
import EpicTrading from "./components/epic_trading";
import interactCursorSvg from "./assets/InteractCursor.svg";





import "./index.css";


function AppWrapper() {
  return (
    <Router>
      <ScrollToTop />
      <App />
    </Router>
  )
}

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    // Always scroll to top on route change
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant" // Changed from "smooth" to "instant"
    });
    
    // Also try to scroll other possible containers
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    
    // If there's a main content container with overflow
    const mainContent = document.querySelector('.main-content');
    if (mainContent) {
      mainContent.scrollTop = 0;
    }
  }, [location.pathname]);

  return null;
}


function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [gifError, setGifError] = useState(false);
  const [isSlowConnection, setIsSlowConnection] = useState(false);
  const [loadingTime, setLoadingTime] = useState(5000);
  const cursorRef = useRef(null);
  const mouse = useRef({ x: -100, y: -100 });
  const pos = useRef({ x: -100, y: -100 });
  const [hasMouse, setHasMouse] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [cursorImage, setCursorImage] = useState(cursorSvg);
  const location = useLocation();
  const cursorImageRef = useRef(cursorSvg);
  const [projectPanelOpen, setProjectPanelOpen] = useState(false);

useEffect(() => {
  cursorImageRef.current = cursorImage;
}, [cursorImage]);



  // 🔥 Reset cursor state on route change
useEffect(() => {
  setIsHovering(false);
  setCursorImage(cursorSvg);

  // Snap cursor position to avoid lag after navigation
  pos.current.x = mouse.current.x;
  pos.current.y = mouse.current.y;
}, [location.pathname]);

useEffect(() => {
  const handleLoad = () => {
    document.querySelectorAll(".marquee-track").forEach((el) => {
      el.classList.add("is-ready");
    });
  };

  window.addEventListener("load", handleLoad);

  return () => {
    window.removeEventListener("load", handleLoad);
  };
}, []);

  useEffect(() => {
  // Skip first load (initial loader already handled)
  if (isLoading) return;

  setIsLoading(true);

  const timeout = setTimeout(() => {
    setIsLoading(false);
  }, 900); // adjust duration if you want

  return () => clearTimeout(timeout);
}, [location.pathname]);

  // Detect internet connection speed and adjust loading time
  useEffect(() => {
    let connectionCheckTimeout;
    
    const checkConnectionSpeed = () => {
      if ('connection' in navigator) {
        const connection = navigator.connection;
        
        if (connection.saveData || 
            connection.effectiveType === 'slow-2g' || 
            connection.effectiveType === '2g' ||
            connection.effectiveType === '3g' ||
            connection.downlink < 1) {
          setIsSlowConnection(true);
          setLoadingTime(10000);
        } else if (connection.downlink < 3) {
          setLoadingTime(10000);
        } else {
          setLoadingTime(6000);
        }
      } else {
      }
    };

    connectionCheckTimeout = setTimeout(checkConnectionSpeed, 100);
    
    return () => {
      clearTimeout(connectionCheckTimeout);
    };
  }, []);

  // Handle loading
  useEffect(() => {
    
    document.body.classList.add('loading');
    
    let totalLoaded = false;
    let simulatedTimeout;
    let resourceCheckInterval;
    
    const finishLoading = () => {
      if (totalLoaded) return;
      totalLoaded = true;
      
      setIsLoading(false);
      document.body.classList.remove('loading');
      
      if (resourceCheckInterval) clearInterval(resourceCheckInterval);
    };
    
    simulatedTimeout = setTimeout(() => {
      finishLoading();
    }, loadingTime);
    
    const checkCriticalResources = () => {
      if (document.readyState !== 'complete') {
        return false;
      }
      
      const criticalImages = ['/brain-confusion.gif'];
      let allCriticalLoaded = true;
      
      criticalImages.forEach(src => {
        const img = Array.from(document.images).find(i => i.src.includes(src));
        if (img && !img.complete) {
          allCriticalLoaded = false;
        }
      });
      
      return allCriticalLoaded;
    };
    
    resourceCheckInterval = setInterval(() => {
      if (checkCriticalResources()) {
        clearTimeout(simulatedTimeout);
        finishLoading();
      }
    }, 500);
    
    window.addEventListener('load', () => {
      if (checkCriticalResources()) {
        clearTimeout(simulatedTimeout);
        finishLoading();
      }
    });
    
    return () => {
      clearTimeout(simulatedTimeout);
      clearInterval(resourceCheckInterval);
      window.removeEventListener('load', finishLoading);
      document.body.classList.remove('loading');
    };
  }, [loadingTime]);

  // Detect real mouse (only after loading)
  useEffect(() => {
    if (isLoading) return;
    
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    setHasMouse(mq.matches);

    const update = () => setHasMouse(mq.matches);
    mq.addEventListener("change", update);

    return () => mq.removeEventListener("change", update);
  }, [isLoading]);

  // Mouse move (only after loading)
  useEffect(() => {
    if (isLoading || !hasMouse) return;

    const move = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [hasMouse, isLoading]);

  // Detect cursor2 areas (marquee, CTA button, entire footer)
  useEffect(() => {
    if (isLoading || !hasMouse) return;

    const moveHandler = (e) => {
  mouse.current.x = e.clientX;
  mouse.current.y = e.clientY;

  let el = document.elementFromPoint(e.clientX, e.clientY);

  let isOverSpecialCursor = false;

  while (el) {
    if (
      el.classList?.contains('marquee-container') ||
      el.classList?.contains('cta-button-container') ||
      el.tagName === 'FOOTER' ||
      el.classList?.contains('interactive-hover') // 👈 EMAIL + LINKEDIN
    ) {
      isOverSpecialCursor = true;
      break;
    }
    el = el.parentElement;
  }

  setCursorImage(isOverSpecialCursor ? cursor2Svg : cursorSvg);
};

    window.addEventListener("mousemove", moveHandler);
    return () => window.removeEventListener("mousemove", moveHandler);
  }, [hasMouse, isLoading]);

  // Hover detection for cursor shrinking (only interactive-hover elements)
  useEffect(() => {
    if (isLoading || !hasMouse) return;

    const hoverables = document.querySelectorAll(".interactive-hover");

    const onEnter = () => {
      setIsHovering(true);
    };
    
    const onLeave = () => {
      setIsHovering(false);
    };

    hoverables.forEach(el => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    return () => {
      hoverables.forEach(el => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
      });
    };
  }, [hasMouse, isLoading]);

  useEffect(() => {
  if (isLoading || !hasMouse) return;

  const moveHandler = (e) => {
    mouse.current.x = e.clientX;
    mouse.current.y = e.clientY;

    let el = document.elementFromPoint(e.clientX, e.clientY);
    let cursor = cursorSvg; // default

    while (el) {
      if (el.classList?.contains("cursor-interact")) {
        cursor = interactCursorSvg; // InteractCursor
        break;
      }
      if (
        el.classList?.contains("marquee-container") ||
        el.classList?.contains("cta-button-container") ||
        el.tagName === "FOOTER" ||
        el.classList?.contains("interactive-hover")
      ) {
        cursor = cursor2Svg; // cursor2
        break;
      }
      el = el.parentElement;
    }

    setCursorImage(cursor);
  };

  window.addEventListener("mousemove", moveHandler);
  return () => window.removeEventListener("mousemove", moveHandler);
}, [hasMouse, isLoading]);


 useEffect(() => {
  if (isLoading || !hasMouse) return;

  let heartbeatTime = 0;

  const animate = () => {
    pos.current.x += (mouse.current.x - pos.current.x) * 0.9;
    pos.current.y += (mouse.current.y - pos.current.y) * 0.9;

    if (cursorRef.current) {
      let size;

      if (cursorImageRef.current === interactCursorSvg) {
        // Heartbeat for InteractCursor
        heartbeatTime += 0.03;
        const baseSize = isHovering ? 14 : 32; // shrink on hover
        const heartbeatScale = 1 + Math.sin(heartbeatTime * Math.PI * 2) * 0.1;
        size = baseSize * heartbeatScale;
      } else {
        // Default cursors
        size = isHovering ? 14 : 32; // shrink on hover
      }

      cursorRef.current.style.width = `${size}px`;
      cursorRef.current.style.height = `${size}px`;
      cursorRef.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0) translate(-50%, -50%)`;
    }

    requestAnimationFrame(animate);
  };


    


  const animationId = requestAnimationFrame(animate);
  return () => cancelAnimationFrame(animationId);
}, [hasMouse, isHovering, isLoading]);

  const handleGifError = (e) => {
    setGifError(true);
    e.target.style.display = 'none';
  };

  

  return (
    <>
      {/* Loading Screen - Only GIF */}
      {isLoading && (
        <div 
          className="loading-screen"
          style={{ backgroundColor: '#F3E6D4' }}
        >
          <div className="loading-content">
            <img 
              src="/brain-confusion.gif"
              alt="Loading..."
              className="loading-gif"
              onError={handleGifError}
              onLoad={() => console.log("Loading GIF loaded successfully")}
            />
            
            {gifError && (
              <div className="fallback-spinner"></div>
            )}
          </div>
        </div>
      )}

      {/* Main Content */}
      <div
      
        className={`main-content min-h-screen flex flex-col ${isLoading ? 'content-hidden' : ''}`}
        style={{ overflowX: "hidden" }}
      >
        {hasMouse && !isLoading && (
          <div 
            ref={cursorRef} 
            id="custom-cursor"
            style={{
              backgroundImage: `url(${cursorImage})`
            }}
          />
        )}

        <Navbar />
        
<Routes key={location.pathname}>
<Route
  path="/"
  element={
    <>
      <div className="flex-grow">
        <IntroCV />
        <MenuSection />
        <Projects />
        <CTA />
      </div>
      <Footer />
      <FloatingCV />
    </>
  }
/>
 <Route
  path="/nowe-money-onboarding"
  element={
    process.env.NODE_ENV === "development"
      ? <NoweMoneyOnboarding />
      : <Navigate to="/" replace />
  }
/>

<Route
    path="/epic-trading"
    element={<EpicTrading />}
  />


  <Route
  path="/nowe-money-seo-pages"
  element={
    process.env.NODE_ENV === "development"
      ? <NoweMoneySeoPages />
      : <Navigate to="/" replace />
  }
/>

 <Route
  path="/nowe-money-landings"
  element={
    process.env.NODE_ENV === "development"
      ? <NoweMoneyLandings />
      : <Navigate to="/" replace />
  }
/>

  <Route
    path="/contact"
    element={<ContactPage />}
  />
</Routes>
      </div>
      
      {/* Floating UI — ALWAYS LAST */}
      
    </>
  );
}

// Export AppWrapper (which contains Router) instead of App
export default AppWrapper;