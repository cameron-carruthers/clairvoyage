import type { ReactNode } from "react";
import styled from "styled-components";
import { navigationHeading } from "~/theme";

const Header = styled.h2`
  font-family: ${navigationHeading.fontFamily};
  font-size: ${navigationHeading.fontSize.desktop};
  font-weight: ${navigationHeading.fontWeight};
  line-height: 1.5;
  margin: 0;
  color: ${navigationHeading.color};

  @media (max-width: 600px) {
    font-size: ${navigationHeading.fontSize.mobile};
  }
`

interface NavHeader {
  children: ReactNode;
}

export function NavHeader({ children }: NavHeader) {
  return (
    <Header>
      {children}
    </Header>
  )
}
