export function Navbar() {
  return `
<link
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
  rel="stylesheet"
/>

<nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
  <div class="container-fluid">
    <a class="navbar-brand" href="#/">Mi Sitio</a>

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
      aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#/">Inicio</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#/players">Jugadores</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#/about">Sobre nosotros</a>
        </li>
      </ul>
    </div>
    <div><a href="#/register" class='btn btn-outline-primary'>Registrarse</a>
    </div>
  </div>
</nav>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
  `;
}
