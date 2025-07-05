'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Loader } from './Loader';

export const ClientLoader = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    // Sembunyikan loader setelah mount awal
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800); // Durasi animasi

    return () => clearTimeout(timer);
  }, []); // Hanya dijalankan sekali saat komponen mount

  // Jika Anda ingin loader muncul di setiap navigasi halaman
  // useEffect(() => {
  //   setLoading(true);
  //   const timer = setTimeout(() => setLoading(false), 800);
  //   return () => clearTimeout(timer);
  // }, [pathname]);

  return (
    <>
      {loading && <Loader />}
      {children}
    </>
  );
};
