import { useEffect, useState } from 'react';
import Features from '../../components/Features/Features';
import IllustrationPeople from '../../components/IllustrationPeople/IllustrationPeople';
import RegisterForm from '../../components/RegisterForm/RegisterForm';
import { Container } from '../../styles/GlobalStyles';
import { BoxDecoration, Wrapper } from './Register.styled';

export default function Register() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Container>
      <Wrapper>
        <div>
          <IllustrationPeople />
          {screenWidth >= 768 && <Features />}
        </div>
        <RegisterForm />
      </Wrapper>
      <BoxDecoration></BoxDecoration>
    </Container>
  );
}
