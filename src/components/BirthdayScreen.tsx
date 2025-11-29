import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Music, MessageCircle } from "lucide-react";
import snoopyHouse from "@/assets/snoopy-house.png";
import cloud from "@/assets/cloud.png";
import { WalkingSnoopy } from "./WalkingSnoopy";
import { Confetti } from "./Confetti";

const phrases = [
  "Snoopy dice: Eres un universo lleno de posibilidades ✨",
  "Snoopy dice: Tu paz interior vale más que cualquier prisa 🌿",
  "Snoopy dice: Lo que hoy parece pequeño mañana será un logro enorme 🌱",
  "Snoopy dice: Confía en lo que sientes, ahí vive tu verdad 💖",
  "Snoopy dice: Cada amanecer trae una nueva oportunidad ✨",
  "Snoopy dice: Mereces descansar sin culpa y sonreír sin motivo 🌼",
  "Snoopy dice: Tú eres tu propio refugio en los días difíciles 🏡",
  "Snoopy dice: Lo que das con amor siempre regresa multiplicado 💞",
  "Snoopy dice: Abraza tus procesos, todos tienen sentido con el tiempo 🌙",
  "Snoopy dice: Tu alma sabe cuándo es momento de avanzar 💫",
  "Snoopy dice: La calma también es una victoria 🌬️",
  "Snoopy dice: Eres más fuerte de lo que imaginas y más valioso de lo que crees 🌟",
  "Snoopy dice: Cada día es una nueva oportunidad para cuidar de ti 🌸",
  "Snoopy dice: A veces lo único que necesitas es un respiro profundo 🌤️",
  "Snoopy dice: Tu luz interior ilumina más de lo que notas 🔆",
  "Snoopy dice: No tengas miedo de empezar de nuevo, ahí está la magia ✨",
  "Snoopy dice: Siembra amor en lo que haces y verás florecer tu mundo 🌺",
  "Snoopy dice: Haz espacio en tu corazón para lo que te hace bien 💛",
  "Snoopy dice: Cada emoción que sientes es parte de tu crecimiento 💗",
  "Snoopy dice: El camino se vuelve claro cuando confías en ti 💓",
  "Snoopy dice: Celebra tus avances, incluso los que nadie ve 🌠",
  "Snoopy dice: Tu presencia hace el mundo un lugar más bonito 🌷",
  "Snoopy dice: Permítete brillar sin pedir permiso 🌟",
  "Snoopy dice: La paciencia siempre trae frutos dulces 🍯",
  "Snoopy dice: Suelta lo que pesa para que puedas volar más alto 🦋",
  "Snoopy dice: Lo mejor está creciendo en silencio para ti 🌾",
  "Snoopy dice: Cuida tu energía como cuidarías un tesoro 🕊️",
  "Snoopy dice: Lo que es para ti sabrá encontrarte 🍃",
  "Snoopy dice: Hoy elige ser amable con tu propia historia 💞",
];

const carta = "Tienes una luz propia que nadie puede replicar. Tu valor no se mide por otros, sino por la autenticidad y belleza que llevas dentro ✨";

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
        alt=""
        className="absolute top-20 left-10 w-32 opacity-80 animate-float"
        style={{ imageRendering: "pixelated" }}
      />
      <img
        src={cloud}
        alt=""
        className="absolute top-32 right-20 w-40 opacity-70 animate-float"
        style={{ imageRendering: "pixelated", animationDelay: "1s" }}
      />
      <img
        src={cloud}
        alt=""
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

        {/* Burbuja de frases */}
        <div
          className="flex justify-center mb-4 sm:mb-6 px-4 animate-bounce-in"
          style={{ animationDelay: "0.3s" }}
        >
          <Card className="bg-card border-4 border-foreground pixel-shadow w-full max-w-sm p-4 sm:p-5 relative">
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-t-[20px] border-t-card" />
            <div
              className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[14px] border-l-transparent border-r-[14px] border-r-transparent border-t-[22px] border-t-foreground"
              style={{ zIndex: -1 }}
            />
            <p className="text-foreground text-xs sm:text-sm font-pixel leading-relaxed text-center">
              {currentPhrase}
            </p>
          </Card>
        </div>

        {/* Snoopy grande */}
        <div className="flex justify-center items-center mb-6 sm:mb-8">
          <img
            src={snoopyHouse}
            alt="Snoopy"
            className="w-56 sm:w-64 md:w-72 lg:w-80 mx-auto animate-bounce-in"
            style={{ imageRendering: "pixelated", animationDelay: "0.5s" }}
          />
        </div>

        {/* Botón */}
        <div className="flex justify-center mb-12 sm:mb-16">
          <Button
            onClick={getRandomPhrase}
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-pixel text-xs sm:text-sm px-6 sm:px-8 py-5 sm:py-6 pixel-shadow transition-all hover:scale-105"
          >
            ✚ Nueva frase
          </Button>
        </div>

        <div>
          <p className="text-center text-accent text-xs sm:text-sm md:text-base font-pixel mb-6 sm:mb-8 animate-fade-in px-4">
            No toques los Snoopy luego se enojan 😞
          </p>
        </div>

        {/* Walking Snoopy */}
        <div className="relative h-28 sm:h-32 md:h-40">
          <div className="absolute bottom-0 left-0 right-0 h-20 sm:h-24 md:h-32 bg-pixel-grass border-t-4 border-foreground">
            <div className="absolute bottom-2 left-[10%] text-lg sm:text-xl md:text-2xl">
              🌸
            </div>
            <div className="absolute bottom-2 sm:bottom-3 left-[25%] text-base sm:text-lg md:text-xl">
              🌼
            </div>
            <div className="absolute bottom-2 right-[15%] text-lg sm:text-xl md:text-2xl">
              🌸
            </div>
            <div className="absolute bottom-2 sm:bottom-3 right-[30%] text-base sm:text-lg md:text-xl">
              🌺
            </div>
            <div className="absolute bottom-3 sm:bottom-4 left-[50%] text-lg sm:text-xl md:text-2xl">
              🌼
            </div>
          </div>

          <WalkingSnoopy startPosition={10} duration={15} delay={0} />
          <WalkingSnoopy startPosition={40} duration={20} delay={3} />
          <WalkingSnoopy startPosition={70} duration={18} delay={6} />
        </div>
      </div>

      {/* Botones flotantes */}
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
            isPlaying
              ? "bg-primary hover:bg-primary/80"
              : "bg-primary/50 hover:bg-primary/70"
          }`}
        >
          <Music className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground" />
        </Button>
      </div>

      {/* Carta especial con imagen de fondo */}
      {showMessage && (
        <div
          className="fixed inset-0 bg-foreground/50 flex items-center justify-center z-40 p-4"
          onClick={() => setShowMessage(false)}
        >
          <Card className="relative bg-card border-4 border-foreground pixel-shadow p-5 sm:p-6 md:p-8 max-w-sm sm:max-w-md mx-4 overflow-hidden">

            {/* Imagen de fondo con opacidad */}
            <img
              src="/img/snoopy-bg.png"
              className="absolute inset-0 w-full h-full object-contain opacity-20 pointer-events-none"
              style={{ imageRendering: "pixelated" }}
            />

            {/* Contenido */}
            <div className="relative">
              <h2 className="text-primary text-lg sm:text-xl md:text-2xl font-pixel mb-3 sm:mb-4">
                💌 Mensaje especial
              </h2>
              <p className="text-foreground text-xs sm:text-sm font-pixel leading-relaxed">
                {carta}
              </p>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
};
