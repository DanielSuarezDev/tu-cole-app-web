import { Header } from '@/components/Header/Header';
import React from 'react';


const Layout = ({
  children,
}: {
  children: React.ReactNode;
}) => {

  return (
    <main>
      <header className='mb-36'>
        <Header />
      </header>

      <div className='p-3'>
        {children}
      </div>
    </main>
  );
}

export default Layout;
