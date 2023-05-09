import Form from 'react-bootstrap/esm/Form';
import { Input } from '../../Components/FormInput/formInput';
import {
  FormContainer,
  FormFooterContainer,
  FormSection,
  IllustrationSection,
  LoginContainer,
} from './login.styled';
import { Button } from 'react-bootstrap';

import { useForm } from 'react-hook-form';
import { useMutation } from '@apollo/client';

import { useNavigate } from 'react-router-dom';
import UserIllustration from '../../../assets/userIllustration';
import { LoginForm, LoginFormResponse } from '../../types/LoginForm';
import { LOGIN } from '../../schemas/Users/mutation';
import jwtDecode from 'jwt-decode';
import { toast } from 'react-toastify';

export const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>();

  const navigate = useNavigate();

  const [login, { data: LoginResponse, loading, error }] = useMutation(LOGIN);

  const onSubmit = async (data: LoginForm) => {
    login({
      variables: { email: data.email, password: data.password },
      onCompleted: (data: LoginFormResponse) => {
        const decodedToken: any = jwtDecode(data.response.token);
        localStorage.setItem('token', data.response.token);
        localStorage.setItem('firstName', decodedToken.firstName);

        navigate('/home');
      },
      onError: ({ graphQLErrors }) => {
        if (graphQLErrors.length > 0) {
          graphQLErrors.map((error) => toast.error(error.message));
        }
      },
    });
  };

  return (
    <LoginContainer>
      <IllustrationSection>
        <UserIllustration />
      </IllustrationSection>
      <FormSection>
        <FormContainer>
          <h1> Bem vindo </h1>
          <Form onSubmit={handleSubmit(onSubmit)} id="loginForm">
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
          </Form>
          <FormFooterContainer>
            <Button type="submit" form="loginForm" variant="primary">
              Entrar
            </Button>
            <Button
              onClick={() => navigate('/register')}
              variant="primary"
              className="ml-3"
            >
              Registre-se
            </Button>
          </FormFooterContainer>
        </FormContainer>
      </FormSection>
    </LoginContainer>
  );
};
