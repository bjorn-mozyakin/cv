// Styles
import './Header.scss';

// React/Redux
import React from 'react';

interface Props {
  children?: React.ReactNode;
}

const Header = ({ children }: Props) => {
  return <h1 className='header'>{children}</h1>;
};

export default Header;
