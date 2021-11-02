import styled from 'styled-components';
import { FunctionComponent } from 'react';

const Sidebar = styled.aside`
  width: 12.5rem;
  height: 100vh;
  padding: 2rem;
  background-color: white;
`

const SidebarLayout: FunctionComponent = ({ children }) => (
  <Sidebar>
    {children}
  </Sidebar>
);

export default SidebarLayout;