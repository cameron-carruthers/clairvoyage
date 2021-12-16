import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { calculateTertiaryColor, secondaryColor } from '../../../theme';

import NavSection from '.';

export default {
  title: 'Organisms/NavSection',
  component: NavSection
} as ComponentMeta<typeof NavSection>;

const Template: ComponentStory<typeof NavSection> = (args) => <NavSection  {...args} />;

export const Projects = Template.bind({});
Projects.args = {
  navHeader: 'Projects',
  navItems: [
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
  ]
}
Projects.parameters = {
  backgrounds: { default: 'light' }
};

export const Channels = Template.bind({});
Channels.args = {
  navHeader: 'Channels',
  navItems: [
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
Channels.parameters = {
  backgrounds: { default: 'light' }
};