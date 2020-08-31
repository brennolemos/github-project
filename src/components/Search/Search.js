import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import './Search.css';

const Search = () => {
  const history = useHistory();
  const { pathname } = useLocation();
  const [name, setName] = React.useState(pathname.replace('/', ''));

  const handleSubmit = (event) => {
    event.preventDefault();
    history.push(`/${name}`);
  };

  return (
    <section className="search">
      <h1 className="title">Insira o nome do usuário no GitHub</h1>
      <form onSubmit={handleSubmit}>
        <input
          name="busca"
          id="busca"
          type="text"
          placeholder="Buscar..."
          required
          value={name}
          onChange={({ target }) => setName(target.value)}
        />
        <button type="submit" id="lupa"></button>
      </form>
    </section>
  );
};

export default Search;
