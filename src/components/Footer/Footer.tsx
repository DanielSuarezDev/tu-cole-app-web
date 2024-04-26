import React from 'react';

import LogoFullSvg from '../../../../../assets/icons/LogoFull';

const getChildStyles = (count?: number): string => {
  const styles: { [key: number]: string } = {
    2: 'childCount-2-specific-styles',
    3: 'childCount-3-specific-styles',
  };

  return count ? styles[count] || '' : '';
};

const WrapperFooter = ({
  children,
  childCount,
}: {
  children: React.ReactNode;
  childCount?: number;
}) => {
  const baseStyles =
    'bg-white text-black w-full text-2xl font-semibold border-t border-gray-200 rounded-b-2xl p-6 flex items-center';

  const childStyles = getChildStyles(childCount);

  return <div className={`${baseStyles} ${childStyles}`}>{children}</div>;
};

export const Footer = () => {
  return (
    <footer className="bg-black w-full pb-12 flex justify-center items-start ">
      <WrapperFooter>
        <LogoFullSvg />
      </WrapperFooter>
    </footer>
  );
};
