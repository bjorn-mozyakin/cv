// Styles
import './Topbar.scss';

// React/Redux
import React from 'react';
import { useSelector } from 'react-redux';

import { Language, State } from '../../entities/State';

import locale from '../../localization.js';

// Components
import Switcher from '../Switcher/Switcher';

const Topbar = () => {
  const currentLanguage: Language = useSelector(
    (state: { common: State }) => state.common.language
  );
  const { name, profession } = locale[currentLanguage];

  return (
    <div className="topbar">
      <h1 className="topbar__title">{name}</h1>
      <h2 className="topbar__subtitle">{profession}</h2>
      <Switcher additionalClasses={['topbar__switcher']} />
    </div>
  );
};

export default Topbar;
