import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      "mongodb+srv://admin:admin123@cluster0.xdyongo.mongodb.net/Hasmi"
    );
    console.log(
      `\n Mongodb connected and DB HOST IS ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log(`Mongo db error ${error}`);
    process.exit(1);
  }
};

export default connectDB;
