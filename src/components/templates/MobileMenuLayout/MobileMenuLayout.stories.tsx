import type { Meta, StoryObj } from '@storybook/react';
import MobileMenuLayout from '.';
import LeftSidebarContent from '../../organisms/LeftSidebarContent';
import { tertiaryColor, secondaryColor } from '~/theme';

const meta = {
  title: 'Templates/MobileMenuLayout',
  component: MobileMenuLayout,
} satisfies Meta<typeof MobileMenuLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Open: Story = {
  args: {
    open: true,
    children: <LeftSidebarContent
      projects={[
        {
          id: '1',
          icon: {
            name: 'video',
            color: tertiaryColor
          },
          name: 'Blaine'
        }, 
        {
          id: '2',
          icon: {
            name: 'laptop',
            color: tertiaryColor
          },
          name: 'Cameron'
        },
        {
          id: '3',
          icon: {
            name: 'music',
            color: tertiaryColor
          },
          name: 'Colby'
        },
        {
          id: '4',
          icon: {
            name: 'music',
            color: tertiaryColor
          },
          name: 'Collin'
        },
        {
          id: '5',
          icon: {
            name: 'video',
            color: tertiaryColor
          },
          name: 'Ian'
        },
        {
          id: '6',
          icon: {
            name: 'image',
            color: tertiaryColor
          },
          name: 'Johnny'
        },
        {
          id: '7',
          icon: {
            name: 'pen',
            color: tertiaryColor
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
};

export const Closed: Story = {
  args: {
    open: false,
    children: <LeftSidebarContent
      projects={[
        {
          id: '1',
          icon: {
            name: 'video',
            color: tertiaryColor
          },
          name: 'Blaine'
        }, 
        {
          id: '2',
          icon: {
            name: 'laptop',
            color: tertiaryColor
          },
          name: 'Cameron'
        },
        {
          id: '3',
          icon: {
            name: 'music',
            color: tertiaryColor
          },
          name: 'Colby'
        },
        {
          id: '4',
          icon: {
            name: 'music',
            color: tertiaryColor
          },
          name: 'Collin'
        },
        {
          id: '5',
          icon: {
            name: 'video',
            color: tertiaryColor
          },
          name: 'Ian'
        },
        {
          id: '6',
          icon: {
            name: 'image',
            color: tertiaryColor
          },
          name: 'Johnny'
        },
        {
          id: '7',
          icon: {
            name: 'pen',
            color: tertiaryColor
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
};
