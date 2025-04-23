import React from 'react';
import { Memo } from '../types';

interface MemoItemProps {
  memo: Memo;
}

const MemoItem: React.FC<MemoItemProps> = ({ memo }) => {
  // 날짜 포맷팅 함수
  const formatDate = (isoString: string) => {
    const date = new Date(isoString);
    
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, '0');
    
    return `${year}년 ${month}월 ${day}일 ${hours}시 ${minutes}분`;
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm hover:shadow-md transition-shadow duration-200">
      <div className="flex justify-between items-start">
        <p className="text-gray-800 whitespace-pre-wrap break-words">{memo.content}</p>
      </div>
      <div className="mt-3 text-xs text-gray-500">
        {formatDate(memo.timestamp)}
      </div>
    </div>
  );
};

export default MemoItem;