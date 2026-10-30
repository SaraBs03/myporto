import mobileFlow from "../assets/explore-mobile.svg";
import desktopflow from "../assets/explore-desktop.svg";



export default function ExploreProductFlow() {
  return (
    <div className="w-full mt-[40px] sm:mt-[60px] lg:mt-[80px]">

      {/* Mobile: vertical flow */}
      <div className="w-full lg:hidden">
        <img
          src={mobileFlow}
          alt="Submit request process flow"
          loading="lazy"
          decoding="async"
          className="block w-[85%] max-w-full h-auto mx-auto"
        />
      </div>

      {/* Desktop */}
      <div className="hidden w-full lg:block">
        <img
          src={desktopflow}
          alt="Request specifications and delivery requirements"
          loading="lazy"
          decoding="async"
          className="block w-[65%] max-w-full h-auto mx-auto"
        />

        {/* Continue from the right side into row two */}
        <div className="flex justify-end pr-[8%] py-1 text-xl text-[#8E5A46]">
          ↓
        </div>
      </div>

    </div>
  );
}