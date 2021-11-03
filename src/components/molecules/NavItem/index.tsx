import styled from 'styled-components';
import { mediumText } from '../../../theme';
import Icon from '../../atoms/Icon';

const Container = styled.div`
  display: flex;
  align-items: center;
`

const Name = styled.div`
  margin-left: 1rem;
  font-family: ${mediumText.fontFamily};
  font-size: ${mediumText.fontSize.desktop};
  font-weight: ${mediumText.fontWeight};

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