// Styles
import './List.scss';

// React/Redux
import React from 'react';

type Props = {
  children: React.ReactNode;
};

const ListTitle = ({ children }: Props) => {
  return <li className="list__title">{children}</li>;
};

export default ListTitle;
