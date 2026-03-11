import mongoose, { Schema } from "mongoose";
const gallerySchema = new mongoose.Schema({
  title: String,
  category: String,
  description: String,
  imageUrl: String,
});
const Gallery = mongoose.model("Gallery", gallerySchema);
export default Gallery;
