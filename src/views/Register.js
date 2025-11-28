export function Register() {
  return `
<div class="container">
    <form id="signup" class="form">
      <h1 class="form-title">Crear cuenta</h1>

      <div id="form-message" class='success-message'></div>  

      <div class="form-field">
        <label for="username">Nombre de usuario</label>
        <input type="text" id="username" name="username" autocomplete="off" placeholder="Tu nombre de usuario">
        <small class="error-message"></small>
      </div>

      <div class="form-field">
        <label for="email">Correo electrónico</label>
        <input type="email" id="email" name="email" autocomplete="off" placeholder="ejemplo@correo.com">
        <small class="error-message"></small>
      </div>

      <div class="form-field">
        <label for="password">Contraseña</label>
        <input type="password" id="password" name="password" autocomplete="off" placeholder="Mínimo 6 caracteres">
        <small class="error-message"></small>
      </div>

      <div class="form-field">
        <label for="confirm-password">Confirmar contraseña</label>
        <input type="password" id="confirm-password" name="confirm-password" autocomplete="off" placeholder="Repite la contraseña">
        <small class="error-message"></small>
      </div>

      <button type="submit" class="btn-submit">Registrarse</button>
    </form>
  </div>
`;
}
