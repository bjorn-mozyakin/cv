// Styles
import './App.scss';

// Reacr-Redux
import React from 'react';
import { useSelector } from 'react-redux';

import { Language, State } from './entities/State';

import locale from './localization/localization.js';

// Components
import Contacts from './components/Contacts/Contacts';
import Content from './components/Content/Content';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Skills from './components/Skills/Skills';
import Topbar from './components/Topbar/Topbar';
import Works from './components/Works/Works';


function App() {
  const currentLanguage: Language = useSelector(
    (state: { common: State }) => state.common.language
  );
  const { skillsTitle, worksTitle } = locale[currentLanguage];
  return (
    <div className="app">
      <Topbar />
      <Content>
        <Contacts />
        <Main> 
          <Header>{skillsTitle}</Header>
          <Skills />
          <Header>{worksTitle}</Header>
          <Works />
        </Main>
      </Content>
    </div>
  );
}

export default App;
