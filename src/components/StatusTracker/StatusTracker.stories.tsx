import type { Meta, StoryObj } from '@storybook/react';
import { StatusTracker } from './StatusTracker';

const meta = {
  title: 'Organisms/StatusTracker',
  component: StatusTracker,
  globals: {
    backgrounds: { value: 'light' },
  },
} satisfies Meta<typeof StatusTracker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    heading: 'This Season',
    statuses: [
      {
        label: "1",
        status: 'success'
      },
      {
        label: "2",
        status: 'success'
      },
      {
        label: "3",
        status: 'success'
      },
      {
        label: "4",
        status: 'success'
      },
      {
        label: "5",
        status: 'fail'
      },
      {
        label: "6",
        status: 'success'
      },
      {
        label: "7",
        status: 'success'
      },
      {
        label: "8",
        status: 'success'
      },
      {
        label: "9",
        status: 'success'
      },
      {
        label: "10",
        status: 'incomplete'
      },
      {
        label: "11",
        status: 'incomplete'
      },
      {
        label: "12",
        status: 'incomplete'
      }
    ]
  }
};
