// Styles
import './Block.scss';

// React/Redux
import React from 'react';

type Props = {
  children: React.ReactNode;
  className?: string;
  title?: string;
};

const Block = ({ children, className, title }: Props) => {
  return (
    <div className={`block ${className ?? ''}`}>
      <div className="block__title">{title}</div>
      {children}
    </div>
  );
};

export default Block;
