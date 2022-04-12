import { Schema } from "mongoose";

export const ProductSchema = new Schema({
    name: String,
    description: String,
    price: Number,
    imageUrl: String,
    created_date: {type: Date, default: Date.now}
});