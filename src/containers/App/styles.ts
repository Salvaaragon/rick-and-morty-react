import { Grid } from '@material-ui/core';
import styled from 'styled-components';

export const AppContainer = styled(Grid)`
  background-color: ${(props) => props.theme.palette.background.default};
`;
