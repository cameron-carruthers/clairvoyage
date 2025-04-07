import {
  createFileRoute,
  redirect,
  useRouter,
} from '@tanstack/react-router';
import { useState } from 'react';
import LeftSidebarContent from "../../components/organisms/LeftSidebarContent";
import RightSidebarContent from "../../components/organisms/RightSidebarContent";
import SubmitProgressForm from "../../components/organisms/SubmitProgressForm";
import { useAuth } from '../../auth'
import Hamburger from '~/components/atoms/Hamburger';
import { Card } from '~/components/Card';
import { channels, goals, projects, weeklyStatuses } from '~/content';

import styles from './index.module.css';

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

function AuthLayout() {
  const [open, setOpen] = useState(false);

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
    <>
      <div className={styles["desktop-container"]}>
        <div className={styles["left-sidebar-layout"]}>
          <Card appearance='secondary'>
            <LeftSidebarContent 
              projects={projects}
              channels={channels}
            />
          </Card>
        </div>
        <div className={styles["main-content"]}>
          <SubmitProgressForm currentWeek={9} />
        </div>
        <div className={styles["right-sidebar-layout"]}>
          <Card appearance='secondary'>
            <RightSidebarContent
              goals={goals}
              weeklyStatuses={weeklyStatuses}
              handleLogout={handleLogout}
            />
          </Card>
        </div>
      </div>
      <div className={styles["mobile-container"]}>
        <div className={styles["main-mobile-content"]}>
          <SubmitProgressForm currentWeek={9} />
        </div>
        <>
          <Hamburger open={open} setOpen={setOpen} />
          <div data-open={open}>
            <Card appearance="secondary">
              <LeftSidebarContent 
                projects={projects}
                channels={channels}
              />
            </Card>
          </div>
        </>
      </div>
    </>
  );
}
