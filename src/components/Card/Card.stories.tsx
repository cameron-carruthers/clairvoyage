import type { Meta, StoryObj } from '@storybook/react';
import { Card } from '.';

const meta = {
  title: 'Templates/Card',
  component: Card,
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Secondary: Story = {
  args: {
    appearance: "secondary"
  }
};
