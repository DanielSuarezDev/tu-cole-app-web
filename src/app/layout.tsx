import type { Metadata } from 'next';

import './globals.css';
import './styles/fonts.css';
import Providers from './Provider';

export const metadata: Metadata = {
  title: 'Ligthouse School',
  description: 'Ligthouse School',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html className='h-full' lang="en">
      <body className="h-full min-h-[800px]">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
