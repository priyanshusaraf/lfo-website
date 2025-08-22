'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { 
  Instagram, 
  MessageCircle, 
  UserCheck, 
  CreditCard,
  ChevronRight
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
  const [isMobile, setIsMobile] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  // Return loading state during SSR
  if (!isMounted) {
    return (
      <section className="py-12 sm:py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded mb-4 mx-auto w-3/4"></div>
            <div className="h-4 bg-gray-200 rounded mb-8 mx-auto w-1/2"></div>
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-white rounded-2xl p-6 mb-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
                  <div className="flex-1">
                    <div className="h-6 bg-gray-200 rounded mb-2 w-3/4"></div>
                    <div className="h-4 bg-gray-200 rounded mb-4"></div>
                    <div className="h-8 bg-gray-200 rounded w-32"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (isMobile) {
    // Mobile-friendly version - simple vertical layout
    return (
      <section className="py-12 sm:py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          {/* Section Header */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-seasons text-3xl sm:text-4xl font-light text-gray-900 mb-4">
              How to Join Our 
              <span className="block bg-gradient-to-r from-primary via-purple-500 to-accent bg-clip-text text-transparent">
                Exclusive Community
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Follow these simple steps to become part of our elite travel community
            </p>
          </motion.div>

          {/* Steps */}
          <div className="space-y-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start space-x-4">
                  {/* Step Number & Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg mb-2">
                      {step.id}
                    </div>
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-r ${step.color}`}>
                      <step.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-xl text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {step.description}
                    </p>
                    <div className="inline-flex items-center px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-700">
                      <step.icon className="w-4 h-4 mr-2" />
                      {step.action}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-full hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-lg">
              Request Invitation
            </button>
          </motion.div>
        </div>
      </section>
    );
  }

  // Desktop version - keep the original complex layout
  return (
    <>
      {/* Registration Process Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-slate-50 via-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Steps */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <h2 className="font-seasons text-4xl lg:text-5xl font-light text-gray-900 mb-4">
                Join Our 
                <span className="block bg-gradient-to-r from-primary via-purple-500 to-accent bg-clip-text text-transparent">
                  Elite Community
                </span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Follow these steps to become part of our exclusive travel experiences
              </p>
            </div>

            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                className="flex items-start space-x-4"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {step.id}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-xl text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 mb-3 leading-relaxed">
                    {step.description}
                  </p>
                  <div className="inline-flex items-center px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-700">
                    <step.icon className="w-4 h-4 mr-2" />
                    {step.action}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Side - Visual */}
          <motion.div
            className="relative h-96 lg:h-[500px]"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative h-full w-full overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src={steps[0].image}
                alt="Registration process"
                fill
                className="object-cover"
                priority
                quality={85}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              
              <div className="absolute bottom-8 left-6 right-6 text-white">
                <h4 className="text-2xl font-bold mb-2">Ready to Start Your Journey?</h4>
                <p className="text-white/90 mb-4">
                  Join thousands of travelers who have discovered amazing destinations with Let's Fly Off.
                </p>
                <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-full hover:from-blue-600 hover:to-blue-700 transition-all duration-300">
                  Get Started Now
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}