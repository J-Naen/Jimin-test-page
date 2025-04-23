export interface Memo {
  id: number;
  content: string;
  timestamp: string;
}

export interface Board {
  id: number;
  name: string;
  memos: Memo[];
}