import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

const storyArcs = [
  {
    title: 'Sukuna Fingers Arc',
    description: 'Yuji Itadori swallows a cursed finger and becomes the vessel of Ryomen Sukuna, the King of Curses.',
    period: 'Beginning',
    color: 'red'
  },
  {
    title: 'Kyoto Goodwill Event',
    description: 'Tokyo and Kyoto schools compete in a friendly tournament, revealing the depths of each student\'s power.',
    period: 'Rising Action',
    color: 'purple'
  },
  {
    title: 'Shibuya Incident',
    description: 'A catastrophic battle erupts in Shibuya, changing the fate of jujutsu society forever.',
    period: 'Climax',
    color: 'red'
  },
  {
    title: 'Culling Game',
    description: 'Sorcerers and cursed spirits are forced into a deadly game orchestrated by ancient powers.',
    period: 'Current Arc',
    color: 'cyan'
  }
];

export function TimelineSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-32 px-6 bg-gradient-to-b from-black to-[#0b0b0d]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 
            className="text-6xl md:text-7xl font-black mb-6"
            style={{
              background: 'linear-gradient(to right, #ef4444, #ffffff, #22d3ee)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            STORY TIMELINE
          </h2>
          <div className="flex justify-center">
            <div className="h-1 w-48 bg-gradient-to-r from-transparent via-red-600 to-transparent rounded-full"
              style={{ boxShadow: '0 0 20px rgba(239, 68, 68, 0.6)' }}
            />
          </div>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <motion.div
            className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-red-600 via-purple-600 to-cyan-400 -translate-x-1/2 hidden md:block"
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.5 }}
            style={{ 
              transformOrigin: 'top',
              boxShadow: '0 0 20px rgba(239, 68, 68, 0.5)' 
            }}
          />

          {/* Timeline Items */}
          <div className="space-y-24">
            {storyArcs.map((arc, index) => {
              const colorMap = {
                red: {
                  gradient: 'from-red-600 to-red-700',
                  glow: 'rgba(239, 68, 68, 0.6)',
                  border: 'border-red-400/30'
                },
                purple: {
                  gradient: 'from-purple-600 to-purple-700',
                  glow: 'rgba(168, 85, 247, 0.6)',
                  border: 'border-purple-400/30'
                },
                cyan: {
                  gradient: 'from-cyan-600 to-cyan-700',
                  glow: 'rgba(34, 211, 238, 0.6)',
                  border: 'border-cyan-400/30'
                }
              };

              const colors = colorMap[arc.color as keyof typeof colorMap];
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={arc.title}
                  initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className={`relative grid md:grid-cols-2 gap-8 items-center ${isLeft ? '' : 'md:direction-rtl'}`}
                >
                  {/* Content Card */}
                  <div className={`${isLeft ? 'md:text-right md:pr-12' : 'md:pl-12 md:col-start-2'}`}>
                    <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 overflow-hidden group hover:bg-white/10 hover:border-white/20 transition-all duration-500">
                      {/* Background Glow */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-500`} />
                      
                      <div className="relative z-10">
                        {/* Period Badge */}
                        <motion.div
                          className={`inline-block px-4 py-1.5 mb-4 rounded-full bg-gradient-to-r ${colors.gradient} text-white text-xs font-bold tracking-wider uppercase`}
                          whileHover={{ scale: 1.05 }}
                          style={{ boxShadow: `0 0 20px ${colors.glow}` }}
                        >
                          {arc.period}
                        </motion.div>

                        {/* Title */}
                        <h3 className="text-3xl font-black text-white mb-4">
                          {arc.title}
                        </h3>

                        {/* Description */}
                        <p className="text-gray-300 leading-relaxed">
                          {arc.description}
                        </p>

                        {/* Decorative Line */}
                        <motion.div
                          className={`mt-6 h-1 bg-gradient-to-r ${isLeft ? 'from-transparent to-' + arc.color + '-600' : 'from-' + arc.color + '-600 to-transparent'}`}
                          initial={{ scaleX: 0 }}
                          animate={isInView ? { scaleX: 1 } : {}}
                          transition={{ duration: 0.8, delay: index * 0.2 + 0.3 }}
                          style={{ 
                            transformOrigin: isLeft ? 'right' : 'left',
                            boxShadow: `0 0 10px ${colors.glow}` 
                          }}
                        />
                      </div>

                      {/* Corner Accents */}
                      <div className={`absolute top-0 ${isLeft ? 'right-0' : 'left-0'} w-20 h-20 border-t-2 ${isLeft ? 'border-r-2' : 'border-l-2'} ${colors.border} ${isLeft ? 'rounded-tr-2xl' : 'rounded-tl-2xl'} opacity-50 group-hover:opacity-100 transition-opacity duration-500`} />
                      <div className={`absolute bottom-0 ${isLeft ? 'left-0' : 'right-0'} w-20 h-20 border-b-2 ${isLeft ? 'border-l-2' : 'border-r-2'} ${colors.border} ${isLeft ? 'rounded-bl-2xl' : 'rounded-br-2xl'} opacity-50 group-hover:opacity-100 transition-opacity duration-500`} />
                    </div>
                  </div>

                  {/* Center Node (Desktop Only) */}
                  <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    <motion.div
                      className="relative"
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : {}}
                      transition={{ duration: 0.5, delay: index * 0.2 + 0.2 }}
                    >
                      {/* Outer Ring */}
                      <motion.div
                        className={`w-20 h-20 rounded-full border-4 ${colors.border} bg-black flex items-center justify-center`}
                        animate={{
                          boxShadow: [
                            `0 0 20px ${colors.glow}`,
                            `0 0 40px ${colors.glow}`,
                            `0 0 20px ${colors.glow}`
                          ]
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        {/* Inner Circle */}
                        <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${colors.gradient}`}
                          style={{ boxShadow: `0 0 30px ${colors.glow}` }}
                        />
                      </motion.div>

                      {/* Pulse Rings */}
                      <motion.div
                        className={`absolute inset-0 rounded-full border-2 ${colors.border}`}
                        animate={{
                          scale: [1, 1.8, 1.8],
                          opacity: [0.8, 0, 0]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity
                        }}
                      />
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Background Effects */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-red-500/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl -z-10" />
    </section>
  );
}
