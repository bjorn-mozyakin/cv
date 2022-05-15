import React from 'react';
// import logo from './logo.svg';
import './App.scss';

// import Menu from './components/Menu/Menu';
import Page from './components/Page/Page';
import Switcher from './components/Switcher/Switcher';

function App() {
  return (
    <div className="App">
      <Switcher />
      <Page />
    </div>
  );
}

export default App;
