import type { Meta, StoryObj } from '@storybook/react';
import NavSection from '.';
import { calculateTertiaryColor, secondaryColor } from '../../../theme';

const meta = {
  title: 'Organisms/NavSection',
  component: NavSection,
  globals: {
    backgrounds: { value: 'light' },
  },
} satisfies Meta<typeof NavSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Projects: Story = {
  args: {
    navHeader: 'Projects',
    navItems: [
      {
        id: '1',
        icon: {
          name: 'video',
          color: calculateTertiaryColor(0)
        },
        name: 'Blaine'
      }, 
      {
        id: '2',
        icon: {
          name: 'laptop',
          color: calculateTertiaryColor(0)
        },
        name: 'Cameron'
      },
      {
        id: '3',
        icon: {
          name: 'music',
          color: calculateTertiaryColor(0)
        },
        name: 'Colby'
      },
      {
        id: '4',
        icon: {
          name: 'music',
          color: calculateTertiaryColor(0)
        },
        name: 'Collin'
      },
      {
        id: '5',
        icon: {
          name: 'video',
          color: calculateTertiaryColor(0)
        },
        name: 'Ian'
      },
      {
        id: '6',
        icon: {
          name: 'image',
          color: calculateTertiaryColor(0)
        },
        name: 'Johnny'
      },
      {
        id: '7',
        icon: {
          name: 'pen',
          color: calculateTertiaryColor(0)
        },
        name: 'Kyle'
      },
      {
        id: '8',
        icon: {
          name: 'video',
          color: calculateTertiaryColor(0)
        },
        name: 'Ryan'
      },
      {
        id: '9',
        icon: {
          name: 'video',
          color: calculateTertiaryColor(0)
        },
        name: 'Sydney'
      }
    ]
  },
};

export const Channels: Story = {
  args: {
    navHeader: 'Channels',
    navItems: [
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
