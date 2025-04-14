import type { ReactNode } from "react";
import { NavItem } from "./NavItem";
import { NavSection } from "./NavSection";
import { NavHeader } from "./NavHeader";

import styles from './Nav.module.css';

export interface NavProps extends React.HTMLAttributes<HTMLElement> {
  children: ReactNode;
}

export function Nav({ children, ...rest }: NavProps) {
  return (
    <nav className={styles["nav"]} {...rest}>
      {children}
    </nav>
  );
}

Nav.Item = NavItem;
Nav.Section = NavSection;
Nav.Header = NavHeader;
