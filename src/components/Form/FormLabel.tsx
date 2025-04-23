import { Label } from 'react-aria-components';
import styles from './Form.module.css';

interface FormLabelProps {
  children: React.ReactNode
}

export const FormLabel = ({ children }: FormLabelProps) => (
  <Label className={styles["form-label"]}>
    {children}
  </Label>
);
