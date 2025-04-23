import {
  createFileRoute,
  redirect,
  useRouter,
} from '@tanstack/react-router';
import { useState } from 'react';
import { useAuth } from '../../auth'
import Hamburger from '~/components/atoms/Hamburger';
import { Card } from '~/components/Card';
import { channels, projects, statuses } from '~/content';

import styles from './index.module.css';
import { Nav } from '~/components/Nav';
import { StatusTracker } from '~/components/StatusTracker/StatusTracker';
import Icon from '~/components/Icon/Icon';
import { Cloud } from '~/components/Cloud';
import { Form } from '~/components/Form';

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
          <div style={{ position: 'relative', maxWidth: '670px', width: '100%', height: 'fit-content' }}>
            <Cloud style={{ animationDuration: "8s", top: "6rem", right: "1.5rem" }} />
            <Cloud style={{ animationDuration: "7s", bottom: "2.5rem", left: "-2rem" }} />
            <Card>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 'var(--size-1)'
              }}>
                <h1
                  style={{
                    fontFamily: "var(--font-secondary)",
                    fontSize: "var(--heading-two-font-size-desktop)",
                    margin: 0,
                    lineHeight: 1.5,
                    fontWeight: "var(--font-weight-normal)",
                    textAlign: "center"
                  }}
                >Submit Progress</h1>
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 'var(--size-6)'
                }}>
                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 'var(--size-3)'
                  }}>
                    <Form.Field name="learning" type="text">
                      <Form.Label>Week 1 Learning Progress</Form.Label>
                      <Form.TextArea />
                    </Form.Field>
                    <Form.Field name="creative" type="text">
                      <Form.Label>Week 1 Creative Progress</Form.Label>
                      <Form.TextArea />
                    </Form.Field>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <Form.Button>Submit</Form.Button>
                  </div>
                </div>
              </div>
            </Card>
            <Cloud style={{ top: "0.5rem", left: "-1rem" }} />
            <Cloud style={{ animationDuration: "9s", bottom: "-1.5rem", right: "2.5rem" }} />
          </div>
        </div>
        <div className={styles["right-sidebar-layout"]}>
          <Card appearance='secondary'>
            <StatusTracker heading="This Season" statuses={statuses}/>
          </Card>
          <Card appearance='secondary'>
            <StatusTracker
              heading="Misses"
              statuses={[
                {
                  label: 'Skip Week',
                  status: 'fail'
                },
                {
                  label: 'Kicked Out',
                  status: 'incomplete'
                }
              ]}
            />
          </Card>
        </div>
      </div>
      <div className={styles["mobile-container"]}>
        <div className={styles["main-mobile-content"]}>
          <Cloud style={{ animationDuration: "8s", top: "9rem", right: "1.5rem" }} />
          <Cloud style={{ animationDuration: "7s", bottom: "31rem", left: "-2rem" }} />
          <Card>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--size-1)'
            }}>
              <h1
                style={{
                  fontFamily: "var(--font-secondary)",
                  fontSize: "var(--heading-two-font-size-desktop)",
                  margin: 0,
                  lineHeight: 1.5,
                  fontWeight: "var(--font-weight-normal)",
                  textAlign: "center"
                }}
              >Submit Progress</h1>
              <Form.Field name="email" type="email" isRequired>
                <Form.Label>Week 1 Learning Progress</Form.Label>
                <Form.TextArea />
                <Form.Error />
              </Form.Field>
              <Form.Field name="email" type="email" isRequired>
                <Form.Label>Week 1 Creative Progress</Form.Label>
                <Form.TextArea />
                <Form.Error />
              </Form.Field>
              <Form.Button>Submit</Form.Button>
            </div>
          </Card>
          <Cloud style={{ top: "0.5rem", left: "-1rem" }} />
          <Cloud style={{ animationDuration: "9s", bottom: "4.5rem", right: "2.5rem" }} />
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
