import NavItem from '../../molecules/NavItem';
import NavSection from '../NavSection';
import { secondaryColor } from '../../../theme';

interface LeftSidebarContentProps {
  projects: NavItem[],
  channels: NavItem[]
}

interface NavItem {
  id: string,
  icon: Icon,
  name: string
}

interface Icon {
  name: string
  color: string
}

const LeftSidebarContent = ({ projects, channels }: LeftSidebarContentProps) => (
  <nav>
    <NavItem icon={{ name: 'home', color: secondaryColor }} name='Home' />
    <NavSection navHeader='Projects' navItems={projects} />
    <NavSection navHeader='Channels' navItems={channels} />
  </nav>
)

export default LeftSidebarContent;