import React from 'react';
// import logo from './logo.svg';
import './App.scss';

// import Menu from './components/Menu/Menu';
import Page from './components/Page/Page';
import Topbar from './components/Topbar/Topbar';

function App() {
  return (
    <div className="App">
        <Topbar />
      <Page />
    </div>
  );
}

export default App;
