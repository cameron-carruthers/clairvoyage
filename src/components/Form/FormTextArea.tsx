import { TextArea } from 'react-aria-components';
import styles from './Form.module.css';

export const FormTextArea = () => {
  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const textarea = e.target;
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + 'px';
  };

  return (
    <TextArea
      className={styles["form-textarea"]}
      onInput={handleInput}
    />
  )
}
