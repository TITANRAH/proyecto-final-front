import React from 'react'
import "./login.css"


const Usuarios = (props) => {
  return (
    <div>
      <form class="form-formulario" >
        <div class="mb-3">
          <label for="exampleFormControlInput1" 
            class="form-label form-label-nuevo">Ingresa tu Email
          </label>
          <input name="nombreColaborador" type="text" class="form-control form-input-nuevo"
              id="exampleFormControlInput1" placeholder="name@example.com" 
          />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" 
            class="form-label form-label-nuevo">Ingresa tu Contraseña
          </label>
          <input name="correoColaborador" type="email" class="form-control form-input-nuevo"
            id="exampleFormControlInput1" placeholder="Ingresa tu contraseña" 
          />
        </div>
        <button type="submit" class="btn btn-secondary">Login</button>
        <button type="submit" class="btn btn-secondary">Volver</button>
      </form>
    </div>


  );
}
  
export default Usuarios;