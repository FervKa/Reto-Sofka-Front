import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import '../css/footer.css';

const Footer = () => {

    const Navigate = useNavigate();

    const listaJugadores = () => {
        Navigate("/ListaJugadores")

    }


    return (
        <>
            <div className="container footer-div ">
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark cnt-footer ">
                    <div className="container-fluid">
                        <div className='text-footer'>
                            <button type="button" className="btn btn-dark" data-bs-toggle="modal" data-bs-target="#acercadljuego">
                                Acerca del Juego
                            </button>
                        </div>
                        <div className='text-footer'>
                            <div className="row-4">
                                <button type="button" className="btn btn-dark" data-bs-toggle="modal" data-bs-target="#acercademi">
                                    Acerca de mí
                                </button>
                            </div>
                        </div>
                        <div className='text-footer'>
                            <button onClick={listaJugadores} type="button" className="btn btn-dark">
                                Lista de Jugadores
                            </button>
                        </div>
                    </div>
                </nav>
            </div>
            {/* Modal Acerca de Mí */}
            <div className="modal fade" id="acercademi" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Acerca de mí</h5>
                        </div>
                        <div className="modal-body">
                            Soy un joven de 21 años, apasionado por la programación y el mundo de la tecnología.
                            Me gusta estudiar y aprender conocimientos nuevos, aplicar las cosas que aprendo a mi mundo e intentar resolver
                            problemas actuales.
                            <br />
                            Estudié con el Ministerio de Tecnología (MinTIC), de la mano de la Universidad de Antioquia.
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-dark" data-bs-dismiss="modal">Cerrar</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Finaliza Modal Acerca de Mí */}
            {/* Modal Acerca del Juego */}
            <div className="modal fade" id="acercadljuego" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Acerca del Juego</h5>
                        </div>
                        <div className="modal-body">
                            Este juego es creado y desarrollado por Stiven Suárez Marín.
                            <br />
                            Las normas del juego son sencillas:
                            <br />
                            <br />
                            1. Responde las preguntas acertadamente para pasar a la siguiente ronda.
                            <br />
                            2. Sumas 10 puntos por cada pregunta contestada de manera correcta.
                            <br />
                            3. Si pierdes, debes registrar tu usuario para comenzar de nuevo el juego.
                            <br />
                            <br />
                            Sencillo, ¿verdad? Es tu turno de interntarlo.
                            <br />
                            ¡Buena Suerte!
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-dark" data-bs-dismiss="modal">Cerrar</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Finaliza Modal Acerca del Juego */}
        </>
    )
}

export default Footer;
