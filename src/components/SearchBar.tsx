import React, { useState, KeyboardEvent } from 'react';
import { Send } from 'lucide-react';

interface SearchBarProps {
  onSubmit: (content: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = () => {
    onSubmit(inputValue);
    setInputValue('');
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <div className="w-full flex items-center justify-center">
      <div className="w-full max-w-2xl relative flex items-center overflow-hidden">
        <input
          type="text"
          className="w-full py-3 px-5 pr-12 text-base rounded-full border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
          placeholder="메모할 내용을 입력하세요..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button
          className="absolute right-1 p-2 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition-colors duration-200 flex items-center justify-center"
          onClick={handleSubmit}
          aria-label="메모 입력"
        >
          <Send size={20} />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;