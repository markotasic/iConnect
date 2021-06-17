const BASE_URL = 'https://dummyapi.io/data/api';
const APP_ID = '60c8e11f3722f27da37a9b90';

import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { App } from './app';

const GQL_URI = 'https://dummyapi.io/data/graphql';

const client = new ApolloClient({
  uri: GQL_URI,
  cache: new InMemoryCache(),
  headers: {
    'app-id': '60c8e11f3722f27da37a9b90',
  },
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);
