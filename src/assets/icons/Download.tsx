import { FC, memo } from 'react';

import { PropsIcons } from './types';

const SvgDownload: FC<PropsIcons> = ({ width, height, fill, ...props }) => {
  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width || 24}
    height={height || 24}
    fill="none"
    {...props}
  >
    <path
      stroke={fill || "#000"}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 16v1a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-1m-4-4-4 4m0 0-4-4m4 4V4"
    />
  </svg>
  );
};

const MemoSvgDownload = memo(SvgDownload);
export default MemoSvgDownload;
