import { ApolloServer } from '@apollo/server'
import { expressMiddleware } from '@apollo/server/express4'
import express from 'express'
import http from 'http'
import cors from 'cors'

export async function startApolloServer (typeDefs, resolvers) {
  const app = express()
  const httpServer = http.createServer(app)

  const server = new ApolloServer({
    typeDefs,
    resolvers
  })

  await server.start()

  app.use('/graphql', cors(), express.json(), expressMiddleware(server))

  await new Promise((resolve) => httpServer.listen({ port: 4002 }, resolve))
  console.log('🚀🚀🚀 Server ready at http://localhost:4002')
}