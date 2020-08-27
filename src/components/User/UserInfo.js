import React from 'react';

const UserInfo = ({ userinfo }) => {
  return (
    <div className="User-info">
      <h2>Userinfo</h2>
      <img src={userinfo.avatar_url} alt="" />
      <p>Apelido: {userinfo.login}</p>
      <p>Bio: {userinfo.bio}</p>
      <p>Url: {userinfo.html_url}</p>
    </div>
  );
};

export default UserInfo;
