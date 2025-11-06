import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Music, MessageCircle, Car } from "lucide-react";
import snoopyHouse from "@/assets/snoopy-house.png";
import cloud from "@/assets/cloud.png";
import { WalkingSnoopy } from "./WalkingSnoopy";
import { Confetti } from "./Confetti";

const phrases = [
  "Snoopy dice: Que somos Mancos en el Codm 😞 AJJAJA",
  "Snoopy dice: Que no Ganamos una en Among uS AJJAJJA",
  "Snoopy dice: Es bonito pasar tiempo contigo. 👀",
  "Snoopy dice: Que somos Mancos en el Codm 😞 AJJAJA",
  "Snoopy dice: Tu luz brilla más cada día 🌟",
  "Snoopy dice: Haz que cada momento cuente 🎯",
  "Snoopy dice: Eres más fuerte de lo que crees 💪",
  "Snoopy dice: La vida es bella, como tú 🌸",
  "Snoopy dice: Sigue brillando, estrella 🌠",
  "Snoopy dice: Nunca te rindas, lo mejor está por venir 🚀",
  "Snoopy dice: Tu alegría es contagiosa 😄",
  "Snoopy dice: El mundo es mejor contigo 💕",
  "Snoopy dice: Sonríe, porque lo mereces 😌",
  "Snoopy dice: Incluso los días grises tienen su encanto ☁️",
  "Snoopy dice: El esfuerzo de hoy será tu orgullo mañana 🏆",
  "Snoopy dice: No importa lo lento, mientras no te detengas 🐢",
  "Snoopy dice: Confía en el proceso, todo llega a su tiempo ⏳",
  "Snoopy dice: Tienes el poder de cambiar tu día 🌞",
  "Snoopy dice: Brilla sin miedo, el mundo necesita tu luz 💡",
  "Snoopy dice: Eres magia en movimiento ✨",
  "Snoopy dice: Que somos Mancos en el Codm 😞 AJJAJA",
  "Snoopy dice: Cada risa tuya hace el día más bonito 💕",
  "Snoopy dice: El universo sonríe cuando tú lo haces 🌌",
  "Snoopy dice: Tienes la chispa que enciende los días grises 🔥",
  "Snoopy dice: Nunca olvides lo increíble que eres 💎",
  "Snoopy dice: Tu ternura es un superpoder 🧸",
  "Snoopy dice: La vida contigo tiene mejor banda sonora 🎶",
  "Snoopy dice: Hoy es tu día para brillar más que nunca 💖",
  "Snoopy dice: Convierte tus sueños en metas y tus metas en realidad 🚀",
  "Snoopy dice: Todo gran logro empezó con una pequeña acción 🌱",
  "Snoopy dice: A veces descansar también es avanzar ☕",
  "Snoopy dice: Cree que puedes, y ya estarás a medio camino 🌄",
  "Snoopy dice: Tu actitud puede cambiar cualquier día 🌈",
  "Snoopy dice: Eres más especial de lo que imaginas 💫",
  "Snoopy dice: Tu energía ilumina todo 💫",
  "Snoopy dice: Tu corazón es puro arte 🎨",
  "Snoopy dice: Hoy mereces todo lo bonito del mundo 🌷",
  "Snoopy dice: Nunca dejes de soñar, porque los sueños te llevan lejos ☁️",
  "Snoopy dice: Eres el motivo de muchas sonrisas 🩷",
  "Snoopy dice: Los días son mejores cuando tú estás 🌻",
  "Snoopy dice: Que somos Mancos en el Codm 😞 AJJAJA",
  "Snoopy dice: La felicidad te queda perfecta 😊",
  "Snoopy dice: hay que jugar!! 😭",
  "Snoopy dice: disfruta tu dia!!! JAJAJJAJA 🚶‍♀️✨"
];


const carta = `No te falta nada.\n
Eres una gran mujer, un amor de persona, eres trabajadora, estás preciosa, 
te esfuerzas cada día y tu corazón es noble. No dudes de ti.`

export const BirthdayScreen = () => {
  const [currentPhrase, setCurrentPhrase] = useState(phrases[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const getRandomPhrase = () => {
    const audio = new Audio("audio/Voicy_Snoopy Sound 4.mp3");
    audio.play().catch(() => {});
    const availablePhrases = phrases.filter(p => p !== currentPhrase);
    const randomPhrase = availablePhrases[Math.floor(Math.random() * availablePhrases.length)];
    setCurrentPhrase(randomPhrase);
  };


  const toggleMusic = () => {
   useEffect(() => {
  const audio = new Audio("audio/theyre-eating-the-dogs-snoopy-sound-track (1).mp3");
  audio.loop = true;
  audio.play().catch(() => {});
  setIsPlaying(true);
}, []);


    // In a real implementation, you would control audio playback here
  };

  return (
    <div className="min-h-screen bg-pixel-sky relative overflow-hidden">
      <Confetti />
      
      {/* Colorful banner flags */}
      <div className="absolute top-0 left-0 right-0 h-16 flex justify-around items-start z-10">
        {["#FF6B6B", "#95E1D3", "#FF8B94", "#FFA07A", "#98D8C8", "#FFD93D", "#6BCF7F", "#A8DADC", "#B19CD9"].map((color, i) => (
          <div
            key={i}
            className="w-0 h-0 border-l-[30px] border-l-transparent border-r-[30px] border-r-transparent border-t-[40px]"
            style={{ borderTopColor: color }}
          />
        ))}
      </div>

      {/* Clouds */}
      <img src={cloud} alt="" className="absolute top-20 left-10 w-32 opacity-80 animate-float" style={{ imageRendering: "pixelated" }} />
      <img src={cloud} alt="" className="absolute top-32 right-20 w-40 opacity-70 animate-float" style={{ imageRendering: "pixelated", animationDelay: "1s" }} />
      <img src={cloud} alt="" className="absolute top-24 left-1/3 w-36 opacity-60 animate-float" style={{ imageRendering: "pixelated", animationDelay: "2s" }} />

      {/* Main content */}
      <div className="relative z-20 pt-16 pb-8 px-4 max-w-4xl mx-auto">
        {/* Title */}
        <h1 className="text-center text-primary text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-pixel mb-3 sm:mb-4 pixel-shadow animate-bounce-in leading-tight">
          🎉 FELIZ<br />CUMPLEAÑOS<br />KAREN 🎂
        </h1>

        <p className="text-center text-accent text-xs sm:text-sm md:text-base font-pixel mb-6 sm:mb-8 animate-fade-in px-4">
          Hoy es un buen día para ser feliz ✨
        </p>

        {/* Speech bubble - Now above Snoopy on mobile */}
        <div className="flex justify-center mb-4 sm:mb-6 px-4 animate-bounce-in" style={{ animationDelay: "0.3s" }}>
          <Card className="bg-card border-4 border-foreground pixel-shadow w-full max-w-sm p-4 sm:p-5 relative">
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-t-[20px] border-t-card" />
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[14px] border-l-transparent border-r-[14px] border-r-transparent border-t-[22px] border-t-foreground" style={{ zIndex: -1 }} />
            <p className="text-foreground text-xs sm:text-sm font-pixel leading-relaxed text-center">
              {currentPhrase}
            </p>
          </Card>
        </div>

        {/* Snoopy */}
        <div className="flex justify-center items-center mb-6 sm:mb-8">
          <img
            src={snoopyHouse}
            alt="Snoopy"
            className="w-56 sm:w-64 md:w-72 lg:w-80 mx-auto animate-bounce-in"
            style={{ imageRendering: "pixelated", animationDelay: "0.5s" }}
          />
        </div>

        {/* New phrase button */}
        <div className="flex justify-center mb-12 sm:mb-16">
          <Button
            onClick={getRandomPhrase}
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-pixel text-xs sm:text-sm px-6 sm:px-8 py-5 sm:py-6 pixel-shadow transition-all hover:scale-105"
          >
            ✚ Nueva frase
          </Button>
        </div>

        <div>
          <p className="text-center text-accent text-xs sm:text-sm md:text-base font-pixel mb-6 sm:mb-8 animate-fade-in px-4"> No toques los Snoopy luego se enojan 😞</p>
        </div>

        

        {/* Walking Snoopy characters */}
        <div className="relative h-28 sm:h-32 md:h-40">
          <div className="absolute bottom-0 left-0 right-0 h-20 sm:h-24 md:h-32 bg-pixel-grass border-t-4 border-foreground">
            {/* Pixel flowers */}
            <div className="absolute bottom-2 left-[10%] text-lg sm:text-xl md:text-2xl">🌸</div>
            <div className="absolute bottom-2 sm:bottom-3 left-[25%] text-base sm:text-lg md:text-xl">🌼</div>
            <div className="absolute bottom-2 right-[15%] text-lg sm:text-xl md:text-2xl">🌸</div>
            <div className="absolute bottom-2 sm:bottom-3 right-[30%] text-base sm:text-lg md:text-xl">🌺</div>
            <div className="absolute bottom-3 sm:bottom-4 left-[50%] text-lg sm:text-xl md:text-2xl">🌼</div>
          </div>
          
          <WalkingSnoopy startPosition={10} duration={15} delay={0} />
          <WalkingSnoopy startPosition={40} duration={20} delay={3} />
          <WalkingSnoopy startPosition={70} duration={18} delay={6} />
        </div>
      </div>

      {/* Control buttons */}
      <div className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 flex gap-2 sm:gap-3 z-30">
        <Button
          onClick={() => setShowMessage(!showMessage)}
          size="icon"
          className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-pixel-cloud hover:bg-pixel-cloud/80 border-3 sm:border-4 border-foreground pixel-shadow"
        >
          <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-foreground" />
        </Button>
        <Button
          onClick={toggleMusic}
          size="icon"
          className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full border-3 sm:border-4 border-foreground pixel-shadow ${
            isPlaying ? "bg-primary hover:bg-primary/80" : "bg-primary/50 hover:bg-primary/70"
          }`}
        >
          <Music className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground" />
        </Button>
      </div>

      {/* Optional message overlay */}
      {showMessage && (
        <div className="fixed inset-0 bg-foreground/50 flex items-center justify-center z-40 p-4" onClick={() => setShowMessage(false)}>
          <Card className="bg-card border-4 border-foreground pixel-shadow p-5 sm:p-6 md:p-8 max-w-sm sm:max-w-md mx-4">
            <h2 className="text-primary text-lg sm:text-xl md:text-2xl font-pixel mb-3 sm:mb-4">
              💌 Mensaje especial
            </h2>
            <p className="text-foreground text-xs sm:text-sm font-pixel leading-relaxed">
              {carta}
            </p>
          </Card>
        </div>
      )}
    </div>
  );
};
