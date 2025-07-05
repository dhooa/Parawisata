import type { Metadata } from 'next';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

export function generateMetadata({params: {locale}}: {params: {locale: string}}): Metadata {
  const t = require(`../../../messages/${locale}.json`);
  return {
    title: t.Navigation.about,
    description: t.AboutPage.content.p1,
  };
}

const AboutPage = () => {
  const t = useTranslations('AboutPage');
  const whyUsPoints: string[] = t.raw('content.whyUsPoints');

  return (
    <>
      <header className="bg-dark py-16 text-center text-white">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold">{t('header.title')}</h1>
        </div>
      </header>
      <section className="container mx-auto px-6 py-16">
        <div className="flex flex-col items-center gap-12 lg:flex-row">
          <div className="w-full lg:w-3/5">
            <h2 className="mb-4 text-3xl font-bold">{t('content.title')}</h2>
            <p className="mb-4 text-gray-700">{t('content.p1')}</p>
            <p className="mb-6 text-gray-700">{t('content.p2')}</p>
            <h3 className="mb-4 text-2xl font-bold text-brand">{t('content.whyUsTitle')}</h3>
            <ul className="space-y-3">
              {whyUsPoints.map((point, index) => (
                <li key={index} className="flex items-start"><span className="mr-2 mt-1 text-brand">✓</span> {point}</li>
              ))}
            </ul>
          </div>
          <div className="w-full lg:w-2/5">
            <div className="relative h-96 w-full overflow-hidden rounded-lg shadow-2xl">
              <Image src="/images/tentang-solsel.jpg" alt={t('content.title')} layout="fill" objectFit="cover" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
