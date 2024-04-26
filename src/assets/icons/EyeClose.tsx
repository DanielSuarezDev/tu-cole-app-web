import { FC, memo } from 'react';

import { PropsIcons } from './types';

const SvgEyeClose: FC<PropsIcons> = ({ width, height, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || 22}
      height={height || 17}
      fill="none"
      {...props}
    >
      <path
        fill="#7A7A7A"
        d="M5.688 3.406C7.093 2.344 8.844 1.5 11 1.5c2.5 0 4.531 1.156 6 2.531C18.469 5.375 19.438 7 19.906 8.125c.094.25.094.531 0 .781-.406 1-1.25 2.438-2.5 3.688l3.282 2.594c.343.25.406.718.125 1.03-.25.345-.72.407-1.032.126l-18.5-14.5c-.343-.25-.406-.719-.125-1.032.25-.343.719-.406 1.032-.125l3.5 2.72Zm2.28 1.781 2.813 2.22c.125-.282.219-.563.219-.907 0-.344-.125-.688-.281-.969.094 0 .187-.031.281-.031a3 3 0 0 1 3 3c0 .438-.094.844-.281 1.219l1.219.937A4.517 4.517 0 0 0 15.5 8.5C15.5 6.031 13.469 4 11 4c-1.188 0-2.25.469-3.031 1.188ZM11 15.5c-2.531 0-4.563-1.125-6.031-2.5C3.5 11.625 2.53 10 2.062 8.906a1.12 1.12 0 0 1 0-.781 12.48 12.48 0 0 1 1.532-2.563L6.53 7.876c-.031.219-.031.438-.031.625 0 2.5 2 4.5 4.5 4.5.563 0 1.125-.094 1.656-.313l2.281 1.813a8.18 8.18 0 0 1-3.937 1Z"
      />
    </svg>
  );
};

const MemoSvgEyeClose = memo(SvgEyeClose);
export default MemoSvgEyeClose;