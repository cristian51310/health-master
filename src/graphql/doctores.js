import { gql } from '@apollo/client'

export const GET_ALL_DOCTORES = gql`
  query{
    Doctores {
      _id
      nombre
      apellidoPaterno
      apellidoMaterno
      fechaNacimiento
      genero
      rfc
      curp
      cedula
      usuario {
        _id
        email
        password
      }
    }
  }
`

export const GET_DOCTOR = gql`
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
      usuario {
        _id
        email
        password
      }
    }
  }
`

export const DELETE_DOCTOR = gql`
  mutation($id: ID!){
    deleteDoctor(_id: $id) {
      _id
      nombre
    }
  }
`

export const CREATE_DOCTOR = gql`
  mutation(
    $usuarioId: ID!, 
    $nombre: String!, 
    $apellidoPaterno: String!, 
    $apellidoMaterno: String!, 
    $fechaNacimiento: String!, 
    $genero: String!, 
    $curp: String!, 
    $rfc: String!, 
    $cedula: String!){
    createDoctor(
      usuarioId: $usuarioId, 
      nombre: $nombre,
      apellidoPaterno: $apellidoPaterno, 
      apellidoMaterno: $apellidoMaterno, 
      fechaNacimiento: $fechaNacimiento, 
      genero: $genero, 
      curp: $curp, 
      rfc: $rfc, 
      cedula: $cedula
    ){
      usuarioId
      nombre
    }
  }
`
