import React from 'react';
import './App.css';
import Search from './components/Search';
import User from './components/User';

function App() {
  return (
    <div className="App">
      <h1>Github Finder</h1>
      <Search />
      <User />
    </div>
  );
}

export default App;
