import styled from 'styled-components';
import { ReactElement } from 'react';
import SidebarLayout from '../SidebarLayout';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100vw;
`

interface PageLayoutProps {
  leftSidebar: ReactElement
  rightSidebar: ReactElement
  mainContent: ReactElement
}

const PageLayout = ({ leftSidebar, rightSidebar, mainContent }: PageLayoutProps) => (
  <Container>
    <SidebarLayout>
      {leftSidebar}
    </SidebarLayout>
      {mainContent}
    <SidebarLayout>
      {rightSidebar}
    </SidebarLayout>
  </Container>
);

export default PageLayout;