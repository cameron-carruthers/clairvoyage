import type { Meta, StoryObj } from '@storybook/react';
import Icon from './Icon';

const meta = {
  title: 'Components/Icon',
  component: Icon,
  globals: {
    backgrounds: { value: 'light' },
  },
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Chat: Story = {
  args: {
    iconName: 'chat'
  },
};

export const Success: Story = {
  args: {
    iconName: 'circle-check'
  },
};

export const Incomplete: Story = {
  args: {
    iconName: 'circle'
  },
};

export const Fail: Story = {
  args: {
    iconName: 'circle-x'
  },
};

export const Edit: Story = {
  args: {
    iconName: 'pen'
  },
};

export const Home: Story = {
  args: {
    iconName: 'house'
  },
};

export const Laptop: Story = {
  args: {
    iconName: 'laptop'
  },
};

export const Music: Story = {
  args: {
    iconName: 'music'
  },
};

export const Picture: Story = {
  args: {
    iconName: 'image'
  },
};

export const Video: Story = {
  args: {
    iconName: 'video'
  },
};
