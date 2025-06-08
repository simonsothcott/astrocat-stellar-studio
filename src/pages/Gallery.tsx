import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, Download, Share2, Eye } from 'lucide-react';

const Gallery = () => {
  const galleryItems = [
    {
      id: 1,
      title: "Nebula Dreams",
      creator: "Space Explorer Sam",
      image: "🌌",
      likes: 42,
      views: 156,
      category: "Space Art"
    },
    {
      id: 2,
      title: "My First Rocket",
      creator: "Future Astronaut Alex",
      image: "🚀",
      likes: 28,
      views: 89,
      category: "Spacecraft Design"
    },
    {
      id: 3,
      title: "Planet Paradise",
      creator: "Cosmic Creator Luna",
      image: "🪐",
      likes: 35,
      views: 134,
      category: "Planet Design"
    },
    {
      id: 4,
      title: "Star System Map",
      creator: "Navigator Nova",
      image: "⭐",
      likes: 51,
      views: 203,
      category: "Star Charts"
    },
    {
      id: 5,
      title: "Alien Adventure",
      creator: "Story Teller Zara",
      image: "👽",
      likes: 67,
      views: 298,
      category: "Character Art"
    },
    {
      id: 6,
      title: "Coding Constellation",
      creator: "Programming Pro Max",
      image: "💻",
      likes: 39,
      views: 187,
      category: "Code Art"
    }
  ];

  const categories = ["All", "Space Art", "Spacecraft Design", "Planet Design", "Star Charts", "Character Art", "Code Art"];

  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-24 pb-16 px-4 bg-gradient-to-br from-background via-muted/30 to-background">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-galaxy-dark mb-4">
              Student Gallery
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover amazing creations from students around the galaxy. Share your own masterpieces!
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "outline"}
                size="sm"
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-6 mb-12">
            {galleryItems.map((item) => (
              <Card 
                key={item.id}
                className="group cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl rounded-3xl overflow-hidden"
              >
                <div className="relative">
                  <div className="w-full h-48 bg-gradient-to-br from-cosmic-purple to-starlight-blue flex items-center justify-center text-6xl">
                    {item.image}
                  </div>
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex space-x-2">
                      <Button size="sm" className="rounded-full bg-white/20 backdrop-blur-sm">
                        <Eye className="w-4 h-4 text-white" />
                      </Button>
                      <Button size="sm" className="rounded-full bg-white/20 backdrop-blur-sm">
                        <Share2 className="w-4 h-4 text-white" />
                      </Button>
                      <Button size="sm" className="rounded-full bg-white/20 backdrop-blur-sm">
                        <Download className="w-4 h-4 text-white" />
                      </Button>
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-4">
                  <div className="space-y-3">
                    <div>
                      <h3 className="font-bold text-galaxy-dark">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">by {item.creator}</p>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded">
                        {item.category}
                      </span>
                      <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <Heart className="w-4 h-4 mr-1" />
                          {item.likes}
                        </div>
                        <div className="flex items-center">
                          <Eye className="w-4 h-4 mr-1" />
                          {item.views}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Upload Section */}
          <div className="text-center">
            <Card className="max-w-md mx-auto rounded-3xl">
              <CardContent className="p-8">
                <div className="text-4xl mb-4">🎨</div>
                <h3 className="text-xl font-bold text-galaxy-dark mb-2">Share Your Creation</h3>
                <p className="text-muted-foreground mb-4">
                  Upload your amazing space-themed artwork and share it with the community!
                </p>
                <Button className="cosmic-gradient text-white rounded-full">
                  Upload Artwork
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Gallery;
