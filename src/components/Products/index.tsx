import { FC } from 'react';
import type { Product } from '../../../types/product';
import { ProductCard } from './ProductCard';

export type ProductsProps = {
  products: Product[];
};

export const Products: FC<ProductsProps> = ({ products }: ProductsProps) => {
  return (
    <div className='bg-bg-products-color'>
      <h1 className='flex justify-center py-9 font-base-text text-5xl text-white sm:text-4xl'>
        Products
      </h1>
      <div className='flex justify-center'>
        <div className='grid grid-cols-6'>
          {products.map((product) => (
            <div
              key={product.id}
              className='col-span-6 p-4 sm:col-span-6 md:col-span-3 lg:col-span-3 xl:col-span-2'
            >
              <ProductCard
                title={product.title}
                content={product.content}
                link={product.link}
                image={product.image}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
