import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

const galleryImages = [
  {
    url: 'https://qph.cf2.quoracdn.net/main-qimg-9cf9b1c4f0f0c0c9c5ad8fca0363d1d5-lq',
    title: 'Cursed Warriors',
    category: 'Characters'
  },
  {
    url: 'https://staticg.sportskeeda.com/editor/2023/09/dff48-16950406372284-1920.jpg',
    title: 'Shibuya Night',
    category: 'Locations'
  },
  {
    url: 'https://images.alphacoders.com/133/thumb-1920-1337367.png',
    title: 'Cursed Energy',
    category: 'Powers'
  },
  {
    url: 'https://mir-s3-cdn-cf.behance.net/projects/404/c7fc55176976113.Y3JvcCwyMjQyLDE3NTMsNzk5LDA.png',
    title: 'Ancient Shrine',
    category: 'Locations'
  },
  {
    url: 'https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2023%2F09%2Fjujutsu-kaisen-premium-bandai-prison-realm-release-info-000.jpg?w=960&cbr=1&q=90&fit=max',
    title: 'Dark Realm',
    category: 'Domains'
  },
  {
    url: 'https://static0.thegamerimages.com/wordpress/wp-content/uploads/2025/03/yuji-choso-headbutt.jpg',
    title: 'Battle Stance',
    category: 'Action'
  }
];

export function GallerySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-32 px-6 bg-[#0b0b0d]">
      <div className="max-w-7xl mx-auto">
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
              background: 'linear-gradient(to right, #22d3ee, #ffffff, #22d3ee)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            GALLERY
          </h2>
          <p className="text-xl text-gray-400">
            Witness the world of jujutsu sorcery
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative aspect-[4/5] overflow-hidden rounded-2xl cursor-pointer"
            >
              {/* Image */}
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

              {/* Glow Border on Hover */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: 'linear-gradient(45deg, transparent, rgba(34, 211, 238, 0.3), transparent)',
                  boxShadow: 'inset 0 0 50px rgba(34, 211, 238, 0.4)'
                }}
              />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                {/* Category Badge */}
                <motion.span
                  className="inline-block w-fit px-3 py-1 mb-3 rounded-full bg-gradient-to-r from-cyan-600 to-cyan-700 text-white text-xs font-bold tracking-wider uppercase"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  style={{ boxShadow: '0 0 20px rgba(34, 211, 238, 0.5)' }}
                >
                  {image.category}
                </motion.span>

                {/* Title */}
                <motion.h3
                  className="text-2xl font-black text-white mb-2"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.4 }}
                  style={{ textShadow: '0 0 20px rgba(0, 0, 0, 0.8)' }}
                >
                  {image.title}
                </motion.h3>

                {/* Hover Line */}
                <motion.div
                  className="h-1 bg-gradient-to-r from-cyan-400 to-transparent rounded-full"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.5 }}
                  style={{ 
                    transformOrigin: 'left',
                    boxShadow: '0 0 10px rgba(34, 211, 238, 0.8)' 
                  }}
                />
              </div>

              {/* Corner Decorations */}
              <div className="absolute top-4 right-4 w-16 h-16 border-t-2 border-r-2 border-cyan-400/0 group-hover:border-cyan-400/50 rounded-tr-2xl transition-all duration-500" />
              <div className="absolute bottom-4 left-4 w-16 h-16 border-b-2 border-l-2 border-red-600/0 group-hover:border-red-600/50 rounded-bl-2xl transition-all duration-500" />

              {/* Floating Particles on Hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-cyan-400 rounded-full"
                    style={{
                      left: `${20 + i * 20}%`,
                      top: `${30 + i * 10}%`,
                      boxShadow: '0 0 8px rgba(34, 211, 238, 0.8)'
                    }}
                    animate={{
                      y: [-10, -30, -10],
                      opacity: [0, 1, 0]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.2
                    }}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <motion.button
            className="group relative px-10 py-4 bg-transparent border-2 border-cyan-400 text-cyan-400 font-bold text-lg rounded-lg overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">View Full Gallery</span>
            <motion.div
              className="absolute inset-0 bg-cyan-400/20"
              initial={{ x: '-100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ boxShadow: '0 0 30px rgba(34, 211, 238, 0.6)' }}
            />
          </motion.button>
        </motion.div>
      </div>

      {/* Background Effects */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-red-500/5 rounded-full blur-3xl -z-10" />
    </section>
  );
}
