// Styles
import './App.scss';

// Reacr-Redux
import React from 'react';

// import logo from './logo.svg';

// Components
import Contacts from './components/Contacts/Contacts';
import Content from './components/Content/Content';
import Main from './components/Main/Main';
import Skills from './components/Skills/Skills';
import Topbar from './components/Topbar/Topbar';
import Works from './components/Works/Works';

function App() {
  return (
    <div className="app">
      <Topbar />
      <Content>
        <Contacts />
        <Main> 
          <Skills />
          <Works />
        </Main>
      </Content>
    </div>
  );
}

export default App;
