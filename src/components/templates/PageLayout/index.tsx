import styled from 'styled-components';
import { ReactElement, useState } from 'react';
import SidebarLayout from '../SidebarLayout';
import MobileMenuLayout from '../MobileMenuLayout';
import Hamburger from '../../atoms/Hamburger';

const DesktopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100vw;

  @media (max-width: 600px) {
    display: none;
  }
`;

const MobileContainer = styled.div`

  @media (min-width: 601px) {
    display: none;
  }
`;

interface PageLayoutProps {
  leftSidebar: ReactElement
  rightSidebar: ReactElement
  children: ReactElement
  mobileMenu: ReactElement
}

const PageLayout = ({ leftSidebar, rightSidebar, children }: PageLayoutProps) => {
  const [open, setOpen] = useState(false);

  return ( 
    <>
      <DesktopContainer>
        <SidebarLayout>
          {leftSidebar}
        </SidebarLayout>
          {children}
        <SidebarLayout>
          {rightSidebar}
        </SidebarLayout>
      </DesktopContainer>
      <MobileContainer>
        {children}
        <div>
          <Hamburger open={open} setOpen={setOpen} />
          <MobileMenuLayout open={open}>
            {leftSidebar}
          </MobileMenuLayout>
        </div>
      </MobileContainer>
    </>
  );
};

export default PageLayout;