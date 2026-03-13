import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import GallerySection from '../components/GallerySection';
import EventInfoSection from '../components/EventInfoSection';
import LocationSection from '../components/LocationSection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <HeroSection />
      <GallerySection />
      <EventInfoSection />
      <LocationSection />
      <Footer />
    </div>
  );
}
