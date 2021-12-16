import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { 
  calculateTertiaryColor,
  secondaryColor,
  successColor,
  textColor,
  failColor
} from '../../../theme';

import Icon from '.';

export default {
  title: 'Atoms/Icon',
  component: Icon
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon  {...args} />;

export const Chat = Template.bind({});
Chat.args = {
  iconName: 'chat',
  color: secondaryColor
}
Chat.parameters = {
  backgrounds: { default: 'light' }
};

export const Success = Template.bind({});
Success.args = {
  iconName: 'success',
  color: successColor
}
Success.parameters = {
  backgrounds: { default: 'light' }
};

export const Incomplete = Template.bind({});
Incomplete.args = {
  iconName: 'incomplete',
  color: textColor
}
Incomplete.parameters = {
  backgrounds: { default: 'light' }
};

export const Fail = Template.bind({});
Fail.args = {
  iconName: 'fail',
  color: failColor
}
Fail.parameters = {
  backgrounds: { default: 'light' }
};

export const Edit = Template.bind({});
Edit.args = {
  iconName: 'edit',
  color: calculateTertiaryColor(0)
}
Edit.parameters = {
  backgrounds: { default: 'light' }
};

export const Home = Template.bind({});
Home.args = {
  iconName: 'home',
  color: calculateTertiaryColor(0)
}
Home.parameters = {
  backgrounds: { default: 'light' }
};

export const Laptop = Template.bind({});
Laptop.args = {
  iconName: 'laptop',
  color: calculateTertiaryColor(0)
}
Laptop.parameters = {
  backgrounds: { default: 'light' }
};

export const Music = Template.bind({});
Music.args = {
  iconName: 'music',
  color: calculateTertiaryColor(0)
}
Music.parameters = {
  backgrounds: { default: 'light' }
};

export const Picture = Template.bind({});
Picture.args = {
  iconName: 'picture',
  color: calculateTertiaryColor(0)
}
Picture.parameters = {
  backgrounds: { default: 'light' }
};

export const Video = Template.bind({});
Video.args = {
  iconName: 'video',
  color: calculateTertiaryColor(0)
}
Video.parameters = {
  backgrounds: { default: 'light' }
};