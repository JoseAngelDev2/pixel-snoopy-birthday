import { useEffect, useState } from "react";

interface ConfettiPiece {
  id: number;
  left: number;
  color: string;
  duration: number;
  delay: number;
}

export const Confetti = () => {
  const [confetti, setConfetti] = useState<ConfettiPiece[]>([]);

  useEffect(() => {
    const colors = ["#FF69B4", "#FFD700", "#FF6B6B", "#4ECDC4", "#95E1D3", "#FFA07A", "#B19CD9"];
    const pieces: ConfettiPiece[] = [];

    for (let i = 0; i < 25; i++) {
      pieces.push({
        id: i,
        left: Math.random() * 100,
        color: colors[Math.floor(Math.random() * colors.length)],
        duration: 3 + Math.random() * 4,
        delay: Math.random() * 5,
      });
    }

    setConfetti(pieces);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-10">
      {confetti.map((piece) => (
        <div
          key={piece.id}
          className="absolute w-2 h-2 md:w-3 md:h-3 animate-confetti"
          style={{
            left: `${piece.left}%`,
            top: "-20px",
            backgroundColor: piece.color,
            animationDuration: `${piece.duration}s`,
            animationDelay: `${piece.delay}s`,
            animationIterationCount: "infinite",
          }}
        />
      ))}
    </div>
  );
};
