import styles from './Button.module.css';

interface ButtonProps {
  text: string
}

export const Button = ({ text }: ButtonProps) => (
  <button className={styles["button"]}>
    {text}
  </button>
);
