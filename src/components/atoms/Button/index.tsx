import { styled } from 'styled-components';
import { primaryFont, calculateTertiaryColor } from '../../../theme';

const ButtonStyle = styled.button`
  padding: 0.5rem 2rem;
  background: linear-gradient(
    85.69deg,
    ${calculateTertiaryColor(-5)} 0%,
    ${calculateTertiaryColor(5)} 100%
  );
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
    background: linear-gradient(85.69deg, ${calculateTertiaryColor(-10)} 0%, ${calculateTertiaryColor(0)} 100%);
    transform: translateY(-2px);
  }

  &:focus {
    outline: 2px solid ${calculateTertiaryColor(0)};
    outline-offset: 2px;
  }

  @media (max-width: 600px) {
    padding: 0.25rem 1.25rem;
    font-size: 1rem;
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