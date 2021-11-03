import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Icon from '.';

export default {
  title: 'Icon',
  component: Icon
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon  {...args} />;

export const Chat = Template.bind({});
Chat.args = {
  iconName: 'chat'
}

export const Checkmark = Template.bind({});
Checkmark.args = {
  iconName: 'checkmark'
}

export const Circle = Template.bind({});
Circle.args = {
  iconName: 'circle'
}

export const Close = Template.bind({});
Close.args = {
  iconName: 'close'
}

export const Edit = Template.bind({});
Edit.args = {
  iconName: 'edit'
}

export const Hamburger = Template.bind({});
Hamburger.args = {
  iconName: 'hamburger'
}

export const Home = Template.bind({});
Home.args = {
  iconName: 'home'
}

export const Laptop = Template.bind({});
Laptop.args = {
  iconName: 'laptop'
}

export const Music = Template.bind({});
Music.args = {
  iconName: 'music'
}

export const Picture = Template.bind({});
Picture.args = {
  iconName: 'picture'
}

export const Video = Template.bind({});
Video.args = {
  iconName: 'video'
}