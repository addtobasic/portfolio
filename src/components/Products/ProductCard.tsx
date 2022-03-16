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
    <div className='bg-bg-product-card-color max-w-md rounded-xl overflow-hidden border-gray-300 border-2'>
      <a href={link} target='_blank' rel='noreferrer'>
        <img className='w-full' src={image.url} alt={title} />
        <div className='px-5 py-6 h-32'>
          <div className='font-bold font-base-text text-white text-xl mb-2'>
            {title}
          </div>
          <p className='font-base-text text-white'>{content}</p>
        </div>
      </a>
    </div>
  );
};
