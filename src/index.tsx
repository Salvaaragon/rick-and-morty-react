import { client } from '@Api/RickAndMortyApi';
import { ApolloProvider } from '@apollo/client';
import App from '@App/App';
import { MuiThemeProvider } from '@material-ui/core';
import theme from '@Utils/theme';
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { I18nextProvider } from 'react-i18next';
import { ThemeProvider } from 'styled-components';
import i18n from '@Services/i18n/config';

ReactDOM.render(
  <ApolloProvider client={client}>
    <Suspense fallback={null}>
      <I18nextProvider i18n={i18n}>
        <MuiThemeProvider theme={theme}>
          <ThemeProvider theme={theme}>
            <App />
          </ThemeProvider>
        </MuiThemeProvider>
      </I18nextProvider>
    </Suspense>
  </ApolloProvider>,
  document.getElementById('root'),
);
