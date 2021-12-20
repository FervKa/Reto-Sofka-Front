import React from 'react'
import { Link } from 'react-router-dom'
import '../css/preguntas.css'

const Preguntas = () => {
    return (
        <>
            <div className="container-uno">
                <div className="container-propio">
                    <div className='texto-desafio'>
                        En este módulo aparecen los temas a los que te enfrentarás.
                        <br></br>
                        Recuerda que las preguntas salen de manera aleatoria.
                        <br></br>
                        - Matemáticas.
                        <br></br>
                        - Ciencias
                        <br></br>
                        - Historia.
                        <br></br>
                        - Tecnología.
                        <br></br>
                        - Cultura General.
                        <br></br>
                    </div>
                    <div className='div-click'>
                        Dale Click al botón de abajo para empezar
                        <br />
                        ¡Buena Suerte!
                    </div>
                    <br />
                    <div className="boto">
                        <Link to="/pregunta1" type="button" className="btn btn-dark" >Iniciar</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Preguntas
