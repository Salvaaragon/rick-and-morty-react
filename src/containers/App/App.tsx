import { useQuery } from '@apollo/client';
import BackgroundImage from '@Assets/images/background.png';
import Layout from '@Containers/Layout';
import {
  CharactersData,
  GET_CHARACTERS_QUERY,
} from '@Graphql/Api/queries/characters';
import { Grid } from '@material-ui/core';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

const App: React.FC = () => {
  const { data } = useQuery<CharactersData>(GET_CHARACTERS_QUERY);

  console.log(data);

  return (
    <Grid style={{ backgroundImage: `url(${BackgroundImage})` }}>
      <Router>
        <Layout />
      </Router>
    </Grid>
  );
};

export default App;
