import React, { FC } from 'react';
import { BackgoundStyled, LayoutContainer } from './styles';

interface Props {
  children: React.ReactNode;
}

const Layout: FC<Props> = ({ children }) => (
  <LayoutContainer>
    <BackgoundStyled />
    {children}
  </LayoutContainer>
);

export default Layout;
