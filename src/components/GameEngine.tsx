
import { useState, useEffect, useRef, useCallback } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, RotateCcw, Trophy } from 'lucide-react';

interface GameEngineProps {
  gameType: 'platformer' | 'puzzle' | 'adventure';
  onExit: () => void;
}

const GameEngine = ({ gameType, onExit }: GameEngineProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [gameWon, setGameWon] = useState(false);

  const resetGame = () => {
    setScore(0);
    setGameOver(false);
    setGameWon(false);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let gameState: any = {};

    const initGame = () => {
      canvas.width = 800;
      canvas.height = 400;
      
      if (gameType === 'platformer') {
        gameState = {
          player: { x: 50, y: 300, width: 30, height: 30, velocityY: 0, onGround: false },
          platforms: [
            { x: 0, y: 350, width: 200, height: 50 },
            { x: 250, y: 280, width: 100, height: 20 },
            { x: 400, y: 200, width: 100, height: 20 },
            { x: 600, y: 120, width: 150, height: 20 }
          ],
          stars: [
            { x: 300, y: 240, collected: false },
            { x: 450, y: 160, collected: false },
            { x: 650, y: 80, collected: false }
          ],
          keys: { left: false, right: false, up: false }
        };
      } else if (gameType === 'puzzle') {
        gameState = {
          tiles: Array(4).fill(null).map((_, row) => 
            Array(4).fill(null).map((_, col) => ({
              x: col * 60 + 300,
              y: row * 60 + 100,
              lit: Math.random() > 0.5,
              targetLit: (row + col) % 2 === 0
            }))
          ),
          clickCooldown: 0
        };
      } else {
        gameState = {
          player: { x: 100, y: 200 },
          planets: [
            { x: 200, y: 150, visited: false, color: '#ff6b9d' },
            { x: 400, y: 100, visited: false, color: '#4ecdc4' },
            { x: 600, y: 180, visited: false, color: '#45b7d1' }
          ],
          currentPlanet: -1
        };
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (gameType === 'platformer') {
        switch(e.key) {
          case 'ArrowLeft':
          case 'a':
          case 'A':
            gameState.keys.left = true;
            break;
          case 'ArrowRight':
          case 'd':
          case 'D':
            gameState.keys.right = true;
            break;
          case 'ArrowUp':
          case 'w':
          case 'W':
          case ' ':
            gameState.keys.up = true;
            break;
        }
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      if (gameType === 'platformer') {
        switch(e.key) {
          case 'ArrowLeft':
          case 'a':
          case 'A':
            gameState.keys.left = false;
            break;
          case 'ArrowRight':
          case 'd':
          case 'D':
            gameState.keys.right = false;
            break;
          case 'ArrowUp':
          case 'w':
          case 'W':
          case ' ':
            gameState.keys.up = false;
            break;
        }
      }
    };

    const handleClick = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      if (gameType === 'puzzle' && gameState.clickCooldown <= 0) {
        gameState.tiles.forEach((row: any[], rowIndex: number) => {
          row.forEach((tile, colIndex) => {
            if (x >= tile.x && x <= tile.x + 50 && y >= tile.y && y <= tile.y + 50) {
              // Toggle this tile and adjacent tiles
              const toggleTile = (r: number, c: number) => {
                if (r >= 0 && r < 4 && c >= 0 && c < 4) {
                  gameState.tiles[r][c].lit = !gameState.tiles[r][c].lit;
                }
              };
              toggleTile(rowIndex, colIndex);
              toggleTile(rowIndex - 1, colIndex);
              toggleTile(rowIndex + 1, colIndex);
              toggleTile(rowIndex, colIndex - 1);
              toggleTile(rowIndex, colIndex + 1);
              gameState.clickCooldown = 10;
            }
          });
        });
      } else if (gameType === 'adventure') {
        gameState.planets.forEach((planet: any, index: number) => {
          const distance = Math.sqrt((x - planet.x) ** 2 + (y - planet.y) ** 2);
          if (distance < 30 && !planet.visited) {
            planet.visited = true;
            setScore(prev => prev + 100);
          }
        });
      }
    };

    const gameLoop = () => {
      ctx.fillStyle = '#1a1a2e';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      if (gameType === 'platformer') {
        // Update player physics
        const player = gameState.player;
        
        if (gameState.keys.left) player.x -= 5;
        if (gameState.keys.right) player.x += 5;
        if (gameState.keys.up && player.onGround) {
          player.velocityY = -15;
          player.onGround = false;
        }

        player.velocityY += 0.8; // gravity
        player.y += player.velocityY;

        // Platform collision
        player.onGround = false;
        gameState.platforms.forEach((platform: any) => {
          if (player.x < platform.x + platform.width &&
              player.x + player.width > platform.x &&
              player.y + player.height > platform.y &&
              player.y + player.height < platform.y + platform.height + 10) {
            player.y = platform.y - player.height;
            player.velocityY = 0;
            player.onGround = true;
          }
        });

        // Draw platforms
        ctx.fillStyle = '#4ecdc4';
        gameState.platforms.forEach((platform: any) => {
          ctx.fillRect(platform.x, platform.y, platform.width, platform.height);
        });

        // Draw and collect stars
        gameState.stars.forEach((star: any, index: number) => {
          if (!star.collected) {
            ctx.fillStyle = '#ffd700';
            ctx.beginPath();
            ctx.arc(star.x, star.y, 10, 0, Math.PI * 2);
            ctx.fill();

            // Check collection
            if (Math.abs(player.x + player.width/2 - star.x) < 20 &&
                Math.abs(player.y + player.height/2 - star.y) < 20) {
              star.collected = true;
              setScore(prev => prev + 50);
            }
          }
        });

        // Draw player
        ctx.fillStyle = '#ff6b9d';
        ctx.fillRect(player.x, player.y, player.width, player.height);

        // Check win condition
        if (gameState.stars.every((star: any) => star.collected) && !gameWon) {
          setGameWon(true);
        }

      } else if (gameType === 'puzzle') {
        if (gameState.clickCooldown > 0) gameState.clickCooldown--;

        // Draw tiles
        gameState.tiles.forEach((row: any[]) => {
          row.forEach((tile) => {
            ctx.fillStyle = tile.lit ? '#ffd700' : '#333';
            ctx.fillRect(tile.x, tile.y, 50, 50);
            ctx.strokeStyle = '#666';
            ctx.lineWidth = 2;
            ctx.strokeRect(tile.x, tile.y, 50, 50);

            // Draw target indicator
            if (tile.targetLit) {
              ctx.fillStyle = tile.lit ? '#00ff00' : '#ff0000';
              ctx.fillRect(tile.x + 40, tile.y + 5, 8, 8);
            }
          });
        });

        // Check win condition
        const solved = gameState.tiles.every((row: any[]) => 
          row.every((tile) => tile.lit === tile.targetLit)
        );
        if (solved && !gameWon) {
          setGameWon(true);
          setScore(1000);
        }

      } else if (gameType === 'adventure') {
        // Draw space background with stars
        ctx.fillStyle = '#fff';
        for (let i = 0; i < 50; i++) {
          ctx.fillRect(Math.random() * canvas.width, Math.random() * canvas.height, 1, 1);
        }

        // Draw planets
        gameState.planets.forEach((planet: any) => {
          ctx.fillStyle = planet.visited ? '#555' : planet.color;
          ctx.beginPath();
          ctx.arc(planet.x, planet.y, 25, 0, Math.PI * 2);
          ctx.fill();

          if (planet.visited) {
            ctx.fillStyle = '#00ff00';
            ctx.font = '20px Arial';
            ctx.fillText('✓', planet.x - 8, planet.y + 8);
          }
        });

        // Draw player ship
        ctx.fillStyle = '#ff6b9d';
        ctx.beginPath();
        ctx.arc(gameState.player.x, gameState.player.y, 15, 0, Math.PI * 2);
        ctx.fill();

        // Check win condition
        if (gameState.planets.every((planet: any) => planet.visited) && !gameWon) {
          setGameWon(true);
        }
      }

      // Draw UI
      ctx.fillStyle = '#fff';
      ctx.font = '20px Arial';
      ctx.fillText(`Score: ${score}`, 10, 30);

      if (gameWon) {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.8)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = '#00ff00';
        ctx.font = '48px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('YOU WIN!', canvas.width/2, canvas.height/2);
        ctx.font = '24px Arial';
        ctx.fillText(`Final Score: ${score}`, canvas.width/2, canvas.height/2 + 50);
      }

      if (!gameOver && !gameWon) {
        animationId = requestAnimationFrame(gameLoop);
      }
    };

    initGame();
    gameLoop();

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    canvas.addEventListener('click', handleClick);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
      canvas.removeEventListener('click', handleClick);
    };
  }, [gameType, gameOver, gameWon, score]);

  const getGameTitle = () => {
    switch(gameType) {
      case 'platformer': return 'Space Platformer';
      case 'puzzle': return 'Moon Puzzle';
      case 'adventure': return 'Galaxy Adventure';
      default: return 'Game';
    }
  };

  const getInstructions = () => {
    switch(gameType) {
      case 'platformer': return 'Use arrow keys or WASD to move and jump. Collect all stars!';
      case 'puzzle': return 'Click tiles to toggle them and adjacent tiles. Match the target pattern!';
      case 'adventure': return 'Click on planets to visit them. Explore the entire galaxy!';
      default: return '';
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 bg-gradient-to-br from-background via-muted/30 to-background">
      <div className="container mx-auto">
        <Card className="rounded-3xl max-w-4xl mx-auto">
          <CardHeader>
            <div className="flex justify-between items-center">
              <div>
                <CardTitle className="text-2xl font-bold text-galaxy-dark flex items-center">
                  <Trophy className="w-6 h-6 mr-2 text-cosmic-purple" />
                  {getGameTitle()}
                </CardTitle>
                <p className="text-muted-foreground mt-2">{getInstructions()}</p>
              </div>
              <div className="flex space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={resetGame}
                  className="rounded-full"
                >
                  <RotateCcw className="w-4 h-4 mr-1" />
                  Reset
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={onExit}
                  className="rounded-full"
                >
                  <ArrowLeft className="w-4 h-4 mr-1" />
                  Exit
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex justify-center">
              <canvas
                ref={canvasRef}
                className="border-2 border-cosmic-purple/30 rounded-xl bg-galaxy-dark"
                style={{ maxWidth: '100%', height: 'auto' }}
              />
            </div>
            {gameWon && (
              <div className="text-center mt-6">
                <Button
                  size="lg"
                  onClick={resetGame}
                  className="cosmic-gradient text-white font-bold rounded-full px-8 py-4"
                >
                  Play Again
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default GameEngine;
