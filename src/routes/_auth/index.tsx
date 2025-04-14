import {
  createFileRoute,
  redirect,
  useRouter,
} from '@tanstack/react-router';
import { useState } from 'react';
import SubmitProgressForm from "../../components/organisms/SubmitProgressForm";
import { useAuth } from '../../auth'
import Hamburger from '~/components/atoms/Hamburger';
import { Card } from '~/components/Card';
import { channels, projects, weeklyStatuses } from '~/content';

import styles from './index.module.css';
import { Nav } from '~/components/Nav';
import SeasonProgress from '~/components/organisms/SeasonProgress';
import Icon from '~/components/Icon/Icon';

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
            <Nav style={{ justifyContent: "space-between" }}>
              <div className={styles["main-nav-container"]}>
                <Nav.Item
                  to="/"
                  style={{ ["--icon-color" as string]: "var(--color-secondary)"}}
                >
                  <Icon iconName='house' />
                  <span className={styles['auth-nav-item-name']}>Home</span>
                </Nav.Item>
                <Nav.Section>
                  <Nav.Header>Projects</Nav.Header>
                  {projects.map((project) => (
                    <Nav.Item
                      key={project.id}
                      to="/$id"
                      params={{ id: project.id }}
                      style={{ ["--icon-color" as string]: "var(--color-tertiary)"}}
                    >
                      <Icon iconName={project.icon} />
                      <span className={styles['auth-nav-item-name']}>{project.name}</span>
                    </Nav.Item>
                  ))}
                </Nav.Section>
                <Nav.Section>
                  <Nav.Header>Channels</Nav.Header>
                  {channels.map((channel) => (
                    <Nav.Item
                      key={channel.id}
                      to="/$id"
                      params={{ id: channel.id }}
                      style={{ ["--icon-color" as string]: "var(--color-secondary)"}}
                    >
                      <Icon iconName={channel.icon} />
                      <span className={styles['auth-nav-item-name']}>{channel.name}</span>
                    </Nav.Item>
                  ))}
                </Nav.Section>
              </div>
              <Nav.Item
                onClick={handleLogout}
                style={{ ["--icon-color" as string]: "var(--color-secondary)"}}
              >
                <Icon iconName="log-out" />
                <span className={styles['auth-nav-item-name']}>Logout</span>
              </Nav.Item>
            </Nav>
          </Card>
        </div>
        <div className={styles["main-content"]}>
          <SubmitProgressForm currentWeek={9} />
        </div>
        <div className={styles["right-sidebar-layout"]}>
          <Card appearance='secondary'>
            <SeasonProgress weeklyStatuses={weeklyStatuses}/>
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
              <Nav style={{ justifyContent: "space-between" }}>
                <div className={styles["main-nav-container"]}>
                  <Nav.Item
                    to="/"
                    style={{ ["--icon-color" as string]: "var(--color-secondary)"}}
                  >
                    <Icon iconName='house' />
                    <span className={styles['auth-nav-item-name']}>Home</span>
                  </Nav.Item>
                  <Nav.Section>
                    <Nav.Header>Projects</Nav.Header>
                    {projects.map((project) => (
                      <Nav.Item
                        key={project.id}
                        to="/$id"
                        params={{ id: project.id }}
                        style={{ ["--icon-color" as string]: "var(--color-tertiary)"}}
                      >
                        <Icon iconName={project.icon} />
                        <span className={styles['auth-nav-item-name']}>{project.name}</span>
                      </Nav.Item>
                    ))}
                  </Nav.Section>
                  <Nav.Section>
                    <Nav.Header>Channels</Nav.Header>
                    {channels.map((channel) => (
                      <Nav.Item
                        key={channel.id}
                        to="/$id"
                        params={{ id: channel.id }}
                        style={{ ["--icon-color" as string]: "var(--color-secondary)"}}
                      >
                        <Icon iconName={channel.icon} />
                        <span className={styles['auth-nav-item-name']}>{channel.name}</span>
                      </Nav.Item>
                    ))}
                  </Nav.Section>
                </div>
                <Nav.Item
                  onClick={handleLogout}
                  style={{ ["--icon-color" as string]: "var(--color-secondary)"}}
                >
                  <Icon iconName="log-out" />
                  <span className={styles['auth-nav-item-name']}>Logout</span>
                </Nav.Item>
              </Nav>
            </Card>
          </div>
        </>
      </div>
    </>
  );
}
