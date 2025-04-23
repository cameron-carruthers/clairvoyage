import { Button } from 'react-aria-components';
import styles from './Form.module.css';

interface FormButtonProps {
  children: React.ReactNode
}

export const FormButton = ({ children }: FormButtonProps) => (
  <Button type="submit" className={styles["form-button"]}>
    {children}
  </Button>
);
