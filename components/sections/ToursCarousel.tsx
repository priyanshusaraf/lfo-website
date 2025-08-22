'use client';

import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, Star, MapPin, Calendar, Users, ArrowRight } from 'lucide-react';

const tours = [
  {
    id: 'bali-adventure',
    title: 'Bali Adventure',
    location: 'Indonesia',
    duration: '7 nights - 8 days',
    price: 'INR 65,000',
    rating: 4.9,
    reviews: 324,
    image: 'https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
    highlights: ['Uluwatu Temple', 'Gili Islands', 'Rice Terraces', 'Beach Hopping'],
    dates: 'Aug 29 - Sep 5',
    groupSize: '18-35 age group',
    includes: ['Accommodation', 'Transfers', 'Activities', 'Guide']
  },
  {
    id: 'thailand-explorer',
    title: 'Thailand Explorer',
    location: 'Thailand',
    duration: '10 nights - 11 days',
    price: 'INR 78,000',
    rating: 4.8,
    reviews: 278,
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
    highlights: ['Bangkok Temples', 'Phi Phi Islands', 'Night Markets', 'Floating Markets'],
    dates: 'Sep 15 - Sep 25',
    groupSize: '18-35 age group',
    includes: ['Accommodation', 'Transfers', 'Activities', 'Guide']
  },
  {
    id: 'vietnam-discovery',
    title: 'Vietnam Discovery',
    location: 'Vietnam',
    duration: '12 nights - 13 days',
    price: 'INR 82,000',
    rating: 4.7,
    reviews: 156,
    image: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
    highlights: ['Ha Long Bay', 'Ho Chi Minh City', 'Mekong Delta', 'Ancient Temples'],
    dates: 'Oct 1 - Oct 13',
    groupSize: '18-35 age group',
    includes: ['Accommodation', 'Transfers', 'Activities', 'Guide']
  },
  {
    id: 'sri-lanka-escape',
    title: 'Sri Lanka Escape',
    location: 'Sri Lanka',
    duration: '8 nights - 9 days',
    price: 'INR 55,000',
    rating: 4.6,
    reviews: 198,
    image: 'https://images.unsplash.com/photo-1566109142648-060365ad0e40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
    highlights: ['Sigiriya Rock', 'Tea Plantations', 'Safari', 'Cultural Sites'],
    dates: 'Oct 20 - Oct 28',
    groupSize: '18-35 age group',
    includes: ['Accommodation', 'Transfers', 'Activities', 'Guide']
  },
  {
    id: 'maldives-luxury',
    title: 'Maldives Luxury',
    location: 'Maldives',
    duration: '5 nights - 6 days',
    price: 'INR 125,000',
    rating: 4.9,
    reviews: 89,
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
    highlights: ['Overwater Villas', 'Snorkeling', 'Spa Treatments', 'Sunset Cruises'],
    dates: 'Nov 5 - Nov 10',
    groupSize: '18-35 age group',
    includes: ['Accommodation', 'Transfers', 'Activities', 'Guide']
  },
];

export default function ToursCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      loop: true, 
      align: 'start',
      slidesToScroll: 1,
      breakpoints: {
        '(min-width: 768px)': { slidesToScroll: 2 },
        '(min-width: 1024px)': { slidesToScroll: 3 },
      }
    },
    [Autoplay({ delay: 4000, stopOnInteraction: false })]
  );
  
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Amazing
            <span className="text-gradient"> Tours</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our handpicked selection of extraordinary adventures that will take you to the world's most beautiful destinations.
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {tours.map((tour, index) => (
                <motion.div
                  key={tour.id}
                  className="flex-none w-full md:w-1/2 lg:w-1/3 px-4"
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover group">
                    {/* Image */}
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={tour.image}
                        alt={tour.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      
                      {/* Price Badge */}
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                        <span className="font-semibold text-gray-900">{tour.price}</span>
                      </div>

                      {/* Rating */}
                      <div className="absolute bottom-4 left-4 flex items-center space-x-1 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                        <Star className="h-4 w-4 text-yellow-500 fill-current" />
                        <span className="font-semibold text-gray-900">{tour.rating}</span>
                        <span className="text-gray-600">({tour.reviews})</span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="font-display text-xl font-bold text-gray-900">{tour.title}</h3>
                        <div className="flex items-center text-gray-600">
                          <MapPin className="h-4 w-4 mr-1" />
                          <span className="text-sm">{tour.location}</span>
                        </div>
                      </div>

                      <div className="space-y-3 mb-6">
                        <div className="flex items-center text-gray-600">
                          <Calendar className="h-4 w-4 mr-2" />
                          <span className="text-sm">{tour.duration}</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <Users className="h-4 w-4 mr-2" />
                          <span className="text-sm">{tour.groupSize}</span>
                        </div>
                      </div>

                      {/* Highlights */}
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-2">Highlights:</h4>
                        <div className="flex flex-wrap gap-2">
                          {tour.highlights.slice(0, 3).map((highlight, i) => (
                            <span
                              key={i}
                              className="bg-primary-50 text-primary-700 text-xs px-2 py-1 rounded-full"
                            >
                              {highlight}
                            </span>
                          ))}
                          {tour.highlights.length > 3 && (
                            <span className="text-gray-500 text-xs">+{tour.highlights.length - 3} more</span>
                          )}
                        </div>
                      </div>

                      {/* CTA */}
                      <Link href={`/tours/${tour.id}`}>
                        <motion.button
                          className="w-full btn-primary group"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          View Details
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </motion.button>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white shadow-lg rounded-full p-3 transition-all duration-300 ${
              prevBtnEnabled 
                ? 'text-gray-700 hover:bg-primary-50 hover:text-primary-600' 
                : 'text-gray-300 cursor-not-allowed'
            }`}
            onClick={scrollPrev}
            disabled={!prevBtnEnabled}
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white shadow-lg rounded-full p-3 transition-all duration-300 ${
              nextBtnEnabled 
                ? 'text-gray-700 hover:bg-primary-50 hover:text-primary-600' 
                : 'text-gray-300 cursor-not-allowed'
            }`}
            onClick={scrollNext}
            disabled={!nextBtnEnabled}
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>

        {/* View All Tours CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Link href="/tours">
            <motion.button
              className="btn-secondary group text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View All Tours
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
