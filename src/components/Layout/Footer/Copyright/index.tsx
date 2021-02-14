import { Box, Grid } from '@material-ui/core';
import React from 'react';

type Copyright = () => JSX.Element;

const Copyright: Copyright = () => {
  return (
    <Grid item xs={12} container justify="center">
      <Box paddingY="2rem">
        <Grid item container justify="center">
          © 2021 Rick and Morty App. All Rights Reserved.
        </Grid>
        <Grid item container justify="center">
          Powered by Salva Aragón Reyes
        </Grid>
      </Box>
    </Grid>
  );
};

export default Copyright;
