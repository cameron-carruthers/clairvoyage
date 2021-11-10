import styled from 'styled-components';
import { mediumText } from '../../../theme';
import Icon from '../../atoms/Icon';

const Container = styled.div`
  display: flex;
  align-items: center;
  border-radius: 0.5rem;
  border: 1px solid rgba( 255, 255, 255, 0 );

  &:hover {
    background: rgba( 255, 255, 255, 0.8 );
    backdrop-filter: blur( 10px );
    -webkit-backdrop-filter: blur( 10px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    cursor: pointer;
  }
`

const Name = styled.div`
  margin-left: 1rem;
  font-family: ${mediumText.fontFamily};
  font-size: ${mediumText.fontSize.desktop};
  font-weight: ${mediumText.fontWeight};
  color: ${mediumText.color};

  @media (max-width: 600px) {
    font-size: ${mediumText.fontSize.mobile};
  }
`

interface NavItemProps {
  icon: string,
  name: string
}

const NavItem = ({ icon, name }: NavItemProps) => (
  <Container>
    <Icon iconName={icon} />
    <Name>{name}</Name>
  </Container>
)

export default NavItem;