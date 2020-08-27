import React from 'react';
import './styles.css';

const Search = () => {
  const [username, setUsername] = React.useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
      {/* <label htmlFor="name">
        <b>GitHub Finder</b>
      </label> */}
      <input
        id="username"
        placeholder="Insira o nome do usuário no GitHub"
        type="text"
        required
        value={username}
        onChange={({ target }) => setUsername(target.value)}
        // onBlur={handleBlur}
        // className={errors.name && touched.name ? 'error' : ''}
      />
      {/* {errors.name && errors.touched && <div className="input-feedback">{errors.name}</div>} */}

      <button type="submit">Pesquisar</button>
    </form>
  );
};

export default Search;
