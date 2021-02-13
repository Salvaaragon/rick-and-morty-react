import {
  CharactersData,
  GET_CHARACTERS_QUERY,
} from '@Api/RickAndMortyApi/queries/characters';
import { useQuery } from '@apollo/client';
import React from 'react';
import './App.css';
import logo from './logo.svg';

const App: () => JSX.Element = () => {
  const { loading, error, data } = useQuery<CharactersData>(
    GET_CHARACTERS_QUERY,
  );

  console.log(data);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;
