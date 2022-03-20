import { FC } from 'react';

import type { History } from '../../../types/history';

export type HistoriesProps = {
  histories: Array<History>;
};

export const HistoryCard: FC<History> = ({
  title,
  content,
  date,
  link,
}: History) => {
  return (
    <div className='py-3'>
      <div className='relative max-w-2xl'>
        <div className='absolute top-2 left-1.5 h-20 border-r-2 border-gray-500 sm:h-28' />
        <ul className='space-y-2'>
          <li>
            <div className='flex items-center'>
              <span className='w-4 h-4 bg-gray-500 rounded-full'></span>
              <time className='flex items-center mb-1 ml-4 text-sm font-normal leading-none text-gray-400 dark:text-gray-500 sm:text-xs'>
                {date}
              </time>
            </div>
            <h5 className='ml-8 font-bold text-gray-600 sm:text-base'>
              <a href={link} target='_blank' rel='noreferrer'>
                {title}
              </a>
            </h5>
            <div className='ml-8'>
              <p className='text-sm text-gray-500 sm:text-sm'>{content}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
