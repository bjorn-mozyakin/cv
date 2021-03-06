// Styles
import './Link.scss';

// React/Redux
import React from 'react';

interface Props {
  children?: React.ReactNode;
  href: string;
}

const Link = ({ children, href }: Props) => {
  return (
    <a href={href} className="link" target="_blank" rel="noreferrer">
      {children}
    </a>
  );
};

export default Link;
