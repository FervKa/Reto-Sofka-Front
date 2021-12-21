import { React, useEffect } from 'react'
import Navbar from './Navbar'
import { useQuery } from "@apollo/client";
import { GET_JUGADORES } from '../graphql/jugadores/querys';
import '../css/tabla.css'
import { Link, NavLink } from 'react-router-dom';

const ListaJugadores = () => {

    const { data, loading, error } = useQuery(GET_JUGADORES)

    /* useEffect(() => {
        console.log("Datos del server", data);
    }, [data]) */

    if (loading) return <>Cargando</>


    return (
        <>
            <Navbar />
            <div className="container-just">
                <div className='encabezado'>
                    Jugadores:
                    <table className='table table-sm  table-hover tabla brd'>
                        <thead>
                            <th>Item</th>
                            <th>Nombre</th>
                            <th>Apellido</th>
                            <th>Puntaje</th>
                        </thead>
                        <tbody>
                            {data && data.Jugadores.map((u) => {
                                return (
                                    <tr key={u._id}>
                                        <td></td>
                                        <td>{u.nombre}</td>
                                        <td>{u.apellido}</td>
                                        <td>{u.puntaje}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
                <div className="boton">
                    <Link to="/" type="button" className="btn btn-dark" >Regresar</Link>
                </div>
            </div>


        </>
    )
}

export default ListaJugadores
