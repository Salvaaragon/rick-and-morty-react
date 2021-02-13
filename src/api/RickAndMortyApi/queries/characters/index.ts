import { gql } from '@apollo/client';

export interface Character {
  id: number;
  name: string;
  status: string;
  gender: string;
}

export interface CharactersData {
  results: Character[];
}

export const GET_CHARACTERS_QUERY = gql`
  {
    characters {
      results {
        id
        name
        status
        species
        gender
      }
    }
  }
`;
