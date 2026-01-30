import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Music, MessageCircle } from "lucide-react";
import snoopyHouse from "@/assets/snoopy-house.png";
import cloud from "@/assets/cloud.png";
import { WalkingSnoopy } from "./WalkingSnoopy";
import { Confetti } from "./Confetti";

const phrases = [
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
Karen 💞

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
