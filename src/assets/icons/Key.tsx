import { FC, memo } from 'react';

import { PropsIcons } from './types';

const SvgKey: FC<PropsIcons> = ({ width, height, fill, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || 16}
      height={height || 16}
      fill="none"
      {...props}
    >
      <path
        fill={fill || "#fff"}
        d="M8.813 10.75 7.75 11.781a.622.622 0 0 1-.5.219H6v1.25a.74.74 0 0 1-.75.75H4v1.25a.74.74 0 0 1-.75.75H.75a.722.722 0 0 1-.75-.75v-2.5c0-.188.063-.375.219-.531L5.25 7.188C5.062 6.655 5 6.093 5 5.5 5 2.469 7.438 0 10.5 0 13.531 0 16 2.469 16 5.5c0 3.063-2.469 5.5-5.5 5.5-.594 0-1.156-.063-1.688-.25ZM11.75 5.5c.688 0 1.25-.531 1.25-1.25C13 3.562 12.437 3 11.75 3c-.719 0-1.25.563-1.25 1.25 0 .719.531 1.25 1.25 1.25Z"
      />
    </svg>
  );
};

const MemoSvgKey = memo(SvgKey);
export default MemoSvgKey;
