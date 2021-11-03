import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import LeftSidebar from '.';

export default {
  title: 'LeftSidebar',
  component: LeftSidebar
} as ComponentMeta<typeof LeftSidebar>;

const Template: ComponentStory<typeof LeftSidebar> = (args) => <LeftSidebar  {...args} />;

export const Default = Template.bind({});
Default.args = {
  projects: [
    {
      id: '1',
      icon: 'video',
      name: 'Blaine'
    }, 
    {
      id: '2',
      icon: 'laptop',
      name: 'Cameron'
    },
    {
      id: '3',
      icon: 'music',
      name: 'Colby'
    },
    {
      id: '2',
      icon: 'laptop',
      name: 'Cameron'
    },
    {
      id: '4',
      icon: 'music',
      name: 'Collin'
    },
    {
      id: '5',
      icon: 'video',
      name: 'Ian'
    },
    {
      id: '6',
      icon: 'picture',
      name: 'Johnny'
    },
    {
      id: '7',
      icon: 'edit',
      name: 'Kyle'
    },
    {
      id: '8',
      icon: 'video',
      name: 'Ryan'
    },
    {
      id: '9',
      icon: 'video',
      name: 'Sydney'
    }
  ],
  channels: [
    {
      id: '1',
      icon: 'chat',
      name: 'General'
    },
    {
      id: '2',
      icon: 'chat',
      name: 'Inspiration'
    }
  ]
}