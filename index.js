import { ApolloServer, gql } from "apollo-server"

const typeDefs = gql`
    type Query {
        hello: String
    }
`
const resolvers = {
    Query: {
        hello: () => {
            return "Lamdouy"
        }
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers
})

const PORT = process.env.PORT || 3000
server.listen(PORT, () => {
    console.log("Server is running on PORT http://localhost:3000")
})