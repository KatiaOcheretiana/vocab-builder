import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { Discription, Form, Title, Wrapper } from './RegisterForm.styled';
import ButtonRegisterLogin from '../ButtonRegisterLogin/ButtonRegisterLogin';
import LinkRegisterLogin from '../LinkRegisterLogin/LinkRegisterLogin';
import FormField from '../FormField/FormField';

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
      'Password must contain both letters and numbers'
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

  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields },
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  const onSubmitHandler = (data: Inputs) => {
    console.log({ data });
  };

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
