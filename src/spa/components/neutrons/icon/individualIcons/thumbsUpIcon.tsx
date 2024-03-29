import * as React from 'react';

interface Props {
  size: number;
}

const ThumbsUpIcon: React.FC<Props> = ({ size }) => (
  <svg height={size} width={size} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
    <title>like</title>
    <g fill="#565e5f" stroke="#565e5f" strokeLinecap="round" strokeWidth="2">
      <path d="M21,60H50.664a6,6,0,0,0,5.857-4.7l5.334-24A6,6,0,0,0,56,24H36V12c0-9-8-9-8-9a60.277,60.277,0,0,1-3,15c-2.021,5.417-8.636,9.546-10,15" fill="none" stroke="#565e5f"/>
      <rect height="33" width="13" fill="none" x="2" y="27" />
    </g>
  </svg>
);

export default ThumbsUpIcon;
