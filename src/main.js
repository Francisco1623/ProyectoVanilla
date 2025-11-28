// Importa tus estilos propios
import './styles/style.css';
import { Navbar } from './components/Navbar.js';
import { router } from './router.js';
import { Footer } from './components/Footer.js';

// Inyecta Bootstrap CSS y JS solo una vez
const bootstrapCSS = document.createElement('link');
bootstrapCSS.rel = 'stylesheet';
bootstrapCSS.href = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css';
document.head.appendChild(bootstrapCSS);

const bootstrapJS = document.createElement('script');
bootstrapJS.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js';
document.body.appendChild(bootstrapJS);

// Renderiza la SPA
document.querySelector('#app').innerHTML = `
  ${Navbar()}
  <main id="view"></main>
  ${Footer()}
`;

// Router
router();
window.addEventListener('hashchange', router);
