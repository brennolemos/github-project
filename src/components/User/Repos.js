import React from 'react';
import axios from 'axios';

const Repos = ({ username }) => {
  const [repos, setRepos] = React.useState([]);
  React.useEffect(() => {
    axios
      .get(`https://api.github.com/users/${username}/starred`)
      .then((response) => setRepos(response.data));
  }, [username]);
  return (
    <div className="Repos">
      <h2>Repos</h2>
      <ul>
        {repos.map((repo) => (
          <li>{repo.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Repos;
