import Features from '../../components/Features/Features';
import IllustrationPeople from '../../components/IllustrationPeople/IllustrationPeople';

import { Container } from '../../styles/GlobalStyles';
import { Wrapper } from './Login.styled';
import LoginForm from '../../components/LoginForm/LoginForm';

export default function Login() {
  // const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  // useEffect(() => {
  //   const handleResize = () => {
  //     setScreenWidth(window.innerWidth);
  //   };

  //   window.addEventListener('resize', handleResize);

  //   return () => {
  //     window.removeEventListener('resize', handleResize);
  //   };
  // }, []);

  return (
    <Container>
      <Wrapper>
        <div>
          <IllustrationPeople />
          {/* {screenWidth >= 768 && */}
          <Features />
        </div>
        <LoginForm />
      </Wrapper>
    </Container>
  );
}
