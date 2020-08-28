import React from 'react';
import UserInfo from './UserInfo';
import Map from './Map';
import Repos from './Repos';
import './styles.css';
import { useParams } from 'react-router-dom';
import api from '../../api';
import Head from '../Head';

const User = () => {
  const { username } = useParams();
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    const fetchData = async (username) => {
      try {
        setLoading(true);
        const { data } = await api.get(`/${username}`);
        setData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData(username);
  }, [username]);

  if (loading) return <div>Carregando...</div>;
  if (error) return <p>{error}</p>;
  if (data === null) return null;
  return (
    <section className="User animeUp">
      <Head />
      <UserInfo userinfo={data} />
      <Map location={data.location} />
      <Repos username={data.login} />
    </section>
  );
};

export default User;
