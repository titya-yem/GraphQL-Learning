
export const Query = {
        hello: () => ["Lamdouy", "Douylamdao"],

        // get products[]
        products: (parent, args, { products }) => {
          const filter = args.filter;
          let filterProducts = products;

            if (filter && filter.onSale === true) {
              filterProducts = filterProducts.filter(product => {
                return product.onSale
              })
            }

          return filterProducts;
        },

        // get each product by id
        product: (parent, args, { products }) => {
          const productId = args.id;
          return products.find(p => p.id === productId)
        },

        // get categories[]
        categories: (parent, args, { categories }) => categories,
        
        // get each category by id
        category: (parent, args, { categories }) => {
          const { id } = args;
          return categories.find(category => category.id === id)
        }
    }