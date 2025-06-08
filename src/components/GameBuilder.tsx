import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Play, Plus, Settings, Save, Moon, Star, Gamepad, Code } from 'lucide-react';
import GameEngine from './GameEngine';
import VisualGameBuilder from './VisualGameBuilder';

const GameBuilder = () => {
  const [selectedTemplate, setSelectedTemplate] = useState<string>('');
  const [gameTitle, setGameTitle] = useState('My Awesome Game');
  const [playingGame, setPlayingGame] = useState<'platformer' | 'puzzle' | 'adventure' | null>(null);
  const [buildingGame, setBuildingGame] = useState<'platformer' | 'puzzle' | 'adventure' | null>(null);

  const gameTemplates = [
    {
      id: 'platformer',
      title: 'Space Platformer',
      description: 'Jump through space platforms and collect stars!',
      difficulty: 'Beginner',
      color: 'from-purple-400 to-purple-600'
    },
    {
      id: 'puzzle',
      title: 'Star Collector',
      description: 'Simple game to collect glowing stars in space',
      difficulty: 'Easy',
      color: 'from-blue-400 to-indigo-500'
    },
    {
      id: 'adventure',
      title: 'Space Walker',
      description: 'Walk around and explore a friendly space station',
      difficulty: 'Easy',
      color: 'from-pink-400 to-rose-500'
    }
  ];

  const gameElements = [
    { name: 'Player Character', icon: Moon, type: 'character' },
    { name: 'Collectible Stars', icon: Star, type: 'item' },
    { name: 'Platform', icon: Gamepad, type: 'obstacle' },
  ];

  const handlePlayGame = (gameType: 'platformer' | 'puzzle' | 'adventure') => {
    setPlayingGame(gameType);
  };

  const handleBuildGame = (gameType: 'platformer' | 'puzzle' | 'adventure') => {
    setBuildingGame(gameType);
  };

  const handleExitGame = () => {
    setPlayingGame(null);
  };

  const handleExitBuilder = () => {
    setBuildingGame(null);
  };

  if (playingGame) {
    return <GameEngine gameType={playingGame} onExit={handleExitGame} />;
  }

  if (buildingGame) {
    return <VisualGameBuilder gameType={buildingGame} onExit={handleExitBuilder} />;
  }

  return (
    <div className="min-h-screen pt-32 pb-16 px-4 bg-gradient-to-br from-background via-muted/30 to-background">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-galaxy-dark mb-4">
            Game Builder
            <span className="block nebula-gradient bg-clip-text text-transparent">
              Create Your Universe!
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Build amazing games with our easy drag-and-drop tools. No coding experience needed!
          </p>
        </div>

        <Tabs defaultValue="templates" className="w-full">
          <TabsList className="grid w-full grid-cols-3 rounded-full bg-white/50 backdrop-blur-md">
            <TabsTrigger value="templates" className="rounded-full">Choose Template</TabsTrigger>
            <TabsTrigger value="builder" className="rounded-full">Visual Builder</TabsTrigger>
            <TabsTrigger value="preview" className="rounded-full">Preview & Play</TabsTrigger>
          </TabsList>

          <TabsContent value="templates" className="mt-8">
            <div className="grid md:grid-cols-3 gap-6">
              {gameTemplates.map((template) => (
                <Card 
                  key={template.id}
                  className={`
                    group cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl rounded-3xl
                    ${selectedTemplate === template.id ? 'ring-4 ring-cosmic-purple ring-opacity-50' : ''}
                  `}
                  onClick={() => setSelectedTemplate(template.id)}
                >
                  <CardHeader className="text-center">
                    <div className={`w-20 h-20 mx-auto rounded-full bg-gradient-to-br ${template.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Moon className="w-10 h-10 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold text-galaxy-dark">{template.title}</CardTitle>
                    <CardDescription className="text-muted-foreground">{template.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-sm bg-moon-glow/20 text-cosmic-purple px-3 py-1 rounded-full font-medium">
                        {template.difficulty}
                      </span>
                      <div className="flex space-x-2">
                        <Button 
                          size="sm" 
                          variant="outline"
                          className="rounded-full"
                          onClick={(e) => {
                            e.stopPropagation();
                            handlePlayGame(template.id as 'platformer' | 'puzzle' | 'adventure');
                          }}
                        >
                          <Play className="w-4 h-4 mr-1" />
                          Play
                        </Button>
                        <Button 
                          size="sm" 
                          className={`rounded-full bg-gradient-to-r ${template.color} text-white`}
                          onClick={(e) => {
                            e.stopPropagation();
                            handleBuildGame(template.id as 'platformer' | 'puzzle' | 'adventure');
                          }}
                        >
                          <Code className="w-4 h-4 mr-1" />
                          Build
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {selectedTemplate && (
              <div className="mt-8 text-center">
                <div className="flex justify-center space-x-4">
                  <Button 
                    size="lg"
                    className="cosmic-gradient text-white font-bold rounded-full px-8 py-4 text-lg pulse-glow hover:scale-105 transition-all duration-300"
                    onClick={() => handleBuildGame(selectedTemplate as 'platformer' | 'puzzle' | 'adventure')}
                  >
                    <Code className="w-6 h-6 mr-2" />
                    Start Visual Coding
                  </Button>
                  <Button 
                    size="lg"
                    variant="outline"
                    className="font-bold rounded-full px-8 py-4 text-lg hover:scale-105 transition-all duration-300"
                    onClick={() => handlePlayGame(selectedTemplate as 'platformer' | 'puzzle' | 'adventure')}
                  >
                    <Play className="w-6 h-6 mr-2" />
                    Play Game
                  </Button>
                </div>
              </div>
            )}
          </TabsContent>

          <TabsContent value="builder" className="mt-8">
            <div className="text-center space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-galaxy-dark mb-4">Visual Game Builder</h2>
                <p className="text-muted-foreground">Choose a game template to start building with drag-and-drop code blocks!</p>
              </div>
              <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
                {gameTemplates.map((template) => (
                  <Button
                    key={template.id}
                    size="lg"
                    className={`h-auto p-6 rounded-3xl bg-gradient-to-br ${template.color} text-white hover:scale-105 transition-all duration-300`}
                    onClick={() => handleBuildGame(template.id as 'platformer' | 'puzzle' | 'adventure')}
                  >
                    <div className="text-center">
                      <Code className="w-8 h-8 mx-auto mb-2" />
                      <div className="font-bold">{template.title}</div>
                      <div className="text-sm opacity-90">Start Coding</div>
                    </div>
                  </Button>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="preview" className="mt-8">
            <Card className="rounded-3xl">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold text-galaxy-dark">Game Preview</CardTitle>
                <CardDescription>Test your game and see how it plays!</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="w-full h-96 bg-gradient-to-b from-galaxy-dark to-cosmic-purple rounded-2xl flex items-center justify-center">
                  <div className="text-center space-y-4 text-white">
                    <Moon className="w-20 h-20 mx-auto" />
                    <h3 className="text-2xl font-bold">Your Game Will Appear Here!</h3>
                    <p className="text-white/80">Build your game in the Visual Builder tab to see it come to life</p>
                    <div className="flex justify-center space-x-4">
                      {gameTemplates.map((template) => (
                        <Button 
                          key={template.id}
                          size="lg"
                          variant="outline"
                          className="rounded-full border-2 border-white text-white hover:bg-white hover:text-galaxy-dark"
                          onClick={() => handlePlayGame(template.id as 'platformer' | 'puzzle' | 'adventure')}
                        >
                          <Play className="w-6 h-6 mr-2" />
                          Play {template.title}
                        </Button>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default GameBuilder;
