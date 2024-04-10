import React from 'react';
import Header from './components/Header/Header';
import HomePageLoggedOut from './pages/HomePageLoggedOut/HomePageLoggedOut';
import HomePageLoggedIn from './pages/HomePageLoggedIn/HomePageLoggedIn';

const App = () => {
    return (
        <div className="App">
            <Header />
            <HomePageLoggedIn />
        </div>
    );
}

export default App;
