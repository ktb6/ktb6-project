import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Providers from '@/components/Providers';
import MetaData from '@/assets/data/metadata.json';
import MenuData from '@/assets/data/menu.json';
import BackgroundDecoration from '@/components/BackgroundDecoration';

const inter = Inter({ subsets: ['latin'] });
const metaData = MetaData;

export const metadata: Metadata = {
  title: metaData.service_name,
  description: metaData.service_description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const metaData = MetaData;
  const menuData = MenuData;

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={(inter.className, 'relative')}>
        <Providers>
          <Header metadata={metaData} menu={menuData} />
          <BackgroundDecoration />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
