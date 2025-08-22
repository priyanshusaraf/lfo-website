'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Calendar, 
  Users, 
  CreditCard, 
  CheckCircle,
  Plane,
  Heart,
  Star,
  Shield,
  Award,
  Clock
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Header from '@/components/layout/Header';
import PageTransition from '@/components/ui/page-transition';

const tours = [
  { 
    id: 'bali-adventure', 
    name: 'Bali Adventure', 
    price: 'INR 65,000', 
    image: '🏝️',
    rating: 4.9,
    duration: '7 nights - 8 days',
    highlights: ['Uluwatu Temple', 'Gili Islands', 'Rice Terraces']
  },
  { 
    id: 'thailand-explorer', 
    name: 'Thailand Explorer', 
    price: 'INR 78,000', 
    image: '🏛️',
    rating: 4.8,
    duration: '10 nights - 11 days',
    highlights: ['Bangkok Temples', 'Phi Phi Islands', 'Night Markets']
  },
  { 
    id: 'vietnam-discovery', 
    name: 'Vietnam Discovery', 
    price: 'INR 82,000', 
    image: '🌿',
    rating: 4.7,
    duration: '12 nights - 13 days',
    highlights: ['Ha Long Bay', 'Ho Chi Minh City', 'Mekong Delta']
  },
  { 
    id: 'sri-lanka-escape', 
    name: 'Sri Lanka Escape', 
    price: 'INR 55,000', 
    image: '🦚',
    rating: 4.8,
    duration: '6 nights - 7 days',
    highlights: ['Sigiriya Rock', 'Tea Plantations', 'Elephant Safari']
  },
  { 
    id: 'maldives-luxury', 
    name: 'Maldives Luxury', 
    price: 'INR 125,000', 
    image: '🏖️',
    rating: 4.9,
    duration: '5 nights - 6 days',
    highlights: ['Overwater Villas', 'Snorkeling', 'Spa Treatments']
  },
];

const dates = [
  { id: 'aug-29', label: 'Aug 29 - Sep 5', tour: 'bali-adventure' },
  { id: 'sep-15', label: 'Sep 15 - Sep 25', tour: 'thailand-explorer' },
  { id: 'oct-1', label: 'Oct 1 - Oct 13', tour: 'vietnam-discovery' },
  { id: 'oct-20', label: 'Oct 20 - Oct 28', tour: 'sri-lanka-escape' },
  { id: 'nov-5', label: 'Nov 5 - Nov 10', tour: 'maldives-luxury' },
  { id: 'dec-10', label: 'Dec 10 - Dec 17', tour: 'bali-adventure' },
  { id: 'jan-15', label: 'Jan 15 - Jan 25', tour: 'thailand-explorer' },
];

export default function BookNowPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedTour, setSelectedTour] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [travelers, setTravelers] = useState(1);
  const [personalInfo, setPersonalInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    passport: '',
    emergencyContact: '',
  });

  const selectedTourData = tours.find(tour => tour.id === selectedTour);
  const totalPrice = selectedTourData ? parseInt(selectedTourData.price.replace(/[^\d]/g, '')) * travelers : 0;

  const nextStep = () => {
    if (currentStep < 4) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1: return selectedTour !== '';
      case 2: return selectedDate !== '' && travelers > 0;
      case 3: return personalInfo.firstName && personalInfo.lastName && personalInfo.email && personalInfo.phone;
      case 4: return true;
      default: return false;
    }
  };

  return (
    <PageTransition>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background pt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Page Header */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge variant="secondary" className="mb-4 px-4 py-2">
              <Plane className="w-4 h-4 mr-2" />
              Book Your Adventure
            </Badge>
            <h1 className="font-seasons text-4xl md:text-6xl lg:text-7xl font-light text-foreground mb-6 tracking-tight">
              Your Dream
              <span className="block bg-gradient-to-r from-primary via-purple-500 to-accent bg-clip-text text-transparent">
                Vacation Awaits
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Just a few steps away from your extraordinary adventure. Let's make your travel dreams come true!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Booking Form */}
            <div className="lg:col-span-2">
              <Card className="border-0 shadow-2xl bg-card/50 backdrop-blur-sm">
                <CardHeader className="pb-6">
                  {/* Progress Steps */}
                  <div className="flex items-center justify-between mb-6">
                    {[1, 2, 3, 4].map((step) => (
                      <div key={step} className="flex items-center">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300 ${
                          currentStep >= step 
                            ? 'bg-gradient-to-r from-primary to-accent text-white shadow-lg' 
                            : 'bg-muted text-muted-foreground'
                        }`}>
                          {currentStep > step ? <CheckCircle className="w-5 h-5" /> : step}
                        </div>
                        {step < 4 && (
                          <div className={`w-16 h-1 mx-2 rounded transition-all duration-300 ${
                            currentStep > step ? 'bg-gradient-to-r from-primary to-accent' : 'bg-muted'
                          }`} />
                        )}
                      </div>
                    ))}
                  </div>

                  <div className="text-center">
                    <h2 className="font-seasons text-2xl font-medium text-foreground mb-2">
                      {currentStep === 1 && 'Choose Your Adventure'}
                      {currentStep === 2 && 'When & How Many?'}
                      {currentStep === 3 && 'Your Information'}
                      {currentStep === 4 && 'Review & Complete'}
                    </h2>
                    <p className="text-muted-foreground">
                      {currentStep === 1 && 'Select the tour that speaks to your wanderlust'}
                      {currentStep === 2 && 'Choose your travel dates and number of travelers'}
                      {currentStep === 3 && 'Please provide your travel details'}
                      {currentStep === 4 && 'Almost there! Review your booking details'}
                    </p>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Step 1: Select Tour */}
                  {currentStep === 1 && (
                    <motion.div
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5 }}
                      className="space-y-4"
                    >
                      {tours.map((tour) => (
                        <Card
                          key={tour.id}
                          className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
                            selectedTour === tour.id
                              ? 'ring-2 ring-primary bg-primary/5'
                              : 'hover:bg-muted/50'
                          }`}
                          onClick={() => setSelectedTour(tour.id)}
                        >
                          <CardContent className="p-6">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-4">
                                <div className="text-4xl">{tour.image}</div>
                                <div className="flex-1">
                                  <h3 className="font-seasons text-lg font-medium text-foreground">
                                    {tour.name}
                                  </h3>
                                  <div className="flex items-center space-x-4 mt-2">
                                    <div className="flex items-center text-sm text-muted-foreground">
                                      <Clock className="w-4 h-4 mr-1" />
                                      {tour.duration}
                                    </div>
                                    <div className="flex items-center text-sm text-muted-foreground">
                                      <Star className="w-4 h-4 mr-1 text-yellow-500 fill-current" />
                                      {tour.rating}
                                    </div>
                                  </div>
                                  <div className="flex flex-wrap gap-1 mt-2">
                                    {tour.highlights.map((highlight, i) => (
                                      <Badge key={i} variant="outline" className="text-xs">
                                        {highlight}
                                      </Badge>
                                    ))}
                                  </div>
                                </div>
                              </div>
                              <div className="text-right">
                                <div className="font-bold text-lg text-primary">{tour.price}</div>
                                <div className="text-sm text-muted-foreground">per person</div>
                              </div>
                            </div>
                            {selectedTour === tour.id && (
                              <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                className="absolute top-4 right-4"
                              >
                                <CheckCircle className="w-6 h-6 text-primary" />
                              </motion.div>
                            )}
                          </CardContent>
                        </Card>
                      ))}
                    </motion.div>
                  )}

                  {/* Step 2: Select Date & Travelers */}
                  {currentStep === 2 && (
                    <motion.div
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5 }}
                      className="space-y-6"
                    >
                      {/* Date Selection */}
                      <div>
                        <h3 className="font-medium text-foreground mb-3 flex items-center">
                          <Calendar className="w-4 h-4 mr-2" />
                          Select Departure Date
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {dates
                            .filter(date => !selectedTour || date.tour === selectedTour)
                            .map((date) => (
                            <Card
                              key={date.id}
                              className={`cursor-pointer transition-all duration-300 ${
                                selectedDate === date.id
                                  ? 'ring-2 ring-primary bg-primary/5'
                                  : 'hover:bg-muted/50'
                              }`}
                              onClick={() => setSelectedDate(date.id)}
                            >
                              <CardContent className="p-4">
                                <div className="flex items-center justify-between">
                                  <span className="font-medium text-foreground">{date.label}</span>
                                  {selectedDate === date.id && (
                                    <CheckCircle className="w-5 h-5 text-primary" />
                                  )}
                                </div>
                              </CardContent>
                            </Card>
                          ))}
                        </div>
                      </div>

                      {/* Travelers */}
                      <div>
                        <h3 className="font-medium text-foreground mb-3 flex items-center">
                          <Users className="w-4 h-4 mr-2" />
                          Number of Travelers
                        </h3>
                        <div className="flex items-center space-x-4">
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() => setTravelers(Math.max(1, travelers - 1))}
                            disabled={travelers <= 1}
                          >
                            -
                          </Button>
                          <span className="text-2xl font-semibold w-16 text-center">{travelers}</span>
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() => setTravelers(travelers + 1)}
                          >
                            +
                          </Button>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Step 3: Personal Information */}
                  {currentStep === 3 && (
                    <motion.div
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5 }}
                      className="grid grid-cols-1 md:grid-cols-2 gap-4"
                    >
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1">
                          First Name *
                        </label>
                        <input
                          type="text"
                          value={personalInfo.firstName}
                          onChange={(e) => setPersonalInfo(prev => ({...prev, firstName: e.target.value}))}
                          className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                          placeholder="John"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          value={personalInfo.lastName}
                          onChange={(e) => setPersonalInfo(prev => ({...prev, lastName: e.target.value}))}
                          className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                          placeholder="Doe"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          value={personalInfo.email}
                          onChange={(e) => setPersonalInfo(prev => ({...prev, email: e.target.value}))}
                          className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                          placeholder="john@example.com"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          value={personalInfo.phone}
                          onChange={(e) => setPersonalInfo(prev => ({...prev, phone: e.target.value}))}
                          className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1">
                          Passport Number
                        </label>
                        <input
                          type="text"
                          value={personalInfo.passport}
                          onChange={(e) => setPersonalInfo(prev => ({...prev, passport: e.target.value}))}
                          className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                          placeholder="A1234567"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1">
                          Emergency Contact
                        </label>
                        <input
                          type="text"
                          value={personalInfo.emergencyContact}
                          onChange={(e) => setPersonalInfo(prev => ({...prev, emergencyContact: e.target.value}))}
                          className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                          placeholder="Name & Phone"
                        />
                      </div>
                    </motion.div>
                  )}

                  {/* Step 4: Review & Payment */}
                  {currentStep === 4 && (
                    <motion.div
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5 }}
                      className="space-y-6"
                    >
                      {/* Payment Form */}
                      <Card className="border border-border">
                        <CardHeader>
                          <CardTitle className="flex items-center">
                            <CreditCard className="w-5 h-5 mr-2" />
                            Payment Information
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div>
                            <label className="block text-sm font-medium text-foreground mb-1">
                              Card Number
                            </label>
                            <input
                              type="text"
                              className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                              placeholder="1234 5678 9012 3456"
                            />
                          </div>
                          
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <label className="block text-sm font-medium text-foreground mb-1">
                                Expiry Date
                              </label>
                              <input
                                type="text"
                                className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                                placeholder="MM/YY"
                              />
                            </div>
                            
                            <div>
                              <label className="block text-sm font-medium text-foreground mb-1">
                                CVV
                              </label>
                              <input
                                type="text"
                                className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                                placeholder="123"
                              />
                            </div>
                          </div>
                        </CardContent>
                      </Card>

                      {/* Terms Agreement */}
                      <div className="flex items-start space-x-3">
                        <input
                          type="checkbox"
                          id="terms"
                          className="mt-1"
                        />
                        <label htmlFor="terms" className="text-sm text-muted-foreground">
                          I agree to the Terms & Conditions and Privacy Policy. I understand the cancellation policy and confirm all information provided is accurate.
                        </label>
                      </div>
                    </motion.div>
                  )}

                  {/* Navigation Buttons */}
                  <div className="flex justify-between pt-6">
                    <Button
                      variant="outline"
                      onClick={prevStep}
                      disabled={currentStep === 1}
                      className="px-8"
                    >
                      Previous
                    </Button>
                    <Button
                      onClick={currentStep === 4 ? () => console.log('Complete booking') : nextStep}
                      disabled={!canProceed()}
                      className="px-8 bg-gradient-to-r from-primary to-accent"
                    >
                      {currentStep === 4 ? 'Complete Booking' : 'Continue'}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Booking Summary Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Price Summary */}
                <Card className="border-0 shadow-lg bg-card/50 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle>Booking Summary</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {selectedTourData && (
                      <>
                        <div className="text-center p-4 rounded-lg bg-muted/50">
                          <div className="text-3xl mb-2">{selectedTourData.image}</div>
                          <h3 className="font-semibold">{selectedTourData.name}</h3>
                          <p className="text-sm text-muted-foreground">{selectedTourData.duration}</p>
                        </div>
                        
                        <Separator />
                        
                        <div className="space-y-3">
                          {selectedDate && (
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">Dates:</span>
                              <span className="font-medium">
                                {dates.find(d => d.id === selectedDate)?.label}
                              </span>
                            </div>
                          )}
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Travelers:</span>
                            <span className="font-medium">{travelers}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Price per person:</span>
                            <span className="font-medium">{selectedTourData.price}</span>
                          </div>
                        </div>
                        
                        <Separator />
                        
                        <div className="flex justify-between text-lg">
                          <span className="font-semibold">Total Amount:</span>
                          <span className="font-bold text-primary">
                            INR {totalPrice.toLocaleString()}
                          </span>
                        </div>
                      </>
                    )}
                  </CardContent>
                </Card>

                {/* Trust Signals */}
                <Card className="border-0 shadow-lg bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <Shield className="w-5 h-5 text-green-500" />
                        <span className="text-sm">Secure SSL Payment</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Award className="w-5 h-5 text-yellow-500" />
                        <span className="text-sm">Award-Winning Service</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Heart className="w-5 h-5 text-red-500" />
                        <span className="text-sm">10K+ Happy Travelers</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Star className="w-5 h-5 text-yellow-500" />
                        <span className="text-sm">4.9/5 Average Rating</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}