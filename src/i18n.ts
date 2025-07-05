import {getRequestConfig} from 'next-intl/server';
 
export default getRequestConfig(async ({locale}) => {
  // Path ini sekarang benar karena 'messages' ada di dalam 'src'
  return {
    messages: (await import(`./messages/${locale}.json`)).default
  };
});
