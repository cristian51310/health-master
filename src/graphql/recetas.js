import { gql } from '@apollo/client'

export const GET_RECETA = gql`
  query($id: ID!){
    Doctor(_id: $id) {
      _id
      nombre
      apellidoPaterno
      apellidoMaterno
      fechaNacimiento
      genero
      rfc
      curp
      cedula
    }
  }
`

export const DELETE_RECETA = gql`
  mutation($id: ID!){
    deleteDoctor(_id: $id) {
      _id
      nombre
    }
  }
`

export const CREATE_RECETA = gql`
  mutation($doctorId: ID!, $pacienteId: ID!, $presionArterial: String!, $frecuenciaCardiaca: String!, $frecuenciaRespiratoria: String!, $temperatura: String!, $peso: String!, $estatura: String!, $alergias: String!, $diagnostico: String!, $tratamiento: String!){createReceta(doctorId: $doctorId, pacienteId: $pacienteId, presionArterial: $presionArterial, frecuenciaCardiaca: $frecuenciaCardiaca, frecuenciaRespiratoria: $frecuenciaRespiratoria, temperatura: $temperatura, peso: $peso, estatura: $estatura, alergias: $alergias, diagnostico: $diagnostico, tratamiento: $tratamiento) {
  paciente {
    nombre
  }
  doctor {
    nombre
  }
  _id
  diagnostico
}}
`
