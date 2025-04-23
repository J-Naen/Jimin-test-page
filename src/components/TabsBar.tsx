import React from 'react';
import { Board } from '../types';

interface TabsBarProps {
  boards: Board[];
  activeBoard: number;
  onChangeBoard: (boardId: number) => void;
}

const TabsBar: React.FC<TabsBarProps> = ({ boards, activeBoard, onChangeBoard }) => {
  return (
    <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg overflow-x-auto">
      {boards.map((board) => (
        <button
          key={board.id}
          className={`px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
            activeBoard === board.id
              ? 'bg-white text-blue-700 shadow-sm'
              : 'text-gray-700 hover:bg-gray-200'
          }`}
          onClick={() => onChangeBoard(board.id)}
        >
          {board.name}
        </button>
      ))}
    </div>
  );
};

export default TabsBar;