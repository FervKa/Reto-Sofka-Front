import React from 'react'
import { Link } from 'react-router-dom'
import '../css/inicio.css'
import Footer from './Footer'
import Navbar from './Navbar'




const Inicio = () => {
    return (
        <>
            <Navbar />
            <div className="container-uno">
                <div className="container-propio">
                    <div className='texto-desafio'>
                        Es hora de desafiar y poner a prueba con preguntas tus conocimientos.
                    </div>
                    <div className='texto-boton'>
                        <br></br>
                        ¡Pulsa el botón de abajo para conocer las preguntas!
                    </div>
                    <div className='boton-dark'>
                        <Link to="/preguntas" type="button" className="btn btn-light btn-lg">Empieza</Link>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Inicio
