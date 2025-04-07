import { styled } from 'styled-components';
import { headingOne, headingThree } from '../../../theme';
import { Card } from '~/components/Card';
import Input from '../../molecules/Input';
import Button from '../../atoms/Button';
import { Cloud } from '../../atoms/Cloud';

const Header = styled.h1`
  font-family: ${headingOne.fontFamily};
  font-size: ${headingOne.fontSize.desktop};
  font-weight: ${headingOne.fontWeight};
  margin: 0;
  margin-bottom: 1rem;
  color: ${headingOne.color};
  line-height: 1.5;
  text-align: center;

  @media (max-width: 600px) {
    font-size: ${headingOne.fontSize.mobile};
  }
`;

const Goals = styled.h2`
  font-family: ${headingThree.fontFamily};
  font-size: ${headingThree.fontSize.desktop};
  font-weight: ${headingThree.fontWeight};
  margin: 0;
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
  color: ${headingThree.color};
  line-height: 1.5;
  text-align: center;

  @media (max-width: 600px) {
    font-size: ${headingThree.fontSize.mobile};
    margin-top: 1rem;
  }
`;

const ButtonWrapper = styled.div`
  margin-top: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`

interface SubmitProgressFormProps {
  currentWeek: number
}

const CloudOne = styled(Cloud)`
  top: 0.5rem;
  left: -1rem;
`;

const CloudTwo = styled(Cloud)`
  animation-duration: 8s;
  top: 9rem;
  right: 2.5rem;
`;

const CloudThree = styled(Cloud)`
  animation-duration: 7s;
  bottom: 25rem;
  left: -1.5rem;
`;

const CloudFour = styled(Cloud)`
  animation-duration: 9s;
  bottom: -1.5rem;
  right: 2.5rem;
`;

const SubmitProgressForm = ({ currentWeek }: SubmitProgressFormProps) => (
  <Card>
    <Header>Submit Progress</Header>
    <Input 
      label={`Week ${currentWeek-1} Learning Progress`}
      rows={4}
    />
    <Input 
      label={`Week ${currentWeek-1} Creative Progress`}
      rows={4}
    />
    <Goals>Week {currentWeek} Goals</Goals>
    <Input 
      label={`Week ${currentWeek} Learning Goals`}
      rows={2}
    />
    <Input 
      label={`Week ${currentWeek} Creative Goals`}
      rows={2}
    />
    <ButtonWrapper>
      <Button text='Submit' />
    </ButtonWrapper>
    <CloudOne />
    <CloudTwo />
    <CloudThree />
    <CloudFour />
  </Card>
)

export default SubmitProgressForm;
