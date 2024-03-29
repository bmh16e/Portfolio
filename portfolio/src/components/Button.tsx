import React, { MouseEventHandler } from 'react';
import { Button as MuiButton, ButtonProps as MuiButtonProps } from '@mui/material';

export interface ButtonProps {
  children?: MuiButtonProps['children'];
  color?: MuiButtonProps['color'];
  variant?: MuiButtonProps['variant'];
  disabled?: MuiButtonProps['disabled'];
  onClick?: MuiButtonProps['onClick'];
  fullWidth?: MuiButtonProps['fullWidth'];
  href?: MuiButtonProps['href'];
  size?: MuiButtonProps['size'];
  sx?: MuiButtonProps['sx'];
  disableRipple?: MuiButtonProps['disableRipple'];
  onMouseOver?: MouseEventHandler<HTMLButtonElement>;
  onMouseOut?: MouseEventHandler<HTMLButtonElement>;
  target?: string;
}

export const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return <MuiButton {...props}>{children}</MuiButton>;
};
