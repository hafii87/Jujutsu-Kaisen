import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles } from "lucide-react";

const domainData = [
  {
    type: "Jujutsu Sorcerers",
    entries: [
      "Satoru Gojo - Infinite Void",
      "Megumi Fushiguro - Chimera Shadow Garden",
      "Yuta Okkotsu - Authentic Mutual Love",
      "Suguru Geto - Womb Profusion",
    ],
  },
  {
    type: "Cursed Spirits",
    entries: [
      "Ryomen Sukuna - Malevolent Shrine",
      "Mahito - Self-Embodiment of Perfection",
      "Jogo - Coffin of the Iron Mountain",
      "Dagon - Horizon of the Captivating Skandha",
    ],
  },
];

export function HeroSection() {
  const [expanded, setExpanded] = useState(false);
  const [index, setIndex] = useState(0);
  const [blackHoleActive, setBlackHoleActive] = useState(false);
  const [showVortex, setShowVortex] = useState(false);
  const [isEntering, setIsEntering] = useState(false);

  const flatList = domainData.flatMap((d) => d.entries);
  const currentEntry = flatList[index];

  // Cycle domain entries
  useEffect(() => {
    if (!expanded) return;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % flatList.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [expanded]);

  const entryColor = (entry: string) => {
    if (entry.includes("Satoru") || entry.includes("Gojo")) return "from-blue-400 to-purple-600";
    if (entry.includes("Megumi")) return "from-purple-500 to-indigo-700";
    if (entry.includes("Yuta")) return "from-pink-400 to-red-500";
    if (entry.includes("Suguru")) return "from-yellow-400 to-orange-500";
    if (entry.includes("Sukuna")) return "from-red-600 to-pink-700";
    if (entry.includes("Mahito")) return "from-gray-400 to-blue-300";
    if (entry.includes("Jogo")) return "from-orange-500 to-red-600";
    if (entry.includes("Dagon")) return "from-teal-400 to-blue-500";
    return "from-white to-purple-400";
  };

  const handleEnterDomain = () => {
    setIsEntering(true);
    setShowVortex(true);
    
    // After vortex animation, show domain expansion
    setTimeout(() => {
      setShowVortex(false);
      setExpanded(true);
      setIsEntering(false);
    }, 4000);
  };

  // Trigger page after black hole animation
  const handleTransitionComplete = () => {
    window.location.href = "/newpage";
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center scale-110"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1762008387452-25fe91ab3f90')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.95)_100%)]" />
      </div>

      {/* PARTICLES */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {[...Array(45)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute w-1 h-1 rounded-full bg-purple-500/70"
            style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
            animate={{ y: [0, -40, 0], opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 4 + Math.random() * 3, repeat: Infinity }}
          />
        ))}
      </div>

      <AnimatePresence mode="wait">
        {/* HERO VIEW */}
        {!expanded && !blackHoleActive && !showVortex && (
          <motion.div
            key="hero"
            className="relative z-20 text-center px-6 max-w-6xl"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 1 }}
          >
            <motion.h1
              className="text-8xl md:text-9xl font-black mb-6 tracking-wider"
              style={{
                background: "linear-gradient(to bottom, #ffffff, #c084fc)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                textShadow: "0 0 40px rgba(168,85,247,0.7), 0 0 80px rgba(239,68,68,0.4)",
              }}
            >
              JUJUTSU KAISEN
            </motion.h1>

            <motion.p
              className="text-2xl text-gray-300 mb-16 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              A Dark Fantasy World of Cursed Energy and Sorcery Battles
            </motion.p>

            {/* Enhanced Enter the Domain Button */}
            <motion.div
              className="relative inline-block"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              {/* Floating Particles Around Button */}
              {[...Array(12)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-purple-400 rounded-full pointer-events-none"
                  style={{
                    top: `${Math.random() * 100 - 50}px`,
                    left: `${Math.random() * 100 - 50}px`,
                  }}
                  animate={{
                    y: [0, -20, 0],
                    x: [0, Math.random() * 10 - 5, 0],
                    opacity: [0.3, 1, 0.3],
                    scale: [1, 1.5, 1],
                  }}
                  transition={{
                    duration: 2 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                  }}
                />
              ))}

              {/* Outer Glow Ring - Pulsing */}
              <motion.div
                className="absolute inset-0 rounded-lg blur-3xl opacity-50 pointer-events-none"
                style={{
                  background: 'radial-gradient(circle, rgba(139, 92, 246, 0.6), rgba(220, 38, 38, 0.4))',
                }}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />

              {/* Middle Glow Ring */}
              <motion.div
                className="absolute inset-0 rounded-lg blur-2xl pointer-events-none"
                style={{
                  background: 'radial-gradient(circle, rgba(168, 85, 247, 0.8), rgba(239, 68, 68, 0.6))',
                }}
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              />

              <motion.button
                onClick={handleEnterDomain}
                disabled={isEntering}
                className="relative px-14 py-5 text-lg font-bold rounded-lg text-white overflow-hidden border-2 border-purple-500/30"
                style={{
                  background: 'linear-gradient(135deg, #7c3aed 0%, #dc2626 100%)',
                  boxShadow: '0 0 40px rgba(139, 92, 246, 0.6), 0 0 80px rgba(220, 38, 38, 0.4), inset 0 0 20px rgba(255, 255, 255, 0.1)',
                }}
                whileHover={{
                  scale: 1.08,
                  boxShadow: '0 0 60px rgba(139, 92, 246, 0.9), 0 0 120px rgba(220, 38, 38, 0.7), inset 0 0 30px rgba(255, 255, 255, 0.2)',
                }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Inner Glow Layer */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-red-500/20 rounded-lg"
                  animate={{
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                />

                {/* Shimmer Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  animate={{
                    x: ['-200%', '200%'],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                />

                <motion.span
                  className="relative z-10 flex items-center gap-3 tracking-wide"
                  style={{
                    textShadow: '0 0 10px rgba(255,255,255,0.5)',
                  }}
                  animate={{ opacity: [0.85, 1, 0.85] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  Enter the Domain <Sparkles />
                </motion.span>

                {/* Click Pulse Effect */}
                {isEntering && (
                  <motion.div
                    className="absolute inset-0 rounded-lg"
                    style={{
                      background: 'radial-gradient(circle, rgba(168, 85, 247, 0.9), rgba(239, 68, 68, 0.9))',
                    }}
                    initial={{ scale: 1, opacity: 1 }}
                    animate={{ scale: 3, opacity: 0 }}
                    transition={{ duration: 0.8 }}
                  />
                )}
              </motion.button>

              {/* Corner Accents */}
              <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-purple-400 rounded-tl-lg pointer-events-none" />
              <div className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-red-400 rounded-tr-lg pointer-events-none" />
              <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-red-400 rounded-bl-lg pointer-events-none" />
              <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-purple-400 rounded-br-lg pointer-events-none" />
            </motion.div>
          </motion.div>
        )}

        {/* EXPANDED DOMAIN */}
        {expanded && !blackHoleActive && (
          <motion.div
            key="expanded"
            className="relative z-20 text-center text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-6xl font-black mb-6 bg-gradient-to-r from-purple-400 to-red-500 bg-clip-text text-transparent">
              DOMAIN EXPANSION
            </h2>
            <p className="text-gray-400 mb-12">Ultimate Cursed Techniques Unleashed</p>

            {/* DOMAIN SEQUENCE */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentEntry}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.8 }}
                className="relative inline-block text-3xl md:text-5xl font-bold mb-20"
              >
                <motion.div
                  className={`absolute inset-0 -z-10 rounded-lg bg-gradient-to-r ${entryColor(currentEntry)} blur-xl opacity-60`}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1.2, opacity: 0.6 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  transition={{ duration: 0.8 }}
                />

                {[...Array(5)].map((_, i) => (
                  <motion.span
                    key={i}
                    className="absolute w-[2px] h-16 bg-white/50"
                    style={{ left: `${20 + i * 15}%`, top: `${-20 + i * 5}px`, rotate: `${-20 + i * 10}deg` }}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 0.5, y: 10 }}
                    transition={{ repeat: Infinity, repeatType: "mirror", duration: 0.6 + i * 0.2, delay: i * 0.1 }}
                  />
                ))}

                <span className="relative z-10">{currentEntry}</span>
              </motion.div>
            </AnimatePresence>

            {/* BUTTONS */}
            <div className="flex justify-center gap-6">
              <button
                onClick={() => setExpanded(false)}
                className="mt-10 px-10 py-4 border border-purple-500/40 text-purple-400 rounded-lg hover:bg-purple-500/10 transition"
              >
                Return to Main
              </button>

              <motion.button
                onClick={() => setBlackHoleActive(true)}
                className="mt-10 px-10 py-4 bg-black text-white rounded-lg border border-purple-600 hover:scale-105 hover:blur-sm transition"
                whileHover={{ scale: 1.05 }}
              >
                Enter the Unknown
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Vortex Animation Overlay */}
      <AnimatePresence>
        {showVortex && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {/* Background Fade to Black */}
            <motion.div
              className="absolute inset-0 bg-black"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            />

            {/* Vortex Container */}
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Outer Vortex Rings */}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute rounded-full border-2"
                  style={{
                    width: `${(i + 1) * 100}px`,
                    height: `${(i + 1) * 100}px`,
                    borderColor: i % 2 === 0 ? 'rgba(139, 92, 246, 0.3)' : 'rgba(220, 38, 38, 0.3)',
                  }}
                  initial={{ scale: 0, opacity: 0, rotate: 0 }}
                  animate={{
                    scale: [0, 1.5, 2],
                    opacity: [0, 0.8, 0],
                    rotate: 360,
                  }}
                  transition={{
                    duration: 3,
                    delay: i * 0.1,
                    ease: 'easeOut',
                  }}
                />
              ))}

              {/* Main Vortex Spiral */}
              <motion.div
                className="absolute rounded-full"
                style={{
                  width: '800px',
                  height: '800px',
                  background: 'conic-gradient(from 0deg, transparent, rgba(139, 92, 246, 0.8), rgba(220, 38, 38, 0.8), transparent)',
                }}
                initial={{ scale: 0, rotate: 0 }}
                animate={{
                  scale: [0, 1.5],
                  rotate: 720,
                }}
                transition={{
                  duration: 4,
                  ease: 'easeInOut',
                }}
              />

              {/* Galaxy Streams */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={`stream-${i}`}
                  className="absolute rounded-full"
                  style={{
                    width: '600px',
                    height: '600px',
                    background: `conic-gradient(from ${i * 60}deg, transparent, rgba(168, 85, 247, 0.4), transparent)`,
                  }}
                  initial={{ scale: 0, rotate: 0 }}
                  animate={{
                    scale: [0, 2],
                    rotate: i % 2 === 0 ? 1080 : -1080,
                  }}
                  transition={{
                    duration: 3.5,
                    delay: 0.2,
                    ease: 'easeInOut',
                  }}
                />
              ))}

              {/* Black Hole Core */}
              <motion.div
                className="absolute rounded-full"
                style={{
                  width: '200px',
                  height: '200px',
                  background: 'radial-gradient(circle, #000000, rgba(139, 92, 246, 0.8))',
                  boxShadow: '0 0 100px rgba(139, 92, 246, 0.9), inset 0 0 50px #000000',
                }}
                initial={{ scale: 0 }}
                animate={{
                  scale: [0, 1, 1.5],
                }}
                transition={{
                  duration: 3,
                  ease: 'easeOut',
                }}
              />

              {/* Inner Darkness Growing */}
              <motion.div
                className="absolute rounded-full bg-black"
                style={{
                  width: '100px',
                  height: '100px',
                }}
                initial={{ scale: 0 }}
                animate={{
                  scale: [0, 1, 20],
                }}
                transition={{
                  duration: 3.5,
                  delay: 0.5,
                  ease: 'easeIn',
                }}
              />

              {/* Energy Particles Spiraling In */}
              {[...Array(40)].map((_, i) => (
                <motion.div
                  key={`particle-${i}`}
                  className="absolute w-2 h-2 rounded-full"
                  style={{
                    background: i % 2 === 0 ? '#a855f7' : '#ef4444',
                    left: `${50 + Math.cos((i * 360) / 40) * 40}%`,
                    top: `${50 + Math.sin((i * 360) / 40) * 40}%`,
                  }}
                  initial={{ scale: 1, x: 0, y: 0 }}
                  animate={{
                    x: '-50%',
                    y: '-50%',
                    scale: 0,
                  }}
                  transition={{
                    duration: 2,
                    delay: i * 0.05,
                    ease: 'easeIn',
                  }}
                />
              ))}

              {/* Distortion Waves */}
              <motion.div
                className="absolute inset-0"
                style={{
                  background: 'radial-gradient(circle at center, transparent 30%, rgba(0,0,0,0.3) 60%, transparent 90%)',
                  backdropFilter: 'blur(2px)',
                }}
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 1.5,
                  repeat: 2,
                  ease: 'easeInOut',
                }}
              />

              {/* Camera Zoom Effect */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                initial={{ scale: 1 }}
                animate={{
                  scale: [1, 1.5],
                }}
                transition={{
                  duration: 4,
                  ease: 'easeIn',
                }}
              >
                <div className="text-center">
                  <motion.p
                    className="text-white text-xl font-bold mb-2"
                    style={{
                      textShadow: '0 0 20px rgba(168, 85, 247, 0.8)',
                    }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{
                      duration: 2,
                      delay: 1.5,
                    }}
                  >
                    Entering the Void...
                  </motion.p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* BLACK HOLE ANIMATION */}
      <AnimatePresence>
        {blackHoleActive && (
          <motion.div
            className="absolute inset-0 bg-black z-50 flex items-center justify-center"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 20 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeIn" }}
            onAnimationComplete={handleTransitionComplete}
          >
            <motion.div className="text-white text-5xl font-black">🌌</motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
