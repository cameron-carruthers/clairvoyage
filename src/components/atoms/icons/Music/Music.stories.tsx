import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Music from '.';

export default {
  title: 'Music Icon',
  component: Music
} as ComponentMeta<typeof Music>;

const Template: ComponentStory<typeof Music> = () => <Music />;

export const Default = Template.bind({});