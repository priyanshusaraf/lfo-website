'use client';

import { motion } from 'framer-motion';
import { 
  MapPin, 
  Calendar, 
  Star, 
  Trophy,
  Instagram,
  Phone,
  Mail,
  Sparkles,
  CheckCircle
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const previousTrips = [
  {
    destination: 'Thailand Adventure',
    date: '4th - 11th April 2024',
    details: '3 Nights Phuket • 2 Nights Phi Phi • 2 Nights Krabi',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    highlights: ['Private Beach Access', 'Island Hopping', 'Local Culture'],
    status: 'Completed',
    participants: 12
  },
  {
    destination: 'Bali Exclusive',
    date: '25th June - 2nd July 2024',
    details: '2 Nights Kuta • 3 Nights Gilli T • 2 Nights Seminyak',
    image: 'https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    highlights: ['Luxury Villas', 'Sunset Views', 'Traditional Cuisine'],
    status: 'Completed',
    participants: 15
  },
  {
    destination: 'Thailand Skydiving',
    date: '31st July - 5th August 2024',
    details: '2 Nights Bangkok • 3 Nights Pattaya',
    image: 'https://images.unsplash.com/photo-1544986581-efac024faf62?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    highlights: ['Tandem Skydiving', 'Rooftop Bars', 'Adventure Sports'],
    status: 'Completed',
    participants: 8
  }
];

const upcomingTrip = {
  destination: 'Bali Ultimate',
  date: '29th August - 5th September 2024',
  details: '2 Nights Ubud • 3 Nights Gilli T • 2 Nights Seminyak',
  image: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  highlights: ['Rice Terraces', 'Volcano Trekking', 'Beach Clubs'],
  status: 'Invite Only',
  spotsLeft: 3
};

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

export default function ExclusiveTrips() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-blue-50 via-white to-blue-50 overflow-hidden">
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
            className="mb-6 px-4 py-2 text-sm font-medium bg-blue-100 text-blue-700 border-blue-200"
          >
            <Trophy className="w-4 h-4 mr-2" />
            Exclusive Expeditions
          </Badge>
          <h2 className="font-seasons text-4xl md:text-6xl lg:text-7xl font-light text-foreground mb-6 tracking-tight">
            Elite Travel
            <span className="block bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-transparent">
              Experiences
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Join our exclusive community of elite travelers. Every expedition is carefully curated, 
            invite-only, and designed for those who seek extraordinary adventures.
          </p>
        </motion.div>

        {/* Previous Trips */}
        <motion.div
          className="mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold text-center mb-12 text-foreground">
            Recent Exclusive Expeditions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {previousTrips.map((trip, index) => (
              <motion.div key={index} variants={cardVariants}>
                <Card className="group relative overflow-hidden border-0 bg-white/70 backdrop-blur-sm hover:bg-white/90 transition-all duration-500 shadow-lg hover:shadow-xl">
                  <div className="relative h-48 overflow-hidden">
                    <div 
                      className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
                      style={{ backgroundImage: `url(${trip.image})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-green-500/90 text-white border-0">
                        <CheckCircle className="w-3 h-3 mr-1" />
                        {trip.status}
                      </Badge>
                    </div>

                    <div className="absolute bottom-4 left-4 text-white">
                      <div className="font-semibold">{trip.destination}</div>
                      <div className="text-sm opacity-90">{trip.participants} Travelers</div>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <div className="flex items-center text-muted-foreground mb-3">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span className="text-sm">{trip.date}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">{trip.details}</p>
                    
                    <div className="flex flex-wrap gap-1">
                      {trip.highlights.map((highlight, i) => (
                        <Badge
                          key={i}
                          variant="outline"
                          className="text-xs bg-blue-50 border-blue-200 text-blue-700"
                        >
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Upcoming Trip */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold text-center mb-12 text-foreground">
            Next Exclusive Adventure
          </h3>
          <Card className="relative overflow-hidden border-0 bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-2xl">
            <div className="absolute inset-0 bg-black/20" />
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
              <div>
                <div className="flex items-center mb-4">
                  <Sparkles className="w-6 h-6 mr-2 text-yellow-300" />
                  <h4 className="text-2xl font-semibold">{upcomingTrip.destination}</h4>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-center">
                    <Calendar className="h-5 w-5 mr-3 text-blue-200" />
                    <span>{upcomingTrip.date}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 mr-3 text-blue-200" />
                    <span>{upcomingTrip.details}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {upcomingTrip.highlights.map((highlight, i) => (
                    <Badge
                      key={i}
                      className="bg-white/20 text-white border-white/30"
                    >
                      {highlight}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <Badge className="bg-orange-500/90 text-white border-0 px-4 py-2">
                    {upcomingTrip.status} • {upcomingTrip.spotsLeft} Spots Left
                  </Badge>
                </div>
              </div>

              <div 
                className="relative h-64 lg:h-auto rounded-xl overflow-hidden"
                style={{ backgroundImage: `url(${upcomingTrip.image})` }}
              >
                <div className="absolute inset-0 bg-cover bg-center" />
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Contact & Social */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* How to Get Invited */}
          <Card className="border-0 bg-white/70 backdrop-blur-sm shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center text-xl">
                <Star className="w-5 h-5 mr-2 text-yellow-500" />
                How to Get Invited
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Our trips are exclusive and invite-only. Connect with us to join our elite community of adventurers.
              </p>
              
              <div className="space-y-3">
                <a 
                  href="https://www.instagram.com/letsfoff/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center p-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-lg hover:scale-105 transition-transform duration-300"
                >
                  <Instagram className="w-5 h-5 mr-3" />
                  <div>
                    <div className="font-medium">Follow Us</div>
                    <div className="text-sm opacity-90">@letsfoff</div>
                  </div>
                </a>

                <a 
                  href="tel:+919836742420"
                  className="flex items-center p-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:scale-105 transition-transform duration-300"
                >
                  <Phone className="w-5 h-5 mr-3" />
                  <div>
                    <div className="font-medium">Founder Direct</div>
                    <div className="text-sm opacity-90">+91 98367 42420</div>
                  </div>
                </a>

                <a 
                  href="mailto:business@letsflyoff.com"
                  className="flex items-center p-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg hover:scale-105 transition-transform duration-300"
                >
                  <Mail className="w-5 h-5 mr-3" />
                  <div>
                    <div className="font-medium">Business Inquiries</div>
                    <div className="text-sm opacity-90">business@letsflyoff.com</div>
                  </div>
                </a>
              </div>
            </CardContent>
          </Card>

          {/* Why Choose Us */}
          <Card className="border-0 bg-white/70 backdrop-blur-sm shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center text-xl">
                <Trophy className="w-5 h-5 mr-2 text-blue-600" />
                Why Choose Let's Fly Off
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                  <div>
                    <div className="font-medium">Exclusive Access</div>
                    <div className="text-sm text-muted-foreground">Invite-only expeditions with limited participants</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                  <div>
                    <div className="font-medium">Curated Experiences</div>
                    <div className="text-sm text-muted-foreground">Hand-picked destinations and activities</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                  <div>
                    <div className="font-medium">Elite Community</div>
                    <div className="text-sm text-muted-foreground">Connect with like-minded adventurers</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                  <div>
                    <div className="font-medium">Professional Service</div>
                    <div className="text-sm text-muted-foreground">5-star rated service and support</div>
                  </div>
                </div>
              </div>

              <Button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700">
                Request Invitation
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
