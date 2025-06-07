
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Gamepad } from 'lucide-react';
import CodePalette from './CodePalette';
import CodeCanvas from './CodeCanvas';
import GameEngine from './GameEngine';

interface VisualGameBuilderProps {
  gameType: 'platformer' | 'puzzle' | 'adventure';
  onExit: () => void;
}

const VisualGameBuilder = ({ gameType, onExit }: VisualGameBuilderProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [codeBlocks, setCodeBlocks] = useState<any[]>([]);

  const handlePlayCode = (blocks: any[]) => {
    setCodeBlocks(blocks);
    setIsPlaying(true);
  };

  const handleExitGame = () => {
    setIsPlaying(false);
  };

  const getGameTitle = () => {
    switch(gameType) {
      case 'platformer': return 'Build Space Platformer';
      case 'puzzle': return 'Build Moon Puzzle';
      case 'adventure': return 'Build Galaxy Adventure';
      default: return 'Build Game';
    }
  };

  if (isPlaying) {
    return <GameEngine gameType={gameType} onExit={handleExitGame} />;
  }

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 bg-gradient-to-br from-background via-muted/30 to-background">
      <div className="container mx-auto">
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button
                variant="outline"
                size="sm"
                onClick={onExit}
                className="rounded-full"
              >
                <ArrowLeft className="w-4 h-4 mr-1" />
                Back
              </Button>
              <div>
                <h1 className="text-3xl font-bold text-galaxy-dark flex items-center">
                  <Gamepad className="w-8 h-8 mr-3 text-cosmic-purple" />
                  {getGameTitle()}
                </h1>
                <p className="text-muted-foreground">Drag and drop code blocks to create your game!</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-6 h-[calc(100vh-250px)]">
          {/* Code Palette */}
          <div className="lg:col-span-1">
            <CodePalette />
          </div>

          {/* Code Canvas */}
          <div className="lg:col-span-2">
            <CodeCanvas onPlayCode={handlePlayCode} />
          </div>

          {/* Game Preview */}
          <div className="lg:col-span-1">
            <Card className="rounded-3xl h-full">
              <CardHeader>
                <CardTitle className="text-lg font-bold text-galaxy-dark">Game Preview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="w-full h-64 bg-gradient-to-b from-galaxy-dark to-cosmic-purple rounded-2xl flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-4xl mb-3">🌙</div>
                    <p className="text-sm">Your game will appear here when you click "Run"!</p>
                  </div>
                </div>
                <div className="mt-4 space-y-2">
                  <h4 className="text-sm font-bold text-galaxy-dark">Tips:</h4>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    <li>• Start with "When Game Starts"</li>
                    <li>• Add movement actions</li>
                    <li>• Use controls for logic</li>
                    <li>• Test often with "Run"</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisualGameBuilder;
