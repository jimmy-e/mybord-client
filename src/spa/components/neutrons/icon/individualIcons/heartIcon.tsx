import * as React from 'react';
import * as colors from 'styles/_colors.less';
import { IndividualIconProps } from 'types/iconTypes';

const HeartIcon: React.FC<IndividualIconProps> = ({
  color,
  fill,
  size,
  strokeWidth,
}) => (
  <svg
    fill={fill ? colors[fill] : 'none'}
    height={size}
    viewBox="0 0 24 24"
    width={size}
  >
    <path
      d="M20.3999 4.62C19.3399 3.54 17.9499 3 16.5399 3C15.1499 3 13.7499 3.54 12.6799 4.62L11.9999 5.31L11.3199 4.62C10.2499 3.54 8.84994 3 7.44994 3C6.04994 3 4.65994 3.54 3.59994 4.62C1.46994 6.8 1.46994 10.3 3.59994 12.46L12.0099 21L19.7199 13.16L20.3999 12.47C22.5299 10.3 22.5299 6.8 20.3999 4.62Z"
      fill={fill ? colors[fill] : 'none'}
      stroke={colors[color]}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      strokeWidth={strokeWidth}
    />
  </svg>
);

export default HeartIcon;
