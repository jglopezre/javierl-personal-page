import React from 'react';

export const Footer: React.FC = () => {
  const date = new Date().getFullYear();

  return (
    <footer>
      &copy;
      {date}
      .
      &nbsp;Hecho por Javier L.
    </footer>
  );
};
