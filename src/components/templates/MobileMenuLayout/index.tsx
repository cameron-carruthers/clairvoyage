import { styled } from 'styled-components';
import { ReactElement } from 'react';
import SidebarLayout from '../SidebarLayout';

interface MenuProps {
  open: boolean;
}

interface MobileMenuLayoutProps {
  open: boolean
  children?: ReactElement
}

const Menu = styled(SidebarLayout)<MenuProps>`
  position: absolute;
  right: 0;
  top: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(110%)'};
`

const MobileMenuLayout = ({ open, children }: MobileMenuLayoutProps) => (
  <Menu open={open} >
    {children}
  </Menu>
);

export default MobileMenuLayout;