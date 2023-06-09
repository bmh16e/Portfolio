import { Box } from '@mui/material';

export interface HeaderProps { }

export const Header: React.FC<HeaderProps> = () => {
  const image =
    'data:image/svg+xml;utf8,<svg viewBox="0 0 2527 200" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path fill="rgba(39, 68, 114, 1)" d="M 0 0 C 637 0 637 110 1274 110 L 1274 110 L 1274 0 L 0 0 Z" stroke-width="0"></path> <path fill="rgba(39, 68, 114, 1)" d="M 1273 110 C 1908 110 1908 0 2543 0 L 2543 0 L 2543 0 L 1273 0 Z" stroke-width="0"></path> </svg>';
  return (
    <Box
      sx={{
        display: 'block',
        position: 'relative',
        top: '-2px',
        height: '200px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundImage: "url('" + image + "')",
        animation: 'wave linear infinite 5s'
      }}></Box>
  );
};
