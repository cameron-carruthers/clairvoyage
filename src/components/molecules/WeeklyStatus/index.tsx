import styled from 'styled-components';
import { mediumText } from '../../../theme';
import Icon from '../../atoms/Icon';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Week = styled.div`
  font-family: ${mediumText.fontFamily};
  font-size: ${mediumText.fontSize.desktop};
  font-weight: ${mediumText.fontWeight};
  color: ${mediumText.color};

  @media (max-width: 600px) {
    font-size: ${mediumText.fontSize.mobile};
  }
`

interface WeeklyStatusProps {
  week: number,
  status: string
}

const WeeklyStatus = ({ week, status }: WeeklyStatusProps) => (
  <Container>
    <Week>{week}</Week>
    <Icon iconName={status} />
  </Container>
)

export default WeeklyStatus;