import { gql } from "@apollo/client";

const SET_JUGADOR = gql`
  mutation CrearJugador(
    $nombre: String!
    $apellido: String!
    $puntaje: String!
  ) {
    crearJugador(nombre: $nombre, apellido: $apellido, puntaje: $puntaje) {
      nombre
      apellido
      puntaje
    }
  }
`;

export { SET_JUGADOR };
