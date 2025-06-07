
import { Button } from '@/components/ui/button';
import { Star, Book, Gamepad, Film } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-galaxy-dark text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Logo and Description */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-full cosmic-gradient flex items-center justify-center text-2xl">
                🐱‍🚀
              </div>
              <div>
                <h3 className="text-2xl font-bold">AstroCat Academy</h3>
                <p className="text-white/70">Where coding dreams come true!</p>
              </div>
            </div>
            
            <p className="text-white/80 text-lg leading-relaxed max-w-md">
              Join thousands of young coders on their journey through the galaxy of programming. 
              Learn, create, and explore with AstroCat as your guide!
            </p>
            
            <div className="flex space-x-4 pt-4">
              <Button 
                variant="outline" 
                size="sm" 
                className="rounded-full border-white/30 text-white hover:bg-white hover:text-galaxy-dark"
              >
                Newsletter
              </Button>
              <Button 
                variant="outline" 
                size="sm" 
                className="rounded-full border-white/30 text-white hover:bg-white hover:text-galaxy-dark"
              >
                Support
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-moon-glow">Explore</h4>
            <div className="space-y-3">
              {[
                { icon: Gamepad, label: 'Game Builder', color: 'cosmic-purple' },
                { icon: Film, label: 'Animation Studio', color: 'nebula-pink' },
                { icon: Book, label: 'Coding Challenges', color: 'starlight-blue' },
                { icon: Star, label: 'Gallery', color: 'moon-glow' }
              ].map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <a 
                    key={idx}
                    href="#" 
                    className="flex items-center space-x-3 text-white/80 hover:text-white transition-colors group"
                  >
                    <IconComponent className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    <span>{item.label}</span>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-moon-glow">Get Help</h4>
            <div className="space-y-3 text-white/80">
              <p>📧 help@astrocat.academy</p>
              <p>🌟 Available 24/7</p>
              <p>🚀 Parent Dashboard</p>
              <p>🎓 Teacher Resources</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/60">
              © 2024 AstroCat Academy. Made with 💜 for young coders everywhere.
            </p>
            
            <div className="flex items-center space-x-6 text-white/60 text-sm">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <a href="#" className="hover:text-white transition-colors">Safety</a>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-4 right-4 text-4xl opacity-20 floating">⭐</div>
        <div className="absolute bottom-8 left-8 text-3xl opacity-20 floating-delayed">🌙</div>
      </div>
    </footer>
  );
};

export default Footer;
