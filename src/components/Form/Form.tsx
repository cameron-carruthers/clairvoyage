import { Form as ReactAriaForm } from 'react-aria-components';
import { FormField } from './FormField';
import { FormLabel } from './FormLabel';
import { FormTextArea } from './FormTextArea';
import { FormButton } from './FormButton';
import { FormError } from './FormError';

interface FormProps {
  children: React.ReactNode
}

export const Form = ({ children }: FormProps) => (
  <ReactAriaForm>
    {children}
  </ReactAriaForm>
);

Form.Field = FormField;
Form.Label = FormLabel;
Form.TextArea = FormTextArea;
Form.Button = FormButton;
Form.Error = FormError;