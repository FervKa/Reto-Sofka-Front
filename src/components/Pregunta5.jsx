import { useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { GET_CULTURA } from '../graphql/cultura/querys';

const Pregunta5 = () => {
    const [preguntaUno, setPreguntaUno] = useState([]);

    const { data, loading, error } = useQuery(GET_CULTURA);

    let respuestaDato;

    const preguntasMatematica = async () => {
        const listaPregunta = await data;
        const randomDato = Math.floor(Math.random() * listaPregunta.Culturas.length)
        respuestaDato = await listaPregunta.Culturas[randomDato]

        console.log("Desde la función", respuestaDato);
        setPreguntaUno(respuestaDato);
        console.log("Desde la función el state", preguntaUno);

        return respuestaDato;
    }


    const navigate = useNavigate();

    const handleClick = () =>{
        navigate("/")
    }


    useEffect(() => {
        preguntasMatematica();
        console.log("Desde el Effect", data);
    }, [data])



    if (loading) return <>Cargando</>
    return (
        <>
            <div className="container-global">
                <div className="container-preguntas">
                    <div className="container-preg">
                        &nbsp;Responde con sabiduria:

                    </div>
                    <hr />
                    <div className="container-preg">
                        &nbsp;{preguntaUno.pregunta}&nbsp;
                    </div>
                    <hr />
                    <div className="container-preg">
                        <button type="button" className="btn btn-light" data-bs-toggle="modal" data-bs-target="#ganaste_modal">
                            &nbsp;{preguntaUno.respuesta_correcta}&nbsp;
                        </button>
                    </div>
                    <br />
                    <div className="container-preg">
                        <button type="button" className="btn btn-light" data-bs-toggle="modal" data-bs-target="#perdiste_modal">
                            &nbsp;{preguntaUno.respuesta_ncrr1}&nbsp;
                        </button>
                    </div>
                    <br />
                    <div className="container-preg">
                        <button type="button" className="btn btn-light" data-bs-toggle="modal" data-bs-target="#perdiste_modal">
                            &nbsp;{preguntaUno.respuesta_ncrr2}&nbsp;
                        </button>
                    </div>
                    <br />
                    <div className="container-preg">
                        <button type="button" className="btn btn-light" data-bs-toggle="modal" data-bs-target="#perdiste_modal">
                            &nbsp;{preguntaUno.respuesta_ncrr3}&nbsp;
                        </button>

                    </div>
                </div>
            </div>

            <div className="modal fade" id="perdiste_modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            {/* <h5 className="modal-title" id="exampleModalLabel">Modal title</h5> */}
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <h1>Oh, ¡parece que perdiste!</h1>
                            <h4>Ingresa tus datos y vuelve a intentarlo.</h4>
                        </div>
                        <div className="input-modal">
                            <input className="form-control form-control-sm tamano-input" type="text" placeholder="Nombres" aria-label=".form-control-sm example"></input>
                        </div>
                        <br />
                        <div className="input-modal">
                            <input className="form-control form-control-sm tamano-input" type="text" placeholder="Apellidos" aria-label=".form-control-sm example"></input>
                        </div>
                        <br />
                        <div className="modal-footer">
                            {/* <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button> */}
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="ganaste_modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            {/* <h5 className="modal-title" id="exampleModalLabel">Modal title</h5> */}
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <h1>¡Has ganado!</h1>
                            <h4>Ingresa tus datos y vuelve a intentarlo.</h4>
                        </div>
                        <div className="input-modal">
                            <input className="form-control form-control-sm tamano-input" type="text" placeholder="Nombres" aria-label=".form-control-sm example"></input>
                        </div>
                        <br />
                        <div className="input-modal">
                            <input className="form-control form-control-sm tamano-input" type="text" placeholder="Apellidos" aria-label=".form-control-sm example"></input>
                        </div>
                        <br />
                        <div className="modal-footer">
                            {/* <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button> */}
                            <button onClick={handleClick} type="button" className="btn btn-primary" data-bs-dismiss="modal">Intentarlo de nuevo</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Pregunta5
