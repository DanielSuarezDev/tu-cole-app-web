import { FC, memo } from 'react';

import { PropsIcons } from './types';

const SvgRequired: FC<PropsIcons> = ({ width, height, fill, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={7}
      height={7}
      fill="none"
      {...props}
    >
      <path
        fill="#CC462B"
        d="M6.139 4.906a.425.425 0 0 1-.383.219.401.401 0 0 1-.219-.055l-1.6-.93V6a.44.44 0 0 1-.437.438A.45.45 0 0 1 3.062 6V4.14l-1.626.93a.401.401 0 0 1-.22.055c-.15 0-.3-.068-.368-.219a.426.426 0 0 1 .15-.588l1.613-.943-1.613-.93a.456.456 0 0 1-.164-.601.445.445 0 0 1 .437-.205c.055 0 .11.027.165.054l1.627.93V.75A.44.44 0 0 1 3.5.312a.45.45 0 0 1 .438.438v1.873l1.613-.93c.054-.027.11-.054.164-.054a.414.414 0 0 1 .424.205.456.456 0 0 1-.164.601l-1.6.93 1.613.943a.426.426 0 0 1 .15.588Z"
      />
    </svg>
  );
};

const MemoSvgRequired = memo(SvgRequired);
export default MemoSvgRequired;
