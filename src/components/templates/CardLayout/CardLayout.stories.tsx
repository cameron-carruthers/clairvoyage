import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import CardLayout from '.';

export default {
  title: 'Templates/CardLayout',
  component: CardLayout
} as ComponentMeta<typeof CardLayout>;

const Template: ComponentStory<typeof CardLayout> = () => <CardLayout />;

export const Default = Template.bind({});
