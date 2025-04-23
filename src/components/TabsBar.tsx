import React, { useState } from 'react';
import { Board } from '../types';
import { Pencil } from 'lucide-react';

interface TabsBarProps {
  boards: Board[];
  activeBoard: number;
  onChangeBoard: (boardId: number) => void;
  onUpdateBoardName: (boardId: number, newName: string) => void;
}

const TabsBar: React.FC<TabsBarProps> = ({ boards, activeBoard, onChangeBoard, onUpdateBoardName }) => {
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editingName, setEditingName] = useState('');

  const startEditing = (board: Board) => {
    setEditingId(board.id);
    setEditingName(board.name);
  };

  const handleSubmit = (boardId: number) => {
    if (editingName.trim()) {
      onUpdateBoardName(boardId, editingName.trim());
    }
    setEditingId(null);
  };

  const handleKeyDown = (e: React.KeyboardEvent, boardId: number) => {
    if (e.key === 'Enter') {
      handleSubmit(boardId);
    } else if (e.key === 'Escape') {
      setEditingId(null);
    }
  };

  return (
    <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg overflow-x-auto">
      {boards.map((board) => (
        <div key={board.id} className="relative flex items-center">
          {editingId === board.id ? (
            <input
              type="text"
              value={editingName}
              onChange={(e) => setEditingName(e.target.value)}
              onBlur={() => handleSubmit(board.id)}
              onKeyDown={(e) => handleKeyDown(e, board.id)}
              className="px-4 py-2 text-sm font-medium rounded-md bg-white border-2 border-blue-500 focus:outline-none"
              autoFocus
            />
          ) : (
            <div className="flex items-center">
              <button
                className={`px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
                  activeBoard === board.id
                    ? 'bg-white text-blue-700 shadow-sm'
                    : 'text-gray-700 hover:bg-gray-200'
                }`}
                onClick={() => onChangeBoard(board.id)}
              >
                {board.name}
              </button>
              <button
                onClick={() => startEditing(board)}
                className="ml-1 p-1 text-gray-500 hover:text-blue-600 rounded-full hover:bg-gray-200 transition-colors duration-200"
              >
                <Pencil size={14} />
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default TabsBar;