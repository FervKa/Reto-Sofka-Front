import { useMutation, useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import '../css/pregunta1.css'
import '../css/pregunta4.css'
import { SET_JUGADOR } from "../graphql/jugadores/mutations";
import { useFormData } from "../hooks/useFormData";
import { GET_TECNOLOGIA } from "../graphql/tecnologia/querys";

const Pregunta4 = () => {

    const [preguntaUno, setPreguntaUno] = useState([]);
    const { data, loading, error } = useQuery(GET_TECNOLOGIA);
    const { form, formData, updateFormData } = useFormData(null);
    const puntaje = "0";
    const [agregarJugador, { data: dataMutation, loading: loadingMutation, error: errorMutation }] = useMutation(SET_JUGADOR)

    let respuestaDato;

    const preguntasTecnologia = async () => {
        const listaPregunta = await data;
        const randomDato = Math.floor(Math.random() * listaPregunta.Tecnologias.length)
        respuestaDato = await listaPregunta.Tecnologias[randomDato];
        setPreguntaUno(respuestaDato);
        return respuestaDato;
    }


    const Navigate = useNavigate();


    const submitForm = (e) => {
        e.preventDefault();
        console.log("fd", formData);
        agregarJugador({
            variables: {
                nombre: formData.nombre,
                apellido: formData.apellido,
                puntaje: "0"
            }
        })
        Navigate("/")
    }


    useEffect(() => {
        preguntasTecnologia();
    }, [data])



    if (loading) return <>Cargando</>

    return (

        <>
            <div className="puntaje-actual">
                <label>Tu puntaje actual es: 30</label>
            </div>
            <div className="boton-rendirse">
                <Link to="/rendirse4" type="button" className="btn btn-light">¡Ríndete! Igual la vida es una</Link>
            </div>
            <div className="container-uno">
                <div className="container-propio-pg4">
                    <div className="container-preg">
                        &nbsp;Responde con sabiduria:

                    </div>
                    <hr />
                    <div className="container-preg">
                        &nbsp;{preguntaUno.pregunta}&nbsp;
                    </div>
                    <hr />
                    <div className="container-preg">
                        <button type="button" className="btn btn-light" data-bs-toggle="modal" data-bs-target="#modal-perdiste">
                            &nbsp;{preguntaUno.respuesta_ncrr1}&nbsp;
                        </button>
                    </div>
                    <br />
                    <div className="container-preg">
                        <button type="button" className="btn btn-light" data-bs-toggle="modal" data-bs-target="#modal-perdiste">
                            &nbsp;{preguntaUno.respuesta_ncrr2}&nbsp;
                        </button>
                    </div>
                    <br />
                    <div className="container-preg">
                        <Link to="/pregunta5" type="button" className="btn btn-light">&nbsp;{preguntaUno.respuesta_correcta}&nbsp;</Link>
                    </div>
                    <br />
                    <div className="container-preg">
                        <button type="button" className="btn btn-light" data-bs-toggle="modal" data-bs-target="#modal-perdiste">
                            &nbsp;{preguntaUno.respuesta_ncrr3}&nbsp;
                        </button>

                    </div>
                </div>
            </div>

            {/* Modal Perdiste */}
            <div className="modal fade" id="modal-perdiste" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-body">
                            <h1>Oh, ¡parece que perdiste!</h1>
                            <h4>Ingresa tus datos y vuelve a intentarlo.</h4>
                        </div>
                        <form
                            onSubmit={submitForm}
                            onChange={updateFormData}
                            ref={form}
                        >
                            <div className="input-modal">
                                <label>Puntaje</label>
                            </div>
                            <div className="input-modal">
                                <input
                                    className="form-control form-control-sm tamano-input"
                                    type="text"
                                    aria-label=".form-control-sm example"
                                    name="puntaje"
                                    defaultValue={puntaje}
                                    disabled
                                ></input>
                            </div>
                            <br />
                            <div className="input-modal">
                                <input
                                    className="form-control form-control-sm tamano-input"
                                    type="text" placeholder="Nombres"
                                    aria-label=".form-control-sm example"
                                    name="nombre"
                                    required
                                ></input>
                            </div>
                            <br />
                            <div className="input-modal">
                                <input
                                    className="form-control form-control-sm tamano-input"
                                    type="text" placeholder="Apellido"
                                    aria-label=".form-control-sm example"
                                    name="apellido"
                                    required
                                ></input>
                            </div>
                            <div className="modal-footer">
                                <button onClick={submitForm} type="submit" className="btn btn-primary" data-bs-dismiss="modal">Save changes</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/* Finaliza Modal Perdiste */}
        </>
    )
};

export default Pregunta4;
