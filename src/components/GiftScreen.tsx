import { useState } from "react";
import { Button } from "@/components/ui/button";
import giftBox from "@/assets/gift-box.png";

interface GiftScreenProps {
  onOpen: () => void;
}

export const GiftScreen = ({ onOpen }: GiftScreenProps) => {
  const [isOpening, setIsOpening] = useState(false);

  const handleOpen = () => {
    setIsOpening(true);
    // Play opening sound (8-bit style)
    const audio = new Audio("data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBSuBzvLZiTYIGGa87OicTgwOUKXh8LdjHQU2kdXw0H8qBSh+zPLaizsIHGS57+qhUQ0KRKT=");
    audio.play().catch(() => {}); // Ignore if autoplay is blocked
    
    setTimeout(() => {
      onOpen();
    }, 1200);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pixel-purple to-[hsl(300_50%_60%)] relative overflow-hidden">
      {/* Decorative stars */}
      <div className="absolute top-10 left-10 text-4xl animate-float">⭐</div>
      <div className="absolute top-20 right-20 text-3xl animate-float" style={{ animationDelay: "1s" }}>✨</div>
      <div className="absolute bottom-32 left-20 text-3xl animate-float" style={{ animationDelay: "2s" }}>⭐</div>
      <div className="absolute bottom-20 right-32 text-4xl animate-float" style={{ animationDelay: "0.5s" }}>✨</div>

      <div className={`text-center space-y-8 ${isOpening ? "animate-bounce-in" : ""}`}>
        <h1 className="text-white text-xl md:text-2xl lg:text-3xl px-4 pixel-text drop-shadow-lg">
          ¡Un regalo especial<br />para ti!
        </h1>

        <div className="relative">
          <img
            src={giftBox}
            alt="Gift Box"
            className={`w-48 h-48 md:w-64 md:h-64 mx-auto ${!isOpening ? "animate-float" : "animate-bounce-in"}`}
            style={{ imageRendering: "pixelated" }}
          />
        </div>

        <Button
          onClick={handleOpen}
          disabled={isOpening}
          className="bg-secondary hover:bg-secondary/90 text-foreground font-pixel text-sm md:text-base px-8 py-6 pixel-shadow glow-yellow transition-all hover:scale-105 disabled:opacity-50"
        >
          🎁 ABRIR 🎁
        </Button>
      </div>

      {/* Confetti burst animation when opening */}
      {isOpening && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-3 h-3 animate-confetti"
              style={{
                left: `${50 + (Math.random() - 0.5) * 20}%`,
                top: "50%",
                backgroundColor: ["#FF69B4", "#FFD700", "#FF6B6B", "#4ECDC4", "#95E1D3"][i % 5],
                animationDuration: `${1 + Math.random() * 2}s`,
                animationDelay: `${Math.random() * 0.3}s`,
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};
