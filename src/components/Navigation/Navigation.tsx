import sprite from '../../assets/sprite.svg';
import { LogoIcon, LogoText, LogoWrapper } from './Navigation.styled';

export default function Navigation() {
  return (
    <LogoWrapper>
      <LogoIcon>
        <use href={sprite + '#icon-logo'} />
      </LogoIcon>
      <LogoText>VocabBuilder</LogoText>
    </LogoWrapper>
  );
}
