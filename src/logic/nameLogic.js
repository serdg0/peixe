const nameLogic = type => {
  if (type === 'movie') {
    return 'Película';
  } if (type === 'game') {
    return 'Videojuego';
  }
  return 'Serie';
};

export default nameLogic;
