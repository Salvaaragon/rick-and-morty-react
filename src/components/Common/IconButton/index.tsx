import { IconButton as MaterialIconButton } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';

type IconButtonProps = {
  onClick: () => void;
  ariaLabel: string | undefined;
  iconAlt: string;
  iconSrc: string;
  iconWidth: string;
};

type IconButtonType = (props: IconButtonProps) => JSX.Element;

const IconButton: IconButtonType = (props: IconButtonProps) => {
  const { onClick, ariaLabel, iconAlt, iconSrc, iconWidth } = props;
  return (
    <MaterialIconButton aria-label={ariaLabel} onClick={onClick}>
      <SCIcon src={iconSrc} alt={iconAlt} width={iconWidth} />
    </MaterialIconButton>
  );
};

const SCIcon = styled.img<{
  width: string;
}>`
  width: ${(props) => props.width};
`;

export default IconButton;
