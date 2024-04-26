import React from 'react';

interface LayoutContainerProps {
  children: React.ReactNode;
}

export const LayoutContainer: React.FC<LayoutContainerProps> = ({
  children,
}) => (
  <div className="flex flex-col items-center justify-center h-screen relative">
    <BackgoundStyled />
    <div className="z-10">
      {children}
    </div>
  </div>
);

export const BackgoundStyled: React.FC = () => (
  <div
    className="absolute top-0 left-0 right-0 bottom-0 w-full h-full bg-black bg-opacity-50 -z-10 bg-image-large bg-center bg-cover"
    style={{
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      filter: 'grayscale(100%)',
      backgroundBlendMode: 'luminosity',
      backgroundColor: 'rgba(0, 0, 0, 0.6)',
      backgroundAttachment: 'fixed',
    }}
  ></div>
);
