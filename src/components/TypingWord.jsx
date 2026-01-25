import { useEffect, useState } from "react";

export default function TypingWord({ words = ["UX/UI Designer", "Brand Designer"] }) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [phase, setPhase] = useState("typing");
  

  useEffect(() => {
    const currentWord = words[wordIndex];

    let timeout;

    if (phase === "typing") {
      timeout = setTimeout(() => {
        setText(currentWord.slice(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);

        if (charIndex + 1 === currentWord.length) {
          setPhase("holding");
        }
      }, 90);
    }

    if (phase === "holding") {
      timeout = setTimeout(() => {
        setPhase("deleting");
      }, 1200); 
    }

    if (phase === "deleting") {
      timeout = setTimeout(() => {
        setText(currentWord.slice(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);

        if (charIndex === 1) {
          setPhase("typing");
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }, 50);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, phase, wordIndex, words]);

  return (
    <span className="inline-flex items-center">
      {text}
      <span
        className="ml-1 opacity-70"
        style={{
          animation: "blink 1s step-end infinite"
        }}
      >
        |
      </span>
      <style jsx>{`
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
      `}</style>
    </span>
  );
}