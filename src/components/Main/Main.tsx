// Styles
import './Main.scss';

// React/Redux
import React from 'react';

interface Props {
  children?: React.ReactNode;
}

const Main = ({ children }: Props) => {
  return <div className="main">{children}</div>;
};

export default Main;
