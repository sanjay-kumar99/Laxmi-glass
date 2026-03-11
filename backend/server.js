import express from "express";
import mongoose from "mongoose";
import galleryRoutes from "./routes/gallery.js";
import cors from "cors";

const app = express();
app.use(cors());
const PORT = 5000;
app.use(express.json());
app.use("/uploads", express.static("uploads"));

mongoose.connect("mongodb://127.0.0.1:27017/galleryDB");

app.use("/api/gallery", galleryRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
