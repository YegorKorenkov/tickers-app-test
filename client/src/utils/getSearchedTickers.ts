import { ITicker } from '../shared/types';

export const getSearchedTickers = (tickers: ITicker[], searchValue: string) => {
  return tickers.filter((ticker) =>
    ticker.ticker.toLowerCase().includes(searchValue.toLowerCase()),
  );
};
