import styled from 'styled-components';
import { primaryFont, tertiaryColor } from '../../utils';

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
  cursor: pointer;
  transition: background-color 0.2s linear, transform 0.8s cubic-bezier(0.075, 0.82, 0.165, 1) 0s;

  &:hover, &:focus, &:active {
    background: linear-gradient(85.69deg, #8A007D 0%, #BD00AB 100%);
    transform: translateY(-2px);
  }

  &:focus {
    outline: 2px solid ${tertiaryColor};
    outline-offset: 2px;
  }
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