import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Circle from '.';

export default {
  title: 'Circle Icon',
  component: Circle
} as ComponentMeta<typeof Circle>;

const Template: ComponentStory<typeof Circle> = () => <Circle />;

export const Default = Template.bind({});