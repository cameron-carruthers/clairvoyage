import styled from 'styled-components';
import { mediumText, successColor, failColor, textColor } from '../../../theme';
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

const WeeklyStatus = ({ week, status }: WeeklyStatusProps) => {
  let color;
  if (status === 'success') {
    color = successColor
  } else if (status === 'fail') {
    color = failColor
  } else {
    color = textColor
  }
  return ( 
    <Container>
      <Week>{week}</Week>
      <Icon 
        iconName={status} 
        color={color}
      />
    </Container>
  )
  }

export default WeeklyStatus;