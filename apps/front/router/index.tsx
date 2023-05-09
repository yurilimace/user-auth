import React from 'react';
import { Navigate, Route, createBrowserRouter } from 'react-router-dom';
import {
  ContentArea,
  NavBarArea,
  RouterContainer,
} from '../src/Components/RouteContainer/routeContainer.styles';
import { Input } from '../src/Components/FormInput/formInput';
import { LoginPage } from '../src/Pages/Login';
import { RegisterPage } from '../src/Pages/Register';
import { HomePage } from '../src/Pages/Home';

interface customRouteProps {
  children?: React.ReactNode;
}

const CustomRoute = ({ children }: { children: React.ReactNode }) => {
  const userToken = localStorage.getItem('token');
  console.log(userToken);

  if (!userToken) {
    return <Navigate to={'/login'} replace />;
  }

  return <div>{children}</div>;
};

export const Routes = createBrowserRouter([
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/register',
    element: <RegisterPage />,
  },
  {
    path: '/home',
    element: (
      <CustomRoute>
        <HomePage />
      </CustomRoute>
    ),
  },
  {
    path: '/playground',
    element: (
      <RouterContainer>
        <NavBarArea />
        <ContentArea>{/* <Input /> */}</ContentArea>
      </RouterContainer>
    ),
  },
  {
    path: '*',
    element: <Navigate to={'/login'} replace />,
  },
]);
