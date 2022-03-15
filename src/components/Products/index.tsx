import { FC } from 'react';
// import { client } from '../../lib/client';
import type { Product } from '../../../types/product';

export type ProductsProps = {
  products: Array<Product>;
};

export const Products: FC<ProductsProps> = ({ products }: ProductsProps) => {
  return (
    <div>
      <ul>
        {products.map((product) => (
          <div key={product.id}>
            <p>{product.title}</p>
            <p>{product.content}</p>
            <p>{product.image.url}</p>
          </div>
        ))}
      </ul>
    </div>
  );
};

// データをテンプレートに受け渡す部分の処理を記述します
// export const getStaticProps = async () => {
//   const data = await client.get({ endpoint: 'products' });

//   return {
//     props: {
//       products: data.contents,
//     },
//   };
// };
