**<h3>📊 SPA de Jugadores</h3>**
**Descripción del proyecto**

Esta es una Single Page Application (SPA) desarrollada con JavaScript moderno (ES Modules) y Vite, que permite ver información de jugadores, marcarlos como favoritos y filtrar la lista por nombre o nacionalidad.
Incluye navegación sin recargar la página mediante hash routing, interacción con una API externa y persistencia de datos en localStorage.

**Características principales:**

- Vista de inicio (Home) con bienvenida.
- Listado de jugadores con opción de ver detalles individuales.
- Página de jugadores favoritos.
- Formulario de registro (con validación opcional).
- Posibilidad de filtrar jugadores por nombre o nacionalidad.
- Gestión de favoritos con localStorage.
- Navegación SPA con hash router.

**Capturas**
<img width="1363" height="608" alt="Home" src="https://github.com/user-attachments/assets/1ee4f867-8e05-4cba-83a8-6f56e3797bdf" />
<img width="1366" height="607" alt="Players" src="https://github.com/user-attachments/assets/e7e4efea-de83-4a0c-b848-715f0f182bf1" />
<img width="1365" height="609" alt="PlayerId" src="https://github.com/user-attachments/assets/1c2e9b99-2ab9-4311-a6df-a5233742259b" />
<img width="1366" height="607" alt="Favourites" src="https://github.com/user-attachments/assets/dd5491f0-27d5-4044-ad72-9c4bb64d5991" />
<img width="1366" height="605" alt="Register" src="https://github.com/user-attachments/assets/4c712338-5061-4753-8524-b2d4d9272292" />

**API utilizada**
Se utiliza la siguiente API pública proporcionada por el profesor:
https://692aa9fc7615a15ff24d4910.mockapi.io/api/players

**Estado almacenado (localStorage)**
La aplicación guarda los favoritos del usuario en localStorage bajo la clave:
favs = ["1","3","5"];
- Cada valor es el id del jugador marcado como favorito.
- Esto permite que al recargar la página los favoritos se mantengan activos.

**Instrucciones de instalación**
- Clona este repositorio:
git clone https://github.com/tu-usuario/spa-jugadores.git
cd spa-jugadores

- Instala dependencias:
npm install

- Ejecuta el servidor de desarrollo:
npm run dev

- Abre la aplicación en tu navegador:
http://localhost:5173

- Para generar una versión de producción:
npm run build

- Despliegue en Netlify:
Subir la carpeta dist generada.
