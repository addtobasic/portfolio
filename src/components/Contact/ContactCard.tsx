import { FC } from 'react';

export const ContactCard: FC = () => {
  return (
    <div className='w-5/6 sm:w-full md:w-5/6 lg:w-4/6 xl:w-3/6'>
      <div className='py-7 bg-bg-contact-card-color rounded-xl border-2 border-gray-300 shadow-lg'>
        <div className='flex justify-center'>
          <div className='px-6 w-full'>
            <form className='pb-7'>
              <div className='flex items-center py-1 border-b border-teal-500'>
                <input
                  className='py-1 px-2 mr-3 w-full leading-tight text-white bg-transparent border-none focus:outline-none appearance-none'
                  type='text'
                  placeholder='お名前'
                />
              </div>
            </form>
            <form className='pb-12 w-full'>
              <div className='flex items-center py-1 border-b border-teal-500'>
                <input
                  className='py-1 px-2 mr-3 w-full leading-tight text-white bg-transparent border-none focus:outline-none appearance-none'
                  type='text'
                  placeholder='メールアドレス'
                />
              </div>
            </form>
            <form className=''>
              <div className='flex items-center py-1 rounded border'>
                <textarea
                  className='py-1 px-2 mr-3 w-full h-20 leading-tight text-white bg-transparent border-none focus:outline-none appearance-none'
                  placeholder='問い合わせ内容'
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
