import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import SeasonProgress from '.';

export default {
  title: 'Organisms/SeasonProgress',
  component: SeasonProgress
} as ComponentMeta<typeof SeasonProgress>;

const Template: ComponentStory<typeof SeasonProgress> = (args) => <SeasonProgress  {...args} />;

export const Default = Template.bind({});
Default.args = {
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