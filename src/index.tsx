import { ApolloProvider } from '@apollo/client';
import App from '@Containers/App';
import { client } from '@Graphql/Api';
import { MuiThemeProvider } from '@material-ui/core';
import i18n from '@Services/i18n/config';
import theme from '@Styles/theme';
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { I18nextProvider } from 'react-i18next';
import { ThemeProvider } from 'styled-components';

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
