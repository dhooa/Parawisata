import { DestinationCard } from '@/components/DestinationCard';
import { PackageCard } from '@/components/PackageCard';
import Link from 'next/link'; // PERBAIKAN: Kembali ke 'next/link'
import { useTranslations } from 'next-intl';

export default function HomePage() {
  const t = useTranslations('HomePage');

  const popularDestinations = [
    { id: 'srg', imgSrc: '/images/saribu-rumah-gadang.jpg' },
    { id: 'liki', imgSrc: '/images/kebun-teh-liki.jpg' },
    { id: 'goa', imgSrc: '/images/goa-batu-kapal.jpg' },
    { id: 'hwb', imgSrc: '/images/hot-water-boom.jpg' },
  ];
  
  const tourPackages = ['adventure', 'culture', 'family'];

  return (
    <>
      <section className="relative flex h-[90vh] items-center justify-center bg-hero-pattern bg-cover bg-center text-white">
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl font-bold md:text-6xl">{t('hero.title')}</h1>
          <p className="mt-4 text-lg md:text-xl">{t('hero.subtitle')}</p>
          <Link href="/destinasi" className="mt-8 inline-block rounded-md bg-brand px-8 py-3 font-semibold transition-colors hover:bg-brand-dark">
            {t('hero.cta')}
          </Link>
        </div>
      </section>

      <section className="py-16 text-center">
        <div className="container mx-auto px-6">
          <h2 className="mb-12 text-4xl font-bold">{t('popularDestinations')}</h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {popularDestinations.map(dest => (
              <DestinationCard 
                key={dest.id} 
                imgSrc={dest.imgSrc} 
                title={t(`destinations.${dest.id}.title`)} 
                description={t(`destinations.${dest.id}.description`)} 
              />
            ))}
          </div>
        </div>
      </section>
      
      <section className="bg-white py-16 text-center">
        <div className="container mx-auto px-6">
          <h2 className="mb-12 text-4xl font-bold">{t('tourPackages')}</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {tourPackages.map(pkg => (
              <PackageCard 
                key={pkg} 
                title={t(`packages.${pkg}.title`)} 
                items={t.raw(`packages.${pkg}.items`)} 
                ctaText={t('ctaButton')}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
