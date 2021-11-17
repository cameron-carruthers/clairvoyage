import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Input from '.';

export default {
  title: 'Molecules/Input',
  component: Input
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input  {...args} />;

export const LearningProgress = Template.bind({});
LearningProgress.args = {
  label: 'Week 8 Learning Progress',
  rows: 10
}

export const CreativeProgress = Template.bind({});
CreativeProgress.args = {
  label: 'Week 8 Creative Progress',
  rows: 10
}

export const LearningGoal = Template.bind({});
LearningGoal.args = {
  label: 'Week 9 Learning Goal',
  rows: 5
}

export const CreativeGoal = Template.bind({});
CreativeGoal.args = {
  label: 'Week 9 Creative Goal',
  rows: 5
}