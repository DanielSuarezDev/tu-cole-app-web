import React from 'react';

export const BackHeader = ({ children }: { children: React.ReactNode }) => (
  <header className="bg-black h-12 w-full fixed top-0 z-10">{children}</header>
);

interface WrapperHeaderProps {
  children: React.ReactNode;
  childCount?: number;
}

export const WrapperHeader: React.FC<WrapperHeaderProps> = ({
  children,
  childCount,
}) => {
  let additionalStyles = '';

  if (childCount === 2) {
    // Add specific Tailwind classes for childCount === 2
    additionalStyles = 'childCount-2-specific-styles';
  } else if (childCount === 3) {
    // Add specific Tailwind classes for childCount === 3
    additionalStyles = 'childCount-3-specific-styles';
  }

  return (
    <header
      className={`mt-5 bg-white text-black h-21 w-full px-8 py-6 text-2xl font-semibold border-b border-gray-200 rounded-t-3xl fixed top-0 z-[99999] flex justify-between items-center ${additionalStyles}`}
    >
      {children}
    </header>
  );
};

export const WrapperLogo = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-center gap-6 self-stretch h-full">{children}</div>
);

export const WrapperNavigation = ({
  children,
}: {
  children: React.ReactNode;
}) => (
  <ul className="flex items-center gap-14 self-stretch h-full">{children}</ul>
);

export const WrapperUser = ({ children }: { children: React.ReactNode }) => (
  <div className="w-9 h-9 rounded-md">{children}</div>
);
