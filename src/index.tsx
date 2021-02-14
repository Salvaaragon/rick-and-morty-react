import React from 'react';
import ReactDOM from 'react-dom';
import App from '@App/App';
import { ApolloProvider } from '@apollo/client';
import { client } from '@Api/RickAndMortyApi';

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root'),
);
