import { FC } from 'react';

import { ReactComponent as PlusIcon } from '../../assets/icons/Plus.svg';

import { ITicker } from '../../shared/types';

const Ticker: FC<ITicker & { onClick?: (value: string) => void }> = ({
  ticker,
  price,
  change_percent,
  change,
  dividend,
  yield: profit,
  onClick,
}) => {
  return (
    <div className="ticker" onClick={() => onClick && onClick(ticker)}>
      <div className="ticker__item">
        Ticker: <span>{ticker}</span>
      </div>
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
      <div className="ticker__item">
        <PlusIcon />
      </div>
    </div>
  );
};

export default Ticker;
