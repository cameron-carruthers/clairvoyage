import { ReactNode } from 'react';

import styles from './Nav.module.css';

interface NavSectionProps {
  children: ReactNode;
}

export function NavSection({ children }: NavSectionProps) {
  return (
    <section className={styles["nav-section"]}>
      {children}
    </section>
  )
}
