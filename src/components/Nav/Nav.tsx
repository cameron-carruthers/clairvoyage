import type { ReactNode } from "react";
import { NavItem } from "./NavItem";
import { NavSection } from "./NavSection";
import { NavHeader } from "./NavHeader";
import styled from "styled-components";

type Justify = 'center'
| 'start'
| 'end'
| 'flex-start'
| 'flex-end'
| 'left'
| 'right'
| 'normal'
| 'space-between'
| 'space-around'
| 'space-evenly'
| 'stretch'
| 'safe center'
| 'unsafe center'
| 'inherit'
| 'initial'
| 'revert'
| 'revert-layer'
| 'unset'

const Container = styled.nav<{ $justify: Justify }>`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  height: 100%;
  justify-content: ${props => props.$justify};
`;

interface NavProps {
  justify: Justify
  children: ReactNode;
}

export function Nav({ justify, children }: NavProps) {
  return (
    <Container $justify={justify}>
      {children}
    </Container>
  )
}

Nav.Item = NavItem;
Nav.Section = NavSection;
Nav.Header = NavHeader;