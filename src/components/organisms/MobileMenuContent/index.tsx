import NavItem from '../../molecules/NavItem';
import NavSection from '../NavSection';

interface MobileMenuContentProps {
  projects: NavItem[],
  channels: NavItem[]
}

interface NavItem {
  id: string,
  icon: string,
  name: string
}

const MobileMenuContent = ({ projects, channels }: MobileMenuContentProps) => (
  <nav>
    <NavSection navHeader='Projects' navItems={projects} />
    <NavSection navHeader='Channels' navItems={channels} />
  </nav>
)

export default MobileMenuContent;