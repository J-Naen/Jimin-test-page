import React, { useState } from 'react';
import TabsBar from './components/TabsBar';
import SearchBar from './components/SearchBar';
import MemoList from './components/MemoList';
import { Board, Memo } from './types';

const initialBoards: Board[] = [
  { id: 1, name: '일반 메모', memos: [] },
  { id: 2, name: '할 일', memos: [] },
  { id: 3, name: '아이디어', memos: [] },
];

function App() {
  const [boards, setBoards] = useState<Board[]>(
    JSON.parse(localStorage.getItem('memo-boards') || JSON.stringify(initialBoards))
  );
  const [activeBoard, setActiveBoard] = useState<number>(1);

  // 현재 활성화된 게시판 가져오기
  const currentBoard = boards.find(board => board.id === activeBoard) || boards[0];

  // 메모 추가 함수
  const addMemo = (content: string) => {
    if (!content.trim()) return;

    const newMemo: Memo = {
      id: Date.now(),
      content,
      timestamp: new Date().toISOString()
    };

    const updatedBoards = boards.map(board => {
      if (board.id === activeBoard) {
        return {
          ...board,
          memos: [newMemo, ...board.memos]
        };
      }
      return board;
    });

    setBoards(updatedBoards);
    localStorage.setItem('memo-boards', JSON.stringify(updatedBoards));
  };

  // 게시판 변경 함수
  const changeBoard = (boardId: number) => {
    setActiveBoard(boardId);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <main className="flex-grow flex flex-col items-center px-4 py-8">
        <div className="w-full max-w-3xl mx-auto">
          <h1 className="text-2xl font-bold text-gray-800 text-center mb-2">
            메모 애플리케이션
          </h1>
          
          <TabsBar 
            boards={boards} 
            activeBoard={activeBoard} 
            onChangeBoard={changeBoard} 
          />
          
          <div className="mt-8 mb-6">
            <SearchBar onSubmit={addMemo} />
          </div>
          
          <div className="bg-gray-50 rounded-lg shadow-sm p-4">
            <h2 className="text-lg font-medium text-gray-700 mb-4">
              {currentBoard.name} ({currentBoard.memos.length})
            </h2>
            <MemoList memos={currentBoard.memos} />
          </div>
        </div>
      </main>
      <footer className="py-4 text-center text-gray-500 text-sm">
        © 2025 메모 애플리케이션
      </footer>
    </div>
  );
}

export default App;