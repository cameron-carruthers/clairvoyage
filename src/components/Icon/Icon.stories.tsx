import type { Meta, StoryObj } from '@storybook/react';
import Icon from '.';
import { 
  calculateTertiaryColor,
  secondaryColor,
  successColor,
  textColor,
  failColor
} from '~/theme';

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
    iconName: 'chat',
    color: secondaryColor
  },
};

export const Success: Story = {
  args: {
    iconName: 'circle-check',
    color: successColor
  },
};

export const Incomplete: Story = {
  args: {
    iconName: 'circle',
    color: textColor
  },
};

export const Fail: Story = {
  args: {
    iconName: 'circle-x',
    color: failColor
  },
};

export const Edit: Story = {
  args: {
    iconName: 'pen',
    color: calculateTertiaryColor(0)
  },
};

export const Home: Story = {
  args: {
    iconName: 'house',
    color: calculateTertiaryColor(0)
  },
};

export const Laptop: Story = {
  args: {
    iconName: 'laptop',
    color: calculateTertiaryColor(0)
  },
};

export const Music: Story = {
  args: {
    iconName: 'music',
    color: calculateTertiaryColor(0)
  },
};

export const Picture: Story = {
  args: {
    iconName: 'image',
    color: calculateTertiaryColor(0)
  },
};

export const Video: Story = {
  args: {
    iconName: 'video',
    color: calculateTertiaryColor(0)
  },
};
