import type { Metadata } from 'next';
import { useTranslations } from 'next-intl';

export function generateMetadata({params: {locale}}: {params: {locale: string}}): Metadata {
  const t = require(`../../../messages/${locale}.json`);
  return {
    title: t.Navigation.contact,
    description: t.ContactPage.header.subtitle,
  };
}

const ContactPage = () => {
  const t = useTranslations('ContactPage');

  return (
    <>
      <header className="bg-dark py-16 text-center text-white">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold">{t('header.title')}</h1>
          <p className="mt-2 text-lg">{t('header.subtitle')}</p>
        </div>
      </header>
      <section className="container mx-auto px-6 py-16">
        <div className="flex flex-col gap-12 rounded-lg bg-white p-8 shadow-xl md:flex-row">
          {/* Form Kontak */}
          <div className="w-full md:w-3/5">
            <h3 className="mb-6 text-2xl font-bold">{t('form.title')}</h3>
            <form action="#" className="space-y-4">
              <div>
                <label htmlFor="name" className="sr-only">{t('form.name')}</label>
                <input type="text" id="name" placeholder={t('form.name')} className="w-full rounded-md border border-gray-300 p-3 focus:border-brand focus:ring-brand" required />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">{t('form.email')}</label>
                <input type="email" id="email" placeholder={t('form.email')} className="w-full rounded-md border border-gray-300 p-3 focus:border-brand focus:ring-brand" required />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">{t('form.message')}</label>
                <textarea id="message" rows={6} placeholder={t('form.message')} className="w-full rounded-md border border-gray-300 p-3 focus:border-brand focus:ring-brand" required></textarea>
              </div>
              <button type="submit" className="w-full rounded-md bg-brand px-8 py-3 font-semibold text-white transition-colors hover:bg-brand-dark">{t('form.submit')}</button>
            </form>
          </div>
          {/* Info Kontak */}
          <div className="w-full md:w-2/5">
            <h3 className="mb-6 text-2xl font-bold">{t('info.title')}</h3>
            <div className="space-y-4">
              <p><strong>{t('info.addressLabel')}</strong><br/>{t('info.addressValue')}</p>
              <p><strong>{t('info.emailLabel')}</strong><br/>info.pariwisata@solselkab.go.id</p>
              <p><strong>{t('info.phoneLabel')}</strong><br/>(0755) 123-456</p>
            </div>
            <div className="mt-6 h-64 w-full overflow-hidden rounded-md">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.580888214343!2d101.4881916152295!3d-1.401148836378496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e2b5883a31a987b%3A0x4523c6e93a0b5a3!2sKantor%20Bupati%20Solok%20Selatan!5e0!3m2!1sen!2sid!4v1678886543210!5m2!1sen!2sid" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
