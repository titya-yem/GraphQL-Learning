import { ApolloServer } from "apollo-server"
import { typeDefs } from "./schema.js";
import { Query } from "./resolvers/Query.js"
import { Product } from "./resolvers/Product.js"
import { Category } from "./resolvers/Category.js"

// Third methord is the way to get product by Id
// Remember for relationship table we must provide FK to make them work
const server = new ApolloServer({
    typeDefs,
    resolvers: {
      Query,
      Product,
      Category
    }
})

const PORT = process.env.PORT || 3000
server.listen(PORT, () => {
    console.log("Server is running on PORT http://localhost:3000")
})