import React from 'react';
import UserInfo from './UserInfo';
import Map from './Map';
import Repos from './Repos';
import './styles.css';
import { useParams } from 'react-router-dom';
import api from '../../api';
import Head from '../Head';
import Loading from '../Loading/Loading';
import Error from '../Error/Error';

const User = () => {
  const { username } = useParams();
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  const errors = {
    400: 'Requisição inválida',
    401: 'Não autorizado',
    403: 'Proibido',
    404: 'Usuário Não encontrado',
    408: 'Tempo de requisição esgotou',
    500: 'Erro interno do servidor',
    502: 'Bad Gateway',
    503: 'Serviço indisponível',
    504: 'Gateway Time-out',
  };

  React.useEffect(() => {
    const fetchData = async (username) => {
      try {
        setLoading(true);
        setError(null);
        const { data } = await api.get(`/${username}`);
        setData(data);
      } catch (err) {
        setError(
          errors[err.response.status] !== undefined
            ? errors[err.response.status]
            : 'Erro desconhecido. Por favor, tente novamente mais tarde.',
        );
      } finally {
        setLoading(false);
      }
    };
    fetchData(username);
  }, [username]);

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;
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
