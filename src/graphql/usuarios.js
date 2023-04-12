import { gql } from '@apollo/client'

export const GET_USUARIO = gql`
  query($id: ID!){
    usuario(_id: $id) {
      _id
      email
      password
      doctor {
        nombre
        apellidoPaterno
      }
    }
  }
`

export const LOGIN = gql`
  mutation($email: String, $password: String){
    login(email: $email, password: $password)
  }
`

export const DELETE_USUARIO = gql`
  mutation($id: ID!){
    deleteUsuario(_id: $id) {
      _id
    }
  }
`

export const CREATE_USUARIO = gql`
  mutation($doctorId: String!, $email: String!, $password: String!){
    createUsuario(doctorId: $doctorId, email: $email, password: $password) {
      usuario {
        _id
        email
        doctor {
          nombre
          apellidoPaterno
          apellidoMaterno
        }
      }
      jwt
    }
  }
`
