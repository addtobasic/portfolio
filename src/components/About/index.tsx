import { FC } from 'react';
import type { Profile } from '../../../types/profile';
import { AboutCard } from './AboutCard';

export type ProfileProps = {
  profile: Profile;
};

export const About: FC<ProfileProps> = ({ profile }: ProfileProps) => {
  return (
    <div className='bg-primary-light-color'>
      <h1 className='flex justify-center py-9 font-base-text text-5xl sm:text-4xl'>
        About Me
      </h1>
      <div className='flex justify-center'>
        <div className='px-3 pb-10 w-5/6 sm:w-auto md:w-5/6 lg:w-4/6 xl:w-3/6'>
          <div className='py-7 px-5 bg-white rounded-xl border-2 border-gray-300 shadow-lg'>
            <AboutCard profile={profile} />
          </div>
        </div>
      </div>
    </div>
  );
};
