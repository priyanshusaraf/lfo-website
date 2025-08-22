'use client';

import { motion } from 'framer-motion';
import { 
  Shield, 
  Users, 
  MapPin, 
  Calendar, 
  Heart, 
  Star,
  Award,
  Globe
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const features = [
  {
    icon: Shield,
    title: 'Safe & Secure',
    description: 'Travel with confidence knowing that safety is our top priority. We partner with trusted local guides and verified accommodations.',
    color: 'from-blue-500 to-cyan-500',
    highlight: 'Trust & Safety'
  },
  {
    icon: Users,
    title: 'Expert Guides',
    description: 'Our experienced local guides bring destinations to life with insider knowledge and fascinating stories you won\'t find anywhere else.',
    color: 'from-purple-500 to-pink-500',
    highlight: 'Local Expertise'
  },
  {
    icon: MapPin,
    title: '50+ Destinations',
    description: 'Explore amazing destinations across Asia, Europe, and beyond. From hidden gems to iconic landmarks, we\'ve got it covered.',
    color: 'from-green-500 to-emerald-500',
    highlight: 'Global Reach'
  },
  {
    icon: Calendar,
    title: 'Flexible Booking',
    description: 'Book with confidence with our flexible cancellation policy and easy payment plans. Your adventure, your way.',
    color: 'from-orange-500 to-red-500',
    highlight: 'Flexibility'
  },
  {
    icon: Heart,
    title: 'Authentic Experiences',
    description: 'Immerse yourself in local culture with authentic experiences that connect you with the heart and soul of each destination.',
    color: 'from-pink-500 to-rose-500',
    highlight: 'Authenticity'
  },
  {
    icon: Star,
    title: '24/7 Support',
    description: 'Our dedicated support team is available around the clock to ensure your journey is smooth from start to finish.',
    color: 'from-yellow-500 to-amber-500',
    highlight: 'Always Here'
  },
  {
    icon: Award,
    title: 'Award Winning',
    description: 'Recognized as a leading travel company with multiple industry awards for excellence in customer service and experiences.',
    color: 'from-indigo-500 to-purple-500',
    highlight: 'Recognition'
  },
  {
    icon: Globe,
    title: 'Sustainable Travel',
    description: 'We\'re committed to responsible tourism that benefits local communities and preserves the beauty of our destinations.',
    color: 'from-teal-500 to-green-500',
    highlight: 'Eco-Friendly'
  },
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
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

export default function Features() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-background via-muted/30 to-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Badge 
            variant="secondary" 
            className="mb-6 px-4 py-2 text-sm font-medium"
          >
            Why Choose Us
          </Badge>
          <h2 className="font-seasons text-4xl md:text-6xl lg:text-7xl font-light text-foreground mb-6 tracking-tight">
            Exceptional Travel
            <span className="block bg-gradient-to-r from-primary via-purple-500 to-accent bg-clip-text text-transparent">
              Experiences
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We're not just another travel company. We're your partners in creating extraordinary memories that will last a lifetime.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div key={feature.title} variants={itemVariants}>
              <Card className="group relative overflow-hidden border-0 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-500 h-full">
                <CardContent className="p-6">
                  {/* Icon Background */}
                  <div className="relative mb-6">
                    <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <feature.icon className="h-7 w-7 text-white" />
                    </div>
                    
                    {/* Highlight Badge */}
                    <Badge 
                      variant="outline" 
                      className="absolute -top-2 -right-2 text-xs bg-background/90 backdrop-blur-sm"
                    >
                      {feature.highlight}
                    </Badge>
                  </div>

                  {/* Content */}
                  <h3 className="font-seasons text-xl font-medium text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {feature.description}
                  </p>

                  {/* Hover Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced Stats Section */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Card className="relative overflow-hidden border-0 bg-gradient-to-br from-primary/5 via-purple-500/5 to-accent/5 backdrop-blur-sm">
            <CardContent className="p-8 md:p-12">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  { value: '10K+', label: 'Happy Travelers', delay: 0.1 },
                  { value: '50+', label: 'Destinations', delay: 0.2 },
                  { value: '4.9', label: 'Average Rating', delay: 0.3 },
                  { value: '5+', label: 'Years Experience', delay: 0.4 },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="text-center group"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: stat.delay }}
                    viewport={{ once: true }}
                  >
                    <div className="font-seasons text-4xl md:text-5xl font-light bg-gradient-to-br from-primary to-accent bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                      {stat.value}
                    </div>
                    <p className="text-muted-foreground font-medium">
                      {stat.label}
                    </p>
                  </motion.div>
                ))}
              </div>
            </CardContent>
            
            {/* Background Decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 pointer-events-none" />
          </Card>
        </motion.div>
      </div>
    </section>
  );
}