'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { 
  Plane, 
  Instagram, 
  MessageCircle, 
  UserCheck, 
  CreditCard,
  CheckCircle
} from 'lucide-react';

const steps = [
  {
    id: 1,
    title: 'Follow on Instagram',
    description: 'Follow @letsfoff on Instagram to see our latest adventures and connect with our community.',
    action: 'Follow @letsfoff',
    icon: Instagram,
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800&q=80',
    color: 'from-pink-500 to-purple-600'
  },
  {
    id: 2,
    title: 'Send a Message',
    description: 'DM us your travel interests, preferred dates, and why you want to join our exclusive group.',
    action: 'Send DM',
    icon: MessageCircle,
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80',
    color: 'from-blue-500 to-cyan-600'
  },
  {
    id: 3,
    title: 'Get Verified',
    description: 'Our team will review your profile and interests to ensure you\'re a perfect fit for our community.',
    action: 'Wait for Approval',
    icon: UserCheck,
    image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=800&q=80',
    color: 'from-green-500 to-emerald-600'
  },
  {
    id: 4,
    title: 'Receive Invitation',
    description: 'Once approved, you\'ll receive an exclusive invitation with trip details and payment information.',
    action: 'Get Invited',
    icon: CreditCard,
    image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=800&q=80',
    color: 'from-orange-500 to-red-600'
  }
];

export default function RegistrationProcess() {
  const [activeStep, setActiveStep] = useState(1);
  const [allowScroll, setAllowScroll] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  // Calculate airplane position based on scroll - only move when allowed
  const airplaneY = useTransform(
    scrollYProgress, 
    [0, 0.25, 0.5, 0.75, 1], 
    [0, 117, 234, 351, 468]
  );

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (value) => {
      // Define thresholds for each step - tighter control
      const thresholds = [0, 0.25, 0.5, 0.75, 1];
      
      let newActiveStep = 1;
      for (let i = 0; i < thresholds.length; i++) {
        if (value >= thresholds[i]) {
          newActiveStep = i + 1;
        }
      }
      
      // Allow scrolling past when we reach the last step
      if (newActiveStep === 4 && value > 0.9) {
        setAllowScroll(true);
      }
      
      // Only update if we've reached a new milestone
      if (newActiveStep !== activeStep && newActiveStep <= 4) {
        setActiveStep(newActiveStep);
      }
    });
    
    return () => unsubscribe();
  }, [scrollYProgress, activeStep]);

  return (
    <>
      {/* Registration Process Section */}
      <section ref={containerRef} className="h-[500vh] bg-gradient-to-br from-slate-50 via-blue-50 to-white relative">
        <div className="sticky top-0 h-screen flex items-center justify-center">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Side - Static with moving airplane */}
            <div className="relative h-[500px] flex flex-col justify-between">
              {/* Track line */}
              <div className="absolute left-8 top-4 bottom-4 w-1 bg-gray-200 rounded-full" />
              
              {/* Animated Airplane */}
              <motion.div
                className="absolute left-4 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center shadow-lg z-10"
                style={{ y: airplaneY }}
                transition={{ type: "spring", stiffness: 100, damping: 30 }}
              >
                <Plane className="w-4 h-4 text-white rotate-90" />
              </motion.div>

              {/* Static Steps */}
              <div className="h-full flex flex-col justify-between py-4">
                {steps.map((step, index) => (
                  <div key={step.id} className="flex items-center space-x-4 h-[100px] relative">
                    <div
                      className={`w-14 h-14 rounded-full flex items-center justify-center border-4 transition-all duration-500 z-10 bg-white ${
                        activeStep > step.id 
                          ? 'border-green-500' 
                          : activeStep === step.id 
                          ? 'border-blue-600 ring-4 ring-blue-200' 
                          : 'border-gray-300'
                      }`}
                    >
                      {activeStep > step.id ? (
                        <CheckCircle className="w-6 h-6 text-green-500" />
                      ) : (
                        <step.icon 
                          className={`w-6 h-6 ${
                            activeStep === step.id ? 'text-blue-600' : 'text-gray-400'
                          }`} 
                        />
                      )}
                    </div>
                    
                    <div className="flex-1">
                      <h3 className={`font-semibold text-lg transition-colors duration-300 ${
                        activeStep >= step.id ? 'text-blue-600' : 'text-gray-600'
                      }`}>
                        Step {step.id}: {step.title}
                      </h3>
                      <p className={`text-sm mt-1 transition-colors duration-300 ${
                        activeStep >= step.id ? 'text-gray-700' : 'text-gray-500'
                      }`}>
                        {step.description.substring(0, 60)}...
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side - Changes only on milestone reached */}
            <div className="h-[500px] flex items-center">
              <motion.div
                key={activeStep} // This ensures re-render only when activeStep changes
                initial={{ opacity: 0, scale: 0.95, x: 30 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ 
                  duration: 0.8, 
                  ease: [0.25, 0.46, 0.45, 0.94] // Custom easing
                }}
                className="w-full h-full"
              >
                <div className="relative h-full w-full overflow-hidden rounded-2xl shadow-2xl ring-2 ring-blue-500/20">
                  {/* Background Image */}
                  <Image
                    src={steps[activeStep - 1]?.image || ''}
                    alt={steps[activeStep - 1]?.title || ''}
                    fill
                    className="object-cover transition-all duration-1000"
                    priority={activeStep <= 2}
                    quality={90}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

                  {/* Step Badge */}
                  <div className="absolute top-6 left-6">
                    <motion.div
                      initial={{ y: -20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      className={`px-4 py-2 rounded-full bg-gradient-to-r ${steps[activeStep - 1]?.color} text-white font-semibold shadow-lg`}
                    >
                      Step {activeStep} of {steps.length}
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="absolute bottom-8 left-6 right-6 text-white">
                    <motion.div
                      initial={{ y: 30, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.4 }}
                    >
                      <h4 className="text-3xl font-bold mb-4">{steps[activeStep - 1]?.title}</h4>
                      <p className="text-lg opacity-90 mb-6 leading-relaxed">
                        {steps[activeStep - 1]?.description}
                      </p>
                      <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 text-white font-medium">
                        {steps[activeStep - 1]?.icon && (() => {
                          const IconComponent = steps[activeStep - 1].icon;
                          return <IconComponent className="w-4 h-4 mr-2" />;
                        })()}
                        {steps[activeStep - 1]?.action}
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Content below the registration process */}
      <section className="min-h-screen relative flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <Image
          src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1920&q=80"
          alt="Travel destination"
          fill
          className="object-cover"
          quality={90}
          sizes="100vw"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.h2 
            className="text-4xl lg:text-6xl font-bold text-white mb-6"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Ready to Start Your Journey?
          </motion.h2>
          <motion.p 
            className="text-xl lg:text-2xl text-white/90 mb-8"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Join thousands of travelers who have discovered amazing destinations with Let's F Off.
          </motion.p>
          <motion.button 
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-full hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started Now
          </motion.button>
        </div>
      </section>
    </>
  );
}