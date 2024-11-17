import type { Meta, StoryObj } from '@storybook/react';
import SubmitProgressForm from '.';

const meta = {
  title: 'Organisms/SubmitProgressForm',
  component: SubmitProgressForm,
} satisfies Meta<typeof SubmitProgressForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    currentWeek: 9
  },
};
