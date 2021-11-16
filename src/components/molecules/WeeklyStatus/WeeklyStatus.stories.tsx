import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import WeeklyStatus from '.';

export default {
  title: 'Molecules/WeeklyStatus',
  component: WeeklyStatus
} as ComponentMeta<typeof WeeklyStatus>;

const Template: ComponentStory<typeof WeeklyStatus> = (args) => <WeeklyStatus  {...args} />;

export const Success = Template.bind({});
Success.args = {
  week: 1,
  status: 'success'
}
Success.parameters = {
  backgrounds: { default: 'light' }
};

export const Fail = Template.bind({});
Fail.args = {
  week: 2,
  status: 'fail'
}
Fail.parameters = {
  backgrounds: { default: 'light' }
};

export const Incomplete = Template.bind({});
Incomplete.args = {
  week: 3,
  status: 'incomplete'
}
Incomplete.parameters = {
  backgrounds: { default: 'light' }
};