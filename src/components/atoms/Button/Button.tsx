import styles from './Button.module.css';

interface ButtonProps {
  text: string
}

const Button = ({ text }: ButtonProps) => (
  <button className={styles["button"]}>
    {text}
  </button>
);

export default Button;