import React from 'react';
import axios from 'axios';
import './Repos.css';

const Repos = ({ username }) => {
  const [repos, setRepos] = React.useState([]);
  React.useEffect(() => {
    axios
      .get(`https://api.github.com/users/${username}/starred`)
      .then((response) => setRepos(response.data));
  }, [username]);

  return (
    <div className="Repos box">
      <h2>Repos</h2>
      <ul className="repos-list">
        {repos.map((repo) => (
          <li className="repo" key={repo.id}>
            {repo.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Repos;
