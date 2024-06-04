import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { Discription, Form, Title, Wrapper } from './LoginForm.styled';
import ButtonRegisterLogin from '../ButtonRegisterLogin/ButtonRegisterLogin';
import LinkRegisterLogin from '../LinkRegisterLogin/LinkRegisterLogin';
import FormField from '../FormField/FormField';
import { AppDispatch } from '../../redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/auth/operations';
import { useNavigate } from 'react-router-dom';
import { selectUserName } from '../../redux/auth/selectors';

const schema = yup.object().shape({
  email: yup
    .string()
    .matches(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/, 'Example: test@gmail.com')
    .required('Email is required'),
  password: yup
    .string()
    .matches(
      /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{7,}$/,
      'Password must contain both letters and numbers'
    )
    .min(6, 'Password must be at least 7 characters long')
    .required('Password is required'),
});

type Inputs = {
  email: string;
  password: string;
};

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  const userName = useSelector(selectUserName);

  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();
  const toggleShowPassword = () => setShowPassword(!showPassword);

  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields },
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  const onSubmitHandler = (data: Inputs) => {
    dispatch(login(data));
  };

  useEffect(() => {
    if (userName) {
      navigate('/dictionary');
    }
  }, [userName]);

  return (
    <Wrapper>
      <Title>Login</Title>
      <Discription>
        Please enter your login details to continue using our service:
      </Discription>
      <Form onSubmit={handleSubmit(onSubmitHandler)}>
        <FormField
          label="Email"
          type="text"
          placeholder="Email"
          register={register}
          name="email"
          error={errors.email?.message}
          touched={touchedFields.email}
        />
        <FormField
          label="Password"
          type="password"
          placeholder="Password"
          register={register}
          name="password"
          error={errors.password?.message}
          touched={touchedFields.password}
          showPassword={showPassword}
          toggleShowPassword={toggleShowPassword}
        />
        <ButtonRegisterLogin text="Login" />
      </Form>
      <LinkRegisterLogin link="/register" text="Register" />
    </Wrapper>
  );
}
