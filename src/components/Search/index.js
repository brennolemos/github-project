import React from 'react';
import './styles.css';
import api from '../../api';

const Search = ({ setUserinfo }) => {
  const [username, setUsername] = React.useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    api.get(`/${username}`).then((response) => setUserinfo(response.data));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        id="username"
        placeholder="Insira o nome do usuário no GitHub"
        type="text"
        required
        value={username}
        onChange={({ target }) => setUsername(target.value)}
      />
      {/* {errors.name && errors.touched && <div className="input-feedback">{errors.name}</div>} */}

      <button type="submit">Pesquisar</button>
    </form>
  );
};

export default Search;
