import React from 'react'
import { NavLink } from 'react-router-dom';
import '../css/footer.css'
import Modal from './Modal';


const Footer = () => {

    const holawe = () => {
        console.log("Hola, we");

    }

    return (
        <>
            <div className="container footer-div ">
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark cnt-footer ">
                    <div className="container-fluid">
                        <div className='text-footer'>
                            <div className="row-4">
                                Acerca del juego
                            </div>
                        </div>
                        <div className='text-footer'>
                            <div className="row-4">
                                {/* <a onClick={holawe}>
                                    Acerca de mí
                                </a> */}
                                <NavLink to="" className="nav-link active" aria-current="page"
                                     data-bs-toggle="modal" data-bs-target="#Info">
                                    INFO
                                </NavLink>
                            </div>
                        </div>
                        <div className='text-footer'>
                            <NavLink to="/ListaJugadores" className="row-4">
                                Lista de Jugadores
                            </NavLink>
                        </div>
                    </div>
                </nav>
            </div>

            {/* {<Modal titulo="Informaciòn" contenido="Holi, we" />} */}

        </>
    )
}

export default Footer;
