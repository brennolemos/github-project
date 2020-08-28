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
      <h1>Github Finder</h1>
      <form onSubmit={handleSubmit}>
        <input
          id="name"
          placeholder="Insira o nome do usuário no GitHub"
          type="text"
          required
          value={name}
          onChange={({ target }) => setName(target.value)}
        />
        {/* {errors.name && errors.touched && <div className="input-feedback">{errors.name}</div>} */}

        <button type="submit">Pesquisar</button>
      </form>
    </section>
  );
};

export default Search;
