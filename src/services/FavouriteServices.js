// src/services/FavouriteServices.js

const url = 'https://692aa9fc7615a15ff24d4910.mockapi.io/api/players';

export const getFavIds = () => {
  return JSON.parse(localStorage.getItem('favs')) || [];
};

export const saveFavIds = (favs) => {
  localStorage.setItem('favs', JSON.stringify(favs));
};

export const toggleFav = (id) => {
  const favs = getFavIds();
  const index = favs.indexOf(id.toString());
  if (index > -1) {
    favs.splice(index, 1);
  } else {
    favs.push(id.toString());
  }
  saveFavIds(favs);
  return favs;
};

export const getFavPlayers = async () => {
  const favs = getFavIds();
  const response = await fetch(url);
  const players = await response.json();
  return players.filter(p => favs.includes(p.id.toString()));
};
