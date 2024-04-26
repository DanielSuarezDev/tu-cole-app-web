import { FC, memo } from 'react';

import { PropsIcons } from './types';

const SvgSave: FC<PropsIcons> = ({ width, height, fill, ...props }) => {
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
      d="M13.531 3.063c.25.25.469.718.469 1.062V12c0 1.125-.906 2-2 2H2c-1.125 0-2-.875-2-2V2C0 .906.875 0 2 0h7.875c.344 0 .813.219 1.031.438l2.625 2.624ZM7 12c1.094 0 2-.875 2-2 0-1.094-.906-2-2-2-1.125 0-2 .906-2 2 0 1.125.875 2 2 2Zm3-6.5v-3c0-.25-.25-.5-.5-.5h-7c-.281 0-.5.25-.5.5v3c0 .281.219.5.5.5h7c.25 0 .5-.219.5-.5Z"
    />
  </svg>
  );
};

const MemoSvgSave = memo(SvgSave);
export default MemoSvgSave;
