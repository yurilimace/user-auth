import styled from 'styled-components';

import NxWelcome from './nx-welcome';

import { RouterProvider } from 'react-router-dom';

import { Routes } from '../../router/index';
import { ToastContainer, toast } from 'react-toastify';

import 'bootstrap/dist/css/bootstrap.min.css';
import './app.scss';
import { ApolloProvider } from '@apollo/client';
import { Client } from '../Service';
import 'react-toastify/dist/ReactToastify.css';

export function App() {
  return (
    <ApolloProvider client={Client}>
      <ToastContainer />
      <RouterProvider router={Routes} />
    </ApolloProvider>
  );
}

export default App;
