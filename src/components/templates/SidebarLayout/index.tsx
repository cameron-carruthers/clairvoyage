import styled from 'styled-components';
import { FunctionComponent } from 'react';
import { tertiaryColor, primaryColor } from '../../../theme';

const Sidebar = styled.aside`
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
  overflow: scroll;
`

const SidebarLayout: FunctionComponent = ({ children }) => (
  <Sidebar>
    {children}
  </Sidebar>
);

export default SidebarLayout;