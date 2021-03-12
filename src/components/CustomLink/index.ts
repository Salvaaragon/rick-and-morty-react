import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const CustomLink = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.palette.secondary.dark};

  &:hover {
    text-decoration: none;
  }

  p {
    font-family: 'Raleway SemiBold';
  }

  span {
    font-family: 'Raleway SemiBold';
  }

  .MuiListItem-button {
    border-radius: 0.5rem;
  }

  ${({ theme }) => theme.breakpoints.up('sm')} {
    &:hover {
      color: white;
    }
  }
`;
