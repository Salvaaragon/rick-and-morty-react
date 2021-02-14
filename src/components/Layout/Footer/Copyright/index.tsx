import { Box, Grid } from '@material-ui/core';
import React from 'react';
import { useTranslation } from 'react-i18next';

type Copyright = () => JSX.Element;

const Copyright: Copyright = () => {
  const { i18n } = useTranslation();
  return (
    <Grid item xs={12} container justify="center">
      <Box paddingY="2rem">
        <Grid item container justify="center">
          {i18n.t('footer:copyright')}
        </Grid>
        <Grid item container justify="center">
          {i18n.t('footer:author')}
        </Grid>
      </Box>
    </Grid>
  );
};

export default Copyright;
