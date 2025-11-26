import './styles/style.css';
import {Navbar} from './components/Navbar.js'
import {router} from './router.js';
import { Footer } from './components/Footer.js';

document.querySelector('#app').innerHTML = `
${Navbar()}
<main id="view"></main>
${Footer()}
`;
router();
window.addEventListener('hashchange', router);