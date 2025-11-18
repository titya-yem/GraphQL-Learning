import { gql } from "apollo-server"

// scalar types such as String, Int, Float, Boolean. When defined type 
// it always comes as null auto (example Int || null) if don't want it just add !
// if return [] it should be [String] and if not want null add ! ([String!]!)
export const typeDefs = gql`
# Product is array of Product objects, we must create Product and put in [] => [{}]
# To get single product we write product(id: ID!), then its object type
    type Query {
        hello: [String]              # get String[]
        # filter: object is the syntax to filter product (if onSale === true)
        products(filter: ProductsFilterInput): [Product!]!        # get Product[]
        product(id: ID!): Product    # get Product by id
        categories: [Category!]!     # get category[]
        category(id: ID!): Category  # get category by id
    }

    # Third methord is the way to get product by Id
    # Remember for relationship table we must provide FK to make them work
    type Product { 
        id: ID!
        name: String!
        description: String!
        image: String!
        quantity: Int!
        price: Float!
        onSale: Boolean!
        category: Category  # Category is a type Category below
        reviews: [Review!]! # Review is a type Review below
    }

    # type is for defined type of query
    type Category {
      id: ID!
      name: String!
      products: [Product!]! # Product is a type Category above
    }

    type Review {
        id: ID!
        date: String!
        title: String!
        comment: String!
        rating: Int!
    }

    # input is getting input from frontend (Apollo) 
    # because we used filter above
    input ProductsFilterInput {
        onSale: Boolean
    }
`