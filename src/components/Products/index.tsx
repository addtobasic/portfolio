import { FC } from 'react';
import type { Product } from '../../../types/product';
import { ProductCard } from './ProductCard';

export type ProductsProps = {
  products: Product[];
};

export const Products: FC<ProductsProps> = ({ products }: ProductsProps) => {
  return (
    <div className='bg-bg-products-color'>
      <ul>
        {products.map((product) => (
          <div key={product.id} className='px-4 py-4'>
            <ProductCard
              title={product.title}
              content={product.content}
              link={product.link}
              image={product.image}
            />
          </div>
        ))}
      </ul>
    </div>
  );
};
