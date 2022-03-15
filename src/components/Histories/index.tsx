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
    <div>
      <ul>
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
      </ul>
    </div>
  );
};
