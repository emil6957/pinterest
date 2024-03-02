import React from 'react';
import AuthenticationPopUp from './components/AuthenticationPopUp/AuthenticationPopUp';
import Header from './components/Header/Header';

const App = () => {
  return (
    <div className="App">
      <Header />
      <AuthenticationPopUp></AuthenticationPopUp>
    </div>
  );
}

export default App;
