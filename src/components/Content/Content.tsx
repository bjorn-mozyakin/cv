// Styles
import './Content.scss';

// React/Redux
import React from 'react';

interface Props {
  children?: React.ReactNode;
}

const Content = ({ children }: Props) => {
  return <div className="content">{children}</div>;
};

export default Content;
