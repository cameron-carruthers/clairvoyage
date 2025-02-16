import type { Meta, StoryObj } from '@storybook/react';
import CardLayout from '.';

const meta = {
  title: 'Templates/CardLayout',
  component: CardLayout,
} satisfies Meta<typeof CardLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
