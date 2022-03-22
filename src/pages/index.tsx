import Head from 'next/head';

import { TopPage } from '../components/TopPage';
import { About } from '../components/About';
import { client } from '../lib/client';

import { Products } from '../components/Products';
import type { Product } from '../../types/product';

import { Histories } from '../components/History';
import type { History } from '../../types/history';
import { Contact } from '../components/Contact';

export default function Home(props: {
  products: Product[];
  histories: History[];
}) {
  return (
    <div>
      <Head>
        <title>Genshi&apos;s Portfolio</title>
        <meta name='description' content="Genshi's Portfolio" />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <TopPage />
      <About />
      <Products products={props.products} />
      <Histories histories={props.histories} />
      <Contact />
    </div>
  );
}

export const getStaticProps = async () => {
  const products_data = await client.get({
    endpoint: 'products',
    queries: { limit: 30 },
  });
  const histories_data = await client.get({
    endpoint: 'histories',
    queries: { limit: 30 },
  });

  return {
    props: {
      products: products_data.contents,
      histories: histories_data.contents,
    },
  };
};
