export const pkmColorsType: any = {
	normal: '#A8A77A',
	fire: '#EE8130',
	water: '#6390F0',
	electric: '#F7D02C',
	grass: '#7AC74C',
	ice: '#96D9D6',
	fighting: '#C22E28',
	poison: '#A33EA1',
	ground: '#E2BF65',
	flying: '#A98FF3',
	psychic: '#F95587',
	bug: '#A6B91A',
	rock: '#B6A136',
	ghost: '#735797',
	dragon: '#6F35FC',
	dark: '#705746',
	steel: '#B7B7CE',
	fairy: '#D685AD',
};

export const pkmColors: any = {
	black: '#585858',
    red: '#f05868',
    blue: '#3088f0',
    white: '#f0f0f0',
    gray: '#a0a0a0',
    brown: '#b07030',
    green: '#40b868',
    purple: '#a868c0',
    pink: '#f890c8',
    yellow: '#f0d048'
};

export const rateInPercentage = (rate: number) => {
	return parseFloat(((100 * rate) / 255).toFixed(2));
}

export const playSoundPkm = (id: number) => {
	const sound = new Audio(`https://pokemoncries.com/cries/${id}.mp3`);

	sound.volume = 0.2;
	sound.play();
}