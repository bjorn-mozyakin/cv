// Styles
import './App.scss';

// Reacr-Redux
import React from 'react';

// import logo from './logo.svg';

// Components
import Contacts from './components/Contacts/Contacts';
// import Menu from './components/Menu/Menu';
import Page from './components/Page/Page';
import Topbar from './components/Topbar/Topbar';

function App() {
  return (
    <div className="App">
      <Contacts />
      <Topbar />
      <Page />
    </div>
  );
}

export default App;
