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
  iconName: string;
}

import styles from './Icon.module.css';

const Icon = ({ iconName }: IconProps) => {

  switch(iconName) {
    case 'circle':
      return <Circle 
        width={iconWidth}
        height={iconHeight}
        className={styles["icon"]}
      />;
    case 'circle-check':
      return <CircleCheck
        width={iconWidth}
        height={iconHeight}
        className={styles["icon"]}
      />;
    case 'circle-x':
      return <CircleX
        width={iconWidth}
        height={iconHeight}
        className={styles["icon"]}
      />;
    case 'house':
      return <House
        width={iconWidth}
        height={iconHeight}
        className={styles["icon"]}
      />;
    case 'image':
      return <Image
        width={iconWidth}
        height={iconHeight}
        className={styles["icon"]}
      />;
    case 'laptop':
      return <Laptop
        width={iconWidth}
        height={iconHeight}
        className={styles["icon"]}
      />;
    case 'log-out':
      return <LogOut
        width={iconWidth}
        height={iconHeight}
        className={styles["icon"]}
      />
    case 'music':
      return <Music 
        width={iconWidth}
        height={iconHeight}
        className={styles["icon"]}
      />;
    case 'pen':
      return <Pen 
        width={iconWidth}
        height={iconHeight}
        className={styles["icon"]}
      />;
    case 'video':
      return <Video 
        width={iconWidth}
        height={iconHeight}
        className={styles["icon"]}
      />;
    default:
      return <MessageCircle 
        width={iconWidth}
        height={iconHeight}
        className={styles["icon"]}
      />;
  }
}

export default Icon;