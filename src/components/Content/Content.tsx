// Styles
import './Content.scss';

// React/Redux
import React from 'react';

interface Props {
  children?: React.ReactNode;
}

const Content = ({ children }: Props) => {
  return <h3 className="content">{children}</h3>;
};

export default Content;
