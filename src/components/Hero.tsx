
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sparkles, Play, Code, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  return (
    <main className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements - Behind content */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/30 to-background" />
      
      {/* Animated background elements - Lower z-index */}
      <div className="absolute inset-0 overflow-hidden decorative-element">
        <div className="floating absolute top-20 left-10 w-20 h-20 rounded-full cosmic-gradient opacity-20" />
        <div className="floating-delayed absolute top-40 right-20 w-16 h-16 rounded-full nebula-gradient opacity-30" />
        <div className="floating absolute bottom-40 left-20 w-12 h-12 rounded-full starlight-gradient opacity-25" style={{ animationDelay: '2s' }} />
        <div className="floating-delayed absolute bottom-20 right-40 w-24 h-24 rounded-full moon-gradient opacity-20" />
      </div>

      {/* Skip link for accessibility */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-primary-foreground px-4 py-2 rounded z-50"
      >
        Skip to content
      </a>

      <div className="container mx-auto px-4 content-layer hero-text">
        <div id="main-content" className="text-center space-y-8 max-w-4xl mx-auto">
          {/* Main Heading */}
          <header className="space-y-4 content-layer">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-galaxy-dark leading-tight">
              Welcome to{' '}
              <span className="cosmic-gradient bg-clip-text text-transparent">
                AstroCat Academy
              </span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Where young minds explore the universe through coding, games, and interactive learning adventures!
            </p>
          </header>

          {/* Video Section */}
          <section className="my-8 sm:my-12 content-layer">
            <div className="max-w-4xl mx-auto">
              <div style={{padding:"56.67% 0 0 0", position:"relative"}}>
                <iframe 
                  src="https://player.vimeo.com/video/1091408399?badge=0&autopause=0&player_id=0&app_id=58479" 
                  frameBorder="0" 
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" 
                  style={{position:"absolute", top:0, left:0, width:"100%", height:"100%"}} 
                  title="Astro Cat Academy Welcome Video"
                  className="rounded-3xl shadow-2xl"
                />
              </div>
            </div>
          </section>

          {/* Action Buttons */}
          <section className="flex flex-col sm:flex-row gap-4 justify-center items-center content-layer">
            <Link to="/games">
              <Button 
                size="lg" 
                className="cosmic-gradient text-white font-bold rounded-full px-8 py-4 text-lg pulse-glow hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-cosmic-purple"
                aria-label="Start playing educational space games"
              >
                <Play className="mr-2 h-6 w-6" aria-hidden="true" />
                Start Playing
              </Button>
            </Link>
            
            <Link to="/game-builder">
              <Button 
                size="lg" 
                variant="outline" 
                className="font-bold rounded-full px-8 py-4 text-lg hover:scale-105 transition-all duration-300 border-2 focus:outline-none focus:ring-2 focus:ring-cosmic-purple focus:ring-offset-2"
                aria-label="Create your own games with visual coding"
              >
                <Code className="mr-2 h-6 w-6" aria-hidden="true" />
                Create Games
              </Button>
            </Link>
          </section>

          {/* Feature Highlights */}
          <section className="grid md:grid-cols-3 gap-6 mt-12 sm:mt-16 content-layer">
            <div className="text-center space-y-3">
              <div className="w-16 h-16 mx-auto rounded-full cosmic-gradient flex items-center justify-center">
                <Play className="w-8 h-8 text-white" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold text-galaxy-dark">Interactive Games</h3>
              <p className="text-muted-foreground">Play engaging space-themed games that teach coding and problem-solving</p>
            </div>
            
            <div className="text-center space-y-3">
              <div className="w-16 h-16 mx-auto rounded-full nebula-gradient flex items-center justify-center">
                <Code className="w-8 h-8 text-white" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold text-galaxy-dark">Visual Coding</h3>
              <p className="text-muted-foreground">Learn programming with drag-and-drop blocks, just like Scratch</p>
            </div>
            
            <div className="text-center space-y-3">
              <div className="w-16 h-16 mx-auto rounded-full starlight-gradient flex items-center justify-center">
                <Sparkles className="w-8 h-8 text-white" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold text-galaxy-dark">Creative Learning</h3>
              <p className="text-muted-foreground">Express creativity while discovering science, math, and technology</p>
            </div>
          </section>

          {/* Explore More Section */}
          <section className="mt-12 sm:mt-16 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-cosmic-purple/10 to-starlight-blue/10 border border-cosmic-purple/20 content-layer">
            <h2 className="text-2xl font-bold text-galaxy-dark mb-4">Ready to Explore the Galaxy?</h2>
            <p className="text-muted-foreground mb-6">
              Discover educational films, hands-on activities, and a gallery of amazing student creations!
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link to="/films">
                <Button 
                  variant="outline" 
                  className="rounded-full focus:outline-none focus:ring-2 focus:ring-cosmic-purple focus:ring-offset-2"
                  aria-label="Watch educational films about space and coding"
                >
                  Watch Films <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </Button>
              </Link>
              <Link to="/activities">
                <Button 
                  variant="outline" 
                  className="rounded-full focus:outline-none focus:ring-2 focus:ring-cosmic-purple focus:ring-offset-2"
                  aria-label="Try hands-on learning activities"
                >
                  Try Activities <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </Button>
              </Link>
              <Link to="/gallery">
                <Button 
                  variant="outline" 
                  className="rounded-full focus:outline-none focus:ring-2 focus:ring-cosmic-purple focus:ring-offset-2"
                  aria-label="View gallery of student creations"
                >
                  View Gallery <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </Button>
              </Link>
            </div>
          </section>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent decorative-element" />
    </main>
  );
};

export default Hero;
