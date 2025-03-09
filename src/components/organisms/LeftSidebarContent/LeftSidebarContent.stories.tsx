import type { Meta, StoryObj } from '@storybook/react';
import LeftSidebarContent from '.';
import { tertiaryColor, secondaryColor } from '~/theme';

const meta = {
  title: 'Organisms/LeftSidebarContent',
  component: LeftSidebarContent,
  globals: {
    backgrounds: { value: 'light' },
  },
} satisfies Meta<typeof LeftSidebarContent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    projects: [
      {
        id: '1',
        icon: {
          name: 'video',
          color: tertiaryColor
        },
        name: 'Blaine'
      }, 
      {
        id: '2',
        icon: {
          name: 'laptop',
          color: tertiaryColor
        },
        name: 'Cameron'
      },
      {
        id: '3',
        icon: {
          name: 'music',
          color: tertiaryColor
        },
        name: 'Colby'
      },
      {
        id: '4',
        icon: {
          name: 'music',
          color: tertiaryColor
        },
        name: 'Collin'
      },
      {
        id: '5',
        icon: {
          name: 'video',
          color: tertiaryColor
        },
        name: 'Ian'
      },
      {
        id: '6',
        icon: {
          name: 'image',
          color: tertiaryColor
        },
        name: 'Johnny'
      },
      {
        id: '7',
        icon: {
          name: 'pen',
          color: tertiaryColor
        },
        name: 'Kyle'
      },
      {
        id: '8',
        icon: {
          name: 'video',
          color: tertiaryColor
        },
        name: 'Ryan'
      },
      {
        id: '9',
        icon: {
          name: 'video',
          color: tertiaryColor
        },
        name: 'Sydney'
      }
    ],
    channels: [
      {
        id: '1',
        icon: {
          name: 'chat',
          color: secondaryColor
        },
        name: 'General'
      },
      {
        id: '2',
        icon: {
          name: 'chat',
          color: secondaryColor
        },
        name: 'Inspiration'
      }
    ]
  },
};
