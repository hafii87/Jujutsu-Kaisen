import { motion, useInView } from "motion/react";
import { useRef } from "react";

export function PowerSystemSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative py-32 px-6 bg-black overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">

        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          {/* Creative Anime Heading */}
          <div className="relative inline-block">
            {/* Aura Glow */}
            <motion.div
              className="absolute -inset-12 rounded-full blur-3xl opacity-40"
              animate={{
                opacity: [0.3, 0.6, 0.3],
                scale: [1, 1.15, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{
                background:
                  "radial-gradient(circle, rgba(34,211,238,0.6), rgba(168,85,247,0.5), transparent 70%)",
              }}
            />

            {/* POWER SYSTEM Text */}
            <motion.h2
              className="relative text-6xl md:text-7xl font-black tracking-widest"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1 }}
              style={{
                background:
                  "linear-gradient(120deg, #22d3ee, #a855f7, #22d3ee)",
                backgroundSize: "200% 200%",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                textShadow: "0 0 40px rgba(168,85,247,0.35)",
              }}
            >
              POWER SYSTEM
            </motion.h2>

            {/* Energy Underline */}
            <motion.div
              className="mx-auto mt-4 h-[2px] w-52 rounded-full"
              animate={{
                scaleX: [0.4, 1, 0.4],
                opacity: [0.4, 1, 0.4],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{
                background:
                  "linear-gradient(to right, transparent, #22d3ee, #a855f7, transparent)",
                boxShadow: "0 0 20px rgba(168,85,247,0.8)",
              }}
            />
          </div>

          {/* Subtitle (UNCHANGED TEXT) */}
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mt-8">
            Master the art of cursed energy and unleash devastating techniques
          </p>
        </motion.div>

        {/* ================= FLOATING ENERGY FIELD ================= */}
        <div className="relative h-[420px] flex items-center justify-center overflow-hidden">

          {/* CURSED ENERGY */}
          <motion.div
            className="absolute w-44 h-44 rounded-full cursor-pointer"
            animate={{
              x: [0, -140, 100, 0],
              y: [0, 80, -120, 0],
              scale: [1, 1.08, 1],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div
              className="absolute inset-0 rounded-full bg-cyan-400/25 blur-3xl"
              style={{ boxShadow: "0 0 100px rgba(34,211,238,0.9)" }}
            />
            <div className="relative w-full h-full rounded-full bg-gradient-to-br from-cyan-300/40 to-cyan-600/70 backdrop-blur-xl border border-cyan-300/30" />
            <motion.div
              className="absolute inset-0 rounded-full border border-cyan-400/40"
              animate={{ scale: [1, 1.7], opacity: [0.6, 0] }}
              transition={{ duration: 2.6, repeat: Infinity }}
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
              <span className="text-cyan-300 text-lg font-semibold tracking-wide">
                Cursed Energy
              </span>
            </div>
          </motion.div>

          {/* CURSED TECHNIQUES */}
          <motion.div
            className="absolute w-48 h-48 rounded-full cursor-pointer"
            animate={{
              x: [0, 160, -90, 0],
              y: [0, -90, 130, 0],
              scale: [1, 1.12, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div
              className="absolute inset-0 rounded-full bg-purple-500/25 blur-3xl"
              style={{ boxShadow: "0 0 110px rgba(168,85,247,1)" }}
            />
            <div className="relative w-full h-full rounded-full bg-gradient-to-br from-purple-400/40 to-purple-700/70 backdrop-blur-xl border border-purple-400/30" />
            <motion.div
              className="absolute inset-0 rounded-full border border-purple-400/40"
              animate={{ scale: [1, 1.8], opacity: [0.6, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
              <span className="text-purple-300 text-lg font-semibold tracking-wide">
                Cursed Techniques
              </span>
            </div>
          </motion.div>

        </div>
      </div>

      {/* ================= AMBIENT BACKGROUND ================= */}
      <div className="absolute top-0 left-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl -z-10" />
    </section>
  );
}
