import React from 'react';
import { Button } from './Button';
import { Box, SvgIcon, styled, useTheme } from '@mui/material';
import { SvgIconComponent } from '@mui/icons-material';

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
  icon?: SvgIconComponent;
  target?: string;
}

export const NavLink: React.FC<NavLinkProps> = ({
  children,
  href,
  color,
  display = 'inline-flex',
  icon,
  target
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

  const DesktopLink = styled(Link)({
    [useTheme().breakpoints.down('md')]: {
      display: 'none'
    }
  });

  const MobileLink = styled(Link)({
    [useTheme().breakpoints.up('md')]: {
      display: 'none'
    }
  });

  return (
    <Box>
      <DesktopLink href={href} color={color}>
        {children}
      </DesktopLink>
      <MobileLink target={target} href={href} color={color}>
        {icon && <SvgIcon sx={{ mr: 3, verticalAlign: 'sub' }} component={icon} />}
        {children}
      </MobileLink>
    </Box>
  );
};
