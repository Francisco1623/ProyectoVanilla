import { Home } from './views/Home';
import { Players } from './views/Players';
import { NotFound } from './views/NotFound';
import {PlayerDetail} from './views/PlayerDetail';
import {Register} from './views/Register';
import {Favourite} from './views/Favourite';

import * as RegisterValidator from './services/RegisterValidator.js';

export const router = async() => {
const view = document.getElementById('view');
const route = location.hash.slice(1).toLowerCase();
const parts = route.split("/");

const routes = {
'/': Home,
'/players': Players,
'/register': Register,
'/favourites': Favourite


};


if (parts[1] === "player") {
const id = parts[2];
view.innerHTML = await PlayerDetail(id);
return;
}
const screen = routes[route] || NotFound;
view.innerHTML = await screen();
//Hacer las validaciones despues de cargar el formulario register
 if (route === "/register") {
    setTimeout(() => {
        RegisterValidator.initRegisterValidator();
    }, 0);
}

//Añadir a favorito despues de cargar la lista
if (route === "/players") {
  view.innerHTML = await Players();

  const favs = JSON.parse(localStorage.getItem('favs')) || [];
  view.addEventListener('click', (e) => {
    if (e.target.classList.contains('btn-fav')) {
      const id = e.target.value;
      if (favs.includes(id)) {
        favs.splice(favs.indexOf(id), 1);
        e.target.classList.remove('active');
      } else {
        favs.push(id);
        e.target.classList.add('active');
      }
      localStorage.setItem('favs', JSON.stringify(favs));
    }
  });

  view.querySelectorAll('.btn-fav').forEach(btn => {
    if (favs.includes(btn.value)) btn.classList.add('active');
  });
}


}