
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, Sparkles, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const ActivitySection = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-muted/30 to-background">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-galaxy-dark mb-4">
            Choose Your Adventure
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Whether you want to build games, create films, or solve coding puzzles, AstroCat Academy has the perfect adventure waiting for you!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card className="group cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl rounded-3xl">
            <CardHeader className="text-center">
              <div className="w-20 h-20 mx-auto rounded-full cosmic-gradient flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Play className="w-10 h-10 text-white" />
              </div>
              <CardTitle className="text-xl font-bold text-galaxy-dark">Game Galaxy</CardTitle>
              <CardDescription>Design and build your own games! From simple platformers to complex adventures.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">Perfect for aspiring game developers who want to bring their imagination to life.</p>
              <Link to="/games">
                <Button className="w-full cosmic-gradient text-white rounded-full">
                  <Play className="w-4 h-4 mr-2" />
                  Explore Games
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="group cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl rounded-3xl">
            <CardHeader className="text-center">
              <div className="w-20 h-20 mx-auto rounded-full nebula-gradient flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Sparkles className="w-10 h-10 text-white" />
              </div>
              <CardTitle className="text-xl font-bold text-galaxy-dark">Animation Station</CardTitle>
              <CardDescription>Create amazing animated films and stories with our easy-to-use tools.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">Turn your creative ideas into animated masterpieces that inspire others.</p>
              <Link to="/films">
                <Button className="w-full nebula-gradient text-white rounded-full">
                  <Sparkles className="w-4 h-4 mr-2" />
                  Watch Films
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="group cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl rounded-3xl">
            <CardHeader className="text-center">
              <div className="w-20 h-20 mx-auto rounded-full starlight-gradient flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Star className="w-10 h-10 text-white" />
              </div>
              <CardTitle className="text-xl font-bold text-galaxy-dark">Coding Cosmos</CardTitle>
              <CardDescription>Learn programming through fun, interactive challenges and space adventures.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">Master coding skills while exploring the mysteries of the universe.</p>
              <Link to="/activities">
                <Button className="w-full starlight-gradient text-white rounded-full">
                  <Star className="w-4 h-4 mr-2" />
                  Try Activities
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-bold text-galaxy-dark mb-4">
            <Star className="inline w-6 h-6 mr-2 text-cosmic-purple" />
            Explore the Universe
          </h3>
          <p className="text-muted-foreground mb-6">
            Ready to embark on your cosmic learning journey? Every adventure begins with a single click!
          </p>
          <Link to="/gallery">
            <Button 
              size="lg"
              variant="outline"
              className="font-bold rounded-full px-8 py-4 text-lg hover:scale-105 transition-all duration-300 border-2"
            >
              <Sparkles className="w-6 h-6 mr-2" />
              View Student Gallery
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ActivitySection;
