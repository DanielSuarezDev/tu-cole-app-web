import { FC, memo } from 'react';

import { PropsIcons } from './types';

const SvgArrowRigth: FC<PropsIcons> = ({ width, height, fill, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || 16}
      height={height || 17}
      fill="none"
      {...props}
    >
      <path
        fill={fill || '#fff'}
        d="M6 14.5a.99.99 0 0 1-.719-.281.964.964 0 0 1 0-1.406L9.563 8.5 5.28 4.219a.964.964 0 0 1 0-1.407.964.964 0 0 1 1.407 0l5 5a.964.964 0 0 1 0 1.407l-5 5A.97.97 0 0 1 6 14.5Z"
      />
    </svg>
  );
};

const MemoSvgArrowRigth = memo(SvgArrowRigth);
export default MemoSvgArrowRigth;
