import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import NavItem from '.';

export default {
  title: 'NavItem',
  component: NavItem
} as ComponentMeta<typeof NavItem>;

const Template: ComponentStory<typeof NavItem> = (args) => <NavItem  {...args} />;

export const BlaineVideoEditing = Template.bind({});
BlaineVideoEditing.args = {
  icon: 'video',
  name: 'Blaine'
}

export const CameronWebDevelopment = Template.bind({});
CameronWebDevelopment.args = {
  icon: 'laptop',
  name: 'Cameron'
}

export const GeneralChannel = Template.bind({});
GeneralChannel.args = {
  icon: 'chat',
  name: 'General'
}