import { gql } from "apollo-server"

// scalar types such as String, Int, Float, Boolean. When defined type 
// it always comes as null auto (example Int || null) if don't want it just add !
// if return [] it should be [String] and if not want null add ! ([String!]!)
export const typeDefs = gql`
# Product is array of Product objects, we must create Product and put in [] => [{}]
# To get single product we write product(id: ID!), then its object type
    type Query {
        hello: [String]
        products: [Product!]!
        product(id: ID!): Product
        categories: [Category!]!
        category(id: ID!): Category
    }

    type Product { 
        id: ID!
        name: String!
        description: String!
        image: String!
        quantity: Int!
        price: Float!
        onSale: Boolean!
        category: Category
    }

    type Category {
      id: ID!
      name: String!
      products: [Product!]!
    }
`