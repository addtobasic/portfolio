import { FC } from 'react';

export const Copyright: FC = () => {
  return (
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
        <p className='font-base-text text-lg text-white'>© 2024 addtobasic</p>
      </div>
    </div>
  );
};
