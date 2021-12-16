import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { calculateTertiaryColor, secondaryColor } from '../../../theme';

import MobileMenuLayout from '.';
import LeftSidebarContent from '../../organisms/LeftSidebarContent';

export default {
  title: 'Templates/MobileMenuLayout',
  component: MobileMenuLayout
} as ComponentMeta<typeof MobileMenuLayout>;

const Template: ComponentStory<typeof MobileMenuLayout> = (args) => (
  <MobileMenuLayout {...args}>
    {args.children}
  </MobileMenuLayout>
);

export const Open = Template.bind({});
Open.args = {
  open: true,
  children: <LeftSidebarContent
    projects={[
      {
        id: '1',
        icon: {
          name: 'video',
          color: calculateTertiaryColor(0)
        },
        name: 'Blaine'
      }, 
      {
        id: '2',
        icon: {
          name: 'laptop',
          color: calculateTertiaryColor(0)
        },
        name: 'Cameron'
      },
      {
        id: '3',
        icon: {
          name: 'music',
          color: calculateTertiaryColor(0)
        },
        name: 'Colby'
      },
      {
        id: '4',
        icon: {
          name: 'music',
          color: calculateTertiaryColor(0)
        },
        name: 'Collin'
      },
      {
        id: '5',
        icon: {
          name: 'video',
          color: calculateTertiaryColor(0)
        },
        name: 'Ian'
      },
      {
        id: '6',
        icon: {
          name: 'picture',
          color: calculateTertiaryColor(0)
        },
        name: 'Johnny'
      },
      {
        id: '7',
        icon: {
          name: 'edit',
          color: calculateTertiaryColor(0)
        },
        name: 'Kyle'
      }
    ]}
    channels={[
      {
        id: '1',
        icon: {
          name: 'chat',
          color: secondaryColor
        },
        name: 'General'
      },
      {
        id: '2',
        icon: {
          name: 'chat',
          color: secondaryColor
        },
        name: 'Inspiration'
      }
    ]}
  />
}

export const Closed = Template.bind({});
Closed.args = {
  open: false,
  children: <LeftSidebarContent
    projects={[
      {
        id: '1',
        icon: {
          name: 'video',
          color: calculateTertiaryColor(0)
        },
        name: 'Blaine'
      }, 
      {
        id: '2',
        icon: {
          name: 'laptop',
          color: calculateTertiaryColor(0)
        },
        name: 'Cameron'
      },
      {
        id: '3',
        icon: {
          name: 'music',
          color: calculateTertiaryColor(0)
        },
        name: 'Colby'
      },
      {
        id: '4',
        icon: {
          name: 'music',
          color: calculateTertiaryColor(0)
        },
        name: 'Collin'
      },
      {
        id: '5',
        icon: {
          name: 'video',
          color: calculateTertiaryColor(0)
        },
        name: 'Ian'
      },
      {
        id: '6',
        icon: {
          name: 'picture',
          color: calculateTertiaryColor(0)
        },
        name: 'Johnny'
      },
      {
        id: '7',
        icon: {
          name: 'edit',
          color: calculateTertiaryColor(0)
        },
        name: 'Kyle'
      }
    ]}
    channels={[
      {
        id: '1',
        icon: {
          name: 'chat',
          color: secondaryColor
        },
        name: 'General'
      },
      {
        id: '2',
        icon: {
          name: 'chat',
          color: secondaryColor
        },
        name: 'Inspiration'
      }
    ]}
  />
}