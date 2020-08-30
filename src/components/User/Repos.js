import React from 'react';
import axios from 'axios';
import './Repos.css';

const Repos = ({ username }) => {
  const [repos, setRepos] = React.useState([]);
  React.useEffect(() => {
    axios
      .get(`https://api.github.com/users/${username}/starred`)
      .then((response) => setRepos(response.data));
    console.log(repos);
  }, [username]);

  return (
    <div className="Repos box">
      <h2 className="subtitle">Repositórios Favoritos</h2>
      {repos.length ? (
        <ul className="repos-list">
          {repos.map((repo) => (
            <li className="repo" key={repo.id}>
              {repo.name}
            </li>
          ))}
        </ul>
      ) : (
        <p>Usuário não possui repositórios favoritos.</p>
      )}
    </div>
  );
};

export default Repos;
