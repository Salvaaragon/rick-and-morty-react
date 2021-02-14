import AppRoutes from '@Components/AppRoutes';
import { Grid } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';

type Content = () => JSX.Element;

const Content: Content = () => {
  return (
    <SCGrid container>
      <AppRoutes />
    </SCGrid>
  );
};

export default Content;

const SCGrid = styled(Grid)`
  background-color: white;
`;
