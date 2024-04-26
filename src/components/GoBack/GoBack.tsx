'use client';
import React from 'react';
import { Typography } from '../Typography/Typography';
import { useRouter } from 'next/navigation';

export const GoBack = ({ margin }: { margin?: string }) => {
  const router = useRouter();
  return (
    <a
      className={`cursor-pointer flex items-center no-underline transition-colors duration-200 ${
        margin || 'm-0'
      }`}
      style={{ width: 'fit-content' }}
      href="#"
      onClick={router.back}
    >
      <Typography type="l3" color="text-error-500" bold otherClasses="pointer">
        {`< Back`}
      </Typography>
    </a>
  );
};
