import { FC } from 'react';
import styles from '../../styles/Home.module.css';
import { LinkIcon } from './LinkIcon';

export const TopPage: FC = () => {
  return (
    <div className='min-h-screen bg-primary-dark-color'>
      <div className={styles.center}>
        <div className='relative flex justify-center'>
          <div className={styles.icon} />
        </div>
        <h1 className='flex justify-center pt-6 font-base-text text-4xl text-white'>
          Genshi
        </h1>
        <h2 className='flex justify-center pt-1 pb-6 font-base-text text-2xl text-white'>
          Genki Kano
        </h2>
        <div className='flex justify-center'>
          <LinkIcon />
        </div>
      </div>
    </div>
  );
};
