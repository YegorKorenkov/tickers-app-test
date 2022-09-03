import { createDraftSafeSelector } from '@reduxjs/toolkit';
import { sortTypes } from '../../constants';
import { ITicker } from '../../shared/types';
import { RootState } from '../store';

const baseState = (state: RootState) => state;

export const selectAll = createDraftSafeSelector(baseState, (state) => {
  const queryData = state.ticker.queries;
  const tickers = Object.values(queryData)[0]?.data as ITicker[][];
  const sortTerm = state.tikersSorting.sortTerm;

  if (tickers && tickers.length) {
    const arrayForSort = [...tickers[tickers.length - 1]];
    if (sortTerm === sortTypes.ticker) {
      return arrayForSort.sort((a, b) => (a.ticker > b.ticker ? 1 : -1));
    }
    if (sortTerm === sortTypes.price) {
      return arrayForSort.sort((a, b) => (a.price < b.price ? 1 : -1));
    }
    if (sortTerm === sortTypes.dividend) {
      return arrayForSort.sort((a, b) => (a.dividend < b.dividend ? 1 : -1));
    }
    return arrayForSort;
  }
});

export const selectSort = createDraftSafeSelector(
  baseState,
  (state) => state.tikersSorting.sortTerm,
);
