import React from 'react';
import UserInfo from './UserInfo';
import Map from './Map';
import Repos from './Repos';
import './styles.css';

const User = ({ userinfo }) => {
  console.log(userinfo);
  return (
    <div className="User">
      <UserInfo userinfo={userinfo} />
      <Map location={userinfo.location} />
      <Repos username={userinfo.login} />
    </div>
  );
};

export default User;
