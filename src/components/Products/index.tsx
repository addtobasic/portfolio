import { FC } from 'react';
// import { client } from '../../lib/client';
import type { Product } from '../../../types/product';
import { ProductCard } from './ProductCard';

export type ProductsProps = {
  products: Array<Product>;
};

export const Products: FC<ProductsProps> = ({ products }: ProductsProps) => {
  return (
    <div>
      <ul>
        {products.map((product) => (
          <div key={product.id}>
            <ProductCard
              title={product.title}
              content={product.content}
              image={product.image}
            />
          </div>
        ))}
      </ul>
    </div>
  );
};
