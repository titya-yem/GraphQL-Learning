
export const Query = {
        hello: () => ["Lamdouy", "Douylamdao"],

        // get products[]
        products: (parent, args, { products }) => {
          const { onSale, avgRating } = args.filter;
          let filterProducts = products;

            if (filter && onSale === true) {
              filterProducts = filterProducts.filter(product => {
                return product.onSale
              })
            }
            // we check if number between 1-5 if not return false (includes methord)
            if ([1,2,3,4,5].includes(avgRating)) {
              filterProducts = filterProducts.filter(p => {
                let sumRating = 0;
                let numberOfReviews = 0;
                reviews.forEach(review => {
                  if (review.productId === product.id) {
                    sumRating += review.rating;
                    numberOfReviews++;
                  }
                });
                const avgProductRating = sumRating/numberOfReviews

                return avgProductRating >= avgRating;
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