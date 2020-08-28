import React from 'react';
import { useParams } from 'react-router-dom';

const Head = (props) => {
  const { username } = useParams();
  React.useEffect(() => {
    document.title = `GitHub Finder | ${username}`;
  }, [username]);
  return <></>;
};

export default Head;
