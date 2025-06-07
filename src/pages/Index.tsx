
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import ActivitySection from '@/components/ActivitySection';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <Button 
            size="lg"
            onClick={() => navigate('/game-builder')}
            className="cosmic-gradient text-white font-bold rounded-full px-8 py-4 text-lg pulse-glow hover:scale-105 transition-all duration-300"
          >
            🎮 Start Building Games Now!
          </Button>
        </div>
      </div>
      <ActivitySection />
      <Footer />
    </div>
  );
};

export default Index;
