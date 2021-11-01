import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Hamburger from '.';

export default {
  title: 'Hamburger Icon',
  component: Hamburger
} as ComponentMeta<typeof Hamburger>;

const Template: ComponentStory<typeof Hamburger> = () => <Hamburger />;

export const Default = Template.bind({});