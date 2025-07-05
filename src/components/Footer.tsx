import { useTranslations } from 'next-intl';

export const Footer = () => {
  const t = useTranslations('Footer');
  return (
    <footer className="w-full bg-dark py-5">
      <div className="container mx-auto text-center text-gray-400">
        <p>© 2025 Pesona Solok Selatan. {t('madeWith')}</p>
      </div>
    </footer>
  );
};
