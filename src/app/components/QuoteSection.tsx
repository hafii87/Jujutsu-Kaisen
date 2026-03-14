import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Quote } from 'lucide-react';

export function QuoteSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="relative py-40 px-6 bg-black overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-500/10 rounded-full blur-3xl" />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              boxShadow: '0 0 8px rgba(34, 211, 238, 0.5)'
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1]
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>

      <div className="relative max-w-5xl mx-auto text-center">
        {/* Quote Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-8 flex justify-center"
        >
          <div className="relative">
            <Quote className="w-16 h-16 text-cyan-400" style={{ strokeWidth: 1.5 }} />
            <motion.div
              className="absolute inset-0"
              animate={{
                boxShadow: [
                  '0 0 20px rgba(34, 211, 238, 0.4)',
                  '0 0 40px rgba(34, 211, 238, 0.6)',
                  '0 0 20px rgba(34, 211, 238, 0.4)'
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>

        {/* Quote Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <motion.h2
            className="text-4xl md:text-6xl lg:text-7xl font-black mb-8 leading-tight"
            style={{
              background: 'linear-gradient(to bottom, #ffffff, #22d3ee)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textShadow: '0 0 60px rgba(34, 211, 238, 0.3)'
            }}
            animate={{
              scale: [1, 1.02, 1]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            "Throughout Heaven and Earth,
            <br />
            I alone am the honored one."
          </motion.h2>

          <motion.p
            className="text-xl md:text-2xl text-gray-400 font-medium"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
          >
            — Satoru Gojo
          </motion.p>
        </motion.div>

        {/* Decorative Lines */}
        <div className="mt-12 flex justify-center gap-4">
          <motion.div
            className="h-px w-32 bg-gradient-to-r from-transparent to-cyan-400"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1, delay: 0.8 }}
            style={{ 
              transformOrigin: 'left',
              boxShadow: '0 0 10px rgba(34, 211, 238, 0.6)' 
            }}
          />
          <motion.div
            className="w-2 h-2 bg-cyan-400 rounded-full"
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 1 }}
            style={{ boxShadow: '0 0 15px rgba(34, 211, 238, 0.8)' }}
          />
          <motion.div
            className="h-px w-32 bg-gradient-to-l from-transparent to-cyan-400"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1, delay: 0.8 }}
            style={{ 
              transformOrigin: 'right',
              boxShadow: '0 0 10px rgba(34, 211, 238, 0.6)' 
            }}
          />
        </div>

        {/* Pulsing Energy Circle */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10"
          initial={{ scale: 0, opacity: 0 }}
          animate={isInView ? { 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1]
          } : {}}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="w-[600px] h-[600px] border border-cyan-400/20 rounded-full"
            style={{ boxShadow: '0 0 100px rgba(34, 211, 238, 0.2)' }}
          />
        </motion.div>

        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10"
          initial={{ scale: 0, opacity: 0 }}
          animate={isInView ? { 
            scale: [1, 1.3, 1],
            opacity: [0.05, 0.15, 0.05]
          } : {}}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
        >
          <div className="w-[800px] h-[800px] border border-red-600/20 rounded-full"
            style={{ boxShadow: '0 0 120px rgba(239, 68, 68, 0.2)' }}
          />
        </motion.div>
      </div>
    </section>
  );
}
