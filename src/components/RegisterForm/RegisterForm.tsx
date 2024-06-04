import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { Discription, Form, Title, Wrapper } from './RegisterForm.styled';
import ButtonRegisterLogin from '../ButtonRegisterLogin/ButtonRegisterLogin';
import LinkRegisterLogin from '../LinkRegisterLogin/LinkRegisterLogin';
import FormField from '../FormField/FormField';
import { useDispatch, useSelector } from 'react-redux';

import { AppDispatch } from '../../redux/store';
import { registration } from '../../redux/auth/operations';
import { selectUserName } from '../../redux/auth/selectors';
import { useNavigate } from 'react-router-dom';

const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup
    .string()
    .matches(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/, 'Example: test@gmail.com')
    .required('Email is required'),
  password: yup
    .string()
    .matches(
      /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{7,}$/,
      'The password must consist of 6 English letters and 1 number.'
    )
    .min(6, 'Password must be at least 7 characters long')
    .required('Password is required'),
});

type Inputs = {
  name: string;
  email: string;
  password: string;
};

export default function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => setShowPassword(!showPassword);
  const userName = useSelector(selectUserName);

  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields },
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  const onSubmitHandler = (data: Inputs) => {
    dispatch(registration(data));
  };

  useEffect(() => {
    if (userName) {
      navigate('/dictionary');
    }
  }, [userName]);

  return (
    <Wrapper>
      <Title>Register</Title>
      <Discription>
        To start using our services, please fill out the registration form
        below. All fields are mandatory:
      </Discription>
      <Form onSubmit={handleSubmit(onSubmitHandler)}>
        <FormField
          label="Name"
          type="text"
          placeholder="Name"
          register={register}
          name="name"
          error={errors.name?.message}
          touched={touchedFields.name}
        />
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
        <ButtonRegisterLogin text="Register" />
      </Form>
      <LinkRegisterLogin link="/login" text="Login" />
    </Wrapper>
  );
}
