import { FC } from 'react';
import { ContactCard } from './ContactCard';

export const Contact: FC = () => {
  return (
    <div className='bg-bg-contact-color'>
      <h1 className='flex justify-center py-9 font-base-text text-5xl text-white  sm:text-4xl'>
        Contact
      </h1>
      <div className='flex justify-center px-4 pb-10'>
        <ContactCard />
      </div>
      <div className='py-5'>
        <div className='flex justify-center'>
          <p className='font-base-text text-base text-white'>
            Icon by
            <a href='https://twitter.com/MelvilleTw' className='text-blue-500'>
              @MelvilleTw
            </a>
          </p>
        </div>
        <div className='flex justify-center'>
          <p className='font-base-text text-lg text-white'>© 2022 addtobasic</p>
        </div>
      </div>
    </div>
  );
};
