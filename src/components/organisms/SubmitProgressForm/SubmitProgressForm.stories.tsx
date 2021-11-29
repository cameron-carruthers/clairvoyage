import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import SubmitProgressForm from '.';

export default {
  title: 'Organisms/SubmitProgressForm',
  component: SubmitProgressForm
} as ComponentMeta<typeof SubmitProgressForm>;

const Template: ComponentStory<typeof SubmitProgressForm> = (args) => <SubmitProgressForm  {...args} />;

export const Default = Template.bind({});
Default.args = {
  currentWeek: 9
}