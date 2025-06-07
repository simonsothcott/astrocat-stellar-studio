
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { Moon, Sparkles } from 'lucide-react';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Background with floating elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-starlight-blue via-background to-moon-glow opacity-80"></div>
      
      {/* Floating moons */}
      <div className="absolute top-20 left-10 animate-float">
        <Moon className="w-8 h-8 text-cosmic-purple opacity-60" />
      </div>
      <div className="absolute top-40 right-20 animate-float-delayed">
        <Sparkles className="w-6 h-6 text-moon-glow opacity-70" />
      </div>
      <div className="absolute bottom-32 left-1/4 animate-float-slow">
        <Moon className="w-10 h-10 text-starlight-blue opacity-50" />
      </div>

      <div className="relative z-10 text-center max-w-6xl mx-auto">
        {/* Welcome Video */}
        <div className="mb-12 max-w-4xl mx-auto">
          <div style={{padding:'56.67% 0 0 0', position:'relative'}}>
            <iframe 
              src="https://player.vimeo.com/video/1091408399?badge=0&autopause=0&player_id=0&app_id=58479" 
              frameBorder="0" 
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" 
              style={{position:'absolute', top:0, left:0, width:'100%', height:'100%'}} 
              title="Astro Cat Academy Welcome"
              className="rounded-3xl shadow-2xl"
            />
          </div>
        </div>

        {/* Hero Content */}
        <div className="space-y-8">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="relative">
              <Moon className="w-16 h-16 text-cosmic-purple animate-pulse" />
              <div className="absolute -top-1 -right-1">
                <Sparkles className="w-6 h-6 text-moon-glow animate-spin-slow" />
              </div>
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold">
              <span className="text-galaxy-dark">AstroCat</span>
              <span className="block nebula-gradient bg-clip-text text-transparent">Academy</span>
            </h1>
          </div>
          
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Join our friendly space cat on an amazing coding adventure! 
            <span className="block mt-2 cosmic-gradient bg-clip-text text-transparent font-semibold">
              Create games, make films, and explore the galaxy of programming!
            </span>
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
            <Button 
              size="lg"
              onClick={() => navigate('/game-builder')}
              className="cosmic-gradient text-white font-bold rounded-full px-12 py-6 text-xl pulse-glow hover:scale-110 transition-all duration-300 shadow-2xl"
            >
              <Moon className="w-6 h-6 mr-3" />
              Start Your Adventure!
            </Button>
            
            <Button 
              size="lg"
              variant="outline"
              className="rounded-full px-12 py-6 text-xl border-2 border-cosmic-purple text-cosmic-purple hover:bg-cosmic-purple hover:text-white transition-all duration-300"
            >
              <Sparkles className="w-6 h-6 mr-3" />
              Watch Demos
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-lg mx-auto pt-12">
            <div className="text-center">
              <div className="text-3xl font-bold cosmic-gradient bg-clip-text text-transparent">50+</div>
              <div className="text-sm text-muted-foreground">Fun Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold cosmic-gradient bg-clip-text text-transparent">1000+</div>
              <div className="text-sm text-muted-foreground">Happy Kids</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold cosmic-gradient bg-clip-text text-transparent">∞</div>
              <div className="text-sm text-muted-foreground">Possibilities</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
