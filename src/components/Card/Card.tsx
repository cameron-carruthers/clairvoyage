import React, { ReactNode } from 'react';

import styles from './Card.module.css';

interface CardProps extends React.HTMLAttributes<HTMLElement> {
  children?: ReactNode;
  appearance?: "default" | "secondary";
}

export const Card = ({ children, appearance = "default", ...rest }: CardProps) => (
  <div className={styles["card"]} data-appearance={appearance} {...rest}>
    {children}
  </div>
);
