const LeftSortBox = [
  { id: 1, name: '전체' },
  { id: 2, name: '안심' },
  { id: 3, name: '채끝' },
  { id: 4, name: '갈비' },
  { id: 5, name: '등심' },
  { id: 6, name: '앞다리' },
  { id: 7, name: '설도' },
  { id: 8, name: '양지' },
];

export default LeftSortBox;

import React from 'react';

export default function Buttons({ handleClick }) {
  return (
    <div className="categoryInner">
      <button data-id="0" onClick={handleClick}>
        1
      </button>
      <button data-id="1" onClick={handleClick}>
        2
      </button>
      <button data-id="2" onClick={handleClick}>
        3
      </button>
      <button data-id="3" onClick={handleClick}>
        4
      </button>
      <button data-id="4" onClick={handleClick}>
        5
      </button>
    </div>
  );
}
