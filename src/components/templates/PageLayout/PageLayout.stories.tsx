import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { calculateTertiaryColor, secondaryColor } from '../../../theme';

import PageLayout from '.';
import RightSidebarContent from '../../organisms/RightSidebarContent';
import LeftSidebarContent from '../../organisms/LeftSidebarContent';

export default {
  title: 'Templates/PageLayout',
  component: PageLayout
} as ComponentMeta<typeof PageLayout>;

const Template: ComponentStory<typeof PageLayout> = (args) => (
  <PageLayout {...args}>
    {args.children}
  </PageLayout>
);

export const Default = Template.bind({});

export const WithSidebarContent = Template.bind({});
WithSidebarContent.args = {
  leftSidebar: <LeftSidebarContent
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