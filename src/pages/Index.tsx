import HeroSection from "@/components/wedding/HeroSection";
import ScratchReveal from "@/components/wedding/ScratchReveal";
import CoupleStory from "@/components/wedding/CoupleStory";
import EventDetails from "@/components/wedding/EventDetails";
import PhotoGallery from "@/components/wedding/PhotoGallery";
import CountdownTimer from "@/components/wedding/CountdownTimer";
import LocationSection from "@/components/wedding/LocationSection";
import RSVPSection from "@/components/wedding/RSVPSection";
import WeddingMusicPlayer from "@/components/wedding/WeddingMusicPlayer";
import FloatingButtons from "@/components/wedding/FloatingButtons";
import Footer from "@/components/wedding/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <WeddingMusicPlayer />
      <FloatingButtons />
      <HeroSection />
      <ScratchReveal />
      <CoupleStory />
      <EventDetails />
      <PhotoGallery />
      <CountdownTimer />
      <LocationSection />
      <RSVPSection />
      <Footer />
    </div>
  );
};

export default Index;
