import { gql } from "@apollo/client";

const GET_TECNOLOGIA = gql`
  query Tecnologias {
    Tecnologias {
      pregunta
      respuesta_correcta
      respuesta_ncrr1
      respuesta_ncrr2
      respuesta_ncrr3
    }
  }
`;

export { GET_TECNOLOGIA };
