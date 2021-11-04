import styled from 'styled-components';
import { bodyIntroText, smallText } from '../../../theme';

const Heading = styled.h2`
  font-family: ${bodyIntroText.fontFamily};
  font-size: ${bodyIntroText.fontSize.desktop};
  font-weight: ${bodyIntroText.fontWeight};
  color: ${bodyIntroText.color};
  line-height: 1.5;
  margin: 0;

  @media (max-width: 600px) {
    font-size: ${bodyIntroText.fontSize.mobile};
  }
`

const Text = styled.p`
  font-family: ${smallText.fontFamily};
  font-size: ${smallText.fontSize.desktop};
  font-weight: ${smallText.fontWeight};
  color: ${smallText.color};
  line-height: 1.5;
  margin: 0;

  @media (max-width: 600px) {
    font-size: ${smallText.fontSize.mobile};
  }
`

const Container = styled.div`
  margin-bottom: 0.5rem;
  margin-top: 0.25rem;
`

interface CurrentGoalProps {
  heading: string,
  text: string
}

const CurrentGoal = ({ heading, text }: CurrentGoalProps) => (
  <Container>
    <Heading>{heading}</Heading>
    <Text>{text}</Text>
  </Container>
)

export default CurrentGoal;