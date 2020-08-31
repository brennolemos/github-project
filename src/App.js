import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Search from './components/Search/Search';
import User from './components/User/User';
import Footer from './components/Footer/Footer';
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <Route path="/">
        <div className="App">
          <Header />
          <Search />
          <main className="Main">
            <Route path="/:username" component={User} />
          </main>
          <Footer />
        </div>
      </Route>
    </BrowserRouter>
  );
};

export default App;
