import { createSlice } from "@reduxjs/toolkit";

export type HistoryItem = {
  id: string;
  search: string;
  year: string;
  type: string;
  date: string;
};

interface UserState {
  historyItems: HistoryItem[];
}

const initialState: UserState = {
  historyItems: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    historyAdded(state, action) {
      state.historyItems.push(action.payload);
    },
    historyDeletedById(state, action) {
      state.historyItems = state.historyItems.filter(
        (item) => item.id !== action.payload,
      );
    },
  },
});

export const { historyAdded, historyDeletedById } = userSlice.actions;

export default userSlice.reducer;
