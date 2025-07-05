import type { Metadata } from 'next';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

// Data bisa juga diambil dari API
const destinationsData = [
  { id: 'srg', imgSrc: '/images/saribu-rumah-gadang-full.jpg' },
  { id: 'liki', imgSrc: '/images/kebun-teh-liki-full.jpg' },
  { id: 'goa', imgSrc: '/images/goa-batu-kapal-full.jpg' },
];


const DestinationsPage = () => {
  const t = useTranslations('DestinationsPage');

  return (
    <>
      <header className="bg-dark py-16 text-center text-white">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold">{t('header.title')}</h1>
          <p className="mt-2 text-lg">{t('header.subtitle')}</p>
        </div>
      </header>
      <section className="container mx-auto px-6 py-16">
        <div className="space-y-12">
          {destinationsData.map((dest, index) => (
            <div key={dest.id} className={`flex flex-col gap-8 overflow-hidden rounded-lg bg-white shadow-lg md:flex-row ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
              <div className="relative h-64 w-full md:h-auto md:w-2/5">
                <Image src={dest.imgSrc} alt={t(`${dest.id}.title`)} layout="fill" objectFit="cover" />
              </div>
              <div className="flex w-full flex-col p-8 md:w-3/5">
                <h3 className="mb-3 text-3xl font-bold text-brand">{t(`${dest.id}.title`)}</h3>
                <p className="mb-4 flex-grow text-gray-700">{t(`${dest.id}.description`)}</p>
                <span className="font-semibold text-gray-600">Lokasi: {t(`${dest.id}.location`)}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default DestinationsPage;
