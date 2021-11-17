import styled from 'styled-components';
import { formInputText, mediumText, tertiaryColor } from '../../../theme';

interface LabelProps {
  label: string
  rows: number
}

const Label = styled.label`
  font-family: ${formInputText.fontFamily};
  font-weight: ${formInputText.fontWeight};
  font-size: ${formInputText.fontSize.desktop};
  color: ${formInputText.color};
  margin-bottom: 0.5rem;

  @media (max-width: 600px) {
    font-size: ${formInputText.fontSize.mobile};
  }
`;

const TextArea = styled.textarea`
  border-radius: 1rem;
  padding: 1rem;
  font-family: ${mediumText.fontFamily};
  font-size: ${mediumText.fontSize.desktop};
  font-weight: ${mediumText.fontWeight};
  color: ${mediumText.color};
  border: none;

  &:focus, &:active {
    outline-color: ${tertiaryColor};
  }

  @media (max-width: 600px) {
    font-size: ${mediumText.fontSize.mobile};
  }
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

const Input = ({ label, rows }: LabelProps) => (
  <Container>
    <Label htmlFor="w3review">{label}</Label>
    <TextArea id="w3review" name="w3review" rows={rows} cols={50}>
    </TextArea>
  </Container>
);

export default Input;