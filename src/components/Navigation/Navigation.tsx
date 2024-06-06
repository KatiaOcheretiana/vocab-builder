import { useSelector } from 'react-redux';
import sprite from '../../assets/sprite.svg';
import UserNav from '../UserNav/UserNav';
import { LogoIcon, LogoText, LogoWrapper } from './Navigation.styled';
import { selectUserName } from '../../redux/auth/selectors';

export default function Navigation() {
  const user = useSelector(selectUserName);

  return (
    <header>
      <LogoWrapper>
        <LogoIcon>
          <use href={sprite + '#icon-logo'} />
        </LogoIcon>
        <LogoText>VocabBuilder</LogoText>
      </LogoWrapper>
      {/* {user && */}
      <UserNav />
    </header>
  );
}
