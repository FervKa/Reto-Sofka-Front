import { useMutation } from '@apollo/client';
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { SET_JUGADOR } from '../graphql/jugadores/mutations';
import { useFormData } from '../hooks/useFormData';

const Ganaste = () => {

    const { form, formData, updateFormData } = useFormData(null);
    const puntaje = "50";
    const [agregarJugador, { data: dataMutation, loading: loadingMutation, error: errorMutation }] = useMutation(SET_JUGADOR)

    const Navigate = useNavigate();


    const submitForm = (e) => {
        e.preventDefault();
        console.log("fd", formData);
        agregarJugador({
            variables: {
                nombre: formData.nombre,
                apellido: formData.apellido,
                puntaje: "50"
            }
        })
        Navigate("/")
    }

    return (
        <>
            <div className="container-uno">
                <div className="container-propio">
                    <div className='texto-desafio'>
                        Felicidades por haber ganado.
                    </div>
                    <div className='texto-boton'>
                        <br></br>
                        ¡Has recibido 50 puntos!
                    </div>
                    <button type="button" className="btn btn-light" data-bs-toggle="modal" data-bs-target="#modal-ganaste">Registrate para ir al inicio</button>
                </div>
            </div>


            <div className="modal fade" id="modal-ganaste" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
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
        </>
    )
}

export default Ganaste
