import type { NextPage } from 'next'
import Head from 'next/head'
import PageLayout from '../src/components/templates/PageLayout';
import LeftSidebar from '../src/components/organisms/LeftSidebar';
import RightSidebar from '../src/components/organisms/RightSidebar';

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

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Clairvoyage</title>
        <meta name="description" content="A 12 week journey for creators" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true' />
        <link href="https://fonts.googleapis.com/css2?family=Sofia&display=swap" rel="stylesheet" />
      </Head>
      <PageLayout 
        leftSidebar={
          <LeftSidebar 
            projects={projects}
            channels={channels}
          />
        }
        rightSidebar={
          <RightSidebar
            goals={goals}
          />
        }
      >
        <div>Does this still work?</div>
      </PageLayout>
    </>
  )
}

export default Home
