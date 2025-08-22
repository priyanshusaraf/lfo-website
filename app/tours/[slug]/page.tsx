'use client';

import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  MapPin, 
  Calendar, 
  Users, 
  Star, 
  Clock, 
  Shield,
  Heart,
  Share2,
  CheckCircle,
  ArrowRight,
  Download
} from 'lucide-react'

const tours = {
  'thailand-adventure': {
    id: 'thailand-adventure',
    title: 'Thailand Adventure',
    location: 'Thailand',
    duration: '8 nights - 9 days',
    price: 'INR 55,000',
    originalPrice: 'INR 75,000',
    rating: 4.9,
    reviews: 156,
    groupSize: '18-35 age group',
    dates: 'Our very first trip',
    description: 'Our very first trip was nothing short of iconic: tuk tuk rides through buzzing streets, the legendary James Bond Island tour, breathtaking beaches, and nightlife that kept the energy alive till sunrise. From temples to turquoise waters, every moment was a core memory in the making. The trip that kicked off our journey wasn\'t just travel—it was the beginning of a community.',
    storyContent: 'Thailand trip- Our very first trip was nothing short of iconic : tuk tuk rides through buzzing streets, the legendary James Bond Island tour, breathtaking beaches, and nightlife that kept the energy alive till sunrise. From temples to turquoise waters, every moment was a core memory in the making. The trip that kicked off our journey wasn\'t just travel it was the beginning of a community.',
    highlights: [
      'Tuk tuk rides through buzzing streets',
      'Legendary James Bond Island tour',
      'Breathtaking beaches exploration',
      'Vibrant nightlife experiences',
      'Ancient temple visits',
      'Community building activities'
    ],
    includes: [
      'Accommodation in beachfront hotels',
      'All transfers and transportation',
      'Daily breakfast',
      'Professional tour guide',
      'All activities and entrance fees',
      'Airport transfers'
    ],
    itinerary: [
      { day: 1, title: 'Arrival in Bangkok', description: 'Welcome to Thailand! Airport transfer and first taste of Bangkok nightlife.' },
      { day: 2, title: 'Bangkok Temple Tour', description: 'Iconic tuk tuk rides to Wat Pho, Wat Arun, and Grand Palace.' },
      { day: 3, title: 'Travel to Islands', description: 'Journey to the islands with scenic views and beach welcome party.' },
      { day: 4, title: 'James Bond Island', description: 'The legendary James Bond Island tour with kayaking and photography.' },
      { day: 5, title: 'Beach Paradise', description: 'Full day on breathtaking beaches with water sports and relaxation.' },
      { day: 6, title: 'Island Hopping', description: 'Discover hidden gems and secret beaches with the group.' },
      { day: 7, title: 'Cultural Immersion', description: 'Local village visit and traditional Thai experiences.' },
      { day: 8, title: 'Farewell Night', description: 'Sunset party and community bonding celebration.' },
      { day: 9, title: 'Departure', description: 'Final group breakfast and departure transfers.' }
    ],
    images: [
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=2340&q=80',
      'https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=2340&q=80',
      'https://images.unsplash.com/photo-1527851781049-739b1a1a4e9c?auto=format&fit=crop&w=2340&q=80',
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=2340&q=80',
      'https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=2340&q=80',
      'https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?auto=format&fit=crop&w=2340&q=80'
    ]
  },
  'bali-adventure': {
    id: 'bali-adventure',
    title: 'Bali Trip',
    location: 'Indonesia',
    duration: '7 nights - 8 days',
    price: 'INR 65,000',
    originalPrice: 'INR 85,000',
    rating: 4.9,
    reviews: 324,
    groupSize: '18-35 age group',
    dates: 'Summer 2025',
    description: 'From mixers in Kuta to island-core days in Gili and ATV thrills in Seminyak, this trip was nothing short of a movie. Sunset boat parties, café hopping, beach clubs, coconuts in hand, and a surprise moment that had everyone screaming, it all came together to create a travel fam and core memories for life. Bali wasn\'t just a destination, it was the vibe of Summer 2025.',
    storyContent: 'Bali Trip- From mixers in Kuta to island-core days in Gili and ATV thrills in Seminyak, this trip was nothing short of a movie. Sunset boat parties, café hopping, beach clubs, coconuts in hand, and a surprise moment that had everyone screaming, it all came together to create a travel fam and core memories for life. Bali wasn\'t just a destination, it was the vibe of Summer 2025.',
    highlights: [
      'Mixers in vibrant Kuta',
      'Island-core days in Gili',
      'ATV thrills in Seminyak',
      'Sunset boat parties',
      'Beach club experiences',
      'Café hopping adventures'
    ],
    includes: [
      'Accommodation in trendy hotels',
      'All inter-island transfers',
      'Daily breakfast',
      'Professional tour guide',
      'All activities and entrance fees',
      'Airport transfers'
    ],
    itinerary: [
      { day: 1, title: 'Arrival in Kuta', description: 'Airport pickup and welcome mixer in vibrant Kuta.' },
      { day: 2, title: 'Kuta Exploration', description: 'Beach clubs, café hopping, and sunset viewing.' },
      { day: 3, title: 'Travel to Gili', description: 'Island-core journey to Gili with boat party vibes.' },
      { day: 4, title: 'Gili Island Life', description: 'Snorkeling, beach activities, and coconut moments.' },
      { day: 5, title: 'Gili Adventures', description: 'Water sports and surprise moments with the group.' },
      { day: 6, title: 'Seminyak ATV', description: 'Thrilling ATV adventure through Seminyak landscapes.' },
      { day: 7, title: 'Beach Club Day', description: 'Ultimate beach club experience and farewell party.' },
      { day: 8, title: 'Departure', description: 'Final group moments and departure transfers.' }
    ],
    images: [
      'https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?auto=format&fit=crop&w=2340&q=80',
      'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=2340&q=80',
      'https://images.unsplash.com/photo-1555400278-6c4e18bfe909?auto=format&fit=crop&w=2340&q=80',
      'https://images.unsplash.com/photo-1571077913832-a-b82ba0e77b35?auto=format&fit=crop&w=2340&q=80',
      'https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&w=2340&q=80',
      'https://images.unsplash.com/photo-1564865878688-9a244444042a?auto=format&fit=crop&w=2340&q=80'
    ]
  },
  'thailand-skydiving': {
    id: 'thailand-skydiving',
    title: 'Thailand Skydiving Adventure',
    location: 'Thailand',
    duration: '9 nights - 10 days',
    price: 'INR 78,000',
    originalPrice: 'INR 98,000',
    rating: 4.8,
    reviews: 278,
    groupSize: '18-35 age group',
    dates: 'Summer 2025 Highlight',
    description: 'Bangkok nights, Pattaya days, and that one heart-racing SKYDIVING moment at 13,000 ft when the world flipped upside down. From chaotic mixers to surprise splashes, beach chills to free-falling thrills, this trip had everything—laughter, adrenaline, and stories we\'ll be telling forever. Thailand wasn\'t just a trip; it was an adrenaline-packed highlight reel of Summer 2025.',
    storyContent: 'Thailand Skydiving trip - Bangkok nights, Pattaya days, and that one heart-racing SKYDIVING moment at 13,000 ft when the world flipped upside down. From chaotic mixers to surprise splashes, beach chills to free-falling thrills, this trip had everything- laughter, adrenaline, and stories we\'ll be telling forever. Thailand wasn\'t just a trip; it was an adrenaline-packed highlight reel of Summer 2025.',
    highlights: [
      'Bangkok vibrant nightlife',
      'Pattaya beach experiences',
      'Skydiving at 13,000 ft',
      'Chaotic mixer parties',
      'Beach chill sessions',
      'Adrenaline adventures'
    ],
    includes: [
      'Accommodation in premium hotels',
      'All domestic flights and transfers',
      'Daily breakfast',
      'Professional skydiving instruction',
      'All activities and entrance fees',
      'Airport transfers'
    ],
    itinerary: [
      { day: 1, title: 'Arrival in Bangkok', description: 'Welcome to Bangkok! Evening mixer and city night exploration.' },
      { day: 2, title: 'Bangkok Nights', description: 'Immerse in Bangkok\'s famous nightlife and street food scene.' },
      { day: 3, title: 'Travel to Pattaya', description: 'Journey to Pattaya with coastal views and beach welcome.' },
      { day: 4, title: 'Pattaya Beach Days', description: 'Beach activities, water sports, and relaxation.' },
      { day: 5, title: 'SKYDIVING DAY', description: 'The ultimate 13,000 ft skydiving experience!' },
      { day: 6, title: 'Adrenaline Recovery', description: 'Beach chills and surprise activities with the group.' },
      { day: 7, title: 'Island Exploration', description: 'Day trip to nearby islands with boat parties.' },
      { day: 8, title: 'Adventure Activities', description: 'More adrenaline activities and group bonding.' },
      { day: 9, title: 'Return to Bangkok', description: 'Back to Bangkok for final night celebrations.' },
      { day: 10, title: 'Departure', description: 'Final group breakfast and departure transfers.' }
    ],
    images: [
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=2340&q=80',
      'https://images.unsplash.com/photo-1544986581-efac024faf62?auto=format&fit=crop&w=2340&q=80',
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=2340&q=80',
      'https://images.unsplash.com/photo-1558618667-fcd25c85cd64?auto=format&fit=crop&w=2340&q=80',
      'https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=2340&q=80',
      'https://images.unsplash.com/photo-1527851781049-739b1a1a4e9c?auto=format&fit=crop&w=2340&q=80'
    ]
  }
};

type TourPageProps = {
  params: { slug: string }
}



export default function TourPage({ params }: TourPageProps) {
  const tour = tours[params.slug as keyof typeof tours];

  if (!tour) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Video */}
      <section className="relative h-[70vh] overflow-hidden">
        {/* Video Background for completed trips */}
        {(tour.id === 'thailand-adventure' || tour.id === 'bali-adventure' || tour.id === 'thailand-skydiving') ? (
          <div className="absolute inset-0">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source 
                src={tour.id === 'thailand-adventure' 
                  ? "/videos/thailand.mp4" 
                  : tour.id === 'bali-adventure'
                  ? "/videos/bali.mp4"
                  : "/videos/thailand-skydiving.mp4"} 
                type="video/mp4" 
              />
              {/* Fallback image */}
              <Image
                src={tour.images[0]}
                alt={tour.title}
                fill
                className="object-cover"
                priority
              />
            </video>
            {/* Video overlay text */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/40">
              <motion.h2 
                className="font-seasons text-3xl md:text-5xl lg:text-6xl font-light text-white text-center px-4"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, delay: 0.5 }}
              >
                {tour.id === 'thailand-adventure' && "Introducing Thailand"}
                {tour.id === 'bali-adventure' && "Experience Bali Memories"}
                {tour.id === 'thailand-skydiving' && "Relive the Adrenaline"}
              </motion.h2>
            </div>
          </div>
        ) : (
          <Image
            src={tour.images[0]}
            alt={tour.title}
            fill
            className="object-cover"
            priority
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        
        <div className="relative z-10 h-full flex items-end">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
            <div className="text-white">
              <div className="flex items-center space-x-2 mb-4">
                <MapPin className="h-5 w-5" />
                <span>{tour.location}</span>
              </div>
              
              <h1 className="font-display text-4xl md:text-6xl font-bold mb-4">
                {tour.title}
              </h1>
              
              <p className="text-xl text-white/90 mb-6 max-w-3xl">
                {tour.description}
              </p>

              <div className="flex flex-wrap items-center gap-6">
                <div className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5" />
                  <span>{tour.duration}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="h-5 w-5" />
                  <span>{tour.groupSize}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <span>{tour.rating} ({tour.reviews} reviews)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Story Section */}
            {tour.storyContent && (
              <section className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8">
                <h2 className="font-display text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
                <div className="prose prose-lg text-gray-700 leading-relaxed">
                  <p className="text-xl font-medium italic text-blue-900">
                    {tour.storyContent}
                  </p>
                </div>
              </section>
            )}
            
            {/* Overview */}
            <section>
              <h2 className="font-display text-3xl font-bold text-gray-900 mb-6">Tour Overview</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">{tour.description}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-display text-xl font-semibold text-gray-900 mb-4">Tour Highlights</h3>
                  <ul className="space-y-3">
                    {tour.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="font-display text-xl font-semibold text-gray-900 mb-4">What's Included</h3>
                  <ul className="space-y-3">
                    {tour.includes.map((item, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* Itinerary */}
            <section>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
                <h2 className="font-display text-3xl font-bold text-gray-900 mb-4 sm:mb-0">Day-by-Day Itinerary</h2>
                <button 
                  onClick={() => {
                    // Create a simple PDF download function
                    const element = document.createElement('a');
                    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(
                      `${tour.title} Itinerary\n\n` + 
                      tour.itinerary.map(day => 
                        `Day ${day.day}: ${day.title}\n${day.description}\n\n`
                      ).join('')
                    ));
                    element.setAttribute('download', `${tour.title.replace(/\s+/g, '-').toLowerCase()}-itinerary.txt`);
                    element.style.display = 'none';
                    document.body.appendChild(element);
                    element.click();
                    document.body.removeChild(element);
                  }}
                  className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm font-medium"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download Itinerary
                </button>
              </div>
              <div className="space-y-6">
                {tour.itinerary.map((day) => (
                  <div key={day.day} className="border border-gray-200 rounded-lg p-6">
                    <div className="flex items-center space-x-4 mb-3">
                      <div className="bg-primary-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold">
                        {day.day}
                      </div>
                      <h3 className="font-display text-xl font-semibold text-gray-900">{day.title}</h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{day.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Gallery */}
            <section>
              <h2 className="font-display text-3xl font-bold text-gray-900 mb-6">Photo Gallery</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {tour.images.map((image, index) => (
                  <div key={index} className="relative h-64 rounded-lg overflow-hidden">
                    <Image
                      src={image}
                      alt={`${tour.title} - Image ${index + 1}`}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              {/* Booking Card */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-lg">
                <div className="text-center mb-6">
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <span className="text-2xl font-bold text-gray-900">{tour.price}</span>
                    <span className="text-lg text-gray-500 line-through">{tour.originalPrice}</span>
                  </div>
                  <p className="text-gray-600">per person + 5% tax</p>
                  <p className="text-primary-600 font-semibold mt-2">{tour.dates}</p>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Duration:</span>
                    <span className="font-semibold">{tour.duration}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Group Size:</span>
                    <span className="font-semibold">{tour.groupSize}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Rating:</span>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="font-semibold">{tour.rating}</span>
                    </div>
                  </div>
                </div>

                <Link href="/book-now" className="block">
                  <button className="w-full btn-primary text-lg py-4 mb-4">
                    Book This Tour
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                </Link>

                <div className="flex space-x-2">
                  <button className="flex-1 btn-secondary py-3">
                    <Heart className="h-5 w-5 mr-2" />
                    Save
                  </button>
                  <button className="flex-1 btn-secondary py-3">
                    <Share2 className="h-5 w-5 mr-2" />
                    Share
                  </button>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="flex items-center space-x-3 text-sm text-gray-600">
                    <Shield className="h-5 w-5 text-green-500" />
                    <span>Free cancellation up to 7 days before travel</span>
                  </div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="mt-6 bg-gray-50 rounded-2xl p-6">
                <h3 className="font-display text-lg font-semibold text-gray-900 mb-4">Need Help?</h3>
                <p className="text-gray-600 mb-4">
                  Have questions about this tour? Our travel experts are here to help!
                </p>
                <div className="space-y-2 text-sm">
                  <p className="text-gray-600">📞 +1 (555) 123-4567</p>
                  <p className="text-gray-600">✉️ hello@letsflyoff.com</p>
                  <p className="text-gray-600">💬 Live chat available 24/7</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
