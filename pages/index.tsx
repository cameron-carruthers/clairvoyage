import type { NextPage } from 'next'
import Head from 'next/head'
import PageLayout from '../src/components/templates/PageLayout';
import LeftSidebarContent from '../src/components/organisms/LeftSidebarContent';
import RightSidebarContent from '../src/components/organisms/RightSidebarContent';
import MobileMenuContent from '../src/components/organisms/MobileMenuContent';

const projects = [
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
]

const channels = [
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

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Clairvoyage</title>
        <meta name="description" content="A 12 week journey for creators" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
        <div></div>
      </PageLayout>
    </>
  )
}

export default Home
