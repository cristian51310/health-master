import { gql } from '@apollo/client'

export const GET_ALL_PACIENTES = gql`
  query{
    pacientes {
      _id
      nombre
      genero
      apellidoPaterno
      apellidoMaterno
      fechaNacimiento
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
      receta {
        alergias
        diagnostico
        estatura
        frecuenciaCardiaca
        frecuenciaRespiratoria
        peso
        presionArterial
        temperatura
        tratamiento
        diagnostico
        createdAt
        doctor {
          nombre
          apellidoPaterno
          apellidoMaterno
          cedula
        }
      }
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
    $fechaNacimiento: Date!, 
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
