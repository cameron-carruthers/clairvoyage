import type { Meta, StoryObj } from '@storybook/react';
import PageLayout from '.';
import RightSidebarContent from '../../organisms/RightSidebarContent';
import LeftSidebarContent from '../../organisms/LeftSidebarContent';
import { tertiaryColor, secondaryColor } from '../../../theme';

const meta = {
  title: 'Templates/PageLayout',
  component: PageLayout,
} satisfies Meta<typeof PageLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithSidebarContent: Story = {
  args: {
    leftSidebar: <LeftSidebarContent
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
    />,
    rightSidebar: <RightSidebarContent
      goals={{
        learningGoal: 'Watch first section of Typography course on Frontend Masters and read Typography chapter in Design for Hackers',
        creativeGoal: 'Create design system (Color scheme, typography, buttons) and add wireframes for other parts of the site'
      }}
      weeklyStatuses={[
        {
          week: 1,
          status: 'success'
        },
        {
          week: 2,
          status: 'success'
        },
        {
          week: 3,
          status: 'success'
        },
        {
          week: 4,
          status: 'success'
        },
        {
          week: 5,
          status: 'fail'
        },
        {
          week: 6,
          status: 'success'
        },
        {
          week: 7,
          status: 'success'
        },
        {
          week: 8,
          status: 'success'
        },
        {
          week: 9,
          status: 'success'
        },
        {
          week: 10,
          status: 'incomplete'
        },
        {
          week: 11,
          status: 'incomplete'
        },
        {
          week: 12,
          status: 'incomplete'
        }
      ]}
    />
  }
};
