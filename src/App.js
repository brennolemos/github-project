import React from 'react';
import './App.css';
import Search from './components/Search';
import User from './components/User';

const App = () => {
  const [userinfo, setUserinfo] = React.useState(null);
  return (
    <div className="App">
      <h1>Github Finder</h1>
      <Search setUserinfo={setUserinfo} />
      {userinfo && <User userinfo={userinfo} />}
    </div>
  );
};

export default App;
