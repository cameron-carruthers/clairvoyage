import styled from 'styled-components';
import { primaryFont } from '../../utils';

const ButtonStyle = styled.button`
  padding: 0.5rem 2rem;
  background: linear-gradient(85.69deg, #A30094 0%, #D600C2 100%);
  border-radius: 6.25rem;
  font-family: ${primaryFont};
  font-weight: bold;
  font-size: 2rem;
  text-align: center;
  color: #fff;
  border: none;
`

interface ButtonProps {
  text: string
}

const Button = ({ text }: ButtonProps) => (
  <ButtonStyle>
    {text}
  </ButtonStyle>
);

export default Button;