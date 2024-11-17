import type { Meta, StoryObj } from '@storybook/react';
import SeasonProgress from '.';

const meta = {
  title: 'Organisms/SeasonProgress',
  component: SeasonProgress,
  globals: {
    backgrounds: { value: 'light' },
  },
} satisfies Meta<typeof SeasonProgress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
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
};
