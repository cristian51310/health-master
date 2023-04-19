import { GraphQLScalarType } from 'graphql'
import gql from 'graphql-tag'
import Paciente from '../models/Paciente.js'
import Receta from '../models/Receta.js'

export const typeDefs = gql`
  extend type Query{
    pacientes: [Paciente] 
    paciente(_id: ID!): Paciente
  }

  extend type Mutation{
    createPaciente(
      nombre: String!,
      apellidoPaterno: String!,
      apellidoMaterno: String!,
      fechaNacimiento: Date!,
      genero: String!
      fotoPerfil: String!
    ) : Paciente

    deletedPaciente(
      _id: ID!
    ) : Paciente
  }

  scalar Date

  type Paciente{
    _id: ID!
    nombre: String!
    apellidoPaterno: String!
    apellidoMaterno: String!
    fechaNacimiento: Date!
    genero: String!
    fotoPerfil: String!
    createdAt: String
    updatedAt: String
    receta: [Receta]
  }
`

export const resolvers = {
  Date: new GraphQLScalarType({
    name: 'Date',
    description: 'Tipo de fecha de JavaScript',
    parseValue (value) {
      return new Date(value) // Conversion de valor de entrada
    },
    serialize (value) {
      return value.getTime() // Conversion de valor de salida
    }
  }),

  Query: {
    pacientes: async () => await Paciente.find(),
    paciente: async (_, { _id }) => await Paciente.findById(_id)
  },

  Mutation: {
    createPaciente: async (_, { nombre, apellidoPaterno, apellidoMaterno, fechaNacimiento, genero, fotoPerfil }) => {
      const paciente = new Paciente({
        nombre,
        apellidoPaterno,
        apellidoMaterno,
        fechaNacimiento,
        genero,
        fotoPerfil
      })
      const savedpaciente = await paciente.save()
      return savedpaciente
    },

    deletedPaciente: async (_, { _id }) => {
      const deletedPaciente = await Paciente.findByIdAndDelete(_id)
      if (!deletedPaciente) {
        throw new Error('Paciente no encontrado')
      } else {
        return deletedPaciente
      }
    }
  },

  Paciente: {
    receta: async (parent) => await Receta.find({ pacienteId: parent._id })
  }
}
