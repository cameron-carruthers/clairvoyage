import CurrentGoals from '../CurrentGoals';
import SeasonProgress from '../SeasonProgress';

interface RightSidebarContentProps {
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

const RightSidebarContent = ({ goals, weeklyStatuses }: RightSidebarContentProps ) => (
  <>
    <CurrentGoals 
      learningGoal={goals.learningGoal}
      creativeGoal={goals.creativeGoal}
    />
    <SeasonProgress weeklyStatuses={weeklyStatuses}/>
  </>
)

export default RightSidebarContent;