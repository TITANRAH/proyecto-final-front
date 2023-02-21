import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from "react-router-dom";

import verificar from "../../assets/img/verificar.png"
import "./navbar.css"

export default function NavBar(props) {

    const setActiveClass = ({ isActive }) => (isActive ? "active" : undefined);

    return (

        <Navbar className='form-cont-navbar' bg="" variant="">
            <div className='form-cont-nombre'>
                <div className="form-cont-img-logo">
                    <img className="form-img-navbar" src={verificar} alt=""></img>
                </div>
                <NavLink className={setActiveClass} to="/">
                    <h4 className='form-tit-navbar'>
                        El Palomo Mensajero!
                    </h4>
                </NavLink>
            </div>
            <div className='form-cont-login'>
                <NavLink className={setActiveClass} to="login">
                    <h5 className='form-tit-navbar'> Inicio de Sesión</h5>
                </NavLink>
            </div>
            <div className='form-cont-registro'>
                <NavLink className={setActiveClass} to="registro">
                    <h5 className='form-tit-navbar'> Registrate</h5>
                </NavLink>
            </div>
            {/* <div className='form-cont-carrito'>
                <div className='form-cont-img-carrito'>
                    <img className="form-img-navbar" src={verificar} alt=""></img>
                </div>
                <NavLink className={setActiveClass} to="/carrito">
                    <h4 className='form-tit-navbar'>
                        {props.totalProduct.toLocaleString('en-EN', { style: 'currency', currency: 'CLP' })}
                    </h4>
                </NavLink>
            </div> */}
        </Navbar>

    )
}