import { FC } from 'react';

import type { Product } from '../../../types/product';

export type ProductsProps = {
  products: Array<Product>;
};

export const ProductCard: FC<Product> = ({
  title,
  content,
  link,
  image,
}: Product) => {
  return (
    <div className='overflow-hidden max-w-md bg-bg-product-card-color rounded-xl border-2 border-gray-300 shadow-2xl'>
      <a href={link} target='_blank' rel='noreferrer'>
        <img className='w-full' src={image.url} alt={title} />
        <div className='py-6 px-5 h-32'>
          <div className='mb-2 font-base-text text-xl font-bold text-white'>
            {title}
          </div>
          <p className='font-base-text text-white'>{content}</p>
        </div>
      </a>
    </div>
  );
};
