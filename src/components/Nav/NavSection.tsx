import { styled } from 'styled-components';
import { ReactNode } from 'react';

interface NavSectionProps {
  children: ReactNode;
}

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export function NavSection({ children }: NavSectionProps) {
  return (
    <StyledSection>
      {children}
    </StyledSection>
  )
}
