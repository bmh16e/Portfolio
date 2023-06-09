import { Button } from './Button';

export interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

export const NavLink: React.FC<NavLinkProps> = ({ children, href }) => {
  return (
    <Button disableRipple href={href}>
      {children}
    </Button>
  );
};
