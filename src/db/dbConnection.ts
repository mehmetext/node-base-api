import mongoose from "mongoose";

export default function connectDB() {
  mongoose
    .connect(process.env.DB_URL || "", {})
    .then(() => {
      console.log("Veritabanına bağlandı!");
    })
    .catch((err) => {
      console.log("Veritabanına bağlanırken hata!");
      throw err;
    });
}
