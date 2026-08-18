import TypingWord from '../TypingWord';
import { useState, useEffect } from 'react';

export default function IntroCV() {
  return (
    <section className="bg-[#F3E6D4] relative">
      <div className="h-[30px] sm:h-[85px] md:h-[100px] xl:h-[105px] lg:h-[55px]" />

      <div className="px-4 sm:-mt-8 xl:-mt-4 lg:mt-8 pb-12 sm:px-6 md:px-8 lg:ml-[1rem] md:pb-24 mx-auto max-w-6xl">
        <h1 className="
          font-dudu font-medium
          leading-tight sm:leading-snug md:leading-normal
          text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl
          mb-4
        ">
          <span className="block">
            Hi, I'm Sara - <TypingWord words={["UX Designer", "UI Designer"]} />
          </span>
          <span className="block mt-3 sm:mt-4 md:mt-5 text-base sm:text-xl md:text-2xl lg:text-3xl opacity-90">
            Turning ideas into usable digital experiences.
          </span>
        </h1>
      </div>
    </section>
  );
}