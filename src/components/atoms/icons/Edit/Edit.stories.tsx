import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Edit from '.';

export default {
  title: 'Edit Icon',
  component: Edit
} as ComponentMeta<typeof Edit>;

const Template: ComponentStory<typeof Edit> = () => <Edit />;

export const Default = Template.bind({});