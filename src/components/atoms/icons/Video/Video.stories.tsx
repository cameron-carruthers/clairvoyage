import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Video from '.';

export default {
  title: 'Video Icon',
  component: Video
} as ComponentMeta<typeof Video>;

const Template: ComponentStory<typeof Video> = () => <Video />;

export const Default = Template.bind({});