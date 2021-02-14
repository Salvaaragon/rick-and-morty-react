import { Box, Grid, Link } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import React from 'react';

const GITHUB_LINK = 'https://github.com/Salvaaragon';
const LINKEDIN_LINK = 'https://www.linkedin.com/in/salvador-aragon-reyes/';

type Social = () => JSX.Element;

const Social: Social = () => {
  return (
    <Grid item xs={12} container justify="center">
      <Box paddingY="1rem" paddingX="0.5rem">
        <Link href={GITHUB_LINK} color="inherit">
          <GitHubIcon />
        </Link>
      </Box>
      <Box paddingY="1rem" paddingX="0.5rem">
        <Link href={LINKEDIN_LINK} color="inherit">
          <LinkedInIcon />
        </Link>
      </Box>
    </Grid>
  );
};

export default Social;
