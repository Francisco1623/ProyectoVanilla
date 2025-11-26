import { Home } from './views/Home';
import { About } from './views/About';
import { Players } from './views/Players';
import { NotFound } from './views/NotFound';
export const router = async() => {
const view = document.getElementById('view');
const route = location.hash.slice(1).toLowerCase() || '/';
const routes = {
'/': Home,
'/players': Players,
'/about': About
};
const screen = routes[route] || NotFound;
view.innerHTML = await screen();
}