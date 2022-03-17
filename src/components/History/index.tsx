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
      <div className=''>
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
      </div>
    </div>
  );
};
