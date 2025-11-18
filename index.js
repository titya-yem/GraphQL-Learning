import { ApolloServer } from "apollo-server"
import { typeDefs } from "./schema.js";
import { Query } from "./resolvers/Query.js"
import { Product } from "./resolvers/Product.js"
import { Category } from "./resolvers/Category.js"
import { categories, products, reviews } from "./data.js";

const server = new ApolloServer({
    // TypeDefs is where we defined types
    typeDefs,

    // resolvers are the logic (contains) to run codes
    resolvers: {
      Query,
      Product,
      Category
    },

    // context is used as giving props to the resolver's objects
    context: {
      categories,
      products,
      reviews
    }
})

const PORT = process.env.PORT || 3000
server.listen(PORT, () => {
    console.log("Server is running on PORT http://localhost:3000")
})