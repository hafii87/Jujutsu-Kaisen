import { HeroSection } from '@/app/components/HeroSection';
import { StorySection } from '@/app/components/StorySection';
import { CharactersSection } from '@/app/components/CharactersSection';
import { PowerSystemSection } from '@/app/components/PowerSystemSection';
import { TimelineSection } from '@/app/components/TimelineSection';
import { GallerySection } from '@/app/components/GallerySection';
import { QuoteSection } from '@/app/components/QuoteSection';
import { Footer } from '@/app/components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0b0b0d] text-white overflow-x-hidden">
      {/* Smooth Scroll Container */}
      <div className="relative">
        <HeroSection />
        <StorySection />
        <CharactersSection />
        <PowerSystemSection />
        <TimelineSection />
        <GallerySection />
        <QuoteSection />
        <Footer />
      </div>
    </div>
  );
}
