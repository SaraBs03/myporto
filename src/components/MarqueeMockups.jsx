import React, { useEffect, useState } from "react";

export default function MarqueeMockups({ low = [], high = [], mode = "both" }) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const images = [
      ...(mode === "low" || mode === "both" ? [...low, ...low] : []),
      ...(mode === "high" || mode === "both" ? [...high, ...high] : []),
    ];

    const loadAll = async () => {
      await Promise.all(
        images.map((src) => {
          return new Promise((resolve) => {
            const img = new Image();
            img.src = src;
            img.onload = () => resolve(true);
            img.onerror = () => resolve(true);
          });
        })
      );

      setTimeout(() => setReady(true), 100);
    };

    loadAll();
  }, [low, high, mode]);

  return (
    <div>
      {(mode === "low" || mode === "both") && (
        <div className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-hidden">
          <div className={`marquee-track ${ready ? "is-ready" : ""}`}>
            {[...low, ...low].map((img, index) => (
              <div key={`low-${index}`} className="flex-shrink-0 px-4">
                <img
                  src={img}
                  loading="eager"
                  alt={`Low fidelity wireframe ${index + 1}`}
                  className="h-[250px] md:h-[500px] lg:h-[600px] w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {(mode === "high" || mode === "both") && (
        <div className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-hidden">
          <div className={`marquee-track ${ready ? "is-ready" : ""}`}>
            {[...high, ...high].map((img, index) => (
              <div key={`high-${index}`} className="flex-shrink-0 px-4">
                <img
                  src={img}
                  loading="eager"
                  alt={`High fidelity mockup ${index + 1}`}
                  className="h-[250px] md:h-[500px] lg:h-[600px] w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
