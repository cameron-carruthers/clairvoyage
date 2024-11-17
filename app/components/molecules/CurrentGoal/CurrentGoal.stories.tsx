import type { Meta, StoryObj } from '@storybook/react';
import CurrentGoal from '.';

const meta = {
  title: 'Molecules/CurrentGoal',
  component: CurrentGoal,
  globals: {
    backgrounds: { value: 'light' },
  },
} satisfies Meta<typeof CurrentGoal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LearningGoal: Story = {
  args: {
    heading: 'Learning Goal',
    text: 'Watch first section of Typography course on Frontend Masters and read Typography chapter in Design for Hackers'
  },
};

export const CreativeGoal: Story = {
  args: {
    heading: 'Creative Goal',
    text: 'Create design system (Color scheme, typography, buttons) and add wireframes for other parts of the site'
  },
};
