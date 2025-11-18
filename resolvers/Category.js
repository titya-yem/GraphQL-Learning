import { products } from "./data.js";

exports.Category = {
      // products because Category schema has products = [Product!]!
      products: (parent, args, context) => { 
        // parent.id is the query id
        // parent = category because category has {products[]}
        const categoryId = parent.id;
        return products.filter(p => p.categoryId === categoryId)
      }
    }