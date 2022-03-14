import { FC } from 'react';
import { IconContext } from 'react-icons';
import { FaSchool } from 'react-icons/fa';
import { MdGroups, MdFavorite } from 'react-icons/md';

export const ABOUT_CARD_ITEM = [
  {
    text: '旭川工業高等専門学校 システム制御情報工学科 5年',
  },
  {
    text: 'FuraIT, 旭川ゆるい勉強会, LOCAL学生部',
  },
  {
    text: 'Twitter, ノベルゲーム, スマブラ',
  },
];

export const AboutCard: FC = () => {
  return (
    <div>
      <div className='bg-white border-gray-300 border-2 shadow-2xl rounded-xl w-[30rem] py-7 px-5'>
        <div className='font-bold font-base-text text-lg mb-4'>
          面白いと思ったもの, ほしいと思ったもの,
          趣味に関するものを作るのがすきです
        </div>
        <div className='pt-5'>
          <IconContext.Provider value={{ color: 'black', size: '25px' }}>
            <div className='flex'>
              <FaSchool />
              <p className='py-1 pb-3 pl-5 font-base-text'>
                {ABOUT_CARD_ITEM[0].text}
              </p>
            </div>
            <div className='flex'>
              <MdGroups />
              <p className='pt-1 pb-3 pl-5 font-base-text'>
                {ABOUT_CARD_ITEM[1].text}
              </p>
            </div>
          </IconContext.Provider>
          <IconContext.Provider value={{ color: 'black', size: '23px' }}>
            <div className='flex'>
              <MdFavorite />
              <p className='pl-5 font-base-text'>{ABOUT_CARD_ITEM[2].text}</p>
            </div>
          </IconContext.Provider>
        </div>
      </div>
    </div>
  );
};
