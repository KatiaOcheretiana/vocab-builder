import { LinkStyle, Wrapper } from './LinkRegisterLogin.styled';

type LinkRegisterLoginProps = {
  text: string;
  link: string;
};

export default function LinkRegisterLogin({
  text,
  link,
}: LinkRegisterLoginProps) {
  return (
    <Wrapper>
      <LinkStyle to={link}>{text}</LinkStyle>
    </Wrapper>
  );
}
