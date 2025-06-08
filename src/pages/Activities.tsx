import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, Users, Clock, Star, Puzzle, Rocket, Calculator } from 'lucide-react';

const Activities = () => {
  const activities = [
    {
      id: 1,
      title: "Space Station Builder",
      description: "Design and build your own space station using engineering principles.",
      icon: Rocket,
      duration: "30-45 min",
      difficulty: "Intermediate",
      participants: "1-4 players",
      color: "from-blue-400 to-cyan-500",
      skills: ["Engineering", "Problem solving", "Creativity"],
      type: "Interactive"
    },
    {
      id: 2,
      title: "Constellation Puzzle",
      description: "Connect the stars to create famous constellations and learn their stories.",
      icon: Star,
      duration: "15-20 min",
      difficulty: "Beginner",
      participants: "1-2 players",
      color: "from-purple-400 to-pink-500",
      skills: ["Pattern recognition", "Astronomy", "History"],
      type: "Puzzle"
    },
    {
      id: 3,
      title: "Math Mission Control",
      description: "Help mission control calculate trajectories and solve space math problems.",
      icon: Calculator,
      duration: "25-35 min",
      difficulty: "Advanced",
      participants: "1-3 players",
      color: "from-green-400 to-teal-500",
      skills: ["Mathematics", "Logic", "Critical thinking"],
      type: "Educational"
    },
    {
      id: 4,
      title: "Planet Explorer Quiz",
      description: "Test your knowledge about planets, moons, and other celestial bodies.",
      icon: Puzzle,
      duration: "10-15 min",
      difficulty: "Easy",
      participants: "1+ players",
      color: "from-orange-400 to-red-500",
      skills: ["Science knowledge", "Memory", "Quick thinking"],
      type: "Quiz"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-24 pb-16 px-4 bg-gradient-to-br from-background via-muted/30 to-background">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-galaxy-dark mb-4">
              Learning Activities
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Engage with hands-on activities that combine fun with learning across science, math, and technology.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
            {activities.map((activity) => {
              const IconComponent = activity.icon;
              return (
                <Card 
                  key={activity.id}
                  className="group cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl rounded-3xl"
                >
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${activity.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <span className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded">
                        {activity.type}
                      </span>
                    </div>
                    <CardTitle className="text-xl font-bold text-galaxy-dark">{activity.title}</CardTitle>
                    <CardDescription className="text-muted-foreground">{activity.description}</CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="flex items-center text-muted-foreground">
                          <Clock className="w-4 h-4 mr-1" />
                          {activity.duration}
                        </div>
                        <div className="flex items-center text-muted-foreground">
                          <Users className="w-4 h-4 mr-1" />
                          {activity.participants}
                        </div>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <span className="text-sm bg-moon-glow/20 text-cosmic-purple px-3 py-1 rounded-full font-medium">
                          {activity.difficulty}
                        </span>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-bold text-galaxy-dark mb-2">Skills:</h4>
                        <div className="flex flex-wrap gap-1">
                          {activity.skills.map((skill, idx) => (
                            <span key={idx} className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      <Button className={`w-full bg-gradient-to-r ${activity.color} text-white rounded-full`}>
                        <Play className="w-4 h-4 mr-2" />
                        Start Activity
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Activities;
