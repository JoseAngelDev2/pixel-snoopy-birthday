import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Music, MessageCircle } from "lucide-react";
import snoopyHouse from "@/assets/snoopy-house.png";
import cloud from "@/assets/cloud.png";
import { WalkingSnoopy } from "./WalkingSnoopy";
import { Confetti } from "./Confetti";

const phrases = [
  "Snoopy dice: Hoy respira profundo, lo estás haciendo mejor de lo que crees 🌤️",
  "Snoopy dice: Avanza a tu paso, incluso lo lento también es progreso 🐾",
  "Snoopy dice: Agradecer lo que tienes abre espacio para lo que viene 🙏",
  "Snoopy dice: La calma también es una forma de valentía 🌊",
  "Snoopy dice: Trátate con paciencia, estás aprendiendo 💛",
  "Snoopy dice: Cada día trae una nueva oportunidad de intentarlo otra vez 🔁",
  "Snoopy dice: No necesitas demostrar nada para ser suficiente 🌟",
  "Snoopy dice: Confía en el proceso, incluso cuando no lo entiendas 🌙",
  "Snoopy dice: Descansar también es avanzar 🛌",
  "Snoopy dice: La paz comienza cuando dejas de exigirte tanto 🕊️",
  "Snoopy dice: Tu esencia es más fuerte que cualquier duda 💪",
  "Snoopy dice: Aprende a celebrar lo que ya has superado 🎉",
  "Snoopy dice: Escúchate, tu intuición sabe más de lo que imaginas 🔍",
  "Snoopy dice: A veces, lo mejor que puedes hacer es parar un momento ⏸️",
  "Snoopy dice: Rodéate de lo que te haga sentir en casa 🏠",
  "Snoopy dice: No todo tiene que resolverse hoy, y está bien 🗓️",
  "Snoopy dice: Permítete sentir, todo sentimiento trae un mensaje 💭",
  "Snoopy dice: Tu esfuerzo cuenta, incluso cuando nadie lo ve 👀",
  "Snoopy dice: La tranquilidad también es una victoria 🏆",
  "Snoopy dice: Suelta lo que pesa, tu corazón merece ligereza 🎈",
  "Snoopy dice: Eres humano, no perfecto, y eso es suficiente 🤍",
  "Snoopy dice: Cada paso consciente cambia tu camino 🚶‍♂️",
  "Snoopy dice: La constancia supera a la motivación 🔑",
  "Snoopy dice: Cree en ti incluso en los días nublados ☁️",
  "Snoopy dice: Tu bienestar es una prioridad, no un lujo 🌿",
  "Snoopy dice: Aprende a decir no sin sentir culpa 🚫",
  "Snoopy dice: La claridad llega cuando te das tiempo 🧘",
  "Snoopy dice: No te compares, tu proceso es único 🧩",
  "Snoopy dice: La esperanza también se entrena 💫",
  "Snoopy dice: Hoy es suficiente con dar lo mejor que puedas ☕"
];


const carta = "Hay personas que inspiran sin intentarlo… tú eres una de ellas 💖";

export const BirthdayScreen = () => {
  const [currentPhrase, setCurrentPhrase] = useState(phrases[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);

  const getRandomPhrase = () => {
    const audioEffect = new Audio("/audio/Voicy_Snoopy Sound 4.mp3");
    audioEffect.play().catch(() => {});

    const availablePhrases = phrases.filter((p) => p !== currentPhrase);
    const randomPhrase =
      availablePhrases[Math.floor(Math.random() * availablePhrases.length)];

    setCurrentPhrase(randomPhrase);
  };

  useEffect(() => {
    if (showMessage) {
      const bgAudio = new Audio("audio/CARTASOUND2.mp3");
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
    setIsPlaying((prev) => !prev);
  };

  return (
    <div className="min-h-screen bg-pixel-sky relative overflow-hidden">
      <Confetti />

      {/* Banner */}
      <div className="absolute top-0 left-0 right-0 h-16 flex justify-around items-start z-10">
        {[
          "#FF6B6B",
          "#95E1D3",
          "#FF8B94",
          "#FFA07A",
          "#98D8C8",
          "#FFD93D",
          "#6BCF7F",
          "#A8DADC",
          "#B19CD9",
        ].map((color, i) => (
          <div
            key={i}
            className="w-0 h-0 border-l-[30px] border-l-transparent border-r-[30px] border-r-transparent border-t-[40px]"
            style={{ borderTopColor: color }}
          />
        ))}
      </div>

      {/* Nubes */}
      <img
        src={cloud}
        className="absolute top-20 left-10 w-32 opacity-80 animate-float"
        style={{ imageRendering: "pixelated" }}
      />
      <img
        src={cloud}
        className="absolute top-32 right-20 w-40 opacity-70 animate-float"
        style={{ imageRendering: "pixelated", animationDelay: "1s" }}
      />
      <img
        src={cloud}
        className="absolute top-24 left-1/3 w-36 opacity-60 animate-float"
        style={{ imageRendering: "pixelated", animationDelay: "2s" }}
      />

      <div className="relative z-20 pt-16 pb-8 px-4 max-w-4xl mx-auto">
        <h1 className="text-center text-primary text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-pixel mb-3 sm:mb-4 pixel-shadow animate-bounce-in leading-tight">
          🎉 FELIZ<br />CUMPLEAÑOS<br />KAREN 🎂
        </h1>

        <p className="text-center text-accent text-xs sm:text-sm md:text-base font-pixel mb-6 sm:mb-8 animate-fade-in px-4">
          Hoy es un buen día para ser feliz ✨
        </p>

        {/* Burbuja */}
        <div
          className="flex justify-center mb-4 sm:mb-6 px-4 animate-bounce-in"
          style={{ animationDelay: "0.3s" }}
        >
          <Card className="bg-card border-4 border-foreground pixel-shadow w-full max-w-sm p-4 sm:p-5 relative">
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-t-[20px] border-t-card" />
            <p className="text-foreground text-xs sm:text-sm font-pixel text-center">
              {currentPhrase}
            </p>
          </Card>
        </div>

        {/* Snoopy grande */}
        <div className="flex justify-center mb-6 sm:mb-8">
          <img
            src={snoopyHouse}
            className="w-56 sm:w-64 md:w-72 lg:w-80 mx-auto animate-bounce-in"
            style={{ imageRendering: "pixelated", animationDelay: "0.5s" }}
          />
        </div>

        {/* Botón nueva frase */}
        <div className="flex justify-center mb-12 sm:mb-16">
          <Button
            onClick={getRandomPhrase}
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-pixel text-xs sm:text-sm px-6 sm:px-8 py-5 sm:py-6 pixel-shadow hover:scale-105"
          >
            ✚ Nueva frase
          </Button>
        </div>

        <p className="text-center text-accent text-xs sm:text-sm md:text-base font-pixel mb-6 px-4">
          No toques los Snoopy luego se enojan 😞
        </p>

        {/* Walking Snoopy */}
        <div className="relative h-28 sm:h-32 md:h-40">
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-pixel-grass border-t-4 border-foreground">
            <div className="absolute bottom-2 left-[10%]">🌸</div>
            <div className="absolute bottom-2 left-[25%]">🌼</div>
            <div className="absolute bottom-2 right-[15%]">🌸</div>
            <div className="absolute bottom-2 right-[30%]">🌺</div>
            <div className="absolute bottom-3 left-[50%]">🌼</div>
          </div>

          <WalkingSnoopy startPosition={10} duration={15} delay={0} />
          <WalkingSnoopy startPosition={40} duration={20} delay={3} />
          <WalkingSnoopy startPosition={70} duration={18} delay={6} />
        </div>
      </div>

      {/* Botones flotantes */}
      <div className="fixed bottom-4 right-4 flex gap-2 z-30">
        <Button
          onClick={() => setShowMessage(!showMessage)}
          size="icon"
          className="w-12 h-12 rounded-full bg-pixel-cloud border-3 border-foreground pixel-shadow"
        >
          <MessageCircle className="w-5 h-5 text-foreground" />
        </Button>

        <Button
          onClick={toggleMusic}
          size="icon"
          className={`w-12 h-12 rounded-full border-3 border-foreground pixel-shadow ${
            isPlaying ? "bg-primary" : "bg-primary/50"
          }`}
        >
          <Music className="w-5 h-5 text-primary-foreground" />
        </Button>
      </div>

      {/* Carta + botón video */}
      {showMessage && (
        <div
          className="fixed inset-0 bg-foreground/50 flex items-center justify-center z-40 p-4"
          onClick={() => setShowMessage(false)}
        >
          <Card
            className="relative bg-card border-4 border-foreground pixel-shadow p-6 max-w-sm mx-4 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src="/img/snoopy-bg.png"
              className="absolute inset-0 w-full h-full object-contain opacity-20 pointer-events-none"
              style={{ imageRendering: "pixelated" }}
            />

            <div className="relative">
              <h2 className="text-primary text-xl font-pixel mb-4">
                💌 Mensaje especial
              </h2>

              <p className="text-foreground text-sm font-pixel leading-relaxed mb-4">
                {carta}
              </p>

              {/* ⭐ BOTÓN NUEVO PARA VER VIDEO ⭐ */}
              <Button
  onClick={() => {
    // 1️⃣ Pausar música si está activa
    const bg = document.querySelector("audio");
    if (bg) bg.pause();

    // 2️⃣ Cerrar la carta
    setShowMessage(false);

    // 3️⃣ Abrir el video
    window.open("/videos/video.mp4", "_blank");
  }}
  className="w-full bg-primary hover:bg-primary/80 text-primary-foreground font-pixel pixel-shadow"
>
  ▶ Ver video especial
</Button>

            </div>
          </Card>
        </div>
      )}
    </div>
  );
};
