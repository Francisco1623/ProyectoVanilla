
export const PlayerDetail = async (id) =>{
const url = 'https://692aa9fc7615a15ff24d4910.mockapi.io/api/players';
const response = await fetch(`${url}/${id}`);
const player = await response.json();
if (!player) {
return `<h2>Jugador no encontrado</h2>`;
}
 return `
       <section class="d-flex justify-content-center align-items-center w-100 mt-4">
      <div class="player-card p-4 shadow rounded" style="max-width: 450px; width: 100%; background: white;">
        
        <h2 class="text-center mb-4">Detalles del Jugador</h2>

        <div class="mb-3">
          <label class="form-label fw-bold">Nombre</label>
          <input type="text" class="form-control" value="${player.name}" disabled>
        </div>

        <div class="mb-3">
          <label class="form-label fw-bold">Edad</label>
          <input type="number" class="form-control" value="${player.age}" disabled>
        </div>

        <div class="mb-3">
          <label class="form-label fw-bold">Altura</label>
          <input type="text" class="form-control" value="${player.height}" disabled>
        </div>

        <div class="mb-3">
          <label class="form-label fw-bold">Posición</label>
          <input type="text" class="form-control" value="${player.position}" disabled>
        </div>

        <div class="mb-3">
          <label class="form-label fw-bold">Nacionalidad</label>
          <input type="text" class="form-control" value="${player.nationality}" disabled>
        </div>

        <div class="text-center mt-3">
          <a class="btn btn-secondary w-100" href="/#/players">Volver</a>
        </div>

      </div>
    </section>
    `;
}