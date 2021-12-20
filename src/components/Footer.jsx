import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import '../css/footer.css';

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
                                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                    INFO
                                </button>
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

            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            ...
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;
