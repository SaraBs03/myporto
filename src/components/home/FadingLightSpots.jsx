
import { useEffect, useRef } from "react";

export default function FadingLightSpots() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let spots = [];
    let animationFrame;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", resize);
    resize();

    
    const createSpots = () => {
      spots = [];
      for (let i = 0; i < 50; i++) {
        spots.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 4 + 1, 
          alpha: Math.random() * 0.15 + 0.02, 
          fadeDirection: Math.random() > 0.5 ? 1 : -1,
          speed: Math.random() * 0.005 + 0.001, 
        });
      }
    };
    createSpots();

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      spots.forEach((s) => {
       
        s.alpha += s.fadeDirection * s.speed;
        if (s.alpha <= 0.01 || s.alpha >= 0.15) s.fadeDirection *= -1;

        ctx.beginPath();
        ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(94, 60, 47, ${s.alpha})`; 
        ctx.fill();
      });

      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full pointer-events-none"
    />
  );
}
