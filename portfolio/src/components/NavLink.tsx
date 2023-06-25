import React from 'react';
import { Button } from './Button';
import { styled, useTheme } from '@mui/material';

export interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  color?: 'primary' | 'secondary';
  display?:
    | 'block'
    | 'inline-block'
    | 'inline'
    | 'flex'
    | 'inline-flex'
    | 'none'
    | 'initial'
    | 'inherit';
}

export const NavLink: React.FC<NavLinkProps> = ({
  children,
  href,
  color,
  display = 'inline-flex'
}) => {
  const { palette } = useTheme();
  const borderColor = palette[color || 'primary'].main;

  const Link = styled(Button)({
    display: display,
    '&::after': {
      display: 'block',
      content: '""',
      borderBottom: `solid 3px ${borderColor}`,
      transform: 'scaleX(0)',
      transition: 'transform 300ms ease-in-out',
      transformOrigin: '100% 50%'
    },
    '&:hover': {
      '&::after': {
        transform: 'scaleX(1)',
        transformOrigin: '0% 50%'
      }
    }
  });
  return (
    <Link href={href} color={color}>
      {children}
    </Link>
  );
};
