import { useState, useRef } from "react";
import { Volume2, VolumeX } from "lucide-react";

const WeddingMusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioContextRef = useRef<AudioContext | null>(null);

  const playMelody = () => {
    if (isPlaying) return;

    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    audioContextRef.current = audioContext;

    // Romantic melody notes (simplified "Canon in D")
    const notes = [
      { freq: 294, dur: 0.5 }, { freq: 262, dur: 0.5 },
      { freq: 330, dur: 0.5 }, { freq: 294, dur: 0.5 },
      { freq: 349, dur: 0.5 }, { freq: 330, dur: 0.5 },
      { freq: 392, dur: 0.5 }, { freq: 349, dur: 0.5 },
      { freq: 440, dur: 0.5 }, { freq: 392, dur: 0.5 },
      { freq: 349, dur: 0.5 }, { freq: 330, dur: 0.5 },
      { freq: 294, dur: 0.5 }, { freq: 330, dur: 0.5 },
      { freq: 262, dur: 1.0 },
      // Repeat
      { freq: 294, dur: 0.5 }, { freq: 262, dur: 0.5 },
      { freq: 330, dur: 0.5 }, { freq: 294, dur: 0.5 },
      { freq: 349, dur: 0.5 }, { freq: 330, dur: 0.5 },
      { freq: 392, dur: 0.5 }, { freq: 349, dur: 0.5 },
      { freq: 440, dur: 1.0 },
    ];

    let time = audioContext.currentTime;
    notes.forEach(({ freq, dur }) => {
      const osc = audioContext.createOscillator();
      const gain = audioContext.createGain();
      osc.type = "triangle";
      osc.frequency.value = freq;
      gain.gain.setValueAtTime(0.08, time);
      gain.gain.exponentialRampToValueAtTime(0.001, time + dur - 0.02);
      osc.connect(gain);
      gain.connect(audioContext.destination);
      osc.start(time);
      osc.stop(time + dur);
      time += dur;
    });

    setIsPlaying(true);
    const totalDuration = notes.reduce((sum, n) => sum + n.dur, 0);
    setTimeout(() => setIsPlaying(false), totalDuration * 1000);
  };

  return (
    <button
      onClick={playMelody}
      className="fixed top-6 right-6 z-50 p-3 rounded-full shadow-elegant transition-all duration-300 hover:scale-110"
      style={{
        background: "hsl(var(--card) / 0.9)",
        backdropFilter: "blur(10px)",
        border: "1px solid hsl(var(--gold-light) / 0.4)",
      }}
      aria-label={isPlaying ? "Music playing" : "Play music"}
    >
      {isPlaying ? (
        <Volume2 className="w-5 h-5 text-gold" />
      ) : (
        <VolumeX className="w-5 h-5 text-muted-foreground" />
      )}
    </button>
  );
};

export default WeddingMusicPlayer;
