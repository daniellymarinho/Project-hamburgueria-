import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useContext } from 'react';
import Input from '../Input';
import { StyledButton } from '../../../styles/button';
import { StyledForm } from '../../../styles/form';
import { UserContext } from '../../../context/userContext';

export interface IRegisterForm {
  email: string;
  password: number;
  name: string;
}

const schema = yup.object().shape({
  name: yup.string().required('Nome é obrigatório'),
  email: yup.string().email('Email inválido').required('Email obrigatório'),
  password: yup
    .string()
    .required('Senha obrigatória')
    .matches(/.{6,}/, 'Deve conter no mínimo 6 caracteres'),
});

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterForm>({ resolver: yupResolver(schema) });

  const { userRegister } = useContext(UserContext);

  const submit: SubmitHandler<IRegisterForm> = (formData) => {
    userRegister(formData);
  };

  return (
    <StyledForm onSubmit={handleSubmit(submit)}>
      <Input
        label='Nome'
        register={register('name')}
        errors={errors.name?.message}
      />
      <Input
        label='Email'
        register={register('email')}
        errors={errors.email?.message}
      />
      <Input
        label='Senha'
        register={register('password')}
        errors={errors.password?.message}
      />
      <StyledButton type='submit' $buttonSize='default' $buttonStyle='gray'>
        Cadastrar
      </StyledButton>
    </StyledForm>
  );
};

export default RegisterForm;
