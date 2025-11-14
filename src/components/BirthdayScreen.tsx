import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Music, MessageCircle } from "lucide-react";
import snoopyHouse from "@/assets/snoopy-house.png";
import cloud from "@/assets/cloud.png";
import { WalkingSnoopy } from "./WalkingSnoopy";
import { Confetti } from "./Confetti";

const phrases = [
  "Snoopy dice: Hoy es un buen día para creer en ti 🦋",
  "Snoopy dice: No tengas miedo de empezar de nuevo, es otra forma de avanzar 🌱",
  "Snoopy dice: Tu energía transforma todo a tu alrededor ✨",
  "Snoopy dice: La calma también es una forma de fuerza 🌿",
  "Snoopy dice: Confía en ti, lo mejor está por venir 🌈",
  "Snoopy dice: Agradece lo que tienes y verás cómo crece 🌻",
  "Snoopy dice: Donde pones amor, florece la vida 🌸",
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
  "Snoopy dice: Nunca subestimes el poder de una sonrisa 😊",
  "Snoopy dice: Todo lo que das con amor regresa de alguna forma 💌",
  "Snoopy dice: Tu presencia ya es suficiente 🌙",
  "Snoopy dice: Cuida tus pensamientos, ellos crean tu mundo 🌤️",
  "Snoopy dice: Lo que hoy parece pequeño mañana será un logro gigante 🏆",
  "Snoopy dice: Sigue tu ritmo, la vida no es una carrera 🕰️",
  "Snoopy dice: Tu esencia es tu mayor tesoro 💎",
  "Snoopy dice: La paz interior vale más que cualquier meta 🌾",
  "Snoopy dice: El amor propio también se entrena día a día 💗",
  "Snoopy dice: Brilla con calma, no necesitas competir 🌠",
  "Snoopy dice: Lo que haces con el corazón siempre tiene sentido 💞",
  "Snoopy dice: Eres un rayo de luz en el camino de alguien más 🌤️",
  "Snoopy dice: La serenidad se encuentra dentro, no fuera 🌺",
  "Snoopy dice: Que tu alma nunca deje de soñar ☁️",
  "Snoopy dice: Eres parte de algo hermoso 🌍",
  "Snoopy dice: A veces la magia está en las cosas simples ✨",
  "Snoopy dice: El amor es el idioma que todos entendemos 💫",
  "Snoopy dice: Cree en la belleza de lo que estás construyendo 🌸",
  "Snoopy dice: Hoy elige la paz por encima del ruido 🌿",
  "Snoopy dice: Lo que buscas también te está buscando 🌙",
  "Snoopy dice: Siempre hay algo por lo cual sonreír 🌞"
];

const carta = "A veces olvidamos agradecer a las personas que mejoran nuestras vidas simplemente con estar en ellas, asi que gracias por ser tu 💫";

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
