import mongoose from "mongoose";
const ProductSchema = new mongoose.Schema({
    name:String,
    price:String,

    category:String,
    company:String,
})
const ProductModel = mongoose.model("product",ProductSchema)

export default ProductModel

