import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Music, MessageCircle } from "lucide-react";
import snoopyHouse from "@/assets/snoopy-house.png";
import cloud from "@/assets/cloud.png";
import { WalkingSnoopy } from "./WalkingSnoopy";
import { Confetti } from "./Confetti";

const phrases = [
  "Snoopy dice: Tu corazón es más fuerte de lo que imaginas 💖",
  "Snoopy dice: Respira… todo estará bien, paso a paso 🌬️",
  "Snoopy dice: No olvides que mereces cosas bonitas 🌷",
  "Snoopy dice: La vida siempre sorprende a quienes siguen intentando ✨",
  "Snoopy dice: Hoy elige ser amable contigo mismo 🌼",
  "Snoopy dice: Incluso los días grises tienen algo que enseñar 🌧️",
  "Snoopy dice: Lo que sueñas también te está soñando a ti 🌙",
  "Snoopy dice: No te rindas, lo mejor toma tiempo 💫",
  "Snoopy dice: A veces descansar también es avanzar 😴",
  "Snoopy dice: Eres más importante de lo que crees 🌟",
  "Snoopy dice: Las cosas buenas comienzan dentro de ti 💛",
  "Snoopy dice: Hoy siembra calma, mañana cosecharás paz 🌾",
  "Snoopy dice: No necesitas ser perfecto para ser increíble 🌈",
  "Snoopy dice: Tu luz nunca se apaga, solo descansa 🌠",
  "Snoopy dice: Haz espacio para lo que te hace feliz 🧡",
  "Snoopy dice: El mundo necesita tu forma especial de brillar ✨",
  "Snoopy dice: Lo que haces con amor siempre florece 🌺",
  "Snoopy dice: No tengas miedo de sentir, ahí también hay fuerza 💗",
  "Snoopy dice: Estás haciendo lo mejor que puedes, y eso basta 💫",
  "Snoopy dice: El universo siempre escucha un corazón sincero 💕",
  "Snoopy dice: Tienes la capacidad de crear belleza donde vayas 🌷",
  "Snoopy dice: Hoy es un buen día para creer en ti 🦋",
  "Snoopy dice: La luz que das vuelve a ti multiplicada 🌟",
  "Snoopy dice: A veces, avanzar también es aprender a soltar 🍃",
  "Snoopy dice: No necesitas correr, el tiempo perfecto llegará ⏳",
  "Snoopy dice: La bondad siempre encuentra el camino 🕊️",
  "Snoopy dice: Sé paciente contigo, estás creciendo 🌼",
  "Snoopy dice: Cada paso pequeño te acerca a algo grande 🚶‍♀️",
  "Snoopy dice: Escucha a tu corazón, él sabe el camino 💓",
];


const carta = "Que nunca se le olvide lo fuerte que eres y lo hermosa que estas. 💫";

export const BirthdayScreen = () => {
  const [currentPhrase, setCurrentPhrase] = useState(phrases[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null); // Nuevo estado para el audio

const getRandomPhrase = () => {
  const audioEffect = new Audio("/audio/Voicy_Snoopy Sound 4.mp3");
  audioEffect.play().catch(() => {});

  // Filtra la frase actual para que no se repita
  const availablePhrases = phrases.filter(p => p !== currentPhrase);
  const randomPhrase = availablePhrases[Math.floor(Math.random() * availablePhrases.length)];

  // Actualiza el estado para que se muestre la nueva frase
  setCurrentPhrase(randomPhrase);
};

  // useEffect para controlar la música de la carta especial
  useEffect(() => {
    if (showMessage) {
      const bgAudio = new Audio("audio/CARTASOUND2.mp3"); // Tu audio de fondo
      bgAudio.loop = true;
      bgAudio.play().catch(() => {});
      setAudio(bgAudio);
    } else {
      if (audio) {
        audio.pause();
        audio.currentTime = 0;
        setAudio(null);
      }
    }
  }, [showMessage]);

  const toggleMusic = () => {
    // Esta música de botón puedes dejarla igual
    // Aquí solo manejas la música de la carta con useEffect
    setIsPlaying(prev => !prev);
  };

  return (
    <div className="min-h-screen bg-pixel-sky relative overflow-hidden">
      <Confetti />
      
      {/* Banner de banderines */}
      <div className="absolute top-0 left-0 right-0 h-16 flex justify-around items-start z-10">
        {["#FF6B6B", "#95E1D3", "#FF8B94", "#FFA07A", "#98D8C8", "#FFD93D", "#6BCF7F", "#A8DADC", "#B19CD9"].map((color, i) => (
          <div
            key={i}
            className="w-0 h-0 border-l-[30px] border-l-transparent border-r-[30px] border-r-transparent border-t-[40px]"
            style={{ borderTopColor: color }}
          />
        ))}
      </div>

      {/* Nubes */}
      <img src={cloud} alt="" className="absolute top-20 left-10 w-32 opacity-80 animate-float" style={{ imageRendering: "pixelated" }} />
      <img src={cloud} alt="" className="absolute top-32 right-20 w-40 opacity-70 animate-float" style={{ imageRendering: "pixelated", animationDelay: "1s" }} />
      <img src={cloud} alt="" className="absolute top-24 left-1/3 w-36 opacity-60 animate-float" style={{ imageRendering: "pixelated", animationDelay: "2s" }} />

      <div className="relative z-20 pt-16 pb-8 px-4 max-w-4xl mx-auto">
        <h1 className="text-center text-primary text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-pixel mb-3 sm:mb-4 pixel-shadow animate-bounce-in leading-tight">
          🎉 FELIZ<br />CUMPLEAÑOS<br />KAREN 🎂
        </h1>

        <p className="text-center text-accent text-xs sm:text-sm md:text-base font-pixel mb-6 sm:mb-8 animate-fade-in px-4">
          Hoy es un buen día para ser feliz ✨
        </p>

        {/* Burbuja de frases */}
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

        {/* Botón nueva frase */}
        <div className="flex justify-center mb-12 sm:mb-16">
          <Button
            onClick={getRandomPhrase}
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-pixel text-xs sm:text-sm px-6 sm:px-8 py-5 sm:py-6 pixel-shadow transition-all hover:scale-105"
          >
            ✚ Nueva frase
          </Button>
        </div>

        {/* Mensaje sobre Snoopy */}
        <div>
          <p className="text-center text-accent text-xs sm:text-sm md:text-base font-pixel mb-6 sm:mb-8 animate-fade-in px-4"> No toques los Snoopy luego se enojan 😞</p>
        </div>

        {/* Walking Snoopy */}
        <div className="relative h-28 sm:h-32 md:h-40">
          <div className="absolute bottom-0 left-0 right-0 h-20 sm:h-24 md:h-32 bg-pixel-grass border-t-4 border-foreground">
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

      {/* Botones de control */}
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

      {/* Carta especial */}
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
