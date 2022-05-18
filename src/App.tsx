// Styles
import './App.scss';

// Reacr-Redux
import React from 'react';

// import logo from './logo.svg';

// Components
import Contacts from './components/Contacts/Contacts';
import Content from './components/Content/Content';
import Skills from './components/Skills/Skills';
import Topbar from './components/Topbar/Topbar';

function App() {
  return (
    <div className="App">
      <Topbar />
      <Content>
        <Contacts />
        <Skills />
      </Content>
    </div>
  );
}

export default App;
