import React from 'react';
import AuthenticationPopUp from './components/AuthenticationPopUp/AuthenticationPopUp';
import Header from './components/Header/Header';
import HomePageLoggedOut from './pages/HomePageLoggedOut/HomePageLoggedOut';

const App = () => {
  return (
    <div className="App">
        <Header />
        <AuthenticationPopUp/>
        <HomePageLoggedOut />
    </div>
  );
}

export default App;
