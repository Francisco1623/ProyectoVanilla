export function Home() {
return `
<section class="home-container d-flex justify-content-center align-items-center text-center">
      <div class="home-content p-4">
        
        <h1 class="display-5 fw-bold mb-3">⚽ Bienvenido a la Aplicación de Jugadores</h1>
        
        <p class="lead mb-4">
          Explora información de jugadores, añade tus favoritos y gestiona tu lista fácilmente.
        </p>

        <div class="d-flex gap-3 justify-content-center">
          <a href="#/players" class="btn btn-primary btn-lg">Ver Jugadores</a>
          <a href="#/favourites" class="btn btn-outline-warning btn-lg">Mis Favoritos</a>
        </div>

      </div>
    </section>
`;
}