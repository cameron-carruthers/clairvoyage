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
  children: ReactElement
}

const PageLayout = ({ leftSidebar, rightSidebar, children }: PageLayoutProps) => (
  <Container>
    <SidebarLayout>
      {leftSidebar}
    </SidebarLayout>
      {children}
    <SidebarLayout>
      {rightSidebar}
    </SidebarLayout>
  </Container>
);

export default PageLayout;