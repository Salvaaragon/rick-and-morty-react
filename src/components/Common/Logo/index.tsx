import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import { useTranslation } from 'react-i18next';

type Logo = () => JSX.Element;

const Logo: Logo = () => {
  const { i18n } = useTranslation();
  return (
    <Grid container>
      <Typography color="secondary">{i18n.t('navbar:title')}</Typography>
    </Grid>
  );
};

export default Logo;
