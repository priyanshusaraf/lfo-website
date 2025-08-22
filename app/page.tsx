import SkyHero from '@/components/sections/SkyHero'
import Features from '@/components/sections/Features'
import SimpleToursCarousel from '@/components/sections/SimpleToursCarousel'
import ExclusiveTrips from '@/components/sections/ExclusiveTrips'
import RegistrationProcess from '@/components/sections/RegistrationProcess'
import PageTransition from '@/components/ui/page-transition'

export default function HomePage() {
  return (
    <PageTransition>
      <SkyHero />
      <ExclusiveTrips />
      <RegistrationProcess />
      <Features />
      <SimpleToursCarousel />
    </PageTransition>
  )
}
