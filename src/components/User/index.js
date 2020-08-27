import React from 'react';
import UserInfo from './UserInfo';
import Map from './Map';
import Repos from './Repos';

const User = () => {
  return (
    <div className="User">
      <h1>User</h1>
      <UserInfo />
      <Map />
      <Repos />
    </div>
  );
};

export default User;
