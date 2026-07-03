const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  description: String,
  image: String   // ⭐ laptop image URL
});