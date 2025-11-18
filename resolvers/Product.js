import { categories } from "./data.js";

exports.Product = {
      // category because Product schema has category = Category
      category: (parent, args, context) => {
        // parent.categoryId is the id in each product not query id
        // parent = product because product has {categoryId}
        const categoryId = parent.categoryId
        return categories.find(c => c.id === categoryId)
      }
    }