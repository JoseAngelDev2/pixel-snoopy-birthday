import { useState, useEffect } from "react";
import snoopyWalk from "@/assets/snoopy-walk.png";
import snoopyAngry from "@/assets/snoopy-angry.png";

interface WalkingSnoopyProps {
  startPosition: number; // percentage
  duration: number; // seconds
  delay: number; // seconds
}

export const WalkingSnoopy = ({ startPosition, duration, delay }: WalkingSnoopyProps) => {
  const [position, setPosition] = useState(startPosition);
  const [isAngry, setIsAngry] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const startTime = Date.now() + delay * 1000;
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      if (elapsed < 0) return;

      const progress = (elapsed / (duration * 1000)) % 1;
      setPosition(startPosition + progress * (100 - startPosition));
    }, 50);

    return () => clearInterval(interval);
  }, [startPosition, duration, delay, isPaused]);

  const handleClick = () => {
    setIsAngry(true);
    setIsPaused(true);

    // Play angry sound
    const audio = new Audio("data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBSuBzvLZiTYIGGa87OicTgwOUKXh8LdjHQU2kdXw0H8qBSh+zPLaizsIHGS57+qhUQ0KRKT=");
    audio.play().catch(() => {});

    setTimeout(() => {
      setIsAngry(false);
      setIsPaused(false);
    }, 2000);
  };

  return (
    <div
      className={`absolute bottom-8 cursor-pointer transition-transform hover:scale-110 ${
        isAngry ? "animate-shake" : ""
      }`}
      style={{
        left: `${position}%`,
        transform: `translateX(-50%)`,
      }}
      onClick={handleClick}
    >
      <img
        src={isAngry ? snoopyAngry : snoopyWalk}
        alt="Snoopy"
        className="w-12 md:w-16 h-12 md:h-16"
        style={{ imageRendering: "pixelated" }}
      />
    </div>
  );
};
