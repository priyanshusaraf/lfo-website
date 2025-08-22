'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Plane, 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Instagram, 
  Twitter, 
  Youtube,
  Heart,
  Send,
  ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    'Quick Links': [
      { name: 'Home', href: '/' },
      { name: 'About Us', href: '/about' },
      { name: 'Tours', href: '/tours' },
      { name: 'Destinations', href: '/destinations' },
      { name: 'Contact', href: '/contact' },
    ],
    'Popular Tours': [
      { name: 'Bali Adventure', href: '/tours/bali-adventure' },
      { name: 'Thailand Explorer', href: '/tours/thailand-explorer' },
      { name: 'Vietnam Discovery', href: '/tours/vietnam-discovery' },
      { name: 'Sri Lanka Escape', href: '/tours/sri-lanka-escape' },
      { name: 'Maldives Luxury', href: '/tours/maldives-luxury' },
    ],
    'Support': [
      { name: 'FAQ', href: '/faq' },
      { name: 'Help Center', href: '/help' },
      { name: 'Travel Insurance', href: '/insurance' },
      { name: 'Terms & Conditions', href: '/terms' },
      { name: 'Privacy Policy', href: '/privacy' },
    ],
  };

  const socialLinks = [
    { name: 'Instagram', href: 'https://www.instagram.com/letsfoff/', icon: Instagram, color: 'hover:text-pink-500' },
    { name: 'WhatsApp', href: 'https://wa.me/919836742420', icon: Phone, color: 'hover:text-green-500' },
    { name: 'Email', href: 'mailto:business@letsflyoff.com', icon: Mail, color: 'hover:text-blue-400' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Newsletter Section */}
        <motion.div
          className="py-16 border-b border-white/10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-white/20 backdrop-blur-sm">
            <CardContent className="p-8 lg:p-12 text-center">
              <Badge variant="secondary" className="mb-4 bg-white/10 text-white border-white/20">
                <Send className="w-4 h-4 mr-2" />
                Newsletter
              </Badge>
              <h3 className="font-seasons text-3xl lg:text-4xl font-light text-white mb-4">
                Stay Updated with Our Latest
                <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Adventures
                </span>
              </h3>
              <p className="text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed">
                Subscribe to our newsletter and be the first to know about new destinations, 
                exclusive offers, and insider travel tips from our experts.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent backdrop-blur-sm transition-all duration-300"
                />
                <Button
                  className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 px-6"
                >
                  Subscribe
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Main Footer Content */}
        <motion.div 
          className="py-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Company Info */}
            <motion.div className="lg:col-span-1" variants={itemVariants}>
              <Link href="/" className="flex items-center space-x-3 mb-6 group">
                <motion.div 
                  className="bg-gradient-to-br from-primary to-accent p-2 rounded-xl shadow-lg"
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Plane className="h-6 w-6 text-white" />
                </motion.div>
                <div className="font-seasons">
                  <h1 className="text-xl font-medium text-white group-hover:text-primary transition-colors duration-300">
                    Let's Fly Off
                  </h1>
                  <p className="text-xs text-white/60">Adventure Awaits</p>
                </div>
              </Link>
              
              <p className="text-white/80 mb-8 leading-relaxed">
                Your trusted partner for unforgettable travel experiences. We create memories 
                that last a lifetime through expertly crafted adventures around the world.
              </p>

              {/* Contact Info */}
              <div className="space-y-4">
                {[
                  { icon: MapPin, text: 'India • Exclusive Travel Experiences' },
                  { icon: Phone, text: '+91 8981560330' },
                  { icon: Mail, text: 'business@letsflyoff.com' },
                ].map((contact, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-3 group cursor-pointer"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <div className="p-2 rounded-lg bg-white/5 group-hover:bg-primary/20 transition-colors duration-300">
                      <contact.icon className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-white/80 group-hover:text-white transition-colors duration-300">
                      {contact.text}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Footer Links */}
            {Object.entries(footerLinks).map(([category, links], index) => (
              <motion.div key={category} variants={itemVariants}>
                <h3 className="font-seasons text-lg font-medium mb-6 text-white">
                  {category}
                </h3>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-white/70 hover:text-primary transition-all duration-300 group flex items-center"
                      >
                        <span className="group-hover:translate-x-1 transition-transform duration-300">
                          {link.name}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <Separator className="bg-white/10" />

        {/* Bottom Footer */}
        <motion.div 
          className="py-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-1 text-white/70 mb-4 md:mb-0">
              <span>© {currentYear} Let's Fly Off. Made with</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <Heart className="h-4 w-4 text-red-500 fill-current" />
              </motion.div>
              <span>for adventurers worldwide.</span>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  className={`p-2 rounded-lg bg-white/5 text-white/70 ${social.color} transition-all duration-300 hover:bg-white/10 hover:scale-110`}
                  aria-label={social.name}
                  whileHover={{ y: -2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}