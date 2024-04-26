import { FC, memo } from 'react';

import { PropsIcons } from './types';

const SvgEyePreview: FC<PropsIcons> = ({ width, height, ...props }) => {
  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width={19}
    height={16}
    fill="none"
    {...props}
  >
    <path
      fill="#3D3D3D"
      d="M9.719 5.031C9.813 5.031 9.906 5 10 5a3 3 0 0 1 0 6 2.98 2.98 0 0 1-3-3v-.25c.281.156.625.25 1 .25 1.094 0 2-.875 2-2 0-.344-.125-.688-.281-.969ZM16 3.531c1.469 1.344 2.438 2.969 2.906 4.094.094.25.094.531 0 .781C18.438 9.5 17.47 11.125 16 12.5c-1.469 1.375-3.5 2.5-6 2.5-2.531 0-4.563-1.125-6.031-2.5-1.469-1.375-2.438-3-2.906-4.094a1.12 1.12 0 0 1 0-.781C1.53 6.5 2.5 4.875 3.969 3.531 5.438 2.156 7.469 1 10 1c2.5 0 4.531 1.156 6 2.531ZM10 3.5C7.5 3.5 5.5 5.531 5.5 8c0 2.5 2 4.5 4.5 4.5 2.469 0 4.5-2 4.5-4.5 0-2.469-2.031-4.5-4.5-4.5Z"
    />
  </svg>
  );
};

const MemoSvgEyePreview = memo(SvgEyePreview);
export default MemoSvgEyePreview;
