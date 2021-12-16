import styled from 'styled-components';
import { navigationHeading } from '../../../theme';
import NavItem from '../../molecules/NavItem';

const NavHeader = styled.h1`
  font-family: ${navigationHeading.fontFamily};
  font-size: ${navigationHeading.fontSize.desktop};
  font-weight: ${navigationHeading.fontWeight};
  line-height: 1.5;
  margin: 0;
  margin-top: 1rem;
  color: ${navigationHeading.color};

  @media (max-width: 600px) {
    font-size: ${navigationHeading.fontSize.mobile};
  }
`

interface NavSectionProps {
  navHeader: string,
  navItems: NavItem[]
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

const NavSection = ({ navItems, navHeader }: NavSectionProps) => (
  <section>
    <NavHeader>{navHeader}</NavHeader>
    {navItems.map(({ id, icon, name }) => (
      <NavItem key={id} icon={icon} name={name} />
    ))}
  </section>
)

export default NavSection;