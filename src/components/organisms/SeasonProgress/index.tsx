import { styled } from 'styled-components';
import { navigationHeading } from '../../../theme';
import WeeklyStatus from '../../molecules/WeeklyStatus'

const Header = styled.h1`
  font-family: ${navigationHeading.fontFamily};
  font-size: ${navigationHeading.fontSize.desktop};
  font-weight: ${navigationHeading.fontWeight};
  line-height: 1.5;
  margin: 0;
  margin-top: 1rem;
  color: ${navigationHeading.color};

  @media (max-width: 600px) {
    font-size: ${navigationHeading.fontSize.mobile};
  }
`

interface SeasonProgressProps {
  weeklyStatuses: WeeklyStatus[]
}

interface WeeklyStatus {
    week: number,
    status: string
}

const SeasonProgress = ({ weeklyStatuses }: SeasonProgressProps) => (
  <section>
    <Header>This Season</Header>
    {weeklyStatuses.map(({ week, status }) => (
      <WeeklyStatus
        key={week}
        week={week}
        status={status}
      />
    ))}
  </section>
)

export default SeasonProgress;