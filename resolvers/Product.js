
// Many to One Relationship table 
// One product belongs to one category
export const Product = {
      // category because Product schema has category = Category
      // categoryId will exist when we fetch product because it has categoryId
    category: ({ categoryId }, args, { categories }) => {
      // parent.categoryId is the id in each product not query id
      // parent = product because product has {categoryId}
      return categories.find(c => c.id === categoryId)
    },
    reviews: (parent, args, { reviews }) => {
      const reviewId = parent.id;

      return reviews.filter(r => r.productId === reviewId)
    }
}