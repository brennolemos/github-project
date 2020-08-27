import React from 'react';
import './App.css';
import Search from './components/Search';
import User from './components/User';
import { BrowserRouter, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Route path="/">
        <div className="App">
          <div className="App-container">
            <Search />
            <Route path="/user/:username" component={User} />
          </div>
        </div>
      </Route>
    </BrowserRouter>
  );
};

export default App;
