import { ITicker } from '../shared/types';

export const getActiveTickets = (tickers: ITicker[][], activeTicker: string): ITicker[] => {
  return tickers.reduce((prev, next) => {
    next.forEach((ticker) => {
      if (ticker.ticker === activeTicker) prev.push(ticker);
    });
    return prev;
  }, [] as ITicker[]);
};
