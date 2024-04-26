import { FC, memo } from 'react';

import { PropsIcons } from './types';

const SvgArrowDown: FC<PropsIcons> = ({ width, height, fill, className, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={10}
      height={14}
      fill="none"
      className={`fill-current ${className}`}
      {...props}
    >
      <path
        stroke={fill || "#717070"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m9 9-4 4m0 0L1 9m4 4V1"
      />
    </svg>
  );
};

const MemoSvgArrowDown = memo(SvgArrowDown);
export default MemoSvgArrowDown;
