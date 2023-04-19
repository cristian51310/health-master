import gql from 'graphql-tag'
import Receta from '../models/Receta.js'
import Paciente from '../models/Paciente.js'
import Doctor from '../models/Doctor.js'

export const typeDefs = gql`
  extend type Query{
    Recetas: [Receta] 
    Receta(_id: ID!): Receta 
  }

  extend type Mutation{
    createReceta(
      doctorId: ID!
      pacienteId: ID!
      presionArterial: String!,
      frecuenciaCardiaca: String!,
      frecuenciaRespiratoria: String!,
      temperatura: String!,
      peso: String!,
      estatura: String!,
      alergias: String!,
      diagnostico: String!,
      tratamiento: String!
    ) : Receta
  }

  type Receta{
    _id: ID!
    doctorId: ID!
    pacienteId: ID!
    presionArterial: String
    frecuenciaCardiaca: String
    frecuenciaRespiratoria: String
    temperatura: String
    peso: String
    estatura: String!
    alergias: String!
    diagnostico: String!
    tratamiento: String!
    createdAt: String
    updatedAt: String
    doctor: [Doctor]
    paciente: [Paciente]
  }
`

export const resolvers = {
  Query: {
    Recetas: async () => await Receta.find(),
    Receta: async (_, { _id }) => await Receta.findById(_id)
  },

  Mutation: {
    createReceta: async (_,
      {
        doctorId,
        pacienteId,
        presionArterial,
        frecuenciaCardiaca,
        frecuenciaRespiratoria,
        temperatura,
        peso,
        estatura,
        alergias,
        diagnostico,
        tratamiento
      }) => {
      const receta = new Receta({
        doctorId,
        pacienteId,
        presionArterial,
        frecuenciaCardiaca,
        frecuenciaRespiratoria,
        temperatura,
        peso,
        estatura,
        alergias,
        diagnostico,
        tratamiento
      })
      const savedreceta = await receta.save()
      return savedreceta
    }
  },

  Receta: {
    doctor: async (parent) => await Doctor.find({ _id: parent.doctorId }),
    paciente: async (parent) => await Paciente.find({ _id: parent.pacienteId })
  }
}
