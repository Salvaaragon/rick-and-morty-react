import { IconButton as MaterialIconButton } from '@material-ui/core';
import React from 'react';
import { SCIcon } from './styles';
import { IconButtonProps } from './types';

const IconButton: React.FC<IconButtonProps> = (props: IconButtonProps) => {
  const { onClick, ariaLabel, iconAlt, iconSrc, iconWidth } = props;

  return (
    <MaterialIconButton aria-label={ariaLabel} onClick={onClick}>
      <SCIcon src={iconSrc} alt={iconAlt} width={iconWidth} />
    </MaterialIconButton>
  );
};

export default IconButton;
