export const nameLogic = type => {
    if (type === 'movie') {
        return 'Película';
    } else if (type === 'game') {
        return 'Videojuego';
    } else {
        return 'Serie';
    }
};