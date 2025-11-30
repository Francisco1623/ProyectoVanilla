import {getPlayers} from '../services/PlayersServices.js';

export async function Players() {

     const players =await getPlayers();
   
    
      return   `<section class="favorites-container my-4">
      <h2 class="text-center mb-4">Jugadores</h2>
      <div class="filter-container mb-3">
  <input type="text" id="filterInput" placeholder="Buscar jugador..." class="form-control">
</div>
      <div class="table-responsive">
        <table class="table table-striped table-hover align-middle">
          <thead class='table-dark'>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Nombre</th>
      <th scope="col">Nacionalidad</th>
      <th scope="col"></th>
      <th scope="col"></th>


    </tr>
  </thead>
  
    ${players}
  
</table>
      </div>
    </section>     
        `;
    




}