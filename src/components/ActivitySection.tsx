
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Gamepad, Film, Book, Star, Play, Code, Moon } from 'lucide-react';

const ActivitySection = () => {
  const activities = [
    {
      id: 'games',
      title: 'Game Galaxy',
      description: 'Design and build your own games! From simple puzzles to space adventures.',
      icon: Gamepad,
      color: 'cosmic-purple',
      gradient: 'from-purple-400 to-purple-600',
      features: ['Drag & Drop Game Builder', 'Character Creator', 'Physics Playground'],
      emoji: <Gamepad className="w-8 h-8 text-white" />
    },
    {
      id: 'films',
      title: 'Animation Station',
      description: 'Create amazing animated films and stories with our easy-to-use tools.',
      icon: Film,
      color: 'nebula-pink',
      gradient: 'from-pink-400 to-rose-500',
      features: ['Scene Builder', 'Character Animation', 'Voice Recording'],
      emoji: <Film className="w-8 h-8 text-white" />
    },
    {
      id: 'activities',
      title: 'Coding Cosmos',
      description: 'Learn programming through fun, interactive challenges and puzzles.',
      icon: Book,
      color: 'starlight-blue',
      gradient: 'from-blue-400 to-indigo-500',
      features: ['Visual Programming', 'Code Challenges', 'Logic Puzzles'],
      emoji: <Book className="w-8 h-8 text-white" />
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-background via-muted/30 to-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-cosmic-purple/10 rounded-full px-6 py-3 mb-6">
            <Star className="w-5 h-5 text-cosmic-purple" />
            <span className="text-cosmic-purple font-medium">Explore the Universe</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-galaxy-dark mb-6">
            Choose Your
            <span className="block nebula-gradient bg-clip-text text-transparent">
              Cosmic Adventure
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Whether you want to build games, create films, or solve coding puzzles, 
            AstroCat Academy has the perfect adventure waiting for you!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {activities.map((activity, index) => {
            const IconComponent = activity.icon;
            return (
              <Card 
                key={activity.id} 
                className={`
                  group relative overflow-hidden border-2 border-transparent hover:border-${activity.color}/50 
                  transition-all duration-500 hover:scale-105 hover:shadow-2xl rounded-3xl
                  ${index === 1 ? 'md:-translate-y-8' : ''}
                `}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${activity.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-500`} />
                
                <CardHeader className="text-center pt-8">
                  <div className="flex justify-center mb-4">
                    <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${activity.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      {activity.emoji}
                    </div>
                  </div>
                  
                  <CardTitle className="text-2xl font-bold text-galaxy-dark mb-2">
                    {activity.title}
                  </CardTitle>
                  
                  <CardDescription className="text-muted-foreground text-base leading-relaxed">
                    {activity.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    {activity.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${activity.gradient}`} />
                        <span className="text-sm font-medium text-galaxy-dark">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button 
                    className={`
                      w-full rounded-full font-bold py-3 text-white
                      bg-gradient-to-r ${activity.gradient} hover:scale-105 
                      transition-all duration-300 shadow-lg hover:shadow-xl
                    `}
                  >
                    <Play className="w-5 h-5 mr-2" />
                    Start Creating
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Special Coding Challenge Section */}
        <Card className="cosmic-gradient rounded-3xl border-0 shadow-2xl overflow-hidden">
          <div className="grid lg:grid-cols-2 items-center">
            <div className="p-8 lg:p-12 text-white">
              <div className="flex items-center space-x-3 mb-6">
                <Code className="w-8 h-8" />
                <span className="text-lg font-bold">Special Challenge</span>
              </div>
              
              <h3 className="text-3xl font-bold mb-4">
                Ready for a Coding Quest?
              </h3>
              
              <p className="text-white/90 text-lg mb-6">
                Join AstroCat on a special mission to save the Digital Galaxy! 
                Use your coding skills to solve puzzles and unlock new worlds.
              </p>
              
              <Button 
                variant="outline" 
                size="lg"
                className="rounded-full px-8 py-4 text-lg border-2 border-white text-white hover:bg-white hover:text-cosmic-purple transition-all duration-300"
              >
                Accept Mission
              </Button>
            </div>
            
            <div className="p-8 lg:p-12 text-center">
              <div className="flex justify-center mb-4 floating">
                <Moon className="w-20 h-20 text-white" />
              </div>
              <div className="flex justify-center floating-delayed">
                <Star className="w-12 h-12 text-white opacity-50" />
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default ActivitySection;
