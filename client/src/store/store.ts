import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { tickerService } from '../services/ticker.service';
import tickerSortingSlice from './tickers/tickers.slice';

const rootReducer = combineReducers({
  [tickerService.reducerPath]: tickerService.reducer,
  tikersSorting: tickerSortingSlice,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(tickerService.middleware),
});

export type AppDispatchType = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;
