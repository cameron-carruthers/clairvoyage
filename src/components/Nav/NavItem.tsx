import { styled } from 'styled-components';
import { mediumText, secondaryHover } from '~/theme';
import Icon from '../Icon';
import { Link } from '@tanstack/react-router';

const Container = styled.li`
  list-style-type: none;
`

const User = styled.div`
  display: flex;
  align-items: center;
  border-radius: 1rem;
  padding: 0.25rem 0.5rem;
  margin: -0.25rem -0.5rem;
  gap: 1rem;

  &:hover {
    background: ${secondaryHover};
    cursor: pointer;
  }
`

const Name = styled.span`
  font-family: ${mediumText.fontFamily};
  font-size: ${mediumText.fontSize.desktop};
  font-weight: ${mediumText.fontWeight};
  color: ${mediumText.color};
  line-height: 0;

  @media (max-width: 600px) {
    font-size: ${mediumText.fontSize.mobile};
  }
`

interface Icon {
  name: string;
  color: string;
}

export interface NavItemProps {
  icon: Icon;
  name: string;
  id: string;
  onClick?: () => void;
}

export function NavItem({ icon, name, id, onClick }: NavItemProps) {
  return (
    <Container onClick={onClick}>
      <Link
        to="/$id"
        params={{ id }}
      >
        <User>
          <Icon iconName={icon.name} color={icon.color} />
          <Name>{name}</Name>
        </User>
      </Link>
    </Container>
  )
}
