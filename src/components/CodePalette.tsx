
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Play, RotateCcw, ArrowRight, Star, Move, MousePointer, Zap } from 'lucide-react';
import CodeBlock from './CodeBlock';

const CodePalette = () => {
  const blockCategories = [
    {
      title: 'Events',
      blocks: [
        { type: 'event', label: 'When Game Starts', color: 'bg-yellow-500', iconName: 'Play' },
        { type: 'event', label: 'When Key Pressed', color: 'bg-yellow-500', iconName: 'Zap' },
        { type: 'event', label: 'When Clicked', color: 'bg-yellow-500', iconName: 'MousePointer' }
      ]
    },
    {
      title: 'Actions',
      blocks: [
        { type: 'action', label: 'Move Right', color: 'bg-blue-500', iconName: 'ArrowRight' },
        { type: 'action', label: 'Jump', color: 'bg-blue-500', iconName: 'Move' },
        { type: 'action', label: 'Collect Star', color: 'bg-blue-500', iconName: 'Star' }
      ]
    },
    {
      title: 'Control',
      blocks: [
        { type: 'control', label: 'Repeat 10 times', color: 'bg-orange-500', iconName: 'RotateCcw' },
        { type: 'control', label: 'If touching...', color: 'bg-orange-500', iconName: 'Zap' }
      ]
    }
  ];

  const getIcon = (iconName: string) => {
    const icons = {
      Play: <Play className="w-4 h-4" />,
      Zap: <Zap className="w-4 h-4" />,
      MousePointer: <MousePointer className="w-4 h-4" />,
      ArrowRight: <ArrowRight className="w-4 h-4" />,
      Move: <Move className="w-4 h-4" />,
      Star: <Star className="w-4 h-4" />,
      RotateCcw: <RotateCcw className="w-4 h-4" />
    };
    return icons[iconName as keyof typeof icons] || <Star className="w-4 h-4" />;
  };

  const handleDragStart = (e: React.DragEvent, block: any) => {
    // Only serialize the data we need, not the React components
    const blockData = {
      type: block.type,
      label: block.label,
      color: block.color,
      iconName: block.iconName
    };
    e.dataTransfer.setData('application/json', JSON.stringify(blockData));
  };

  return (
    <Card className="rounded-3xl h-full overflow-y-auto">
      <CardHeader>
        <CardTitle className="text-lg font-bold text-galaxy-dark">Code Blocks</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {blockCategories.map((category, idx) => (
          <div key={idx}>
            <h3 className="text-sm font-bold text-cosmic-purple mb-3">{category.title}</h3>
            <div className="space-y-2">
              {category.blocks.map((block, blockIdx) => (
                <CodeBlock
                  key={blockIdx}
                  type={block.type as any}
                  label={block.label}
                  color={block.color}
                  icon={getIcon(block.iconName)}
                  onDragStart={(e) => handleDragStart(e, block)}
                />
              ))}
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default CodePalette;
