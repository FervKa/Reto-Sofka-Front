import { useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GET_MATHS } from "../graphql/matematicas/querys";
import '../css/pregunta1.css'

const Pregunta1 = () => {

    const [preguntaUno, setPreguntaUno] = useState([]);

    const { data, loading, error } = useQuery(GET_MATHS);

    let respuestaDato;

    const preguntasMatematica = async () => {
        const listaPregunta = await data;
        const randomDato = Math.floor(Math.random() * listaPregunta.Matematicas.length)
        respuestaDato = await listaPregunta.Matematicas[randomDato]

        console.log("Desde la función", respuestaDato);
        setPreguntaUno(respuestaDato);
        console.log("Desde la función el state", preguntaUno);

        /* console.log("El tamaño es:", listaPregunta.Matematicas.length);
        console.log("La lista es:", listaPregunta); */
        return respuestaDato;
    }

    console.log("Desde afuera", respuestaDato || []);



    useEffect(() => {
        preguntasMatematica();
        console.log("Desde el Effect", preguntaUno);
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
                        <Link to="/pregunta2" type="button" className="btn btn-light">&nbsp;{preguntaUno.respuesta_correcta}&nbsp;</Link>
                    </div>
                    <br />
                    <div className="container-preg">
                        <button type="button" className="btn btn-light" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            &nbsp;{preguntaUno.respuesta_ncrr1}&nbsp;
                        </button>
                    </div>
                    <br />
                    <div className="container-preg">
                        <button type="button" className="btn btn-light" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            &nbsp;{preguntaUno.respuesta_ncrr2}&nbsp;
                        </button>
                    </div>
                    <br />
                    <div className="container-preg">
                        <button type="button" className="btn btn-light" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            &nbsp;{preguntaUno.respuesta_ncrr3}&nbsp;
                        </button>

                    </div>
                </div>
            </div>

            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                            <Link to="/" type="button" className="btn btn-primary">Save changes</Link>
                        </div>
                    </div>
                </div>
            </div>


        </>)
};

export default Pregunta1;
