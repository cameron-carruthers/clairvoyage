import styles from './Cloud.module.css';

export interface CloudProps extends React.HTMLAttributes<HTMLElement> {}

export const Cloud = (props: CloudProps) => (
  <div className={styles["cloud"]} {...props} />
);
