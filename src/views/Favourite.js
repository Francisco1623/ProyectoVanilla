import { getFavPlayers } from '../services/FavouriteServices.js';

export async function Favourite() {
  const favPlayers = await getFavPlayers();

  if (favPlayers.length === 0) {
    return `<p>No tienes jugadores favoritos todavía.</p>`;
  }

  let tableRows = '';
  favPlayers.forEach(player => {
    tableRows += `
      <tr>
        <td>${player.id}</td>
        <td>${player.name}</td>
        <td>${player.nationality}</td>
        <td><a class='btn btn-secondary' href='/#/player/${player.id}'>Ver Jugador</a></td>
      </tr>
    `;
  });

  return `
   <section class="favorites-container my-4">
      <div class="container-fluid">
        <h2 class="text-center mb-4">Mis Jugadores Favoritos</h2>
        <div class="table-responsive">
          <table class="table table-striped table-hover align-middle">
            <thead class="table-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Nombre</th>
                <th scope="col">Nacionalidad</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              ${tableRows}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  `;
}
