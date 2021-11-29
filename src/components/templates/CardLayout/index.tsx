import styled from 'styled-components';
import { FunctionComponent } from 'react';

const Card = styled.section`
  background: rgba( 255, 255, 255, 0.25 );
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  backdrop-filter: blur( 4px );
  -webkit-backdrop-filter: blur( 4px );
  border: 1px solid rgba( 255, 255, 255, 0.18 );
  border-radius: 2rem;
  padding: 3rem;

  @media (max-width: 600px) {
    padding: 1.5rem;
  }
`

const CardLayout: FunctionComponent = ({ children }) => (
  <Card>
    {children}
  </Card>
);

export default CardLayout;