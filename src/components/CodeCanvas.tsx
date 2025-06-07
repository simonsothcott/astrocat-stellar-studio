
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, Save, Trash2 } from 'lucide-react';
import CodeBlock from './CodeBlock';

interface DroppedBlock {
  id: string;
  type: string;
  label: string;
  color: string;
  icon?: React.ReactNode;
}

interface CodeCanvasProps {
  onPlayCode: (blocks: DroppedBlock[]) => void;
}

const CodeCanvas = ({ onPlayCode }: CodeCanvasProps) => {
  const [droppedBlocks, setDroppedBlocks] = useState<DroppedBlock[]>([]);

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const blockData = JSON.parse(e.dataTransfer.getData('application/json'));
    const newBlock: DroppedBlock = {
      id: Date.now().toString(),
      ...blockData
    };
    setDroppedBlocks(prev => [...prev, newBlock]);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const clearCanvas = () => {
    setDroppedBlocks([]);
  };

  const playCode = () => {
    onPlayCode(droppedBlocks);
  };

  return (
    <Card className="rounded-3xl h-full">
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle className="text-lg font-bold text-galaxy-dark">Code Canvas</CardTitle>
          <div className="flex space-x-2">
            <Button variant="outline" size="sm" onClick={clearCanvas} className="rounded-full">
              <Trash2 className="w-4 h-4 mr-1" />
              Clear
            </Button>
            <Button variant="outline" size="sm" className="rounded-full">
              <Save className="w-4 h-4 mr-1" />
              Save
            </Button>
            <Button size="sm" onClick={playCode} className="cosmic-gradient text-white rounded-full">
              <Play className="w-4 h-4 mr-1" />
              Run
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div 
          className="min-h-96 border-2 border-dashed border-cosmic-purple/30 rounded-2xl p-4 space-y-3 bg-gradient-to-b from-starlight-blue/10 to-cosmic-purple/10"
          onDrop={handleDrop}
          onDragOver={handleDragOver}
        >
          {droppedBlocks.length === 0 ? (
            <div className="text-center text-muted-foreground py-12">
              <div className="text-4xl mb-4">🌙</div>
              <p className="text-lg">Drag code blocks here to build your game!</p>
              <p className="text-sm">Start with an event block like "When Game Starts"</p>
            </div>
          ) : (
            droppedBlocks.map((block, index) => (
              <div key={block.id} className="flex items-center space-x-2">
                <span className="text-sm text-cosmic-purple font-bold">{index + 1}.</span>
                <CodeBlock
                  type={block.type as any}
                  label={block.label}
                  color={block.color}
                  icon={block.icon}
                  draggable={false}
                />
              </div>
            ))
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default CodeCanvas;
