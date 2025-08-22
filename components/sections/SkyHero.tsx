'use client';

import { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/layout/Header';

export default function SkyHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Parallax transforms
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.4, 0.8]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  const stats = [
    { label: 'Exclusive Destinations', value: '15+' },
    { label: 'Elite Travelers', value: '200+' },
    { label: 'Experience Rating', value: '5.0' },
  ];

  return (
    <div ref={containerRef} className="relative h-screen overflow-hidden">
      <Header />
      
      {/* Parallax Background */}
      <motion.div 
        className="absolute inset-0"
        style={{ y: backgroundY }}
      >
        <motion.div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat will-change-transform"
          style={{ 
            backgroundImage: 'url(/main-bg.png)',
            scale: scale
          }}
        />
        {/* Dynamic Overlay */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/40"
          style={{ opacity: overlayOpacity }}
        />
      </motion.div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            initial={{ 
              x: Math.random() * window?.innerWidth || 1920,
              y: Math.random() * window?.innerHeight || 1080,
            }}
            animate={{
              x: (Math.random() * window?.innerWidth || 1920) + 100,
              y: (Math.random() * window?.innerHeight || 1080) + 100,
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear"
            }}
          />
        ))}
      </div>

      {/* Main Content with Parallax */}
      <motion.div 
        className="relative z-10 h-full flex items-center justify-center"
        style={{ y: textY }}
      >
        <div className="text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          
          {/* Badge with 3D Effect */}
          <motion.div
            initial={{ opacity: 0, y: 50, rotateX: 90 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
            className="mb-8 perspective-1000"
          >
            <motion.div
              whileHover={{ 
                rotateX: 10, 
                rotateY: 10, 
                scale: 1.05,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
              }}
              className="inline-block"
            >
              <Badge 
                variant="secondary" 
                className="bg-white/20 text-white border-white/30 backdrop-blur-sm px-6 py-2 text-sm font-medium shadow-lg"
              >
                <Sparkles className="w-4 h-4 mr-2" />
                Award-Winning Travel Experiences
              </Badge>
            </motion.div>
          </motion.div>

          {/* Main Heading with 3D Transform */}
          <motion.h1 
            className="font-seasons text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light text-white tracking-tight leading-tight mb-6"
            initial={{ opacity: 0, y: 100, rotateX: 90 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            whileHover={{ 
              scale: 1.02,
              textShadow: "0 0 20px rgba(255,255,255,0.5)"
            }}
            style={{
              textShadow: "0 4px 8px rgba(0,0,0,0.3), 0 8px 16px rgba(0,0,0,0.2)"
            }}
          >
            LET'S FLY OFF
          </motion.h1>
          
          {/* Subtitle with depth */}
          <motion.p 
            className="text-lg sm:text-xl md:text-2xl text-white/90 mb-12 max-w-4xl mx-auto font-light leading-relaxed px-4"
            initial={{ opacity: 0, y: 50, z: -100 }}
            animate={{ opacity: 1, y: 0, z: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            style={{
              textShadow: "0 2px 4px rgba(0,0,0,0.3)"
            }}
          >
            Exclusive • Invite-Only • Elite Travel Experiences
          </motion.p>

          {/* Stats with 3D Cards */}
          <motion.div 
            className="flex flex-wrap justify-center gap-3 sm:gap-6 px-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl px-4 py-3 sm:px-6 sm:py-4 border border-white/20"
                initial={{ rotateY: -90, opacity: 0 }}
                animate={{ rotateY: 0, opacity: 1 }}
                transition={{ 
                  duration: 0.6, 
                  delay: 1.2 + (index * 0.1),
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  scale: 1.05, 
                  backgroundColor: "rgba(255,255,255,0.15)",
                  rotateY: 5,
                  rotateX: 5,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
                }}
                style={{
                  transformStyle: "preserve-3d",
                  boxShadow: "0 10px 20px rgba(0,0,0,0.2)"
                }}
              >
                <div className="flex items-center space-x-2 sm:space-x-3 text-white">
                  <div className="text-left">
                    <div className="font-semibold text-base sm:text-lg">{stat.value}</div>
                    <div className="text-xs sm:text-sm text-white/80">{stat.label}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}