import "./header.css"

import imgHeader from "../../assets/img/header.jpg"

export default function Header() {

  return (
    <div className="form-cont-header">
      <div className='form-cont-img-header'>
        <img className="form-img-header" src={imgHeader} alt=""></img>
      </div>
      <div className="form-cont-texto">
        <h1>¡El Palomo Mensajero!</h1>
        <h3>¡Una forma distinta de enviar tus mensajes!</h3>
      </div>
    </div>
  )
}