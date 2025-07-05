'use client';

import { useLocale, useTranslations } from 'next-intl';
// PERBAIKAN FINAL: Gunakan named import { ... } untuk semua
import { usePathname, useRouter } from 'next-intl/navigation';
import { useTransition } from 'react';

export const LanguageSwitcher = () => {
  const t = useTranslations('LanguageSwitcher');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const handleLanguageChange = (nextLocale: string) => {
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  };

  return (
    <div className="relative">
      <select
        defaultValue={locale}
        onChange={(e) => handleLanguageChange(e.target.value)}
        disabled={isPending}
        className="cursor-pointer appearance-none rounded bg-dark-light px-3 py-1 text-white text-sm"
      >
        <option value="id">{t('id')}</option>
        <option value="en">{t('en')}</option>
      </select>
    </div>
  );
};
