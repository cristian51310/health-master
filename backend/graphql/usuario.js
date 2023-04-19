import gql from 'graphql-tag'
import Usuario from '../models/Usuario.js'
import { createJWT } from '../utils/auth.js'
import Doctor from '../models/Doctor.js'
import { HashPassword } from '../utils/encrypt.js'
import bcrypt from 'bcrypt'

export const typeDefs = gql`
  extend type Query{
    usuarios: [Usuario] 
    usuario(_id: ID!): Usuario
  }

  extend type Mutation{
    createUsuario(
      doctorId: String!,
      email: String!,
      password: String!
    ) : CreateUsuarioResponse

    deleteUsuario(
      _id: ID!
    ) : Usuario

    login(
      email: String,
      password: String
    ) : String
  }

  type CreateUsuarioResponse {
    usuario: Usuario
    jwt: String
  }

  type Usuario{
    _id: ID!
    doctorId: ID!
    email: String!
    password: String!
    createdAt: String
    updatedAt: String
    doctor: [Doctor]
  }
`

export const resolvers = {
  Query: {
    usuarios: async () => await Usuario.find(),
    usuario: async (_, { _id }) => await Usuario.findById(_id)
  },

  Mutation: {
    createUsuario: async (_, { doctorId, email, password }) => {
      const hashedPassword = await HashPassword(password)
      const usuario = new Usuario({ doctorId, email, password: hashedPassword })
      const savedusuario = await usuario.save()
      const token = createJWT({ _id: usuario._id, email: usuario.email, doctorId: usuario.doctorId })
      console.log(token)
      return {
        usuario: savedusuario,
        jwt: token
      }
    },

    login: async (_, { email, password }) => {
      const logeduser = await Usuario.findOne({ email })
      if (!logeduser) {
        throw new Error('Usario Invalido')
      }
      const passwordMatches = await bcrypt.compare(password, logeduser.password)
      if (!passwordMatches) {
        throw new Error('Contraseña incorrecta')
      }
      const token = createJWT({ _id: logeduser._id, email: logeduser.email, doctorId: logeduser.doctorId })
      return token
    },

    deleteUsuario: async (_, { _id }) => {
      const deletedusuario = await Usuario.findByIdAndDelete(_id)
      if (!deletedusuario) {
        throw new Error('Usuario no encontrado')
      } else {
        return deletedusuario
      }
    }
  },

  Usuario: {
    doctor: async (parent) => await Doctor.find({ _id: parent.doctorId })
  }
}
