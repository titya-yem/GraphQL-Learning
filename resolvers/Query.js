
exports.Query = {
        hello: () => ["Lamdouy", "Douylamdao"],
        products: () => products,
        product: (parent, args, context) => {
          const productId = args.id;
          return products.find(p => p.id === productId)
        },
        categories: () => categories,
        category: (parent, args, context) => {
          const { id } = args;
          return categories.find(category => category.id === id)
        }
    }