import { FC, useRef, useState } from 'react';

import { ReactComponent as ArrowIcon } from '../../assets/icons/Chevron.svg';
import { ReactComponent as PlusIcon } from '../../assets/icons/Plus.svg';

import { sortTypes } from '../../constants';
import useOutsideClick from '../../hooks/useOutsideClick';

interface IProps {
  onDispatchSortTerm: (sortTerm: string) => void;
}

const SortDropList: FC<IProps> = ({ onDispatchSortTerm }) => {
  const [type, setType] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  const ref = useRef(null);

  const onSetType = (sortType: string) => {
    setType(sortType);
    setIsVisible(false);
    onDispatchSortTerm(sortType);
  };

  useOutsideClick(ref, () => setIsVisible(false));

  return (
    <>
      <div className="drop-list" ref={ref}>
        <div className="drop-list__label" onClick={() => setIsVisible(!isVisible)}>
          <span>
            Sort by: <span>{type}</span>
          </span>
          <ArrowIcon className={isVisible ? 'rotated' : ''} />
        </div>
        {isVisible ? (
          <div className="drop-list__list">
            {Object.values(sortTypes).map((type) => (
              <div className="drop-list__list__item" key={type} onClick={() => onSetType(type)}>
                <span>{type}</span>
              </div>
            ))}
          </div>
        ) : null}
      </div>
      <PlusIcon className="clear" onClick={() => onSetType('')} />
    </>
  );
};

export default SortDropList;
