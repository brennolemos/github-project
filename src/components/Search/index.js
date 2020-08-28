import React from 'react';
import './styles.css';
import { useHistory } from 'react-router-dom';

const Search = () => {
  let history = useHistory();
  const [username, setUsername] = React.useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    history.push(`/${username}`);
  };

  return (
    <section className="search">
      <h1>Github Finder</h1>
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
    </section>
  );
};

export default Search;
