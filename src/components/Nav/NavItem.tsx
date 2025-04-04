import Icon from '../Icon';
import { Link } from '@tanstack/react-router';

import styles from './Nav.module.css';

interface Icon {
  name: string;
  color: string;
}

export interface NavItemProps {
  icon: Icon;
  name: string;
  id: string;
  onClick?: () => void;
}

export function NavItem({ icon, name, id, onClick }: NavItemProps) {
  return (
    <li className={styles["nav-item"]} onClick={onClick}>
      <Link
        to="/$id"
        params={{ id }}
      >
        <div className={styles["nav-item-user"]}>
          <Icon iconName={icon.name} color={icon.color} />
          <span className={styles["nav-item-name"]}>{name}</span>
        </div>
      </Link>
    </li>
  )
}
