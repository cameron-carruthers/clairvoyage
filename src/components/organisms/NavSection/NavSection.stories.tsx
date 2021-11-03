import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import NavSection from '.';

export default {
  title: 'NavSection',
  component: NavSection
} as ComponentMeta<typeof NavSection>;

const Template: ComponentStory<typeof NavSection> = (args) => <NavSection  {...args} />;

export const Projects = Template.bind({});
Projects.args = {
  navHeader: 'Projects',
  navItems: [
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
  ]
}

export const Channels = Template.bind({});
Channels.args = {
  navHeader: 'Channels',
  navItems: [
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