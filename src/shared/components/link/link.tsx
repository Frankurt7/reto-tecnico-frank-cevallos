import { Link as RouterLink } from 'react-router';

import './link.scss';

export interface ILinkProps {
  children: React.ReactNode;
  to: string;
  className?: string;
}

export const Link = ({ to, children, className }: ILinkProps) => (
  <RouterLink to={to} className={`link ${className}`}>
    {children}
  </RouterLink>
);
