import { Button } from './ButtonRegisterLogin.styled';

type ButtonRegisterLoginProps = {
  text: string;
};

export default function ButtonRegisterLogin({
  text,
}: ButtonRegisterLoginProps) {
  return <Button type="submit">{text}</Button>;
}
