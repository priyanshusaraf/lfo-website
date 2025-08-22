# Let's Fly Off - Travel Website

A beautiful, modern travel website built with Next.js 14, TypeScript, and Tailwind CSS. Features stunning animations, responsive design, and an intuitive booking system.

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth transitions
- **Responsive**: Fully responsive across all devices
- **Hero Section**: Large, bold typography inspired by the Bali adventure aesthetic
- **Tour Showcase**: Clean tour grid with essential information
- **Booking System**: Multi-step booking process with form validation
- **Tour Pages**: Detailed individual tour pages with galleries and itineraries
- **SEO Optimized**: Meta tags, structured data, and optimized performance
- **Performance**: Fast loading with optimized animations and components

## 🛠 Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS with custom design system
- **Animations**: Framer Motion for smooth transitions
- **Typography**: Google Fonts (Montserrat & Open Sans)
- **Icons**: Lucide React for consistent iconography
- **TypeScript**: Full type safety throughout the application

## 🎨 Design Features

- **Color Palette**: Clean blues and oranges inspired by tropical destinations
- **Typography**: Bold, readable fonts perfect for travel branding
- **Components**: Reusable UI components with consistent design patterns
- **Clean Layout**: Professional, uncluttered design focused on content
- **Modern UI**: Contemporary design elements with smooth interactions

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd lfo-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🌟 Key Components

### Hero Section
- **Large, bold "LET'S FLY OFF" typography** inspired by your Bali design
- **Clean background image** with professional overlay
- **Simple, effective call-to-action buttons**
- **Responsive design** that works on all devices

### Tours Grid
- **Clean grid layout** showcasing tour information
- **Professional tour cards** with essential details
- **Smooth hover effects** and transitions
- **Mobile-optimized** experience

### Booking Stepper
- **Multi-step form** with progress indicator
- **Form validation** and error handling
- **Smooth transitions** between steps
- **Mobile-optimized** experience

### Tour Detail Pages
- **Dynamic routing** for individual tours
- **Image galleries** with lightbox functionality
- **Detailed itineraries** with day-by-day breakdown
- **Booking integration** with pricing calculator

## 📱 Pages

- **Homepage** (`/`): Hero section, features, and tour carousel
- **All Tours** (`/tours`): Complete tour listing with filters
- **Tour Details** (`/tours/[slug]`): Individual tour pages
- **Booking** (`/book-now`): Multi-step booking process

## 🎯 Performance

- **Next.js App Router** for optimal performance
- **Image optimization** with Next.js Image component
- **Lazy loading** for smooth scrolling
- **Bundle optimization** with automatic code splitting

## 🔧 Customization

### Colors
Update the color palette in `tailwind.config.js`:
```js
colors: {
  primary: { /* Ocean blues */ },
  secondary: { /* Sunset yellows */ },
  accent: { /* Warm oranges */ }
}
```

### Content
- Tour data is stored in each page component
- Easy to extend with a CMS or API integration
- Modular component structure for easy customization

### Animations
- Framer Motion configurations in each component
- Easily adjustable timing and easing
- Optional reduced motion support

## 📖 Usage

### Adding New Tours
1. Update the tours array in relevant components
2. Add new images to the public folder or use external URLs
3. Create new tour detail pages following the existing pattern

### Customizing Animations
- Modify animation variants in component files
- Adjust timing and delays in Framer Motion configs
- Add new scroll-triggered animations as needed

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your repository to Vercel
2. Deploy automatically on push to main branch

### Other Platforms
1. Build the project: `npm run build`
2. Deploy the `.next` folder to your hosting provider

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🎉 Acknowledgments

- Design inspiration from modern travel websites
- Beautiful images from Unsplash
- Icons from Lucide React
- Fonts from Google Fonts
