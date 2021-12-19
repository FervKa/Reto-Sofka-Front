import React from 'react'
import '../css/inicio.css'




const Inicio = () => {
    return (
        <>
            <div className="container-uno">
                <div className="container-propio">
                    <div className='texto-desafio'>
                        Es hora de desafiar y poner a prueba con preguntas tus conocimientos.
                    </div>
                    <div className='texto-boton'>
                        ¡Pulsa el botón de abajo para comenzar con las preguntas!
                    </div>
                    <div className='boton-dark'>
                        <button type="button" className="btn btn-light btn-lg">Dark</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Inicio
