import mobileFlow from "../assets/submit-mobile.svg";
import desktopRowOne from "../assets/submit-desktop1.svg";
import desktopRowTwo from "../assets/submit-desktop2.svg";


export default function SubmitRequestFlow() {
  return (
    <div className="w-full mt-[40px] sm:mt-[60px] lg:mt-[80px]">

      {/* Mobile: vertical flow */}
      <div className="w-full lg:hidden">
        <img
          src={mobileFlow}
          alt="Submit request process flow"
          loading="lazy"
          decoding="async"
          className="block w-[45%] max-w-full h-auto mx-auto"
        />
      </div>

      {/* Desktop: first horizontal row */}
      <div className="hidden w-full lg:block">
        <img
          src={desktopRowOne}
          alt="Request specifications and delivery requirements"
          loading="lazy"
          decoding="async"
          className="block w-[110%] max-w-full h-auto mx-auto"
        />

        {/* Continue from the right side into row two */}
        <div className="flex justify-end pr-[8%] py-1 text-xl text-[#8E5A46]">
          ↓
        </div>

        {/* Desktop: second row flows from right to left */}
        <img
          src={desktopRowTwo}
          alt="Request submission process and next steps"
          loading="lazy"
          decoding="async"
          className="block w-full h-auto mx-auto"
        />
      </div>

    </div>
  );
}
