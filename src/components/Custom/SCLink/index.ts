import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const SCLink = styled(Link)`
  text-decoration: none;
  &:hover {
    text-decoration: none;
  }

  p {
    font-weight: bold;
  }

  span {
    font-weight: bold;
  }

  ${({ theme }) => theme.breakpoints.up('sm')} {
    &:hover {
      color: white;
    }
  }
`;
