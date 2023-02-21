import React from 'react';

export default function Registro() {

    return (
        <div>
            <form class="form-formulario" >
                <div class="mb-3">
                    <label for="exampleFormControlInput1"
                        class="form-label form-label-nuevo">Nombre:
                    </label>
                    <input name="nombreColaborador" type="text" class="form-control form-input-nuevo"
                        id="exampleFormControlInput1" placeholder="Ingresa tu Nombre"
                    />
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1"
                        class="form-label form-label-nuevo">Apellido:
                    </label>
                    <input name="nombreColaborador" type="text" class="form-control form-input-nuevo"
                        id="exampleFormControlInput1" placeholder="Ingresa tu Apellido"
                    />
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1"
                        class="form-label form-label-nuevo">Email:
                    </label>
                    <input name="nombreColaborador" type="text" class="form-control form-input-nuevo"
                        id="exampleFormControlInput1" placeholder="name@example.com"
                    />
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1"
                        class="form-label form-label-nuevo">Contraseña:
                    </label>
                    <input name="correoColaborador" type="email" class="form-control form-input-nuevo"
                        id="exampleFormControlInput1" placeholder="Ingresa tu contraseña"
                    />
                </div>
                <button type="submit" class="btn btn-secondary">Registrar</button>
                <button type="submit" class="btn btn-secondary">Volver</button>
            </form>
        </div>

    )

}