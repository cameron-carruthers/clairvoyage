import NavItem from '../../molecules/NavItem';
import NavSection from '../NavSection';

interface LeftSidebarProps {
  projects: NavItem[],
  channels: NavItem[]
}

interface NavItem {
  id: string,
  icon: string,
  name: string
}

const LeftSidebar = ({ projects, channels }: LeftSidebarProps) => (
  <nav>
    <NavItem icon='home' name='Home' />
    <NavSection navHeader='Projects' navItems={projects} />
    <NavSection navHeader='Channels' navItems={channels} />
  </nav>
)

export default LeftSidebar;