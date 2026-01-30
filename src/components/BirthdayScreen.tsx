import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Music, MessageCircle } from "lucide-react";
import snoopyHouse from "@/assets/snoopy-house.png";
import cloud from "@/assets/cloud.png";
import { WalkingSnoopy } from "./WalkingSnoopy";
import { Confetti } from "./Confetti";

const phrases = [
  "Snoopy dice: Hoy fuiste suficiente, incluso en silencio 🌙",
  "Snoopy dice: No correr también es avanzar 🐢",
  "Snoopy dice: Descansar es parte del camino ☁️",
  "Snoopy dice: No todo se arregla hoy, y está bien 🧩",
  "Snoopy dice: A veces respirar es el mayor logro 🌬️",
  "Snoopy dice: Tu ritmo es válido, no lo compares 🐾",
  "Snoopy dice: Incluso los días grises cuentan 🌫️",
  "Snoopy dice: No tienes que explicarte a todos 🍃",
  "Snoopy dice: Ser amable contigo también es progreso 💛",
  "Snoopy dice: Lo simple también puede sanar ✨",
  "Snoopy dice: Hoy no fue perfecto, pero fue real 🌱",
  "Snoopy dice: Mañana es otra oportunidad sin prisa 🌅"
];


const carta = `
Karen

Este pequeño mundo lo hice pensando en ti.
En tu forma de sentir, por como eres,
y de seguir incluso cuando parece difícil.

Que Snoopy te recuerde hoy
que eres la mejor lo que haces,
haces feliz a todos de tu alrededor sin notarlo,
por como eres tan transparente, tierna y amable,
y que eres más que suficiente tal como eres.

Te quiero mucho Karen 💞
`;


export function BirthdayKaren() {
  const [currentPhrase, setCurrentPhrase] = useState(phrases[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);

  const getRandomPhrase = () => {
    const effect = new Audio("/audio/Voicy_Snoopy Sound 4.mp3");
    effect.play().catch(() => {});

    const available = phrases.filter(p => p !== currentPhrase);
    setCurrentPhrase(
      available[Math.floor(Math.random() * available.length)]
    );
  };

  useEffect(() => {
    if (showMessage) {
      const bg = new Audio("/audio/CARTASOUND2.mp3");
      bg.loop = true;
      bg.play().catch(() => {});
      setAudio(bg);
    } else {
      audio?.pause();
      if (audio) audio.currentTime = 0;
      setAudio(null);
      setIsPlaying(false);
    }
  }, [showMessage]);

  const toggleMusic = () => {
    if (!audio) return;
    if (isPlaying) audio.pause();
    else audio.play().catch(() => {});
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="min-h-screen bg-pixel-sky relative overflow-hidden">
      <Confetti />

      {/* Banner */}
      <div className="absolute top-0 left-0 right-0 h-16 flex justify-around z-10">
        {[
          "#FF6B6B", "#95E1D3", "#FF8B94", "#FFA07A",
          "#98D8C8", "#FFD93D", "#6BCF7F", "#A8DADC", "#B19CD9"
        ].map((color, i) => (
          <div
            key={i}
            className="w-0 h-0 border-l-[30px] border-l-transparent border-r-[30px] border-r-transparent border-t-[40px]"
            style={{ borderTopColor: color }}
          />
        ))}
      </div>

      {/* Nubes */}
      <img src={cloud} className="absolute top-20 left-10 w-32 opacity-80 animate-float" />
      <img src={cloud} className="absolute top-32 right-20 w-40 opacity-70 animate-float" style={{ animationDelay: "1s" }} />
      <img src={cloud} className="absolute top-24 left-1/3 w-36 opacity-60 animate-float" style={{ animationDelay: "2s" }} />

      <div className="relative z-20 pt-16 pb-8 px-4 max-w-4xl mx-auto">
        <h1 className="text-center text-primary text-4xl font-pixel mb-4 animate-bounce-in">
          🎉 FELIZ CUMPLEAÑOS KAREN 🎂
        </h1>

        <p className="text-center text-accent font-pixel mb-6">
          Hoy es un buen día para ser feliz ✨
        </p>

        {/* Burbuja */}
        <div className="flex justify-center mb-6">
          <Card className="bg-card border-4 border-foreground pixel-shadow max-w-sm p-4 relative">
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-t-[20px] border-t-card" />
            <p className="text-center font-pixel text-sm">{currentPhrase}</p>
          </Card>
        </div>

        {/* Snoopy */}
        <div className="flex justify-center mb-8">
          <img src={snoopyHouse} className="w-72 animate-bounce-in" />
        </div>

        {/* Botón frase */}
        <div className="flex justify-center mb-12">
          <Button onClick={getRandomPhrase} className="font-pixel px-8 py-6">
            ✚ Nueva frase
          </Button>
        </div>

        <p className="text-center font-pixel mb-6">
          No toques los Snoopy luego se enojan 😞
        </p>

        {/* Walking Snoopy */}
        <div className="relative h-32">
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-pixel-grass border-t-4 border-foreground" />
          <WalkingSnoopy startPosition={10} duration={15} delay={0} />
          <WalkingSnoopy startPosition={40} duration={20} delay={3} />
          <WalkingSnoopy startPosition={70} duration={18} delay={6} />
        </div>
      </div>

      {/* Botones flotantes */}
      <div className="fixed bottom-4 right-4 flex gap-2 z-30">
        <Button onClick={() => setShowMessage(true)} size="icon">
          <MessageCircle />
        </Button>
        <Button onClick={toggleMusic} size="icon">
          <Music />
        </Button>
      </div>

      {/* Carta */}
      {showMessage && (
        <div
          className="fixed inset-0 bg-foreground/50 flex items-center justify-center z-40"
          onClick={() => setShowMessage(false)}
        >
          <Card
            className="bg-card border-4 border-foreground p-6 max-w-sm relative"
            onClick={e => e.stopPropagation()}
          >
            <h2 className="font-pixel text-xl mb-4">💌 Mensaje especial</h2>

            <p className="font-pixel text-sm whitespace-pre-line mb-4">
              {carta}
            </p>

            <Button
              className="w-full font-pixel"
              onClick={() => {
                audio?.pause();
                setShowMessage(false);
                window.open("/videos/video.mp4", "_blank");
              }}
            >
              ▶ Ver video especial
            </Button>
          </Card>
        </div>
      )}
    </div>
  );
}
