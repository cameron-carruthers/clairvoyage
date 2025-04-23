import { TextField, TextFieldProps } from 'react-aria-components';
import styles from './Form.module.css';

interface FormFieldProps extends TextFieldProps  {
  children: React.ReactNode
}

export const FormField = ({ children, ...rest }: FormFieldProps) => (
  <TextField className={styles["form-field"]} {...rest}>
    {children}
  </TextField>
);
