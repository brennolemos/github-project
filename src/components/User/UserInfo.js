import React from 'react';

const UserInfo = ({ userinfo }) => {
  return (
    <div className="User-info">
      <h2>Userinfo</h2>
      <img className="avatar" src={userinfo.avatar_url} alt={userinfo.login} />
      <p>{userinfo.login}</p>
      <p>{userinfo.bio}</p>
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
