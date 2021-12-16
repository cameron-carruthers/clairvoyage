import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { calculateTertiaryColor, secondaryColor } from '../../../theme';

import LeftSidebarContent from '.';

export default {
  title: 'Organisms/LeftSidebarContent',
  component: LeftSidebarContent
} as ComponentMeta<typeof LeftSidebarContent>;

const Template: ComponentStory<typeof LeftSidebarContent> = (args) => <LeftSidebarContent  {...args} />;

export const Default = Template.bind({});
Default.args = {
  projects: [
    {
      id: '1',
      icon: {
        name: 'video',
        color: calculateTertiaryColor(0)
      },
      name: 'Blaine'
    }, 
    {
      id: '2',
      icon: {
        name: 'laptop',
        color: calculateTertiaryColor(0)
      },
      name: 'Cameron'
    },
    {
      id: '3',
      icon: {
        name: 'music',
        color: calculateTertiaryColor(0)
      },
      name: 'Colby'
    },
    {
      id: '4',
      icon: {
        name: 'music',
        color: calculateTertiaryColor(0)
      },
      name: 'Collin'
    },
    {
      id: '5',
      icon: {
        name: 'video',
        color: calculateTertiaryColor(0)
      },
      name: 'Ian'
    },
    {
      id: '6',
      icon: {
        name: 'picture',
        color: calculateTertiaryColor(0)
      },
      name: 'Johnny'
    },
    {
      id: '7',
      icon: {
        name: 'edit',
        color: calculateTertiaryColor(0)
      },
      name: 'Kyle'
    },
    {
      id: '8',
      icon: {
        name: 'video',
        color: calculateTertiaryColor(0)
      },
      name: 'Ryan'
    },
    {
      id: '9',
      icon: {
        name: 'video',
        color: calculateTertiaryColor(0)
      },
      name: 'Sydney'
    }
  ],
  channels: [
    {
      id: '1',
      icon: {
        name: 'chat',
        color: secondaryColor
      },
      name: 'General'
    },
    {
      id: '2',
      icon: {
        name: 'chat',
        color: secondaryColor
      },
      name: 'Inspiration'
    }
  ]
}
Default.parameters = {
  backgrounds: { default: 'light' }
};