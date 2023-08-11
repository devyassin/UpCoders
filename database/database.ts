import mongoose, { connection } from "mongoose";

const connect = async () => {
  try {
    mongoose.connect(process.env.MONGO_URL!);
    connection.on("connected", () => {
      console.log("Connected to the database");
    });

    connection.on("error", (err) => {
      console.log("Database connection error: " + err);
      process.exit();
    });
  } catch (error) {
    console.log("Not connected to db !", error);
  }
};

export default connect;
