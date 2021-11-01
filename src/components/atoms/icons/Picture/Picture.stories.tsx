import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Picture from '.';

export default {
  title: 'Picture Icon',
  component: Picture
} as ComponentMeta<typeof Picture>;

const Template: ComponentStory<typeof Picture> = () => <Picture />;

export const Default = Template.bind({});