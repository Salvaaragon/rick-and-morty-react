import CustomText from '@Components/CustomText';
import { Grid, useTheme } from '@material-ui/core';
import React from 'react';
import { useTranslation } from 'react-i18next';

const Logo: React.FC = () => {
  const { i18n } = useTranslation();
  const theme = useTheme();

  return (
    <Grid container>
      <CustomText
        color={theme.palette.secondary.dark}
        fontFamily="Raleway Bold"
        text={i18n.t('navbar:title')}
      />
    </Grid>
  );
};

export default Logo;
