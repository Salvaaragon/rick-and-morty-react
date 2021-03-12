import { Grid } from '@material-ui/core';
import styled from 'styled-components';

export const NavbarContainer = styled(Grid)`
  background: linear-gradient(
    0deg,
    ${(props) => props.theme.palette.primary.main} 0%,
    ${(props) => props.theme.palette.secondary.main} 100%
  );

  height: 5rem;
  align-content: center;
`;
