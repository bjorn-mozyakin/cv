// Styles
import './Title.scss';

// React/Redux
import React from 'react';

interface Props {
  children?: React.ReactNode;
}

const Title = ({ children }: Props) => {
  return <h3 className="title">{children}</h3>;
};

export default Title;
