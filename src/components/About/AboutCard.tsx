import { FC } from 'react';
import { IconContext } from 'react-icons';
import { FaSchool } from 'react-icons/fa';
import { MdFavorite, MdGroups } from 'react-icons/md';
import { ProfileProps } from '../About';
import { FadeIn } from '../FadeIn';

export const AboutCard: FC<ProfileProps> = ({ profile }: ProfileProps) => {
  return (
    <FadeIn>
      <div>
        <div className='w-[30rem] rounded-xl border-2 border-gray-300 bg-white py-7 px-5 shadow-lg'>
          <div className='mb-4 font-base-text text-lg font-bold'>
            {profile.introductionText}
          </div>
          <div className='pt-5'>
            <IconContext.Provider value={{ color: 'black', size: '25px' }}>
              <div className='flex'>
                <FaSchool />
                <p className='py-1 pb-3 pl-5 font-base-text'>
                  {profile.affiliation}
                </p>
              </div>
              <div className='flex'>
                <MdGroups />
                <p className='pt-1 pb-3 pl-5 font-base-text'>
                  {profile.community}
                </p>
              </div>
            </IconContext.Provider>
            <IconContext.Provider value={{ color: 'black', size: '23px' }}>
              <div className='flex'>
                <MdFavorite />
                <p className='pl-5 font-base-text'>{profile.hobby}</p>
              </div>
            </IconContext.Provider>
          </div>
        </div>
      </div>
    </FadeIn>
  );
};
