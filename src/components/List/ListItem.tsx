// Styles
import './List.scss';

// React/Redux
import React from 'react';

type Props = {
  children: React.ReactNode;
};

const ListItem = ({ children }: Props) => {
  return <li className="list__item">{children}</li>;
};

export default ListItem;
