import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Hamburger from '.';

export default {
  title: 'Hamburger',
  component: Hamburger
} as ComponentMeta<typeof Hamburger>;

const Template: ComponentStory<typeof Hamburger> = (args) => <Hamburger {...args} />;

export const Open = Template.bind({});

Open.args = {
  open: true,
  setOpen: () => {}
};

export const Closed = Template.bind({});

Closed.args = {
  open: false,
  setOpen: () => {}
}