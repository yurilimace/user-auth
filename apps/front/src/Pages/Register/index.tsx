import { Button, Form } from 'react-bootstrap';
import {
  FormSection,
  IllustrationSection,
  LoginContainer,
} from '../Login/login.styled';
import { Input } from '../../Components/FormInput/formInput';
import { RegisterFormContainer } from './register.styled';
import { useForm } from 'react-hook-form';
import { RegisterIllustration } from '../../../assets/registerIllustration';
import { gql, useMutation } from '@apollo/client';
import { RegisterForm, RegisterFormResponse } from '../../types/registerForm';
import { REGISTERUSER } from '../../schemas/Users/mutation';
import { useNavigate } from 'react-router-dom';

export const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterForm>();

  const navigate = useNavigate();

  const validatePasswordMatch = (data: string, formValues: RegisterForm) => {
    if (formValues.password !== data) {
      return 'senhas não coincidem';
    }
    return true;
  };

  const [UserRegister, { data: registerResponse, loading, error }] =
    useMutation(REGISTERUSER);

  const onSubmit = (data: RegisterForm) => {
    UserRegister({
      variables: {
        email: data.email,
        password: data.password,
        firstName: data.firstName,
        lastName: data.lastName,
        age: parseInt(data.age),
        isAdmin: false,
      },
      onCompleted: (data: RegisterFormResponse) => {
        navigate('/login');
      },
      onError: (err) => {
        console.log('disparou erroo');
      },
    });
  };

  return (
    <LoginContainer>
      <IllustrationSection>
        <RegisterIllustration />
      </IllustrationSection>
      <FormSection>
        <RegisterFormContainer>
          <h1> Registre-se </h1>
          <Form onSubmit={handleSubmit(onSubmit)} id="registerForm">
            <Input
              type="text"
              label="Email"
              validationErrorMessage={errors.email?.message}
              register={register('email', {
                required: 'campo email não pode ser vazio',
                pattern: {
                  value: /^[\w.%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
                  message: 'insira um email valido',
                },
              })}
            />
            <Input
              type="text"
              label="Nome"
              validationErrorMessage={errors.firstName?.message}
              register={register('firstName', {
                required: 'campo Nome pode ser vazio',
                minLength: {
                  value: 1,
                  message: 'Campo Nome não pode ser vazio',
                },
              })}
            />
            <Input
              type="text"
              label="Sobrenome"
              validationErrorMessage={errors.lastName?.message}
              register={register('lastName', {
                required: 'campo Sobrenome pode ser vazio',
                minLength: {
                  value: 1,
                  message: 'Campo Sobrenome não pode ser vazio',
                },
              })}
            />
            <Input
              type="text"
              label="idade"
              validationErrorMessage={errors.age?.message}
              register={register('age', {
                required: 'campo idade não pode ser vazio',

                min: {
                  value: 1,
                  message: 'Campo idade não pode ter zero como valor',
                },
              })}
            />
            <Input
              type="password"
              label="Senha"
              validationErrorMessage={errors.password?.message}
              register={register('password', {
                required: 'campo senha pode ser vazio',
                minLength: {
                  value: 1,
                  message: 'Campo senha não pode ser vazio',
                },
              })}
            />
            <Input
              type="password"
              label="Confirmar senha"
              validationErrorMessage={errors.confirmPassword?.message}
              register={register('confirmPassword', {
                required: 'campo senha pode ser vazio',
                validate: validatePasswordMatch,
                minLength: {
                  value: 1,
                  message: 'Campo senha não pode ser vazio',
                },
              })}
            />
          </Form>
          <Button type="submit" form="registerForm" variant="primary">
            Enviar
          </Button>
        </RegisterFormContainer>
      </FormSection>
    </LoginContainer>
  );
};
