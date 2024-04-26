import { FC, memo } from 'react';

import { PropsIcons } from './types';

const SvgLogo: FC<PropsIcons> = ({ width, height, fill, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || 24}
      height={height || 39}
      fill="none"
      {...props}
    >
      <g clipPath="url(#a)">
        <path
          fill={fill || '#fff'}
          d="M16.97 0C7.554 0-.858 10.804.07 20.868c.876 9.409 5.756 9.924 5.756 9.924l1.73-.683s-3.3-8.384.694-18.307c4.012-9.92 7.666-9.92 9.063-9.584 1.393.347 4.345 6.741-3.303 21.39C7.39 36.26 1.644 37.114 1.644 37.114l3.31 1.882s11.838-6.15 16.016-16.764C25.145 11.634 26.025 0 16.97 0Z"
        />
        <path
          fill="#CE0E2D"
          d="M17.59 39c2.024 0 3.661-1.612 3.661-3.601 0-1.99-1.637-3.605-3.661-3.605-2.025 0-3.676 1.616-3.676 3.605 0 1.99 1.651 3.601 3.676 3.601Z"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill={fill || '#fff'} d="M0 0h24v39H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

const MemoSvgLogo = memo(SvgLogo);
export default MemoSvgLogo;
