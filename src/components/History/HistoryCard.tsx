import { FC } from 'react';

import type { History } from '../../../types/history';

export type HistoriesProps = {
  histories: Array<History>;
};

export const HistoryCard: FC<History> = ({
  title,
  content,
  date,
  color,
  link,
}: History) => {
  return (
    <div>
      <p className='bg-green-300'>{title}</p>
      <p>{content}</p>
      <p>{date}</p>
      <p>{color}</p>
      <p>{link}</p>
    </div>
  );
};
