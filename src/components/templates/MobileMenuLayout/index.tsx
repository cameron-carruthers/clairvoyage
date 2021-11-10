import styled from 'styled-components';
import { ReactElement } from 'react';

interface MenuProps {
  open: boolean;
}

interface MobileMenuLayoutProps {
  open: boolean
  children: ReactElement
}

const Menu = styled.aside<MenuProps>`
  width: 12.5rem;
  height: 98vh;
  padding: 2rem;
  background: rgba( 255, 255, 255, 0.75 );
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  backdrop-filter: blur( 10px );
  -webkit-backdrop-filter: blur( 10px );
  border: 1px solid rgba( 255, 255, 255, 0.18 );
  border-radius: 1rem;
  margin: 0.5rem;
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