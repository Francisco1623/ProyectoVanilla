import { Home } from './views/Home';
import { About } from './views/About';
import { Players } from './views/Players';
import { NotFound } from './views/NotFound';
import {PlayerDetail} from './views/PlayerDetail'
import {Register} from './views/Register'

export const router = async() => {
const view = document.getElementById('view');
const route = location.hash.slice(1).toLowerCase();
const parts = route.split("/");

const routes = {
'/': Home,
'/players': Players,
'/register': Register

};


if (parts[1] === "player") {
const id = parts[2];
view.innerHTML = await PlayerDetail(id);
return;
}
const screen = routes[route] || NotFound;
view.innerHTML = await screen();
}