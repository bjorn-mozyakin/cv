// Styles
import './Plate.scss';

// React/Redux
import React from 'react';

type Props = {
  children: React.ReactNode;
};

const Plate = ({ children }: Props) => {
  return <div className="plate">{children}</div>;
};

export default Plate;
