import {
  CharactersData,
  GET_CHARACTERS_QUERY,
} from '@Api/RickAndMortyApi/queries/characters';
import { useQuery } from '@apollo/client';
import BackgroundImage from '@Assets/images/background.png';
import Layout from '@Components/Layout';
import { Grid, MuiThemeProvider } from '@material-ui/core';
import theme from '@Utils/theme';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

const App: () => JSX.Element = () => {
  const { data } = useQuery<CharactersData>(GET_CHARACTERS_QUERY);

  console.log(data);

  return (
    <MuiThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <Grid style={{ backgroundImage: `url(${BackgroundImage})` }}>
          <Router>
            <Layout />
          </Router>
        </Grid>
      </ThemeProvider>
    </MuiThemeProvider>
  );
};

export default App;
