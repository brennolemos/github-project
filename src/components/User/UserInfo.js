import React from 'react';
import './Userinfo.css';

const UserInfo = ({ userinfo }) => {
  return (
    <div className="user-info box">
      {/* <h2>Infos do Usuário</h2> */}
      <img className="avatar" src={userinfo.avatar_url} alt={userinfo.login} />
      <h3 className="nickname">{userinfo.login}</h3>
      <p className="bio">{userinfo.bio}</p>
      <a
        href={`${userinfo.html_url}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        {userinfo.html_url}
      </a>
    </div>
  );
};

export default UserInfo;
