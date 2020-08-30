import React from 'react';
import './Error.css';

const Error = ({ error }) => {
  if (!error) return null;
  return (
    <div className="animeUp">
      <div className="alert">Erro: {error}</div>
    </div>
  );
};

export default Error;
