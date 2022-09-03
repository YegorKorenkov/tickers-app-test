import { tickerApi } from '../api/api';
import { getSocket } from '../config/socket.config';
import { ITicker } from '../shared/types';

export const tickerService = tickerApi.injectEndpoints({
  endpoints: (builder) => ({
    getTickers: builder.query<ITicker[][], void>({
      queryFn: () => ({ data: [] }),
      async onCacheEntryAdded(_arg, { cacheEntryRemoved, updateCachedData }) {
        const socket = getSocket();

        socket.emit('start');

        socket.on('ticker', (data: ITicker[]) => {
          updateCachedData((draft) => {
            // Object.assign(draft, data);
            draft.push(data);

            if (draft.length > 5) {
              draft.shift();
            }
          });
        });

        await cacheEntryRemoved;
      },
    }),
  }),
});

export const { useGetTickersQuery } = tickerService;
