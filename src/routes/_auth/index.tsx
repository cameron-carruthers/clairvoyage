import { createFileRoute, redirect } from '@tanstack/react-router'
import LeftSidebarContent from "../../components/organisms/LeftSidebarContent";
import RightSidebarContent from "../../components/organisms/RightSidebarContent";
import SubmitProgressForm from "../../components/organisms/SubmitProgressForm";
import PageLayout from "../../components/templates/PageLayout";
import { calculateTertiaryColor, secondaryColor } from "../../theme";

export const Route = createFileRoute('/_auth/')({
  beforeLoad: ({ context, location }) => {
    if (!context.auth.isAuthenticated) {
      throw redirect({
        to: '/login',
        search: {
          redirect: location.href,
        },
      })
    }
  },
  component: AuthLayout,
})

const projects = [
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
  },
  {
    id: '8',
    icon: {
      name: 'video',
      color: calculateTertiaryColor(0)
    },
    name: 'Ryan'
  },
  {
    id: '9',
    icon: {
      name: 'video',
      color: calculateTertiaryColor(0)
    },
    name: 'Sydney'
  }
]

const channels = [
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
]

const goals = {
  learningGoal: 'Watch first section of Typography course on Frontend Masters and read Typography chapter in Design for Hackers',
  creativeGoal: 'Create design system (Color scheme, typography, buttons) and add wireframes for other parts of the site'
}

const weeklyStatuses = [
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
]

function AuthLayout() {
  return (
    <PageLayout 
      leftSidebar={
        <LeftSidebarContent 
          projects={projects}
          channels={channels}
        />
      }
      rightSidebar={
        <RightSidebarContent
          goals={goals}
          weeklyStatuses={weeklyStatuses}
        />
      }
    >
      <SubmitProgressForm currentWeek={9} />
    </PageLayout>
  )
}
