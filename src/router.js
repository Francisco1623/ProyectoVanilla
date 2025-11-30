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


if (!location.hash) {
  location.hash = "#/"; 
}

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
    
  RegisterValidator.initRegisterValidator();
   
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

  //Para que cambie el boton de favorito
  view.querySelectorAll('.btn-fav').forEach(btn => {
    if (favs.includes(btn.value)){
      btn.classList.add('active');
    } 
  });

  //Buscador de Jugadores
  //Obtener jugadores y crear la copia para mostrar solo los jugadores que tengan en común con el texto que busco
  const url = 'https://692aa9fc7615a15ff24d4910.mockapi.io/api/players';
  const response = await fetch(url);
  const playersCopy = await response.json();
   document.getElementById('filterInput').addEventListener('input', (e) => {
    const filter = e.target.value.toLowerCase();

    const filtered = playersCopy.filter(p =>
      p.name.toLowerCase().includes(filter) ||
      p.nationality.toLowerCase().includes(filter)
    );

    // 5) Reconstruir solo el tbody
    const tbody = view.querySelector("table tbody");
    tbody.innerHTML = filtered.map(player => `
      <tr>
        <td>${player.id}</td>
        <td>${player.name}</td>
        <td>${player.nationality}</td>
        <td><a class='btn btn-secondary' href='/#/player/${player.id}'>Ver Jugador</a></td>
        <td><button class="btn-fav" value="${player.id}">❤️</button></td>
      </tr>
    `).join("");
  });


}

}


