import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

export function StorySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-32 px-6 bg-[#0b0b0d]">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Section Header */}
            <div className="mb-8">
              <motion.h2 
                className="text-5xl md:text-6xl font-black mb-4"
                style={{
                  background: 'linear-gradient(to right, #ffffff, #22d3ee)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                The World of Curses
              </motion.h2>
              <div className="h-1 w-32 bg-gradient-to-r from-red-600 via-cyan-400 to-transparent rounded-full"
                style={{ boxShadow: '0 0 20px rgba(34, 211, 238, 0.6)' }}
              />
            </div>

            {/* Glass Card */}
            <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-red-500/10" />
              
              <div className="relative z-10 space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-cyan-400 mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" 
                      style={{ boxShadow: '0 0 10px rgba(34, 211, 238, 0.8)' }}
                    />
                    Cursed Energy
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    Born from negative human emotions, cursed energy flows through all living beings. 
                    This dark power manifests as malevolent curses that prey upon humanity.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-red-400 mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 bg-red-400 rounded-full animate-pulse" 
                      style={{ boxShadow: '0 0 10px rgba(239, 68, 68, 0.8)' }}
                    />
                    Jujutsu Sorcerers
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    Elite warriors trained to manipulate cursed energy, sorcerers stand as humanity's 
                    last defense against the supernatural threat. Each possesses unique techniques 
                    passed down through generations.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-purple-400 mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" 
                      style={{ boxShadow: '0 0 10px rgba(168, 85, 247, 0.8)' }}
                    />
                    The Balance
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    In a world where curses grow stronger each day, sorcerers must push beyond their 
                    limits. The line between human and curse blurs as they harness the very power they fight against.
                  </p>
                </div>
              </div>

              {/* Glow Effect */}
              <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-cyan-500/20 rounded-full blur-3xl" />
              <div className="absolute -top-20 -left-20 w-60 h-60 bg-red-500/20 rounded-full blur-3xl" />
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative group"
          >
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src="https://i.pinimg.com/videos/thumbnails/originals/02/6e/85/026e8544c659ac07bd0c4bc1bd6a2280.0000000.jpg"
                alt="Dark Fantasy World"
                className="w-full h-[600px] object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0d] via-transparent to-transparent" />
              
              {/* Glowing Border Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: 'linear-gradient(45deg, transparent, rgba(34, 211, 238, 0.3), transparent)',
                  boxShadow: 'inset 0 0 50px rgba(34, 211, 238, 0.3)'
                }}
              />
            </div>

            {/* Decorative Elements */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border-4 border-red-600/30 rounded-lg -z-10" />
            <div className="absolute -top-4 -left-4 w-32 h-32 border-4 border-cyan-400/30 rounded-lg -z-10" />
          </motion.div>
        </div>
      </div>

      {/* Animated Divider */}
      <motion.div 
        className="mt-32 max-w-4xl mx-auto h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ duration: 1.5, delay: 0.5 }}
        style={{ boxShadow: '0 0 20px rgba(34, 211, 238, 0.5)' }}
      />
    </section>
  );
}
