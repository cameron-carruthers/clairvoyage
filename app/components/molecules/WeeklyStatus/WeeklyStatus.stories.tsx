import type { Meta, StoryObj } from '@storybook/react';
import WeeklyStatus from '.';

const meta = {
  title: 'Molecules/WeeklyStatus',
  component: WeeklyStatus,
  globals: {
    backgrounds: { value: 'light' },
  },
} satisfies Meta<typeof WeeklyStatus>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Success: Story = {
  args: {
    week: 1,
    status: 'success'
  },
};

export const Fail: Story = {
  args: {
    week: 2,
    status: 'fail'
  },
};

export const Incomplete: Story = {
  args: {
    week: 3,
    status: 'incomplete'
  },
};
