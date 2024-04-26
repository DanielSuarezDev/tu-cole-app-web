import React, { FC } from 'react';

interface DividerProps {
  orientation?: 'horizontal' | 'vertical';
  styles?: string;
  className?: string;
}

export const Divider: FC<DividerProps> = ({
  orientation = 'horizontal',
  styles,
  className = '',
}) => {
  const baseStyles = 'border-grey-100';
  const orientationStyles =
    orientation === 'horizontal' ? 'border-t w-full' : 'border-l-2 h-[34px]';

  const combinedStyles = `${baseStyles} ${orientationStyles} ${styles || ''}`;

  return <hr className={combinedStyles + ' ' + className} />;
};
