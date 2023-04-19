import gql from 'graphql-tag'
import { typeDefs as typeDefsPaciente, resolvers as resolversPaciente } from './paciente.js'
import { typeDefs as typeDefsUsuario, resolvers as resolversUsuario } from './usuario.js'
import { typeDefs as typeDefsDoctor, resolvers as resolversDoctor } from './doctor.js'
import { typeDefs as typeDefsReceta, resolvers as resolversReceta } from './receta.js'

const rootTypeDefs = gql`
  type Query{
    _: String
  }

  type Mutation{
    _: String
  }
`

export const typeDefs = [
  rootTypeDefs,
  typeDefsPaciente,
  typeDefsDoctor,
  typeDefsUsuario,
  typeDefsReceta
]

export const resolvers = [
  resolversPaciente,
  resolversUsuario,
  resolversDoctor,
  resolversReceta
]
