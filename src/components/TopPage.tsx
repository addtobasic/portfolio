import { FC } from 'react';
import { LinkIcon } from './LinkIcon';
import styles from '../styles/Home.module.css';

export const TopPage: FC = () => {
  return (
    <div className='bg-primary-dark-color'>
      <div className='flex justify-center'>
        <div className={styles.icon} />
      </div>
      <h1 className='flex justify-center pt-6 text-white text-4xl font-base-text'>
        Genshi
      </h1>
      <h2 className='flex justify-center pt-1 pb-6 text-white text-2xl font-base-text'>
        Genki Kano
      </h2>
      <div className='flex justify-center'>
        <LinkIcon />
      </div>
    </div>
  );
};
