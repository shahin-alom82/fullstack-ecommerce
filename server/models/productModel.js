
import mongoose from 'mongoose'
const productSchema = new mongoose.Schema({
      _type: { type: String },
      name: { type: String, require: true },
      image: { type: Array, require: true },
      price: { type: Number, require: true },
      description: { type: String, require: true },
      discountPercentage: { type: Number },
      category: { type: String, require: true },
      brand: { type: String },
      badge: { type: Boolean },
      isAvailable: { type: Boolean },
      offer: { type: Boolean },
      tags: { type: Array },
})

const productModel = mongoose.model.product || mongoose.model('product', productSchema);
export default productModel;