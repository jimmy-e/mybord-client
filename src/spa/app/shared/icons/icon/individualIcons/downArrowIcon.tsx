import * as React from 'react';

interface Props {
  size: number;
}

const DownArrowIcon: React.FC<Props> = ({ size }) => (
  <svg height={size} width={size} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
    <title>nav down</title>
    <g fill="#565e5f">
      <path d="M62.707,20.293l-8-8c-0.391-0.391-1.023-0.391-1.414,0L32,33.586L10.707,12.293 c-0.391-0.391-1.023-0.391-1.414,0l-8,8c-0.391,0.391-0.391,1.023,0,1.414l30,30C31.488,51.902,31.744,52,32,52 s0.512-0.098,0.707-0.293l30-30C63.098,21.316,63.098,20.684,62.707,20.293z" fill="#565e5f" />
    </g>
  </svg>
);

export default DownArrowIcon;
