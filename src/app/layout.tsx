import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';
import Footer from '@/components/Footer';
import Providers from '@/components/Providers';
import MetaData from '@/assets/data/metadata.json';

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
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <div>{children}</div>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
