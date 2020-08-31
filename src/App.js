import React from 'react';
import { BrowserRouter, HashRouter, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Search from './components/Search/Search';
import User from './components/User/User';
import Footer from './components/Footer/Footer';
import './App.css';

const App = () => {
  return (
    <HashRouter basename="/">
      <Route path={'/'}>
        <div className="App">
          <Header />
          <Search />
          <main className="Main">
            <Route path={'/:username'} component={User} />
          </main>
          <Footer />
        </div>
      </Route>
    </HashRouter>
  );
};

export default App;
