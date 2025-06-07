
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Play, Plus, Settings, Save, Moon, Star, Gamepad } from 'lucide-react';

const GameBuilder = () => {
  const [selectedTemplate, setSelectedTemplate] = useState<string>('');
  const [gameTitle, setGameTitle] = useState('My Awesome Game');

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
      title: 'Moon Puzzle',
      description: 'Solve puzzles to help AstroCat find the way home',
      difficulty: 'Easy',
      color: 'from-blue-400 to-indigo-500'
    },
    {
      id: 'adventure',
      title: 'Galaxy Adventure',
      description: 'Explore different planets and meet alien friends',
      difficulty: 'Intermediate',
      color: 'from-pink-400 to-rose-500'
    }
  ];

  const gameElements = [
    { name: 'Player Character', icon: Moon, type: 'character' },
    { name: 'Collectible Stars', icon: Star, type: 'item' },
    { name: 'Platform', icon: Gamepad, type: 'obstacle' },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 bg-gradient-to-br from-background via-muted/30 to-background">
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
            <TabsTrigger value="builder" className="rounded-full">Build Game</TabsTrigger>
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
                      <Button 
                        size="sm" 
                        className={`rounded-full bg-gradient-to-r ${template.color} text-white`}
                        disabled={selectedTemplate !== template.id}
                      >
                        <Plus className="w-4 h-4 mr-1" />
                        Use Template
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {selectedTemplate && (
              <div className="mt-8 text-center">
                <Button 
                  size="lg"
                  className="cosmic-gradient text-white font-bold rounded-full px-8 py-4 text-lg pulse-glow hover:scale-105 transition-all duration-300"
                >
                  Start Building Game
                </Button>
              </div>
            )}
          </TabsContent>

          <TabsContent value="builder" className="mt-8">
            <div className="grid lg:grid-cols-4 gap-6">
              {/* Game Elements Panel */}
              <Card className="lg:col-span-1 rounded-3xl">
                <CardHeader>
                  <CardTitle className="text-lg font-bold text-galaxy-dark flex items-center">
                    <Settings className="w-5 h-5 mr-2" />
                    Game Elements
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {gameElements.map((element, idx) => {
                    const IconComponent = element.icon;
                    return (
                      <div 
                        key={idx}
                        className="p-3 border-2 border-dashed border-cosmic-purple/30 rounded-xl hover:border-cosmic-purple hover:bg-cosmic-purple/5 cursor-grab transition-all duration-200"
                      >
                        <div className="flex items-center space-x-3">
                          <IconComponent className="w-6 h-6 text-cosmic-purple" />
                          <span className="text-sm font-medium text-galaxy-dark">{element.name}</span>
                        </div>
                      </div>
                    );
                  })}
                </CardContent>
              </Card>

              {/* Game Canvas */}
              <Card className="lg:col-span-3 rounded-3xl">
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-lg font-bold text-galaxy-dark">{gameTitle}</CardTitle>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm" className="rounded-full">
                        <Save className="w-4 h-4 mr-1" />
                        Save
                      </Button>
                      <Button size="sm" className="cosmic-gradient text-white rounded-full">
                        <Play className="w-4 h-4 mr-1" />
                        Test
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="w-full h-96 bg-gradient-to-b from-starlight-blue/20 to-cosmic-purple/20 rounded-2xl border-2 border-dashed border-cosmic-purple/30 flex items-center justify-center">
                    <div className="text-center space-y-4">
                      <Moon className="w-16 h-16 text-cosmic-purple mx-auto" />
                      <p className="text-lg font-medium text-galaxy-dark">Drag elements here to build your game!</p>
                      <p className="text-muted-foreground">Start by selecting a template above</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
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
                    <p className="text-white/80">Build your game in the previous tab to see it come to life</p>
                    <Button 
                      size="lg"
                      variant="outline"
                      className="rounded-full border-2 border-white text-white hover:bg-white hover:text-galaxy-dark"
                    >
                      <Play className="w-6 h-6 mr-2" />
                      Play Game
                    </Button>
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
