import { secondaryColor } from '../../../theme';
import NavItem from '../../molecules/NavItem';
import CurrentGoals from '../CurrentGoals';
import SeasonProgress from '../SeasonProgress';

interface RightSidebarContentProps {
  goals: CurrentGoals,
  weeklyStatuses: WeeklyStatus[]
  handleLogout: () => void
}

interface CurrentGoals {
  learningGoal: string,
  creativeGoal: string,
}

interface WeeklyStatus {
  week: number,
  status: string
}

const RightSidebarContent = ({ weeklyStatuses, handleLogout }: RightSidebarContentProps ) => (
  <>
    <NavItem icon={{ name: 'log-out', color: secondaryColor }} name='Logout' onClick={handleLogout} />
    <SeasonProgress weeklyStatuses={weeklyStatuses}/>
  </>
)

export default RightSidebarContent;