
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Gamepad, Film, Star, Image, Book, Moon } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState(location.pathname.slice(1) || 'home');

  const navItems = [
    { id: 'games', label: 'Games', icon: Gamepad, color: 'cosmic-purple', path: '/games' },
    { id: 'films', label: 'Films', icon: Film, color: 'nebula-pink', path: '/films' },
    { id: 'activities', label: 'Activities', icon: Book, color: 'starlight-blue', path: '/activities' },
    { id: 'gallery', label: 'Gallery', icon: Image, color: 'moon-glow', path: '/gallery' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-full cosmic-gradient flex items-center justify-center floating">
              <Moon className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-galaxy-dark">AstroCat Academy</h1>
              <p className="text-sm text-muted-foreground">Learn • Create • Explore</p>
            </div>
          </Link>

          {/* Navigation Items */}
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
                      ${isActive 
                        ? 'pulse-glow text-white' 
                        : 'hover:scale-105 hover:bg-secondary'
                      }
                    `}
                    onClick={() => setActiveSection(item.id)}
                  >
                    <IconComponent className="w-5 h-5" />
                    <span className="font-medium">{item.label}</span>
                  </Button>
                </Link>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <Button variant="ghost" className="md:hidden rounded-full w-12 h-12">
            <Star className="w-6 h-6" />
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
