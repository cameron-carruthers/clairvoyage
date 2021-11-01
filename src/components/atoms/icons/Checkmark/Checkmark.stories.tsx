import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Checkmark from '.';

export default {
  title: 'Checkmark Icon',
  component: Checkmark
} as ComponentMeta<typeof Checkmark>;

const Template: ComponentStory<typeof Checkmark> = () => <Checkmark />;

export const Default = Template.bind({});