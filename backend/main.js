import { startApolloServer } from './app.js'
import { resolvers, typeDefs } from './graphql/schema.js'
import { connectDB } from './db.js'

// Connect to database
connectDB()

// Start Apollo Server
startApolloServer(typeDefs, resolvers)
