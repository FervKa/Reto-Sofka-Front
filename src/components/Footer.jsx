import React from 'react'
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
                                <a className="nav-link active" aria-current="page"
                                    onClick={holawe} data-bs-toggle="modal" data-bs-target="#Info">
                                    INFO
                                </a>
                            </div>
                        </div>
                        <div className='text-footer'>
                            <div className="row-4">
                                Lista de Jugadores
                            </div>
                        </div>
                    </div>
                </nav>
            </div>

            {<Modal titulo="Informaciòn" contenido="Holi, we" />}

        </>
    )
}

export default Footer;
