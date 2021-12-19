import { gql } from "@apollo/client";

const GET_JUGADORES = gql`
query Query {
    Jugadores {
      nombre
      apellido
      puntaje
    }
  }


`;

export { GET_JUGADORES }; 