import type { Meta, StoryObj } from '@storybook/react';
import Input from '.';

const meta = {
  title: 'Molecules/Input',
  component: Input,
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LearningProgress: Story = {
  args: {
    label: 'Week 8 Learning Progress',
    rows: 10
  },
};

export const CreativeProgress: Story = {
  args: {
    label: 'Week 8 Creative Progress',
    rows: 10
  },
};

export const LearningGoal: Story = {
  args: {
    label: 'Week 9 Learning Goal',
    rows: 5
  },
};

export const CreativeGoal: Story = {
  args: {
    label: 'Week 9 Creative Goal',
    rows: 5
  },
};
