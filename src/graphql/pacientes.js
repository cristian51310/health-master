import { gql } from '@apollo/client'

export const GET_ALL_PACIENTES = gql`
  query{
    pacientes {
      _id
      nombre
      apellidoPaterno
      apellidoMaterno
      fechaNacimiento
      genero
    }
  }
`

export const CREATE_PACIENTE = gql`
  mutation(
    $nombre: String!, 
    $apellidoPaterno: String!, 
    $apellidoMaterno: String!, 
    $fechaNacimiento: String!, 
    $genero: String!){
      createPaciente(
        nombre: $nombre, 
        apellidoPaterno: $apellidoPaterno, 
        apellidoMaterno: $apellidoMaterno, 
        fechaNacimiento: $fechaNacimiento, 
        genero: $genero) {
        nombre
  }
}
`
