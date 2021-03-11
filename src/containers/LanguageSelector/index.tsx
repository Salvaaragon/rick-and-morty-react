import EnglandFlag from '@Assets/icons/flags/en.svg';
import SpanishFlag from '@Assets/icons/flags/es.svg';
import IconButton from '@Components/IconButton';
import { Grid } from '@material-ui/core';
import i18n from '@Services/i18n/config';
import React from 'react';
import { withTranslation } from 'react-i18next';
import { changeLanguage } from './logic';

const LanguageSelector = () => {
  return (
    <Grid container justify="flex-end">
      {i18n.language === 'en' && (
        <IconButton
          onClick={() => changeLanguage('es')}
          ariaLabel="es"
          iconAlt="spanish"
          iconSrc={SpanishFlag}
          iconWidth="1.5rem"
        />
      )}
      {i18n.language === 'es' && (
        <IconButton
          onClick={() => changeLanguage('en')}
          ariaLabel="en"
          iconAlt="english"
          iconSrc={EnglandFlag}
          iconWidth="1.5rem"
        />
      )}
    </Grid>
  );
};

export default withTranslation()(LanguageSelector);
