import TypingWord from "../components/TypingWord";
import Footer from "./Footer";
import { useEffect, useState } from "react";

export default function ContactPage() {
  const [isIOS, setIsIOS] = useState(false);

  useEffect(() => {
    
    const checkIOS = () => {
      const userAgent = window.navigator.userAgent.toLowerCase();
      const isIOSDevice = /iphone|ipad|ipod/.test(userAgent);
      
      
      
      const isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;
      const isTouchDevice = navigator.maxTouchPoints && navigator.maxTouchPoints > 1;
      const isIpadOS = isMac && isTouchDevice;
      
      setIsIOS(isIOSDevice || isIpadOS);
    };

    checkIOS();
  }, []);

  return (
    <>
      <div className="min-h-screen bg-[#F3E6D4] flex flex-col -mt-[2rem] sm:-mt-[4rem] md:-mt-[4.3rem] lg:-mt-[4.3rem] xl:-mt-[4.3rem]">
        <main 
          className={`
            flex-grow flex flex-col items-center px-4 lg:px-[40px]
            ${isIOS ? 'pt-[40px]' : 'pt-[120px] sm:pt-[150px] md:pt-[160px]'}
            lg:pt-[190px]
          `}
        >
          <div className="text-center mt-[3rem] sm:mt-[4rem] md:mt-[5rem]">
            <h1 className="font-whatnot font-bold text-[#190A07] leading-tight ">
              <span className="
                inline-block
                text-[22px]
                xs:text-[26px]
                sm:text-[32px]
                md:text-[40px]
                lg:text-[50px]
                xl:text-[55px]
                2xl:text-[60px]
              ">
                <TypingWord words={["Tell me what you're thinking !", "Reach out to create together !"]} />
              </span>
            </h1>
          </div>

          {/* LinkedIn and Email rectangles */}
          <div className="w-full flex flex-col lg:flex-row justify-between items-center 
            gap-[40px]      /* Reduced from 50px on mobile */
            sm:gap-[50px]   /* Small tablets: 50px */
            lg:gap-8         /* Laptops+: 32px when horizontal */
            xl:gap-4         /* Large screens: 24px */
            2xl:gap-4        /* Extra large: 16px */
            mt-[60px]       /* Reduced from 90px */
            sm:mt-[80px]    /* Small tablets */
            md:mt-[110px]
            lg:mt-[200px]
            px-4          /* Mobile: 16px */
            lg:px-[3px]  /* Laptop+: 40px */
            xl:px-[-100px]  /* XL+: 40px */
            2xl:px-[3px]">
            
            {/* LinkedIn Rectangle with hover animation */}
            <a
              href="https://www.linkedin.com/in/sara-ben-salem03/"
              target="_blank"
              rel="noopener noreferrer"
              className="
              xl:-ml-1
               
                w-[280px] 
                lg:w-auto
                 xl:w-[300px] /* Much wider on xl: */
                2xl:w-[400px] /* Even wider on 2xl: */
                px-6 py-4
                rounded-lg
                font-whatnot font-bold
                text-center
                text-lg lg:text-xl xl:text-2xl
                shadow-lg
                interactive-hover
                cursor-pointer
                relative
                overflow-hidden
                group
                
              "
              style={{
                minWidth: "188px"
              }}
            >
              {/* Background layers */}
              <div className="
                absolute inset-0 
                bg-[#5E3C2F] 
                rounded-lg
                z-0
              " />
              
              {/* Hover animation layer - slides from right to left */}
              <div className="
                absolute inset-0 
                bg-[#C33E23]
                rounded-lg
                z-10
                transform translate-x-full
                group-hover:translate-x-0
                transition-transform duration-300 ease-out
                origin-right
              " />
              
              {/* Text */}
              <span className="
                relative z-20
                text-[#F3E6D4]
                group-hover:text-[#F3E6D4]
                transition-colors duration-300
              ">
                LINKEDIN
              </span>
            </a>

            {/* CHOOSE - Centered with flex spacing */}
            <div className="flex-1 flex justify-center">
              <div className="
                font-dudu 
                text-[#190A07]
                text-center
                text-[20px] sm:text-[24px] lg:text-[35px]
                px-8
              ">
                Feel free to choose
              </div>
            </div>

            {/* Email Rectangle with hover animation */}
            <button
                onClick={() => {
    window.location.href = "mailto:sara.bs.contact@gmail.com";
  }}
              className="
                  xl:-mr-3
                 w-[280px] 
                lg:w-auto
                xl:w-[300px] /* Much wider on xl: */
                 2xl:w-[400px] /* Even wider on 2xl: */
                px-6 py-4
                rounded-lg
                font-whatnot font-bold
                text-center
                text-lg lg:text-xl xl:text-2xl
                shadow-lg
                interactive-hover
                cursor-pointer
                relative
                overflow-hidden
                group
                
              "
              style={{
                minWidth: "188px"
              }}
            >
              {/* Background layers */}
              <div className="
                absolute inset-0 
                bg-[#5E3C2F] 
                rounded-lg
                z-0
              " />
              
              {/* Hover animation layer - slides from right to left */}
              <div className="
                absolute inset-0 
                bg-[#C33E23]
                rounded-lg
                z-10
                transform translate-x-full
                group-hover:translate-x-0
                transition-transform duration-300 ease-out
                origin-right
              " />
              
              {/* Text */}
              <span className="
                relative z-20
                text-[#F3E6D4]
                group-hover:text-[#F3E6D4]
                transition-colors duration-300
              ">
                EMAIL
              </span>
            </button>
          </div>

          {/* Bottom text with reduced spacing */}
          <div className="
            mt-[120px]       /* Reduced from 380px */
            sm:mt-[150px]    /* Small tablets */
            md:mt-[200px]    /* Tablets */
            lg:mt-[250px]    /* Laptops */
            text-center text-[#5E3C2F] font-whatnot text-[12px] md:text-lg max-w-2xl
          ">
            <p className="mb-4">
              Reach out through either of the options above. <br />I typically respond within 24-48 hours.
            </p>
          </div>
        </main>
        
        {/* Footer at the end - add mt-auto to push it to bottom */}
        <div className="mt-auto">
          <Footer />
        </div>
      </div>
    </>
  );
}