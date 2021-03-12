import { useQuery } from '@apollo/client';
import Layout from '@Containers/Layout';
import {
  CharactersData,
  GET_CHARACTERS_QUERY,
} from '@Graphql/Api/queries/characters';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppContainer } from './styles';
import GlobalFonts from '@Styles/GlobalFonts';

const App: React.FC = () => {
  const { data } = useQuery<CharactersData>(GET_CHARACTERS_QUERY);

  console.log(data);

  return (
    <AppContainer>
      <GlobalFonts />
      <Router>
        <Layout />
      </Router>
    </AppContainer>
  );
};

export default App;
