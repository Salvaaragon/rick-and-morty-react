import RoutesList from '@Containers/RoutesList';
import React from 'react';
import { ContentContainer } from './styles';

const Content: React.FC = () => {
  return (
    <ContentContainer maxWidth="lg" disableGutters>
      <RoutesList />
    </ContentContainer>
  );
};

export default Content;
