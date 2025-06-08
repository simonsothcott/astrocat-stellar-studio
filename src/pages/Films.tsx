
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, Clock, Star } from 'lucide-react';

const Films = () => {
  const films = [
    {
      id: 1,
      title: "AstroCat's Space Adventure",
      description: "Join AstroCat as they explore the galaxy and learn about planets, stars, and space travel.",
      duration: "15 min",
      difficulty: "Beginner",
      thumbnail: "🚀",
      videoUrl: "https://player.vimeo.com/video/1091408399",
      topics: ["Space exploration", "Planets", "Solar system"]
    },
    {
      id: 2,
      title: "Coding with the Stars",
      description: "Learn basic programming concepts through fun space-themed challenges.",
      duration: "20 min",
      difficulty: "Intermediate",
      thumbnail: "⭐",
      videoUrl: "https://player.vimeo.com/video/1091408399",
      topics: ["Programming basics", "Logic", "Problem solving"]
    },
    {
      id: 3,
      title: "Moon Mission Mathematics",
      description: "Discover how math helps astronauts navigate space and land on the moon.",
      duration: "18 min",
      difficulty: "Advanced",
      thumbnail: "🌙",
      videoUrl: "https://player.vimeo.com/video/1091408399",
      topics: ["Mathematics", "Physics", "Space navigation"]
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-24 pb-16 px-4 bg-gradient-to-br from-background via-muted/30 to-background">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-galaxy-dark mb-4">
              Educational Films
              <span className="block nebula-gradient bg-clip-text text-transparent">
                Watch & Discover!
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore our collection of educational videos that make learning about space, coding, and science exciting.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {films.map((film) => (
              <Card 
                key={film.id}
                className="group cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl rounded-3xl overflow-hidden"
              >
                <div className="relative">
                  <div className="w-full h-48 bg-gradient-to-br from-cosmic-purple to-starlight-blue flex items-center justify-center text-6xl">
                    {film.thumbnail}
                  </div>
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button size="lg" className="rounded-full bg-white/20 backdrop-blur-sm">
                      <Play className="w-6 h-6 text-white" />
                    </Button>
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-galaxy-dark">{film.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">{film.description}</CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="flex items-center text-sm text-muted-foreground">
                        <Clock className="w-4 h-4 mr-1" />
                        {film.duration}
                      </span>
                      <span className="text-sm bg-moon-glow/20 text-cosmic-purple px-3 py-1 rounded-full font-medium">
                        {film.difficulty}
                      </span>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-bold text-galaxy-dark mb-2">Topics:</h4>
                      <div className="flex flex-wrap gap-1">
                        {film.topics.map((topic, idx) => (
                          <span key={idx} className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded">
                            {topic}
                          </span>
                        ))}
                      </div>
                    </div>

                    <Button className="w-full cosmic-gradient text-white rounded-full">
                      <Play className="w-4 h-4 mr-2" />
                      Watch Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Films;
