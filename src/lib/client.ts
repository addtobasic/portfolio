import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: 'cttut9os37',
  apiKey: process.env.API_KEY || '',
});
