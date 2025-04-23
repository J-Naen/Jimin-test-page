import React from 'react';
import MemoItem from './MemoItem';
import { Memo } from '../types';

interface MemoListProps {
  memos: Memo[];
}

const MemoList: React.FC<MemoListProps> = ({ memos }) => {
  if (memos.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        아직 메모가 없습니다. 새 메모를 입력해 보세요.
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {memos.map((memo) => (
        <MemoItem key={memo.id} memo={memo} />
      ))}
    </div>
  );
};

export default MemoList;