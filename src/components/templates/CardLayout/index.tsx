import { styled } from 'styled-components';
import { ReactElement } from 'react';

const Card = styled.section`
  background: hsla(0,0%,100%,.3);
  border: 1px solid hsla(0, 0%, 100%, .8);
  padding: 3rem;
  border-radius: 2rem;
  position: relative;

  @media (max-width: 600px) {
    padding: 1.5rem;
  }
`;

interface CardLayoutProps {
  children: ReactElement[]
}

const CardLayout = ({ children }: CardLayoutProps) => (
  <Card>
    {children}
  </Card>
);

export default CardLayout;