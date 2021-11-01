import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Close from '.';

export default {
  title: 'Close Icon',
  component: Close
} as ComponentMeta<typeof Close>;

const Template: ComponentStory<typeof Close> = () => <Close />;

export const Default = Template.bind({});