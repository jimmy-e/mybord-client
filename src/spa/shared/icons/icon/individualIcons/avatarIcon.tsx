import * as React from 'react';
import { IndividualIconProps } from 'types/iconTypes';

const AvatarIcon: React.FC<IndividualIconProps> = ({ size }) => (
  <svg height={size} width={size} viewBox="0 0 48 48">
    <g>
      <circle cx="24" cy="24" fill="#d7d8d4" r="23" />
      <path d="M38.2770386,35.2519531L29,31v-7.2608643H19V31 l-9.2770386,4.2519531c-1.5061035,0.6902466-2.7225342,2.5869141-2.7229004,4.2388306C11.2064819,44.1043701,17.2649536,47,24,47 s12.7935181-2.8956299,16.999939-7.5092163C40.9995728,37.8412476,39.7807007,35.9411011,38.2770386,35.2519531z" fill="#0081c3" fillRule="evenodd" />
      <path d="M24,29c-4.4182796,0-8-3.5817204-8-8v-3 c0-4.4182816,3.5817204-8,8-8s8,3.5817184,8,8v3C32,25.4182796,28.4182796,29,24,29z" fill="#00a6ed" fillRule="evenodd" />
    </g>
  </svg>
);

export default AvatarIcon;
