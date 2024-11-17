import type { Meta, StoryObj } from '@storybook/react';
import CurrentGoals from '.';

const meta = {
  title: 'Organisms/CurrentGoals',
  component: CurrentGoals,
  globals: {
    backgrounds: { value: 'light' },
  },
} satisfies Meta<typeof CurrentGoals>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    learningGoal: 'Watch first section of Typography course on Frontend Masters and read Typography chapter in Design for Hackers',
    creativeGoal: 'Create design system (Color scheme, typography, buttons) and add wireframes for other parts of the site'
  },
};
