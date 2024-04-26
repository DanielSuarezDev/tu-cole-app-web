import { FC, memo } from 'react';

import { PropsIcons } from './types';

const SvgArrowLeft: FC<PropsIcons> = ({ width, height, fill, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || 9}
      height={height || 17}
      fill="none"
      {...props}
    >
      <path
        fill={fill || '#fff'}
        d="M7 14.5a.99.99 0 0 1-.719-.281l-5-5a.964.964 0 0 1 0-1.406l5-5a.964.964 0 0 1 1.407 0 .964.964 0 0 1 0 1.406L3.405 8.5l4.281 4.313a.964.964 0 0 1 0 1.406A.97.97 0 0 1 7 14.5Z"
      />
    </svg>
  );
};

const MemoSvgArrowLeft = memo(SvgArrowLeft);
export default MemoSvgArrowLeft;
