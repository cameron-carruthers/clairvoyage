import {
  createFileRoute,
  redirect,
  useRouter,
} from '@tanstack/react-router';
import LeftSidebarContent from "../../components/organisms/LeftSidebarContent";
import RightSidebarContent from "../../components/organisms/RightSidebarContent";
import SubmitProgressForm from "../../components/organisms/SubmitProgressForm";
import PageLayout from "../../components/templates/PageLayout";
import { tertiaryColor, secondaryColor } from "../../theme";
import { useAuth } from '../../auth'

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
  },
  {
    id: '8',
    icon: {
      name: 'video',
      color: tertiaryColor
    },
    name: 'Ryan'
  },
  {
    id: '9',
    icon: {
      name: 'video',
      color: tertiaryColor
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
  const router = useRouter()
  const navigate = Route.useNavigate()
  const auth = useAuth()

  const handleLogout = () => {
    auth.logout()
    router.invalidate().finally(() => {
      navigate({ to: '/login' })
    })
  }

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
          handleLogout={handleLogout}
        />
      }
    >
      <SubmitProgressForm currentWeek={9} />
    </PageLayout>
  )
}
