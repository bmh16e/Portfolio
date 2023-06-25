import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { Box } from '@mui/material';

export interface LayoutProps {
  children?: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Box position="relative" minHeight="100vh">
      <Header />
      <Box pb={15}>{children}</Box>
      <Footer />
    </Box>
  );
};
