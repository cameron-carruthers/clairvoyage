import styled from 'styled-components';
import { headingTwo } from '../../../theme';
import CardLayout from '../../templates/CardLayout'
import Button from '../../atoms/Button';

const Header = styled.h1`
  font-family: ${headingTwo.fontFamily};
  font-size: ${headingTwo.fontSize.desktop};
  font-weight: ${headingTwo.fontWeight};
  margin: 0;
  margin-bottom: 1rem;
  color: ${headingTwo.color};
  line-height: 1.5;
  text-align: center;

  @media (max-width: 600px) {
    font-size: ${headingTwo.fontSize.mobile};
  }
`;

const ButtonWrapper = styled.div`
  margin-top: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 600px) {
    margin-top: 1rem;
  }
`

const LoginForm = () => (
  <CardLayout>
    <Header>Welcome Back</Header>
    <ButtonWrapper>
      <Button text='Login with Google' />
    </ButtonWrapper>
  </CardLayout>
)

export default LoginForm;