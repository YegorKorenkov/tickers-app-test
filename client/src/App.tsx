import { FC, FormEvent, useState } from 'react';
import { useSelector } from 'react-redux';
import { useGetTickersQuery } from './services/ticker.service';
import { useAppDispatch } from './hooks/useAppDispatch';

import { selectAll, selectSort } from './store/tickers/tickers.selector';
import { setSortTerm } from './store/tickers/tickers.slice';

import { getActiveTickets } from './utils/getActiveTickers';
import { getSearchedTickers } from './utils/getSearchedTickers';

import HistoryPopup from './components/history-popup/HistoryPopup';
import SearchField from './components/search-field/SearchField';
import SortDropList from './components/sort-drop-list/SortDropList';
import Ticker from './components/Ticker/Ticker';

const App: FC = () => {
  const { data: tickers } = useGetTickersQuery();

  const sort = useSelector(selectSort);
  console.log(sort);

  const dispatch = useAppDispatch();

  const sortedTickers = useSelector(selectAll);

  const [activeTicker, setActiveTicker] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const onSubmitSearch = (e: FormEvent<HTMLFormElement>, searchTerm: string) => {
    e.preventDefault();
    setSearchTerm(searchTerm);
  };

  return (
    <>
      <div className="wrapper">
        <div className="term-block">
          <SearchField onSubmitSearch={onSubmitSearch} />
          <SortDropList
            onDispatchSortTerm={(sortType: string) => dispatch(setSortTerm(sortType))}
          />
        </div>

        {sortedTickers && sortedTickers.length
          ? getSearchedTickers(sortedTickers, searchTerm).map((ticker) => (
              <Ticker
                key={ticker.ticker + ticker.price}
                onClick={(value: string) => setActiveTicker(value)}
                {...ticker}
              />
            ))
          : null}
      </div>

      {tickers && activeTicker && (
        <HistoryPopup
          onClearActiveTicker={() => setActiveTicker('')}
          tickers={getActiveTickets(tickers, activeTicker)}
        />
      )}
    </>
  );
};

export default App;
