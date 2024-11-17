import type { Meta, StoryObj } from '@storybook/react';
import LoginForm from '.';
import { fn } from '@storybook/test';

const meta = {
  title: 'Molecules/LoginForm',
  component: LoginForm,
  args: { onSubmit: fn() },
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
