import { Typography } from '@material-ui/core';
import React from 'react';

type Logo = () => JSX.Element;

const Logo: Logo = () => {
  return <Typography color="secondary">Rick and Morty React</Typography>;
};

export default Logo;
