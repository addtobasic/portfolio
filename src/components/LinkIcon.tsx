import React from 'react';
import { IconContext } from 'react-icons';
import {
  FaTwitter,
  FaGithub,
  FaFacebook,
  FaInstagram,
  FaPenSquare,
} from 'react-icons/fa';

export type LinkIconProps = {
  size?: 'small' | 'medium' | 'large';
};

export const LINK_ICON_ITEM = [
  {
    url: 'https://twitter.com/addtobasic',
  },
  {
    url: 'https://github.com/addtobasic',
  },
  {
    url: 'https://www.facebook.com/genki.kano.794 ',
  },
  {
    url: 'https://www.instagram.com/addtobasic',
  },
  {
    url: 'https://qiita.com/addtobasic',
  },
];

export const LinkIcon: React.FC<LinkIconProps> = () => {
  return (
    <IconContext.Provider value={{ color: '#ccc', size: '30px' }}>
      <div className='flex max-w-md'>
        <span className='flex-1 px-6 sm:px-2'>
          <a href={LINK_ICON_ITEM[0].url}>
            <FaTwitter />
          </a>
        </span>
        <span className='flex-1 px-6 sm:px-2'>
          <a href={LINK_ICON_ITEM[1].url}>
            <FaGithub />
          </a>
        </span>
        <span className='flex-1 px-6 sm:px-2'>
          <a href={LINK_ICON_ITEM[2].url}>
            <FaFacebook />
          </a>
        </span>
        <span className='flex-1 px-6 sm:px-2'>
          <a href={LINK_ICON_ITEM[3].url}>
            <FaInstagram />
          </a>
        </span>
        <span className='flex-none px-6 sm:px-2'>
          <a href={LINK_ICON_ITEM[4].url}>
            <FaPenSquare />
          </a>
        </span>
      </div>
    </IconContext.Provider>
  );
};
