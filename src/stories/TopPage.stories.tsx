import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TopPage } from '../components/TopPage';
import { LinkIcon } from '../components/LinkIcon';
import styles from '../styles/Home.module.css';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'TopPage',
  component: TopPage,
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
} as ComponentMeta<typeof TopPage>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof TopPage> = () => (
  <div className='bg-primary-dark-color min-w-screen min-h-screen'>
    <div className={styles.center}>
      <div className='flex justify-center'>
        <div className={styles.icon} />
      </div>
      <h1 className='flex justify-center pt-6 text-white text-4xl font-base-text'>
        Genshi
      </h1>
      <h2 className='flex justify-center pt-1 pb-6 text-white text-2xl font-base-text'>
        Genki Kano
      </h2>
      <div className='flex justify-center'>
        <LinkIcon />
      </div>
    </div>
  </div>
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {};
