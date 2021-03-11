import RoutesList from '@Containers/RoutesList';
import React from 'react';
import { SCGrid } from './styles';

const Content: React.FC = () => {
  return (
    <SCGrid container>
      <RoutesList />
    </SCGrid>
  );
};

export default Content;
