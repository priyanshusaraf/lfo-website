'use client';

import { useState } from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Calendar, 
  Users, 
  Star, 
  ArrowRight,
  Filter,
  Search,
  Clock,
  TrendingUp,
  Globe
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/layout/Header';
import PageTransition from '@/components/ui/page-transition';

const allTours = [
  {
    id: 'bali-adventure',
    title: 'Bali Adventure',
    location: 'Indonesia',
    duration: '7 nights - 8 days',
    price: 'INR 65,000',
    originalPrice: 'INR 85,000',
    rating: 4.9,
    reviews: 324,
    image: 'https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
    highlights: ['Uluwatu Temple', 'Gili Islands', 'Rice Terraces', 'Beach Hopping'],
    dates: 'Aug 29 - Sep 5',
    groupSize: '18-35 age group',
    category: 'Beach & Islands',
    difficulty: 'Easy',
    trending: true
  },
  {
    id: 'thailand-explorer',
    title: 'Thailand Explorer',
    location: 'Thailand',
    duration: '10 nights - 11 days',
    price: 'INR 78,000',
    originalPrice: 'INR 98,000',
    rating: 4.8,
    reviews: 278,
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
    highlights: ['Bangkok Temples', 'Phi Phi Islands', 'Night Markets', 'Floating Markets'],
    dates: 'Sep 15 - Sep 25',
    groupSize: '18-35 age group',
    category: 'Cultural & Adventure',
    difficulty: 'Moderate',
    trending: false
  },
  {
    id: 'vietnam-discovery',
    title: 'Vietnam Discovery',
    location: 'Vietnam',
    duration: '12 nights - 13 days',
    price: 'INR 82,000',
    originalPrice: 'INR 102,000',
    rating: 4.7,
    reviews: 156,
    image: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
    highlights: ['Ha Long Bay', 'Ho Chi Minh City', 'Mekong Delta', 'Ancient Temples'],
    dates: 'Oct 1 - Oct 13',
    groupSize: '18-35 age group',
    category: 'Cultural & Adventure',
    difficulty: 'Moderate',
    trending: true
  },
  {
    id: 'sri-lanka-escape',
    title: 'Sri Lanka Escape',
    location: 'Sri Lanka',
    duration: '8 nights - 9 days',
    price: 'INR 55,000',
    originalPrice: 'INR 72,000',
    rating: 4.6,
    reviews: 198,
    image: 'https://images.unsplash.com/photo-1544986581-efac024faf62?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
    highlights: ['Sigiriya Rock', 'Tea Plantations', 'Safari', 'Cultural Sites'],
    dates: 'Oct 20 - Oct 28',
    groupSize: '18-35 age group',
    category: 'Wildlife & Culture',
    difficulty: 'Easy',
    trending: false
  },
  {
    id: 'maldives-luxury',
    title: 'Maldives Luxury',
    location: 'Maldives',
    duration: '5 nights - 6 days',
    price: 'INR 125,000',
    originalPrice: 'INR 145,000',
    rating: 4.9,
    reviews: 89,
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
    highlights: ['Overwater Villas', 'Snorkeling', 'Spa Treatments', 'Sunset Cruises'],
    dates: 'Nov 5 - Nov 10',
    groupSize: '18-35 age group',
    category: 'Luxury & Beach',
    difficulty: 'Easy',
    trending: true
  },
  {
    id: 'japan-cultural',
    title: 'Japan Cultural Experience',
    location: 'Japan',
    duration: '9 nights - 10 days',
    price: 'INR 145,000',
    originalPrice: 'INR 165,000',
    rating: 4.8,
    reviews: 112,
    image: 'https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
    highlights: ['Tokyo Temples', 'Mount Fuji', 'Kyoto Gardens', 'Osaka Food'],
    dates: 'Nov 15 - Nov 24',
    groupSize: '18-35 age group',
    category: 'Cultural',
    difficulty: 'Moderate',
    trending: false
  }
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

const cardVariants = {
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

export default function ToursPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [selectedDuration, setSelectedDuration] = useState('All Durations');
  const [sortBy, setSortBy] = useState('Popularity');

  const categories = ['All Categories', 'Beach & Islands', 'Cultural & Adventure', 'Wildlife & Culture', 'Luxury & Beach', 'Cultural'];
  const durations = ['All Durations', '5-7 days', '8-10 days', '11+ days'];

  return (
    <PageTransition>
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 pt-20">
        {/* Animated Background */}
        <div className="absolute inset-0">
          {/* Floating Shapes */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-white/10 rounded-full blur-xl"
              style={{
                width: Math.random() * 400 + 200,
                height: Math.random() * 400 + 200,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                x: [0, Math.random() * 100 - 50],
                y: [0, Math.random() * 100 - 50],
                scale: [1, Math.random() * 0.5 + 0.8, 1],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge variant="secondary" className="mb-6 px-4 py-2 bg-white/20 text-white border-white/30 backdrop-blur-sm">
              <Globe className="w-4 h-4 mr-2" />
              Explore the World
            </Badge>
            
            <h1 className="font-seasons text-5xl md:text-7xl lg:text-8xl font-light text-white mb-8 tracking-tight">
              All Tours &
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
                Adventures
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-12 leading-relaxed">
              Discover our complete collection of handpicked travel experiences designed to create memories that last a lifetime.
            </p>
            
            {/* Enhanced Search & Filter Bar */}
            <motion.div
              className="max-w-5xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <Card className="border-0 shadow-2xl bg-white/10 backdrop-blur-xl">
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/60" />
                      <input
                        type="text"
                        placeholder="Search destinations..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 backdrop-blur-sm"
                      />
                    </div>
                    
                    <select 
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="px-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-white/50 backdrop-blur-sm"
                    >
                      {categories.map(category => (
                        <option key={category} value={category} className="text-gray-900">
                          {category}
                        </option>
                      ))}
                    </select>
                    
                    <select 
                      value={selectedDuration}
                      onChange={(e) => setSelectedDuration(e.target.value)}
                      className="px-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-white/50 backdrop-blur-sm"
                    >
                      {durations.map(duration => (
                        <option key={duration} value={duration} className="text-gray-900">
                          {duration}
                        </option>
                      ))}
                    </select>
                    
                    <Button className="bg-white text-primary hover:bg-white/90 h-12">
                      <Filter className="h-5 w-5 mr-2" />
                      Filter Tours
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Tours Grid Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-background via-muted/30 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Results Header */}
          <motion.div
            className="flex flex-col md:flex-row md:items-center justify-between mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div>
              <h2 className="font-seasons text-3xl lg:text-4xl font-light text-foreground mb-2">
                {allTours.length} Amazing Tours Available
              </h2>
              <p className="text-muted-foreground">
                Showing all available tours and experiences
              </p>
            </div>
            
            <div className="mt-4 md:mt-0">
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background"
              >
                <option>Sort by Popularity</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Duration: Short to Long</option>
                <option>Rating: High to Low</option>
              </select>
            </div>
          </motion.div>

          {/* Tours Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {allTours.map((tour, index) => (
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
                      <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0">
                        {tour.category}
                      </Badge>
                      {tour.trending && (
                        <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white border-0">
                          <TrendingUp className="w-3 h-3 mr-1" />
                          Trending
                        </Badge>
                      )}
                    </div>

                    {/* Price & Discount */}
                    <div className="absolute top-4 right-4 text-right">
                      <div className="bg-white/90 backdrop-blur-sm rounded-xl px-3 py-2 mb-2">
                        <div className="font-bold text-foreground">{tour.price}</div>
                        {tour.originalPrice && (
                          <div className="text-xs text-muted-foreground line-through">
                            {tour.originalPrice}
                          </div>
                        )}
                      </div>
                      {tour.originalPrice && (
                        <Badge className="bg-red-500 text-white">
                          SAVE {Math.round((1 - parseInt(tour.price.replace(/[^\d]/g, '')) / parseInt(tour.originalPrice.replace(/[^\d]/g, ''))) * 100)}%
                        </Badge>
                      )}
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
                        <Clock className="h-4 w-4 mr-2" />
                        <span className="text-sm">{tour.duration}</span>
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <Users className="h-4 w-4 mr-2" />
                        <span className="text-sm">{tour.groupSize}</span>
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-2" />
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

                    {/* CTA */}
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

          {/* Load More */}
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Button 
              variant="outline"
              size="lg"
              className="px-8 py-6 text-lg border-2 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 group"
            >
              Load More Tours
              <motion.div
                className="ml-2"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <ArrowRight className="h-5 w-5" />
              </motion.div>
            </Button>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
}