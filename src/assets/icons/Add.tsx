import { FC, memo } from 'react';

import { PropsIcons } from './types';

const SvgAdd: FC<PropsIcons> = ({ width, height, fill, ...props }) => {
  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width || 14}
    height={height || 14}
    fill="none"
    {...props}
  >
    <path
      fill={fill || "#fff"}
      d="M13.5 7c0 .563-.469 1.031-1 1.031H8v4.5c0 .531-.469.969-1 .969a.98.98 0 0 1-1-.969v-4.5H1.5c-.563 0-1-.469-1-1.031a.98.98 0 0 1 1-.969H6v-4.5C6 .97 6.438.5 7 .5c.531 0 1 .469 1 1.031v4.5h4.5c.531-.031 1 .438 1 .969Z"
    />
  </svg>
  );
};

const MemoSvgAdd = memo(SvgAdd);
export default MemoSvgAdd;
