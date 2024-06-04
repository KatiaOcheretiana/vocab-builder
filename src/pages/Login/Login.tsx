import Features from '../../components/Features/Features';
import IllustrationPeople from '../../components/IllustrationPeople/IllustrationPeople';

import { Container } from '../../styles/GlobalStyles';
import { Wrapper } from './Login.styled';
import LoginForm from '../../components/LoginForm/LoginForm';

export default function Login() {
  return (
    <Container>
      <Wrapper>
        <div>
          <IllustrationPeople />
          <Features />
        </div>
        <LoginForm />
      </Wrapper>
    </Container>
  );
}
