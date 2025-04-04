import type { ReactNode } from "react";

import styles from './Nav.module.css';

interface NavHeader {
  children: ReactNode;
}

export function NavHeader({ children }: NavHeader) {
  return (
    <h2 className={styles["nav-header"]}>
      {children}
    </h2>
  )
}
