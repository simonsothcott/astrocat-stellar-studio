
import React from 'react';
import { Card } from '@/components/ui/card';
import { Play, RotateCcw, ArrowRight, Star, Move } from 'lucide-react';

interface CodeBlockProps {
  type: 'action' | 'event' | 'control' | 'value';
  label: string;
  color: string;
  icon?: React.ReactNode;
  draggable?: boolean;
  onDragStart?: (e: React.DragEvent) => void;
}

const CodeBlock = ({ type, label, color, icon, draggable = true, onDragStart }: CodeBlockProps) => {
  return (
    <Card 
      className={`
        p-3 rounded-xl cursor-grab active:cursor-grabbing transition-all duration-200
        hover:scale-105 hover:shadow-lg border-2 ${color}
        ${draggable ? 'draggable' : ''}
      `}
      draggable={draggable}
      onDragStart={onDragStart}
    >
      <div className="flex items-center space-x-2">
        {icon}
        <span className="text-sm font-bold text-white">{label}</span>
      </div>
    </Card>
  );
};

export default CodeBlock;
