import { FC, memo } from 'react';

import { PropsIcons } from './types';

const SvgCheck: FC<PropsIcons> = ({ width, height, fill, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={11}
      height={8}
      fill="none"
      {...props}
    >
      <path
        fill={fill || "#fff"}
        d="M10.706.979a.678.678 0 0 1 0 .99l-5.63 5.63a.678.678 0 0 1-.99 0L1.273 4.782a.678.678 0 0 1 0-.99.678.678 0 0 1 .99 0l2.308 2.31L9.718.979a.678.678 0 0 1 .99 0Z"
      />
    </svg>
  );
};

const MemoSvgCheck = memo(SvgCheck);
export default MemoSvgCheck;
