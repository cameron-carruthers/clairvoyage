import CurrentGoals from '../CurrentGoals';
import SeasonProgress from '../SeasonProgress';

interface RightSidebarProps {
  goals: CurrentGoals,
  weeklyStatuses: WeeklyStatus[]
}

interface CurrentGoals {
  learningGoal: string,
  creativeGoal: string,
}

interface WeeklyStatus {
  week: number,
  status: string
}

const RightSidebar = ({ goals, weeklyStatuses }: RightSidebarProps ) => (
  <>
    <CurrentGoals 
      learningGoal={goals.learningGoal}
      creativeGoal={goals.creativeGoal}
    />
    <SeasonProgress weeklyStatuses={weeklyStatuses}/>
  </>
)

export default RightSidebar;