import React from 'react';
import './styles.css';
import { useHistory, useLocation } from 'react-router-dom';

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
        <input type="submit" id="lupa" value="Buscar" />
      </form>
    </section>
  );
};

export default Search;
