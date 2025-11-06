import { useState, useEffect, useRef } from "react";
import snoopyWalk from "@/assets/snoopy-walk.png";
import snoopyAngry from "@/assets/snoopy-angry.png";

interface WalkingSnoopyProps {
  startPosition: number; 
  duration: number; 
  delay: number; 
}

export const WalkingSnoopy = ({ startPosition, duration, delay }: WalkingSnoopyProps) => {
  const [position, setPosition] = useState(startPosition);
  const [isAngry, setIsAngry] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const requestRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);

  useEffect(() => {
    if (isPaused) return;

    const animate = (time: number) => {
      if (!startTimeRef.current) startTimeRef.current = time + delay * 1000;
      const elapsed = time - startTimeRef.current;
      if (elapsed < 0) {
        requestRef.current = requestAnimationFrame(animate);
        return;
      }

      const progress = (elapsed / (duration * 1000)) % 1;
      setPosition(startPosition + progress * (100 - startPosition));

      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);

    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [startPosition, duration, delay, isPaused]);

  const handleClick = () => {
    if (isAngry) return; 
    setIsAngry(true);
    setIsPaused(true);

    const audio = new Audio("audio/Voicy_Snoopy Sound 5.mp3");
    audio.volume = 0.6;
    audio.play().catch(() => {});

    // Snoopy se calma después de 2s
    setTimeout(() => {
      setIsAngry(false);
      setIsPaused(false);
    }, 2000);
  };

  return (
    <div
      className={`absolute bottom-8 cursor-pointer transition-transform duration-200 hover:scale-110 ${
        isAngry ? "animate-shake" : ""
      }`}
      style={{
        left: `${position}%`,
        transform: "translateX(-50%)",
      }}
      onClick={handleClick}
    >
      <img
        src={isAngry ? snoopyAngry : snoopyWalk}
        alt="Snoopy"
        className="w-12 md:w-16 h-12 md:h-16 select-none"
        style={{
          imageRendering: "pixelated",
          filter: isAngry ? "contrast(120%) saturate(130%)" : "none",
        }}
      />
    </div>
  );
};
 
