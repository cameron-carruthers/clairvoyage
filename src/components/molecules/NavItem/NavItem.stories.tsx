import type { Meta, StoryObj } from '@storybook/react';
import NavItem from '.';
import { calculateTertiaryColor, secondaryColor } from '../../../theme';

const meta = {
  title: 'Molecules/NavItem',
  component: NavItem,
  globals: {
    backgrounds: { value: 'light' },
  },
} satisfies Meta<typeof NavItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BlaineVideoEditing: Story = {
  args: {
    icon: {
      name: 'video',
      color: calculateTertiaryColor(0)
    },
    name: 'Blaine'
  },
};

export const CameronWebDevelopment: Story = {
  args: {
    icon: {
      name: 'laptop',
      color: calculateTertiaryColor(0)
    },
    name: 'Cameron'
  },
};

export const GeneralChannel: Story = {
  args: {
    icon: {
      name: 'chat',
      color: secondaryColor
    },
    name: 'General'
  },
};
