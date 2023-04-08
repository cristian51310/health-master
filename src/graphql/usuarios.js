import { gql } from '@apollo/client'

export const GET_ALL_USUARIOS = gql`
  query{
    usuarios {
      _id
      email
      password
    }
  }
`

export const GET_USUARIO = gql`
  query($id: ID!){
    usuario(_id: $id) {
      _id
      email
      password
    }
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
  mutation($email: String!, $password: String!){
  createUsuario(email: $email, password: $password) {
    _id
  }
}
`
