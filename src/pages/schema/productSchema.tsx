export interface Product {
  id: number;
  name: string;
  
  price: number;
  image: string;
  rating: number;
  
}



const productSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },
  category: { type: String },
  inStock: { type: Boolean, default: true },
}, { timestamps: true });
export const Product = type('Product', productSchema);