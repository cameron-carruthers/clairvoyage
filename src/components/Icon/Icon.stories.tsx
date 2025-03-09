import type { Meta, StoryObj } from '@storybook/react';
import Icon from '.';
import { 
  tertiaryColor,
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
    color: tertiaryColor
  },
};

export const Home: Story = {
  args: {
    iconName: 'house',
    color: tertiaryColor
  },
};

export const Laptop: Story = {
  args: {
    iconName: 'laptop',
    color: tertiaryColor
  },
};

export const Music: Story = {
  args: {
    iconName: 'music',
    color: tertiaryColor
  },
};

export const Picture: Story = {
  args: {
    iconName: 'image',
    color: tertiaryColor
  },
};

export const Video: Story = {
  args: {
    iconName: 'video',
    color: tertiaryColor
  },
};
