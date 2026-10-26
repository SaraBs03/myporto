import TypingWord from '../TypingWord';
import { useState, useEffect } from 'react';

export default function IntroCV() {
  return (
  <section className="bg-[#F3E6D4] relative">
  <div className="h-[30px] sm:h-[85px] md:h-[100px] xl:h-[105px] lg:h-[55px]" />

  <div className="px-4 sm:-mt-8 xl:-mt-4 lg:mt-8 pb-12 sm:px-6 md:px-8 lg:ml-[1rem] md:pb-24 mx-auto max-w-6xl">
    <h1
      className="
        leading-tight sm:leading-snug md:leading-normal
        text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl
        mb-4
      "
    >
      <span className="block font-alegreya">
        <span className="font-light">
          Hi, I'm Sara -
        </span>{" "}
        <span className="font-bold">
          <TypingWord words={["Product Designer", "UX Designer"]} />
        </span>
      </span>

<span className="block font-alegreya font-light text-[#514A46] mt-3 sm:mt-4 md:mt-5 text-[15px] sm:text-[17px] md:text-[19px] lg:text-[22px] opacity-90">
  Making complex things make sense, with projects for clients across the GCC and beyond.
</span>
    </h1>
  </div>
</section>
  );
}