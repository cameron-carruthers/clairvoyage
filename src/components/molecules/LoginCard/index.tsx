import { styled } from 'styled-components';
import { headingTwo } from '../../../theme';
import { Card } from '~/components/Card';
import { Cloud } from '~/components/Cloud';
import { FormButton } from '~/components/Form/FormButton';

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

const Form = styled.form`
  margin-top: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 600px) {
    margin-top: 1rem;
  }
`

interface LoginFormProps {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => Promise<void>;
}

const LoginForm = ({ onSubmit }: LoginFormProps) => (
  <Card>
    <Header>Welcome Back</Header>
    <Form onSubmit={onSubmit}>
      <FormButton>Login with Google</FormButton>
    </Form>
    <Cloud style={{ top: "1.5rem", left: "-1.5rem" }} />
    <Cloud style={{ animationDuration: "8s", bottom: "-2.5rem", right: "0.5rem" }} />
  </Card>
)

export default LoginForm;
