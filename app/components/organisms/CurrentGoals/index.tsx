import { styled } from 'styled-components';
import { navigationHeading } from '../../../theme';
import CurrentGoal from '../../molecules/CurrentGoal'

const Header = styled.h1`
  font-family: ${navigationHeading.fontFamily};
  font-size: ${navigationHeading.fontSize.desktop};
  font-weight: ${navigationHeading.fontWeight};
  line-height: 1.5;
  margin: 0;
  color: ${navigationHeading.color};

  @media (max-width: 600px) {
    font-size: ${navigationHeading.fontSize.mobile};
  }
`

interface CurrentGoalsProps {
  learningGoal: string,
  creativeGoal: string
}

const CurrentGoals = ({ learningGoal, creativeGoal }: CurrentGoalsProps) => (
  <section>
    <Header>This Week</Header>
    <CurrentGoal heading='Learning Goal' text={learningGoal} />
    <CurrentGoal heading='Creative Goal' text={creativeGoal} />
  </section>
)

export default CurrentGoals;