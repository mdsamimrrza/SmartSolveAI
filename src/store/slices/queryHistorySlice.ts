import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface QueryItem {
  id: string;
  query: string;
  response: string;
  timestamp: number;
}

interface QueryHistoryState {
  queries: QueryItem[];
}

const initialState: QueryHistoryState = {
  queries: [],
};

const queryHistorySlice = createSlice({
  name: 'queryHistory',
  initialState,
  reducers: {
    addQuery: (state: QueryHistoryState, action: PayloadAction<QueryItem>) => {
      state.queries.unshift(action.payload);
    },
    clearHistory: (state: QueryHistoryState) => {
      state.queries = [];
    },
  },
});

export const { addQuery, clearHistory } = queryHistorySlice.actions;
export default queryHistorySlice.reducer; 