'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Plane, Phone, Mail, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Badge } from '@/components/ui/badge';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const destinations = [
    { name: 'Bali', href: '/tours/bali', popular: true },
    { name: 'Thailand', href: '/tours/thailand', popular: true },
    { name: 'Vietnam', href: '/tours/vietnam', popular: false },
    { name: 'Sri Lanka', href: '/tours/sri-lanka', popular: false },
    { name: 'Maldives', href: '/tours/maldives', popular: true },
    { name: 'Nepal', href: '/tours/nepal', popular: false },
  ];

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'glass-nav shadow-lg' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <motion.div 
              className="bg-gradient-to-br from-primary to-accent p-2 rounded-xl shadow-lg"
              whileHover={{ scale: 1.05, rotate: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Plane className="h-6 w-6 text-white" />
            </motion.div>
            <div className="font-seasons">
              <h1 className={`text-xl lg:text-2xl font-medium transition-colors duration-300 ${
                scrolled ? 'text-foreground' : 'text-white'
              }`}>
                Let's Fly Off
              </h1>
              <p className={`text-xs transition-colors duration-300 ${
                scrolled ? 'text-muted-foreground' : 'text-white/80'
              }`}>
                Adventure Awaits
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList className="space-x-2">
              {navItems.map((item) => (
                <NavigationMenuItem key={item.name}>
                  <Link href={item.href} legacyBehavior passHref>
                    <NavigationMenuLink
                      className={`group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 ${
                        scrolled ? 'text-foreground' : 'text-white hover:text-foreground'
                      }`}
                    >
                      {item.name}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
              
              {/* Tours Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger 
                  className={`h-10 px-4 py-2 text-sm font-medium transition-colors bg-transparent hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent ${
                    scrolled ? 'text-foreground hover:text-foreground focus:text-foreground' : 'text-white hover:text-white focus:text-white'
                  }`}
                >
                  Tours
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[600px] gap-3 p-6 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    <div className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                          href="/tours"
                        >
                          <div className="mb-2 mt-4 text-lg font-medium">
                            All Tours
                          </div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            Explore our complete collection of curated travel experiences
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </div>
                    {destinations.map((destination) => (
                      <div key={destination.name} className="relative">
                        <NavigationMenuLink asChild>
                          <a
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            href={destination.href}
                          >
                            <div className="flex items-center gap-2">
                              <div className="text-sm font-medium leading-none">
                                {destination.name}
                              </div>
                              {destination.popular && (
                                <Badge variant="secondary" className="text-xs">
                                  Popular
                                </Badge>
                              )}
                            </div>
                          </a>
                        </NavigationMenuLink>
                      </div>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className={`flex items-center space-x-2 text-sm ${
              scrolled ? 'text-muted-foreground' : 'text-white/90'
            }`}>
              <Phone className="h-4 w-4" />
              <span>+91 8981560330</span>
            </div>
            <Button 
              asChild
              className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-lg hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300"
            >
              <Link href="/book-now">
                Get Invited
              </Link>
            </Button>
          </div>

          {/* Mobile menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className={`lg:hidden ${
                  scrolled ? 'text-foreground hover:bg-accent' : 'text-white hover:bg-white/10'
                }`}
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col space-y-6 mt-6">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-lg font-medium hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
                
                <div className="border-t pt-6">
                  <h3 className="text-lg font-medium mb-4">Tours</h3>
                  <div className="space-y-3">
                    {destinations.map((destination) => (
                      <Link
                        key={destination.name}
                        href={destination.href}
                        className="flex items-center justify-between hover:text-primary transition-colors"
                      >
                        <span>{destination.name}</span>
                        {destination.popular && (
                          <Badge variant="secondary" className="text-xs">
                            Popular
                          </Badge>
                        )}
                      </Link>
                    ))}
                    <Link
                      href="/tours"
                      className="text-primary font-medium flex items-center"
                    >
                      View All Tours →
                    </Link>
                  </div>
                </div>
                
                <div className="border-t pt-6 space-y-4">
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Phone className="h-4 w-4" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Mail className="h-4 w-4" />
                    <span>hello@letsflyoff.com</span>
                  </div>
                  <Button 
                    asChild 
                    className="w-full bg-gradient-to-r from-primary to-accent"
                  >
                    <Link href="/book-now">
                      Book Your Adventure
                    </Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}