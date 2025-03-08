import { styled } from 'styled-components';
import { mediumText, successColor, failColor, textColor } from '../../../theme';
import Icon from '../../Icon';

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
  let iconName;

  if (status === 'success') {
    color = successColor;
    iconName = 'circle-check';
  } else if (status === 'fail') {
    color = failColor;
    iconName = 'circle-x';
  } else {
    color = textColor
    iconName = 'circle';
  }

  return ( 
    <Container>
      <Week>{week}</Week>
      <Icon 
        iconName={iconName} 
        color={color}
      />
    </Container>
  )
}

export default WeeklyStatus;