
// One to Many Relationship table 
// One category belongs to many products
export const Category = {
      // products because Category schema has products = [Product!]!
      products: (parent, args, context) => { 
        // get all products using context
        const products = context.products;

        // parent.id is the query id
        // parent = category because category has {products[]}
        const categoryID = parent.id;
        return products.filter(p => p.categoryId === categoryID)
      }
    }