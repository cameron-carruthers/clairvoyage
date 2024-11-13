import { styled } from 'styled-components';
import { ReactElement, useState } from 'react';
import MobileMenuLayout from '../MobileMenuLayout';
import Hamburger from '../../atoms/Hamburger';
import SidebarLayout from '../SidebarLayout';

const DesktopContainer = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: 1100px) {
    display: none;
  }
`;

const MobileContainer = styled.div`

  @media (min-width: 1101px) {
    display: none;
  }
`;

const MainContent = styled.div`
  padding-top: 6rem;
  padding-bottom: 6rem;
  flex-basis: 60vw;
`

const MainMobileContent = styled.div`
  padding-top: 3rem;
  padding-bottom: 3rem;
  flex-basis: 80vw;
`;

const LeftSidebarLayout = styled(SidebarLayout)`
  position: fixed;
  top: 0;
  left: 0;
`

const RightSidebarLayout = styled(SidebarLayout)`
  position: fixed;
  top: 0;
  right: 0;
`

interface PageLayoutProps {
  leftSidebar: ReactElement
  rightSidebar: ReactElement
  children: ReactElement
}

const PageLayout = ({ leftSidebar, rightSidebar, children }: PageLayoutProps) => {
  const [open, setOpen] = useState(false);

  return ( 
    <>
      <DesktopContainer>
        <LeftSidebarLayout>
          {leftSidebar}
        </LeftSidebarLayout>
        <MainContent>
          {children}
        </MainContent>
        <RightSidebarLayout>
          {rightSidebar}
        </RightSidebarLayout>
      </DesktopContainer>
      <MobileContainer>
        <MainMobileContent>
          {children}
        </MainMobileContent>
        <>
          <Hamburger open={open} setOpen={setOpen} />
          <MobileMenuLayout open={open}>
            {leftSidebar}
          </MobileMenuLayout>
        </>
      </MobileContainer>
    </>
  );
};

export default PageLayout;