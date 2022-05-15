import React from 'react';
// import logo from './logo.svg';
import './App.scss';

// import Menu from './components/Menu/Menu';
import Page from './components/Page/Page';
import Topbar from './components/Topbar/Topbar';
import Contacts from './components/Contacts/Contacts';

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
