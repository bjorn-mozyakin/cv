// Styles
import './List.scss';

// React/Redux
import React from 'react';

type Props = {
  children: React.ReactNode;
  direction?: string;
};

const List = ({ children, direction = 'vertical' }: Props) => {
  return <ul className={`list list_direction_${direction}`}>{children}</ul>;
};

export default List;
