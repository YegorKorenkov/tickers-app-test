import { createSlice } from '@reduxjs/toolkit';

const tickersSortingSlice = createSlice({
  name: 'tickersSorting',
  initialState: {
    sortTerm: '',
  },
  reducers: {
    setSortTerm(state, { payload }) {
      state.sortTerm = payload;
    },
  },
});

export const { setSortTerm } = tickersSortingSlice.actions;

export default tickersSortingSlice.reducer;
