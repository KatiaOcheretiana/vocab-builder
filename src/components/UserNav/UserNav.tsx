import { NavigationLink, Wrapper } from './UserNav.styled';

export default function UserNav() {
  return (
    <Wrapper>
      <NavigationLink to="/dictionary">Dictionary</NavigationLink>
      <NavigationLink to="/recommend">Recommend</NavigationLink>
      <NavigationLink to="/training">Training</NavigationLink>
    </Wrapper>
  );
}
