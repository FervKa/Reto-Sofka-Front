import { gql } from "@apollo/client";

const GET_MATHS = gql`
  query Matematicas {
    Matematicas {
      pregunta
      respuesta_correcta
      respuesta_ncrr1
      respuesta_ncrr2
      respuesta_ncrr3
    }
  }
`;

export { GET_MATHS };
