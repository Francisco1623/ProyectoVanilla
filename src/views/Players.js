import {getPlayers} from '../services/PlayersServices.js';

export async function Players() {
    
     const players =await getPlayers();
   
    
      return   `
      <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Nombre</th>
      <th scope="col">Nacionalidad</th>

    </tr>
  </thead>
  
    ${players}
  
</table>      
        `;
    



}