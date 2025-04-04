import type { ReactNode } from "react";
import { NavItem } from "./NavItem";
import { NavSection } from "./NavSection";
import { NavHeader } from "./NavHeader";

import styles from './Nav.module.css';

interface NavProps {
  children: ReactNode;
}

export function Nav({ children }: NavProps) {
  return (
    <nav className={styles["nav"]}>{children}</nav>
  )
}

Nav.Item = NavItem;
Nav.Section = NavSection;
Nav.Header = NavHeader;