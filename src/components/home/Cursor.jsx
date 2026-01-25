import { useEffect, useRef } from "react";
import CursorIcon from "../assets/cursor.svg";

export default function CustomCursor({ isHovering, hasMouse, isLoading }) {
  const cursorRef = useRef(null);
  const mouse = useRef({ x: -100, y: -100 });
  const pos = useRef({ x: -100, y: -100 });

  useEffect(() => {
    if (isLoading || !hasMouse) return;

    const move = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [hasMouse, isLoading]);

  useEffect(() => {
    if (isLoading || !hasMouse) return;

    const animate = () => {
      pos.current.x += (mouse.current.x - pos.current.x) * 0.15;
      pos.current.y += (mouse.current.y - pos.current.y) * 0.15;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0) translate(-50%, -50%)`;
        
       
        if (isHovering) {
          cursorRef.current.style.width = "20px";
          cursorRef.current.style.height = "20px";
        } else {
          cursorRef.current.style.width = "32px";
          cursorRef.current.style.height = "32px";
        }
      }

      requestAnimationFrame(animate);
    };

    const animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [hasMouse, isHovering, isLoading]);

  if (isLoading || !hasMouse) return null;

  return (
    <img
      ref={cursorRef}
      src={CursorIcon}
      alt="cursor"
      className="fixed top-0 left-0 pointer-events-none z-999999 w-8 h-8 transition-all duration-150"
      style={{
        transform: "translate(-50%, -50%)",
        willChange: "transform"
      }}
    />
  );
}