import { SubmitHandler, useForm } from 'react-hook-form';
import { useContext } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { StyledButton } from '../../../styles/button';
import { StyledForm } from '../../../styles/form';
import Input from '../Input';
import { UserContext } from '../../../context/userContext';

export interface ILoginForm {
  email: string;
  password: string;
}

const schema = yup.object().shape({
  email: yup.string().required('Email é obrigatório'),
  password: yup.string().required('A senha é obrigatória'),
});

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginForm>({ resolver: yupResolver(schema) });
  const { userLogin } = useContext(UserContext);

  const submit: SubmitHandler<ILoginForm> = (formData) => {
    userLogin(formData);
  };

  return (
    <StyledForm onSubmit={handleSubmit(submit)}>
      <Input
        label='email'
        register={register('email')}
        errors={errors.email?.message}
      />
      <Input
        label='senha'
        register={register('password')}
        errors={errors.password?.message}
      />
      <StyledButton type='submit' $buttonSize='default' $buttonStyle='green'>
        Entrar
      </StyledButton>
    </StyledForm>
  );
};

export default LoginForm;
