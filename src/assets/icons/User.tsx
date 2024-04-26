import { FC, memo } from 'react';

import { PropsIcons } from './types';

const SvgUser: FC<PropsIcons> = ({ width, height, fill, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || 38}
      height={height || 38}
      fill="#292929"
      {...props}
    >
      <path
        // fill={fill || "#292929"}
        d="M19 19c-2.219 0-4-1.781-4-4 0-2.188 1.781-4 4-4 2.188 0 4 1.813 4 4 0 2.219-1.813 4-4 4Zm1.563 1.5c3 0 5.437 2.438 5.437 5.438C26 26.53 25.5 27 24.906 27H13.063A1.054 1.054 0 0 1 12 25.937c0-3 2.406-5.437 5.406-5.437h3.157Z"
      />
    </svg>
  );
};

const MemoSvgUser = memo(SvgUser);
export default MemoSvgUser;
