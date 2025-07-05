import {getRequestConfig} from 'next-intl/server';
 
export default getRequestConfig(async ({locale}) => {
  // Muat file terjemahan berdasarkan locale yang aktif
  return {
    messages: (await import(`../messages/${locale}.json`)).default
  };
});
