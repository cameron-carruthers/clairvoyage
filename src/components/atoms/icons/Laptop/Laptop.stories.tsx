import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Laptop from '.';

export default {
  title: 'Laptop Icon',
  component: Laptop
} as ComponentMeta<typeof Laptop>;

const Template: ComponentStory<typeof Laptop> = () => <Laptop />;

export const Default = Template.bind({});