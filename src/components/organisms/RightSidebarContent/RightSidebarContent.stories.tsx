import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import RightSidebarContent from '.';

export default {
  title: 'Organisms/RightSidebarContent',
  component: RightSidebarContent
} as ComponentMeta<typeof RightSidebarContent>;

const Template: ComponentStory<typeof RightSidebarContent> = (args) => <RightSidebarContent  {...args} />;

export const Default = Template.bind({});
Default.args = {
  goals: {
    learningGoal: 'Watch first section of Typography course on Frontend Masters and read Typography chapter in Design for Hackers',
    creativeGoal: 'Create design system (Color scheme, typography, buttons) and add wireframes for other parts of the site'
  },
  weeklyStatuses: [
    {
      week: 1,
      status: 'success'
    },
    {
      week: 2,
      status: 'success'
    },
    {
      week: 3,
      status: 'success'
    },
    {
      week: 4,
      status: 'success'
    },
    {
      week: 5,
      status: 'fail'
    },
    {
      week: 6,
      status: 'success'
    },
    {
      week: 7,
      status: 'success'
    },
    {
      week: 8,
      status: 'success'
    },
    {
      week: 9,
      status: 'success'
    },
    {
      week: 10,
      status: 'incomplete'
    },
    {
      week: 11,
      status: 'incomplete'
    },
    {
      week: 12,
      status: 'incomplete'
    }
  ]
}