import { FC, memo } from 'react';

import { PropsIcons } from './types';

const SvgEllipsis: FC<PropsIcons> = ({ width, height, fill, ...props }) => {
  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width || 44}
    height={height || 44}
    fill="none"
    {...props}
  >
    <path
      fill={fill || "#666"}
      d="M18.75 22c0 .969-.813 1.75-1.75 1.75-.969 0-1.75-.781-1.75-1.75 0-.938.781-1.75 1.75-1.75.938 0 1.75.813 1.75 1.75Zm5 0c0 .969-.813 1.75-1.75 1.75-.969 0-1.75-.781-1.75-1.75 0-.938.781-1.75 1.75-1.75.938 0 1.75.813 1.75 1.75Zm1.5 0c0-.938.781-1.75 1.75-1.75.938 0 1.75.813 1.75 1.75 0 .969-.813 1.75-1.75 1.75-.969 0-1.75-.781-1.75-1.75Z"
    />
  </svg>
)
};

const MemoSvgEllipsis = memo(SvgEllipsis);
export default MemoSvgEllipsis;
