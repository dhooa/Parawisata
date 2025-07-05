import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import '../globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { NextIntlClientProvider, useMessages } from 'next-intl';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
});

export const metadata: Metadata = {
  title: {
    template: '%s | Pesona Solok Selatan',
    default: 'Pesona Solok Selatan - Surga Tersembunyi Ranah Minang',
  },
  description: 'Jelajahi Keindahan Alam, Kekayaan Budaya, dan Petualangan Tak Terlupakan di Solok Selatan, Sumatera Barat.',
};

interface RootLayoutProps {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<RootLayoutProps>) {
  const messages = useMessages();

  return (
    <html lang={locale}>
      <body className={poppins.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-grow pt-[70px]">{children}</main>
            <Footer />
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
