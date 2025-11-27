
export const PlayerDetail = async (id) =>{
const url = 'http://localhost:3000/players';
const response = await fetch(`${url}/${id}`);
const player = await response.json();
if (!player) {
return `<h2>Jugador no encontrado</h2>`;
}
 return `
      <form class="form ">
      <h1 class="form-title">Ver Jugador</h1>

      <div class="form-field">
        <label>Nombre</label>
        <input type="text" name="name" value="${player.name}" disabled />
      </div>

      <div class="form-field">
        <label>Edad</label>
        <input type="number" name="age" value="${player.age}" disabled />
      </div>

      <div class="form-field">
        <label>Altura</label>
        <input type="text" name="height" value="${player.height}" disabled />
      </div>

      <div class="form-field">
        <label>Posición</label>
        <input type="text" name="position" value="${player.position}" disabled />
      </div>

      <div class="form-field">
        <label>Nacionalidad</label>
        <input type="text" name="nationality" value="${player.nationality}" disabled />
      </div>

      <div class="btn-field">
        <a class="btn btn-secondary" href="/#/players">↩ Volver</a>
      </div>
    </form>
    `;
}