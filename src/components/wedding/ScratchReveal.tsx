import { useRef, useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";

const ScratchReveal = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isRevealed, setIsRevealed] = useState(false);
  const [scratchPercent, setScratchPercent] = useState(0);
  const isDrawing = useRef(false);

  const checkReveal = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const pixels = imageData.data;
    let transparent = 0;
    const total = pixels.length / 4;

    for (let i = 3; i < pixels.length; i += 4) {
      if (pixels[i] === 0) transparent++;
    }

    const pct = (transparent / total) * 100;
    setScratchPercent(pct);

    if (pct > 50 && !isRevealed) {
      setIsRevealed(true);
      // Clear canvas fully
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      // Fire confetti
      confetti({
        particleCount: 150,
        spread: 80,
        origin: { y: 0.6 },
        colors: ["#c9a96e", "#e8d5b7", "#d4a5a5", "#b5c9b7", "#f0e6d3"],
      });
    }
  }, [isRevealed]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);

    // Draw scratch cover
    ctx.fillStyle = "hsl(38, 50%, 80%)";
    ctx.fillRect(0, 0, rect.width, rect.height);

    // Draw text
    ctx.fillStyle = "hsl(38, 40%, 55%)";
    ctx.font = `300 14px 'Josefin Sans', sans-serif`;
    ctx.textAlign = "center";
    ctx.fillText("✨ Scratch to reveal ✨", rect.width / 2, rect.height / 2 + 5);
  }, []);

  const scratch = (x: number, y: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const canvasX = x - rect.left;
    const canvasY = y - rect.top;

    ctx.globalCompositeOperation = "destination-out";
    ctx.beginPath();
    ctx.arc(canvasX, canvasY, 20, 0, Math.PI * 2);
    ctx.fill();
  };

  const handleStart = (x: number, y: number) => {
    isDrawing.current = true;
    scratch(x, y);
  };

  const handleMove = (x: number, y: number) => {
    if (!isDrawing.current) return;
    scratch(x, y);
  };

  const handleEnd = () => {
    isDrawing.current = false;
    checkReveal();
  };

  return (
    <section id="scratch" className="section-padding bg-cream">
      <div className="max-w-lg mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-subtitle mb-4"
        >
          Save The Date
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="section-title mb-10"
        >
          Reveal Our Date
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="relative wedding-card rounded-lg overflow-hidden mx-auto"
          style={{ width: 300, height: 160 }}
        >
          {/* Hidden content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-cream">
            <p className="section-subtitle text-xs mb-2">Monday</p>
            <p className="font-display text-4xl font-light text-gold-dark">December 15</p>
            <p className="font-display text-2xl font-light text-gold mt-1">2026</p>
            {isRevealed && (
              <motion.p
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-xs font-body text-muted-foreground mt-2"
              >
                🎉 See you there!
              </motion.p>
            )}
          </div>

          {/* Scratch canvas */}
          {!isRevealed && (
            <canvas
              ref={canvasRef}
              className="absolute inset-0 w-full h-full cursor-pointer touch-none"
              onMouseDown={(e) => handleStart(e.clientX, e.clientY)}
              onMouseMove={(e) => handleMove(e.clientX, e.clientY)}
              onMouseUp={handleEnd}
              onMouseLeave={handleEnd}
              onTouchStart={(e) => {
                const t = e.touches[0];
                handleStart(t.clientX, t.clientY);
              }}
              onTouchMove={(e) => {
                const t = e.touches[0];
                handleMove(t.clientX, t.clientY);
              }}
              onTouchEnd={handleEnd}
            />
          )}
        </motion.div>

        {!isRevealed && (
          <p className="text-xs text-muted-foreground mt-4 font-body">
            Use your finger or mouse to scratch
          </p>
        )}
      </div>
    </section>
  );
};

export default ScratchReveal;
