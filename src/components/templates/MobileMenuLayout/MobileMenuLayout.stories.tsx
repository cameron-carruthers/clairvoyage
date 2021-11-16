import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import MobileMenuLayout from '.';
import LeftSidebarContent from '../../organisms/LeftSidebarContent';

export default {
  title: 'Template/MobileMenuLayout',
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
        icon: 'video',
        name: 'Blaine'
      }, 
      {
        id: '2',
        icon: 'laptop',
        name: 'Cameron'
      },
      {
        id: '3',
        icon: 'music',
        name: 'Colby'
      },
      {
        id: '2',
        icon: 'laptop',
        name: 'Cameron'
      },
      {
        id: '4',
        icon: 'music',
        name: 'Collin'
      },
      {
        id: '5',
        icon: 'video',
        name: 'Ian'
      },
      {
        id: '6',
        icon: 'picture',
        name: 'Johnny'
      },
      {
        id: '7',
        icon: 'edit',
        name: 'Kyle'
      },
      {
        id: '8',
        icon: 'video',
        name: 'Ryan'
      },
      {
        id: '9',
        icon: 'video',
        name: 'Sydney'
      }
    ]}
    channels={[
      {
        id: '1',
        icon: 'chat',
        name: 'General'
      },
      {
        id: '2',
        icon: 'chat',
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
        icon: 'video',
        name: 'Blaine'
      }, 
      {
        id: '2',
        icon: 'laptop',
        name: 'Cameron'
      },
      {
        id: '3',
        icon: 'music',
        name: 'Colby'
      },
      {
        id: '2',
        icon: 'laptop',
        name: 'Cameron'
      },
      {
        id: '4',
        icon: 'music',
        name: 'Collin'
      },
      {
        id: '5',
        icon: 'video',
        name: 'Ian'
      },
      {
        id: '6',
        icon: 'picture',
        name: 'Johnny'
      },
      {
        id: '7',
        icon: 'edit',
        name: 'Kyle'
      },
      {
        id: '8',
        icon: 'video',
        name: 'Ryan'
      },
      {
        id: '9',
        icon: 'video',
        name: 'Sydney'
      }
    ]}
    channels={[
      {
        id: '1',
        icon: 'chat',
        name: 'General'
      },
      {
        id: '2',
        icon: 'chat',
        name: 'Inspiration'
      }
    ]}
  />
}