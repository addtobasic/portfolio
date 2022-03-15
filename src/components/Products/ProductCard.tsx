import { FC } from 'react';

import type { Product } from '../../../types/product';

export type ProductsProps = {
  products: Array<Product>;
};

export const ProductCard: FC<Product> = ({
  title,
  content,
  image,
}: Product) => {
  return (
    <div>
      <p className='bg-red-300'>{title}</p>
      <p>{content}</p>
      <p>{image.url}</p>
    </div>
  );
};
