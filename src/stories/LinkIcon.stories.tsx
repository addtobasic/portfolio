import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { LinkIcon, LINK_ICON_ITEM } from '../components/TopPage/LinkIcon';
import { IconContext } from 'react-icons';
import {
  FaTwitter,
  FaGithub,
  FaFacebook,
  FaInstagram,
  FaPenSquare,
} from 'react-icons/fa';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'LinkIcon',
  component: LinkIcon,
  //👇 Creates specific parameters for the story
  parameters: {
    backgrounds: {
      values: [
        { name: 'red', value: '#f00' },
        { name: 'green', value: '#0f0' },
        { name: 'blue', value: '#00f' },
      ],
    },
  },
} as ComponentMeta<typeof LinkIcon>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof LinkIcon> = () => (
  <IconContext.Provider value={{ color: '#ccc', size: '30px' }}>
    <div className='flex max-w-md'>
      <span className='flex-1 px-6 sm:px-2'>
        <a href={LINK_ICON_ITEM[0].url} target='_blank' rel='noreferrer'>
          <FaTwitter />
        </a>
      </span>
      <span className='flex-1 px-6 sm:px-2'>
        <a href={LINK_ICON_ITEM[1].url} target='_blank' rel='noreferrer'>
          <FaGithub />
        </a>
      </span>
      <span className='flex-1 px-6 sm:px-2'>
        <a href={LINK_ICON_ITEM[2].url} target='_blank' rel='noreferrer'>
          <FaFacebook />
        </a>
      </span>
      <span className='flex-1 px-6 sm:px-2'>
        <a href={LINK_ICON_ITEM[3].url} target='_blank' rel='noreferrer'>
          <FaInstagram />
        </a>
      </span>

      <span className='flex-none px-6 sm:px-2'>
        <a href={LINK_ICON_ITEM[4].url} target='_blank' rel='noreferrer'>
          <FaPenSquare />
        </a>
      </span>
    </div>
  </IconContext.Provider>
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {};
