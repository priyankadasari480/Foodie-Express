import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://FoodieExpress:wuxvu30OGf9mOD5n@cluster0.djjmufn.mongodb.net/Foodie-Express').then(()=>console.log("DB Connected"));

}