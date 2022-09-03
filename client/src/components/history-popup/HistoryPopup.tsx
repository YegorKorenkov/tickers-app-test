import { FC } from 'react';
import { ITicker } from '../../shared/types';

import { ReactComponent as PlusIcon } from '../../assets/icons/Plus.svg';

const HistoryPopup: FC<{ tickers: ITicker[]; onClearActiveTicker: (value: string) => void }> = ({
  tickers,
  onClearActiveTicker,
}) => {
  return (
    <div>
      <div className="popup__overlay" onClick={() => onClearActiveTicker('')}></div>
      <div className="popup wrapper">
        <h1>History</h1>
        {tickers.map(({ price, change, change_percent, dividend, yield: profit }) => (
          <div className="ticker" key={dividend}>
            <div className="ticker__item">
              Price: <span>{price}</span>
            </div>
            <div className="ticker__item">
              Change: <span>{change}</span>
            </div>
            <div className="ticker__item">
              Change percent: <span>{change_percent}%</span>
            </div>
            <div className="ticker__item">
              Dividend: <span>{dividend}</span>
            </div>
            <div className="ticker__item">
              Yield: <span>{profit}</span>
            </div>
          </div>
        ))}
        <PlusIcon onClick={() => onClearActiveTicker('')} />
      </div>
    </div>
  );
};

export default HistoryPopup;
