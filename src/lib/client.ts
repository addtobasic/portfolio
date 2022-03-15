import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_ID || '',
  apiKey: process.env.MICROCMS_API_KEY || '',
});
