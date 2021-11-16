import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import CurrentGoals from '.';

export default {
  title: 'Organisms/CurrentGoals',
  component: CurrentGoals
} as ComponentMeta<typeof CurrentGoals>;

const Template: ComponentStory<typeof CurrentGoals> = (args) => <CurrentGoals  {...args} />;

export const Default = Template.bind({});
Default.args = {
  learningGoal: 'Watch first section of Typography course on Frontend Masters and read Typography chapter in Design for Hackers',
  creativeGoal: 'Create design system (Color scheme, typography, buttons) and add wireframes for other parts of the site'
}