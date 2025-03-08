import { iconHeight, iconWidth } from '~/theme';
import {
  Circle,
  CircleCheck,
  CircleX,
  House,
  Image,
  Laptop,
  LogOut,
  MessageCircle,
  Music,
  Pen,
  Video
} from './icons';

interface IconProps {
  iconName: string
  color: string
}

const Icon = ({ iconName, color }: IconProps) => {

  switch(iconName) {
    case 'circle':
      return <Circle 
        width={iconWidth}
        height={iconHeight}
        color={color}
      />;
    case 'circle-check':
      return <CircleCheck
        width={iconWidth}
        height={iconHeight}
        color={color}
      />;
    case 'circle-x':
      return <CircleX
        width={iconWidth}
        height={iconHeight}
        color={color}
      />;
    case 'house':
      return <House
        width={iconWidth}
        height={iconHeight}
        color={color}
      />;
    case 'image':
      return <Image
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
    case 'log-out':
      return <LogOut
        width={iconWidth}
        height={iconHeight}
        color={color}
      />
    case 'music':
      return <Music 
        width={iconWidth}
        height={iconHeight}
        color={color}
      />;
    case 'pen':
      return <Pen 
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
      return <MessageCircle 
        width={iconWidth}
        height={iconHeight}
        color={color}
      />;
  }
}

export default Icon;