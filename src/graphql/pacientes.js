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

export const GET_PACIENTE = gql`
  query($id: ID!){
    paciente(_id: $id) {
      _id
      nombre
      apellidoPaterno
      apellidoMaterno
      fechaNacimiento
      genero
      createdAt
    }
  }
`

export const DELETE_PACIENTE = gql`
  mutation($id: ID!){
    deletedPaciente(_id: $id) {
      nombre
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
