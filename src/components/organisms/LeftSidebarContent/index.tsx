import type { NavItemProps } from '~/components/Nav';
import { secondaryColor } from '~/theme';
import { Nav } from '~/components/Nav';
import styled from 'styled-components';

interface LeftSidebarContentProps {
  projects: NavItemProps[];
  channels: NavItemProps[];
}

const MainNavContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const LeftSidebarContent = ({ projects, channels }: LeftSidebarContentProps) => (
  <Nav justify="space-between">
    <MainNavContainer>
      <Nav.Item icon={{ name: 'house', color: secondaryColor }} name='Home' id='123' />
      <Nav.Section>
        <Nav.Header>Projects</Nav.Header>
        {projects.map((project) => (
          <Nav.Item key={project.id} name={project.name} id={project.id} icon={project.icon}></Nav.Item>
        ))}
      </Nav.Section>
      <Nav.Section>
        <Nav.Header>Channels</Nav.Header>
        {channels.map((channel) => (
          <Nav.Item key={channel.id} name={channel.name} id={channel.id} icon={channel.icon}></Nav.Item>
        ))}
      </Nav.Section>
    </MainNavContainer>
    <Nav.Item icon={{ name: 'log-out', color: secondaryColor }} name='Logout' id='123' />
  </Nav>
)

export default LeftSidebarContent;