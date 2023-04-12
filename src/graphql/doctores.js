import { gql } from '@apollo/client'

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
    $nombre: String!, 
    $apellidoPaterno: String!, 
    $apellidoMaterno: String!, 
    $fechaNacimiento: String!, 
    $genero: String!, 
    $curp: String!, 
    $rfc: String!, 
    $cedula: String!){
    createDoctor(
      nombre: $nombre,
      apellidoPaterno: $apellidoPaterno, 
      apellidoMaterno: $apellidoMaterno, 
      fechaNacimiento: $fechaNacimiento, 
      genero: $genero, 
      curp: $curp, 
      rfc: $rfc, 
      cedula: $cedula
    ){
      _id
      nombre
    }
  }
`
