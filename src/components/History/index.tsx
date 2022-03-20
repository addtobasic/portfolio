import { FC } from 'react';
import type { History } from '../../../types/history';
import { HistoryCard } from './HistoryCard';

export type HistoriesProps = {
  histories: History[];
};

export const Histories: FC<HistoriesProps> = ({
  histories,
}: HistoriesProps) => {
  return (
    <div className='bg-primary-light-color'>
      <h1 className='flex justify-center py-9 font-base-text text-5xl sm:text-4xl'>
        History
      </h1>
      <div className='flex justify-center'>
        <div className=' px-4 pb-10 sm:w-auto md:w-5/6 lg:w-4/6 xl:w-4/6'>
          <div className='py-7 px-5 bg-white rounded-xl border-2 border-gray-300 shadow-lg'>
            {histories.map((history) => (
              <div key={history.id}>
                <HistoryCard
                  title={history.title}
                  content={history.content}
                  date={history.date}
                  color={history.color}
                  link={history.link}
                />
              </div>
            ))}
            <h5 className='ml-8 font-bold text-gray-600 sm:text-base'>
              and now...
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};
