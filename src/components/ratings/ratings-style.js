export let ratingsContainer = {
    display: 'flex',
    alignItems: 'center',
    height: '1rem',
};

export let starContainer = {
    display: 'flex',
    width: '5rem',
};

export let hollowContainer = {
    display: 'flex',
    alignItems: 'center',
    position: 'absolute',
};

export let count = {
    margin: 0,
    padding: 0,
};

export let ratingWidth = (averageRating) => ({
    width: `${averageRating}rem`,
    overflow: 'hidden',
});