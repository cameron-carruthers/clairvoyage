import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { calculateTertiaryColor, secondaryColor } from '../../../theme';

import NavItem from '.';

export default {
  title: 'Molecules/NavItem',
  component: NavItem
} as ComponentMeta<typeof NavItem>;

const Template: ComponentStory<typeof NavItem> = (args) => <NavItem  {...args} />;

export const BlaineVideoEditing = Template.bind({});
BlaineVideoEditing.args = {
  icon: {
    name: 'video',
    color: calculateTertiaryColor(0)
  },
  name: 'Blaine'
}
BlaineVideoEditing.parameters = {
  backgrounds: { default: 'light' }
};

export const CameronWebDevelopment = Template.bind({});
CameronWebDevelopment.args = {
  icon: {
    name: 'laptop',
    color: calculateTertiaryColor(0)
  },
  name: 'Cameron'
}
CameronWebDevelopment.parameters = {
  backgrounds: { default: 'light' }
};

export const GeneralChannel = Template.bind({});
GeneralChannel.args = {
  icon: {
    name: 'chat',
    color: secondaryColor
  },
  name: 'General'
}
GeneralChannel.parameters = {
  backgrounds: { default: 'light' }
};