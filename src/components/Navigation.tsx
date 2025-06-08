
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Gamepad, Film, Star, Image, Book, Moon, Menu } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'games', label: 'Games', icon: Gamepad, color: 'cosmic-purple', path: '/games' },
    { id: 'films', label: 'Films', icon: Film, color: 'nebula-pink', path: '/films' },
    { id: 'activities', label: 'Activities', icon: Book, color: 'starlight-blue', path: '/activities' },
    { id: 'gallery', label: 'Gallery', icon: Image, color: 'moon-glow', path: '/gallery' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-border" role="navigation" aria-label="Main navigation">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-3 focus:outline-none focus:ring-2 focus:ring-cosmic-purple focus:ring-offset-2 rounded-lg"
            aria-label="AstroCat Academy - Go to homepage"
          >
            <div className="w-12 h-12 rounded-full cosmic-gradient flex items-center justify-center floating">
              <Moon className="w-6 h-6 text-white" aria-hidden="true" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-galaxy-dark">AstroCat Academy</h1>
              <p className="text-sm text-muted-foreground">Learn • Create • Explore</p>
            </div>
          </Link>

          {/* Desktop Navigation Items */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => {
              const IconComponent = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <Link key={item.id} to={item.path}>
                  <Button
                    variant={isActive ? "default" : "ghost"}
                    className={`
                      flex items-center space-x-2 rounded-full px-6 py-3 transition-all duration-300
                      focus:outline-none focus:ring-2 focus:ring-cosmic-purple focus:ring-offset-2
                      ${isActive 
                        ? 'pulse-glow text-white' 
                        : 'hover:scale-105 hover:bg-secondary'
                      }
                    `}
                    aria-label={`Navigate to ${item.label} section`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    <IconComponent className="w-5 h-5" aria-hidden="true" />
                    <span className="font-medium">{item.label}</span>
                  </Button>
                </Link>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <Button 
            variant="ghost" 
            className="md:hidden rounded-full w-12 h-12 focus:outline-none focus:ring-2 focus:ring-cosmic-purple focus:ring-offset-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
          >
            <Menu className="w-6 h-6" aria-hidden="true" />
          </Button>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border">
            <div className="flex flex-col space-y-2 pt-4">
              {navItems.map((item) => {
                const IconComponent = item.icon;
                const isActive = location.pathname === item.path;
                return (
                  <Link key={item.id} to={item.path} onClick={() => setIsMobileMenuOpen(false)}>
                    <Button
                      variant={isActive ? "default" : "ghost"}
                      className={`
                        w-full justify-start space-x-2 rounded-full px-6 py-3 transition-all duration-300
                        focus:outline-none focus:ring-2 focus:ring-cosmic-purple focus:ring-offset-2
                        ${isActive ? 'pulse-glow text-white' : 'hover:bg-secondary'}
                      `}
                      aria-label={`Navigate to ${item.label} section`}
                      aria-current={isActive ? 'page' : undefined}
                    >
                      <IconComponent className="w-5 h-5" aria-hidden="true" />
                      <span className="font-medium">{item.label}</span>
                    </Button>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
