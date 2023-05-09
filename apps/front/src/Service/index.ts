import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: 'http://localhost:3333/api',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('token');

  return {
    headers: {
      ...headers,
      authorization: token ? `${token}` : '',
    },
  };
});

export const Client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
