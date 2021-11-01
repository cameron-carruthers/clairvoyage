import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Home from '.';

export default {
  title: 'Home Icon',
  component: Home
} as ComponentMeta<typeof Home>;

const Template: ComponentStory<typeof Home> = () => <Home />;

export const Default = Template.bind({});