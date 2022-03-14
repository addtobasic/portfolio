import { FC } from 'react';
import { AboutCard } from './AboutCard';

export const About: FC = () => {
  return (
    <div className='bg-primary-light-color'>
      <h1 className='flex justify-center py-9 text-5xl sm:text-4xl font-base-text'>
        About Me
      </h1>
      <div className='flex justify-center px-4 pb-10'>
        <AboutCard />
      </div>
    </div>
  );
};
