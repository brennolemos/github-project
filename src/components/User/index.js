import React from 'react';
import UserInfo from './UserInfo';
import Map from './Map';
import Repos from './Repos';
import './styles.css';
import { useParams } from 'react-router-dom';
import api from '../../api';

const User = () => {
  const { username } = useParams();
  const [userinfo, setUserinfo] = React.useState(null);
  React.useEffect(() => {
    api.get(`/${username}`).then((response) => setUserinfo(response.data));
  }, [username]);

  console.log(username);
  if (userinfo)
    return (
      <section className="User animeUp">
        <div className="box">
          <UserInfo userinfo={userinfo} />
        </div>
        <div className="box">
          <Map location={userinfo.location} />
        </div>
        <div className="box">
          <Repos username={userinfo.login} />
        </div>
      </section>
    );
  else return null;
};

export default User;
