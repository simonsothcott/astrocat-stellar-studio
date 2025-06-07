
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Play, Star, Gamepad, Film } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen pt-24 pb-16 px-4">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-nebula-pink/20 rounded-full px-4 py-2 text-sm font-medium text-cosmic-purple">
                <Star className="w-4 h-4" />
                <span>Welcome to the Galaxy of Code!</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-galaxy-dark leading-tight">
                Blast Off to
                <span className="block nebula-gradient bg-clip-text text-transparent">
                  Coding Adventures!
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                Join AstroCat on an amazing journey through space where you'll learn to code, 
                create awesome games, make animated films, and explore a universe of creativity!
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="cosmic-gradient text-white font-bold rounded-full px-8 py-4 text-lg pulse-glow hover:scale-105 transition-all duration-300"
              >
                <Play className="w-6 h-6 mr-2" />
                Start Your Adventure
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="rounded-full px-8 py-4 text-lg border-2 border-cosmic-purple hover:bg-cosmic-purple hover:text-white transition-all duration-300"
              >
                Watch Demo
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-cosmic-purple">1000+</div>
                <div className="text-sm text-muted-foreground">Happy Cadets</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-nebula-pink">50+</div>
                <div className="text-sm text-muted-foreground">Fun Activities</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-starlight-blue">∞</div>
                <div className="text-sm text-muted-foreground">Possibilities</div>
              </div>
            </div>
          </div>

          {/* Right Content - Interactive Cards */}
          <div className="space-y-6">
            <div className="relative">
              {/* Main AstroCat Character */}
              <Card className="cosmic-gradient p-8 text-center rounded-3xl border-0 shadow-2xl floating">
                <div className="text-8xl mb-4">🐱‍🚀</div>
                <h3 className="text-2xl font-bold text-white mb-2">Meet AstroCat!</h3>
                <p className="text-white/90">Your coding companion on this galactic journey</p>
              </Card>

              {/* Floating Activity Cards */}
              <Card className="absolute -right-4 -top-4 w-32 h-32 bg-white rounded-2xl shadow-lg border-2 border-nebula-pink floating-delayed flex flex-col items-center justify-center">
                <Gamepad className="w-8 h-8 text-cosmic-purple mb-2" />
                <span className="text-sm font-medium text-galaxy-dark">Games</span>
              </Card>

              <Card className="absolute -left-6 top-1/2 w-28 h-28 bg-white rounded-2xl shadow-lg border-2 border-starlight-blue floating flex flex-col items-center justify-center">
                <Film className="w-7 h-7 text-nebula-pink mb-2" />
                <span className="text-xs font-medium text-galaxy-dark">Films</span>
              </Card>

              <Card className="absolute -right-2 bottom-4 w-24 h-24 bg-white rounded-2xl shadow-lg border-2 border-moon-glow floating-delayed flex flex-col items-center justify-center">
                <div className="text-2xl mb-1">✨</div>
                <span className="text-xs font-medium text-galaxy-dark">Magic</span>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
