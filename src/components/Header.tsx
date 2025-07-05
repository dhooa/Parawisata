'use client'; 

import Link from 'next-intl/link';
import { usePathname } from 'next-intl/client';
import { useTranslations } from 'next-intl';
import { LanguageSwitcher } from './LanguageSwitcher';

export const Header = () => {
  const pathname = usePathname();
  const t = useTranslations('Navigation');

  const navLinks = [
    { href: '/', label: t('home') },
    { href: '/destinasi', label: t('destinations') },
    { href: '/tentang', label: t('about') },
    { href: '/kontak', label: t('contact') },
  ];

  return (
    <header className="fixed top-0 left-0 z-40 w-full bg-dark/80 backdrop-blur-sm">
      <nav className="container mx-auto flex h-[70px] items-center justify-between px-6">
        <Link href="/" className="text-2xl font-bold text-white">
          Solok Selatan
        </Link>
        <div className="flex items-center space-x-4 md:space-x-8">
          <ul className="hidden items-center space-x-8 md:flex">
            {navLinks.map((link) => {
              const isActive = link.href === '/' ? pathname === '/' : pathname.startsWith(link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`relative py-1 text-white transition-colors duration-300 hover:text-brand ${
                      isActive ? 'text-brand font-semibold' : ''
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-[-5px] left-0 h-0.5 w-full bg-brand"></span>
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
          <LanguageSwitcher />
        </div>
      </nav>
    </header>
  );
};
