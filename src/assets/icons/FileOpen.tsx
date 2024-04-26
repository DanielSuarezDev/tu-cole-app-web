import { FC, memo } from 'react';

import { PropsIcons } from './types';

const SvgFileOpen: FC<PropsIcons> = ({ width, height, fill, ...props }) => {
  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16 || width}
    height={16 || height}
    data-name="Layer 1"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M23.596 11.827A2.04 2.04 0 0 0 21.944 11h-.943V7.5c0-2.481-2.019-4.5-4.5-4.5h-6.056c-.232 0-.464-.055-.671-.158L6.619 1.264A2.518 2.518 0 0 0 5.501 1h-2A3.504 3.504 0 0 0 0 4.5v14C0 20.981 2.019 23 4.5 23h13.558c2.003 0 3.735-1.289 4.317-3.229l1.537-6.138a2.026 2.026 0 0 0-.316-1.807ZM1 18.5v-14C1 3.122 2.121 2 3.5 2h2c.232 0 .464.055.671.158l3.155 1.578c.345.172.731.264 1.118.264H16.5C18.43 4 20 5.57 20 7.5V11H8.115c-1.49 0-2.818.938-3.311 2.354l-2.433 7.924a3.495 3.495 0 0 1-1.372-2.777Zm21.948-5.132-1.537 6.138A3.48 3.48 0 0 1 18.057 22H4.5c-.435 0-.851-.08-1.234-.225l2.489-8.111a2.495 2.495 0 0 1 2.36-1.665h13.828a1.044 1.044 0 0 1 1.005 1.368Z" />
  </svg>
  );
};

const MemoSvgFileOpen = memo(SvgFileOpen);
export default MemoSvgFileOpen;
