import type { Meta, StoryObj } from '@storybook/react';
import RightSidebarContent from '.';

const meta = {
  title: 'Organisms/RightSidebarContent',
  component: RightSidebarContent,
  globals: {
    backgrounds: { value: 'light' },
  },
} satisfies Meta<typeof RightSidebarContent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    goals: {
      learningGoal: 'Watch first section of Typography course on Frontend Masters and read Typography chapter in Design for Hackers',
      creativeGoal: 'Create design system (Color scheme, typography, buttons) and add wireframes for other parts of the site'
    },
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
  },
};
