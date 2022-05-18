// Styles
import './Icon.scss';

// React/Redux
import React from 'react';

interface Props {
  children?: React.ReactNode;
  icon: string;
}
const Icon = ({ children, icon }: Props) => {
  return <div className={`icon ${icon ? `icon__${icon}` : ''}`}>{children}</div>;
};

export default Icon;
