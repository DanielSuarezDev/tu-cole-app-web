import { FC, memo } from 'react';

import { PropsIcons } from './types';

const SvgFile: FC<PropsIcons> = ({ width, height, fill, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={11}
      height={16}
      fill="none"
      {...props}
    >
      <path
        fill="#9F9F9F"
        d="M.25 2.5C.25 1.543 1.016.75 2 .75h4.375v3.5c0 .492.383.875.875.875h3.5V13c0 .984-.793 1.75-1.75 1.75H2c-.984 0-1.75-.766-1.75-1.75V2.5Zm7 1.75V.75l3.5 3.5h-3.5Z"
      />
    </svg>
  );
};

const MemoSvgFile = memo(SvgFile);
export default MemoSvgFile;
