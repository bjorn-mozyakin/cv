// Styles
import './Link.scss';

// React/Redux
import React from 'react';

interface Props {
  children?: React.ReactNode;
  href: string;
  className?: string;
}

const Link = ({ children, href, className }: Props) => {
  return (
    <a href={href} className={`link ${className ? `${className}` : ''}`} target="_blank" rel="noreferrer">
      {children}
    </a>
    
  );
};

export default Link;
