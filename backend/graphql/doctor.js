import gql from 'graphql-tag'
import Doctor from '../models/Doctor.js'

export const typeDefs = gql`
  extend type Query{
    Doctores: [Doctor] 
    Doctor(_id: ID!): Doctor 
  }

  extend type Mutation{
    createDoctor(
      nombre: String!,
      apellidoPaterno: String!,
      apellidoMaterno: String!,
      fechaNacimiento: Date!,
      genero: String!,
      curp: String!,
      rfc: String!,
      cedula: String!,
    ) : Doctor

    deleteDoctor(
      _id: ID!
    ) : Doctor
  }

  type Doctor{
    _id: ID!
    nombre: String!
    apellidoPaterno: String!
    apellidoMaterno: String!
    fechaNacimiento: Date!
    genero: String!
    curp: String!
    rfc: String!
    cedula: String!
    createdAt: String
    updatedAt: String
  }
`

export const resolvers = {
  Query: {
    Doctores: async () => await Doctor.find(),
    Doctor: async (_, { _id }) => await Doctor.findById(_id)
  },

  Mutation: {
    createDoctor: async (_, { nombre, apellidoPaterno, apellidoMaterno, fechaNacimiento, genero, curp, rfc, cedula }) => {
      const doctor = new Doctor({
        nombre,
        apellidoPaterno,
        apellidoMaterno,
        fechaNacimiento,
        genero,
        curp,
        rfc,
        cedula
      })
      const saveddoctor = await doctor.save()
      return saveddoctor
    },

    deleteDoctor: async (_, { _id }) => {
      const deleteddoctor = await Doctor.findByIdAndDelete(_id)
      if (!deleteddoctor) {
        throw new Error('Doctor no encontrado')
      } else {
        return deleteddoctor
      }
    }
  }
}
