import { ReactNode } from 'react';

import styles from './Card.module.css';

interface CardProps {
  children?: ReactNode;
  appearance?: "default" | "secondary";
}

export const Card = ({ children, appearance = "default" }: CardProps) => (
  <div className={styles["card"]} data-appearance={appearance}>
    {children}
  </div>
);
