'use client';

import { motion, useMotionValue, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Star, MapPin, Calendar, Users, ArrowRight, Clock, TrendingUp } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const tours = [
  {
    id: 'bali-adventure',
    title: 'Bali Adventure',
    location: 'Indonesia',
    duration: '7 nights - 8 days',
    price: 'INR 65,000',
    originalPrice: 'INR 75,000',
    rating: 4.9,
    reviews: 324,
    image: 'https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
    highlights: ['Uluwatu Temple', 'Gili Islands', 'Rice Terraces', 'Beach Hopping'],
    dates: 'Aug 29 - Sep 5',
    groupSize: '18-35 age group',
    trending: true,
    discount: '13% OFF',
  },
  {
    id: 'thailand-explorer',
    title: 'Thailand Explorer',
    location: 'Thailand',
    duration: '10 nights - 11 days',
    price: 'INR 78,000',
    originalPrice: 'INR 88,000',
    rating: 4.8,
    reviews: 278,
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
    highlights: ['Bangkok Temples', 'Phi Phi Islands', 'Night Markets', 'Floating Markets'],
    dates: 'Sep 15 - Sep 25',
    groupSize: '18-35 age group',
    trending: false,
    discount: '11% OFF',
  },
  {
    id: 'vietnam-discovery',
    title: 'Vietnam Discovery',
    location: 'Vietnam',
    duration: '12 nights - 13 days',
    price: 'INR 82,000',
    originalPrice: 'INR 92,000',
    rating: 4.7,
    reviews: 156,
    image: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
    highlights: ['Ha Long Bay', 'Ho Chi Minh City', 'Mekong Delta', 'Ancient Temples'],
    dates: 'Oct 1 - Oct 13',
    groupSize: '18-35 age group',
    trending: true,
    discount: '11% OFF',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

export default function SimpleToursCarousel() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-muted/30 via-background to-muted/20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Badge 
            variant="secondary" 
            className="mb-6 px-4 py-2 text-sm font-medium"
          >
            <TrendingUp className="w-4 h-4 mr-2" />
            Popular Tours
          </Badge>
          <h2 className="font-seasons text-4xl md:text-6xl lg:text-7xl font-light text-foreground mb-6 tracking-tight">
            Handpicked
            <span className="block bg-gradient-to-r from-primary via-purple-500 to-accent bg-clip-text text-transparent">
              Adventures
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover our carefully curated selection of extraordinary travel experiences, 
            designed to create memories that last a lifetime.
          </p>
        </motion.div>

        {/* Tours Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {tours.map((tour, index) => (
            <motion.div
              key={tour.id}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Card className="group relative overflow-hidden border-0 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-500 h-full">
                {/* Image Container */}
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={tour.image}
                    alt={tour.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  
                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 flex flex-col gap-2">
                    {tour.trending && (
                      <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white border-0">
                        <TrendingUp className="w-3 h-3 mr-1" />
                        Trending
                      </Badge>
                    )}
                    <Badge variant="secondary" className="bg-black/50 text-white border-0 backdrop-blur-sm">
                      {tour.discount}
                    </Badge>
                  </div>

                  {/* Price */}
                  <div className="absolute top-4 right-4">
                    <div className="bg-white/90 backdrop-blur-sm rounded-xl px-3 py-2 text-right">
                      <div className="text-sm text-muted-foreground line-through">
                        {tour.originalPrice}
                      </div>
                      <div className="font-bold text-foreground">{tour.price}</div>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="absolute bottom-4 left-4">
                    <div className="flex items-center space-x-1 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2">
                      <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      <span className="font-semibold text-foreground">{tour.rating}</span>
                      <span className="text-muted-foreground text-sm">({tour.reviews})</span>
                    </div>
                  </div>
                </div>

                <CardContent className="p-6">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-seasons text-2xl font-medium text-foreground mb-1 group-hover:text-primary transition-colors duration-300">
                        {tour.title}
                      </h3>
                      <div className="flex items-center text-muted-foreground">
                        <MapPin className="h-4 w-4 mr-1" />
                        <span className="text-sm">{tour.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Tour Details */}
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span className="text-sm">{tour.duration}</span>
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Users className="h-4 w-4 mr-2" />
                      <span className="text-sm">{tour.groupSize}</span>
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Clock className="h-4 w-4 mr-2" />
                      <span className="text-sm">{tour.dates}</span>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="mb-6">
                    <h4 className="font-medium text-foreground mb-3">Highlights:</h4>
                    <div className="flex flex-wrap gap-2">
                      {tour.highlights.slice(0, 3).map((highlight, i) => (
                        <Badge
                          key={i}
                          variant="outline"
                          className="text-xs bg-primary/5 border-primary/20 text-primary hover:bg-primary/10"
                        >
                          {highlight}
                        </Badge>
                      ))}
                      {tour.highlights.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{tour.highlights.length - 3} more
                        </Badge>
                      )}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Button 
                    asChild 
                    className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 group/btn"
                  >
                    <Link href={`/tours/${tour.id}`} className="flex items-center justify-center">
                      View Details
                      <motion.div
                        className="ml-2"
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        <ArrowRight className="h-4 w-4" />
                      </motion.div>
                    </Link>
                  </Button>
                </CardContent>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Tours CTA */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Button 
            asChild
            variant="outline"
            size="lg"
            className="px-8 py-6 text-lg border-2 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 group"
          >
            <Link href="/tours" className="flex items-center">
              View All Tours
              <motion.div
                className="ml-2"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <ArrowRight className="h-5 w-5" />
              </motion.div>
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}