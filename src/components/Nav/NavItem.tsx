import { Link } from '@tanstack/react-router';
import styles from './Nav.module.css';
import clsx from 'clsx';

type NavItemBaseProps = {
  children: React.ReactNode;
  className?: string;
} & React.HTMLAttributes<HTMLElement>;

type NavItemLinkProps = NavItemBaseProps & {
  to: string;
  params?: {
    id: string;
  };
  onClick?: never;
};

type NavItemButtonProps = NavItemBaseProps & {
  onClick: () => void;
  to?: never;
  params?: never;
};

export type NavItemProps = NavItemLinkProps | NavItemButtonProps;

export function NavItem({
  children,
  className,
  to,
  params,
  onClick,
  ...rest
}: NavItemProps) {
  if (to) {
    return (
      <li className={clsx(styles['nav-item'], className)}>
        <Link
          to={to}
          params={params}
          className={styles['nav-item-user']}
          {...rest}
        >
          {children}
        </Link>
      </li>
    );
  }

  return (
    <button
      className={clsx(styles['nav-item-user'], className)}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
}
