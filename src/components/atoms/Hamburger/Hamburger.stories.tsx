import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import Hamburger from '.';

const meta = {
  title: 'Atoms/Hamburger',
  component: Hamburger,
  args: { setOpen: fn() },
} satisfies Meta<typeof Hamburger>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Open: Story = {
  args: {
    open: true,
  },
};

export const Closed: Story = {
  args: {
    open: false,
  },
};
