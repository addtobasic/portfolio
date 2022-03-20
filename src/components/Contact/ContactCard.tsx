import { FC, useState } from 'react';

export const ContactCard: FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');
  const url = process.env.INCOMING_WEBHOOK_URL || '';

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleDescriptionChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setDescription(e.target.value);
  };

  const sendContents = (name: string, email: string, description: string) => {
    const payload = {
      text:
        '問い合わせがありました\n' +
        '名前: ' +
        name +
        '\n' +
        'email: ' +
        email +
        '\n' +
        '内容: ' +
        description +
        '\n',
    };
    console.error(payload);

    fetch(url, {
      method: 'POST',
      body: JSON.stringify(payload),
    }).then(() => {
      alert('送信を完了しました.\n折り返しの連絡をお待ちください.');
      setName('');
      setEmail('');
      setDescription('');
    });
  };

  return (
    <div className='w-5/6 sm:w-full md:w-5/6 lg:w-4/6 xl:w-3/6'>
      <div className='pt-7 bg-bg-contact-card-color rounded-xl border-2 border-gray-300 shadow-lg'>
        <div className='flex justify-center'>
          <div className='px-4 w-full'>
            <form className='pb-7'>
              <div className='flex items-center py-1 border-b border-teal-500'>
                <input
                  className='py-1 px-2 mr-3 w-full leading-tight text-white bg-transparent border-none focus:outline-none appearance-none'
                  type='text'
                  placeholder='お名前'
                  value={name}
                  onChange={handleNameChange}
                />
              </div>
            </form>
            <form className='pb-10 w-full'>
              <div className='flex items-center py-1 border-b border-teal-500'>
                <input
                  className='py-1 px-2 mr-3 w-full leading-tight text-white bg-transparent border-none focus:outline-none appearance-none'
                  type='text'
                  placeholder='メールアドレス'
                  value={email}
                  onChange={handleEmailChange}
                />
              </div>
            </form>
            <form className='w-full'>
              <div className='flex items-center py-1 rounded border'>
                <textarea
                  className='py-1 px-2 mr-3 w-full h-20 leading-tight text-white bg-transparent border-none focus:outline-none appearance-none'
                  placeholder='問い合わせ内容'
                  value={description}
                  onChange={handleDescriptionChange}
                />
              </div>
            </form>
          </div>
        </div>
        <div className='flex flex-row-reverse py-2 pr-4'>
          <button
            className='py-2 px-3 font-bold text-white bg-blue-600 hover:bg-blue-500 rounded border border-blue-700'
            onClick={() => {
              sendContents(name, email, description);
            }}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};
