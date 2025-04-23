import { Board } from '../types';

// 로컬 스토리지에서 게시판 데이터 불러오기
export const loadBoardsFromStorage = (): Board[] => {
  const storedBoards = localStorage.getItem('memo-boards');
  if (storedBoards) {
    return JSON.parse(storedBoards);
  }
  return [];
};

// 로컬 스토리지에 게시판 데이터 저장하기
export const saveBoardsToStorage = (boards: Board[]): void => {
  localStorage.setItem('memo-boards', JSON.stringify(boards));
};