import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Icon from '.';

export default {
  title: 'Atoms/Icon',
  component: Icon
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon  {...args} />;

export const Chat = Template.bind({});
Chat.args = {
  iconName: 'chat'
}
Chat.parameters = {
  backgrounds: { default: 'light' }
};

export const Success = Template.bind({});
Success.args = {
  iconName: 'success'
}
Success.parameters = {
  backgrounds: { default: 'light' }
};

export const Incomplete = Template.bind({});
Incomplete.args = {
  iconName: 'incomplete'
}
Incomplete.parameters = {
  backgrounds: { default: 'light' }
};

export const Fail = Template.bind({});
Fail.args = {
  iconName: 'fail'
}
Fail.parameters = {
  backgrounds: { default: 'light' }
};

export const Edit = Template.bind({});
Edit.args = {
  iconName: 'edit'
}
Edit.parameters = {
  backgrounds: { default: 'light' }
};

export const Home = Template.bind({});
Home.args = {
  iconName: 'home'
}
Home.parameters = {
  backgrounds: { default: 'light' }
};

export const Laptop = Template.bind({});
Laptop.args = {
  iconName: 'laptop'
}
Laptop.parameters = {
  backgrounds: { default: 'light' }
};

export const Music = Template.bind({});
Music.args = {
  iconName: 'music'
}
Music.parameters = {
  backgrounds: { default: 'light' }
};

export const Picture = Template.bind({});
Picture.args = {
  iconName: 'picture'
}
Picture.parameters = {
  backgrounds: { default: 'light' }
};

export const Video = Template.bind({});
Video.args = {
  iconName: 'video'
}
Video.parameters = {
  backgrounds: { default: 'light' }
};