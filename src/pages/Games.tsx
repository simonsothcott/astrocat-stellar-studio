
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import GameEngine from '@/components/GameEngine';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { Play, Code, Moon, Star, Gamepad } from 'lucide-react';
import { Link } from 'react-router-dom';

const Games = () => {
  const [playingGame, setPlayingGame] = useState<'platformer' | 'puzzle' | 'adventure' | null>(null);

  const games = [
    {
      id: 'platformer',
      title: 'Space Platformer',
      description: 'Jump through space platforms and collect stars!',
      difficulty: 'Beginner',
      color: 'from-purple-400 to-purple-600',
      icon: Moon,
      features: ['Jump mechanics', 'Collectible stars', 'Platform physics']
    },
    {
      id: 'puzzle',
      title: 'Moon Puzzle',
      description: 'Solve puzzles to help AstroCat find the way home',
      difficulty: 'Easy',
      color: 'from-blue-400 to-indigo-500',
      icon: Star,
      features: ['Logic puzzles', 'Pattern matching', 'Strategic thinking']
    },
    {
      id: 'adventure',
      title: 'Galaxy Adventure',
      description: 'Explore different planets and meet alien friends',
      difficulty: 'Intermediate',
      color: 'from-pink-400 to-rose-500',
      icon: Gamepad,
      features: ['Planet exploration', 'Character interaction', 'Story elements']
    }
  ];

  const handlePlayGame = (gameType: 'platformer' | 'puzzle' | 'adventure') => {
    setPlayingGame(gameType);
  };

  const handleExitGame = () => {
    setPlayingGame(null);
  };

  if (playingGame) {
    return <GameEngine gameType={playingGame} onExit={handleExitGame} />;
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-24 pb-16 px-4 bg-gradient-to-br from-background via-muted/30 to-background">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-galaxy-dark mb-4">
              Space Games
              <span className="block nebula-gradient bg-clip-text text-transparent">
                Play & Learn!
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore our collection of educational space games designed to make learning fun and engaging.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {games.map((game) => {
              const IconComponent = game.icon;
              return (
                <Card 
                  key={game.id}
                  className="group cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl rounded-3xl"
                >
                  <CardHeader className="text-center">
                    <div className={`w-20 h-20 mx-auto rounded-full bg-gradient-to-br ${game.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-10 h-10 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold text-galaxy-dark">{game.title}</CardTitle>
                    <CardDescription className="text-muted-foreground">{game.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <span className="text-sm bg-moon-glow/20 text-cosmic-purple px-3 py-1 rounded-full font-medium">
                        {game.difficulty}
                      </span>
                      
                      <div>
                        <h4 className="text-sm font-bold text-galaxy-dark mb-2">Features:</h4>
                        <ul className="text-xs text-muted-foreground space-y-1">
                          {game.features.map((feature, idx) => (
                            <li key={idx}>• {feature}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex space-x-2">
                        <Button 
                          size="sm" 
                          className={`rounded-full bg-gradient-to-r ${game.color} text-white flex-1`}
                          onClick={() => handlePlayGame(game.id as 'platformer' | 'puzzle' | 'adventure')}
                        >
                          <Play className="w-4 h-4 mr-1" />
                          Play Now
                        </Button>
                        <Link to="/game-builder" className="flex-1">
                          <Button 
                            size="sm" 
                            variant="outline"
                            className="rounded-full w-full"
                          >
                            <Code className="w-4 h-4 mr-1" />
                            Build
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center">
            <Link to="/game-builder">
              <Button 
                size="lg"
                className="cosmic-gradient text-white font-bold rounded-full px-8 py-4 text-lg pulse-glow hover:scale-105 transition-all duration-300"
              >
                <Code className="w-6 h-6 mr-2" />
                Create Your Own Game
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Games;
