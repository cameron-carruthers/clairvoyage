import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import CurrentGoal from '.';

export default {
  title: 'Molecules/CurrentGoal',
  component: CurrentGoal
} as ComponentMeta<typeof CurrentGoal>;

const Template: ComponentStory<typeof CurrentGoal> = (args) => <CurrentGoal  {...args} />;

export const LearningGoal = Template.bind({});
LearningGoal.args = {
  heading: 'Learning Goal',
  text: 'Watch first section of Typography course on Frontend Masters and read Typography chapter in Design for Hackers'
}
LearningGoal.parameters = {
  backgrounds: { default: 'light' }
};

export const CreativeGoal = Template.bind({});
CreativeGoal.args = {
  heading: 'Creative Goal',
  text: 'Create design system (Color scheme, typography, buttons) and add wireframes for other parts of the site'
}
CreativeGoal.parameters = {
  backgrounds: { default: 'light' }
};