import { iconHeight, iconWidth } from '../../../theme';
import Chat from '../icons/Chat';
import Edit from '../icons/Edit';
import Fail from '../icons/Fail';
import Home from '../icons/Home';
import Incomplete from '../icons/Incomplete';
import Laptop from '../icons/Laptop';
import Music from '../icons/Music';
import Picture from '../icons/Picture';
import Success from '../icons/Success';
import Video from '../icons/Video';

interface IconProps {
  iconName: string
  color: string
}

const Icon = ({ iconName, color }: IconProps) => {

  switch(iconName) {
    case 'edit':
      return <Edit 
        width={iconWidth}
        height={iconHeight}
        color={color}
      />;
    case 'fail':
      return <Fail
        width={iconWidth}
        height={iconHeight}
        color={color}
      />;
    case 'home':
      return <Home
        width={iconWidth}
        height={iconHeight}
        color={color}
      />;
    case 'incomplete':
      return <Incomplete 
        width={iconWidth}
        height={iconHeight}
        color={color}
      />;
    case 'laptop':
      return <Laptop
        width={iconWidth}
        height={iconHeight}
        color={color}
      />;
    case 'music':
      return <Music 
        width={iconWidth}
        height={iconHeight}
        color={color}
      />;
    case 'picture':
      return <Picture
        width={iconWidth}
        height={iconHeight}
        color={color}
      />;
    case 'success':
      return <Success
        width={iconWidth}
        height={iconHeight}
        color={color}
      />;
    case 'video':
      return <Video 
        width={iconWidth}
        height={iconHeight}
        color={color}
      />;
    default:
      return <Chat 
        width={iconWidth}
        height={iconHeight}
        color={color}
      />;
  }
}

export default Icon;