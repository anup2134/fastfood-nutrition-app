import mongoose from "mongoose";

const dbConnection = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbname: "FASTFOOD",
    })
    .then(() => {
      console.log("Connection made to database");
    })
    .catch((err) => {
      console.log(`error occured while connecting to database: ${err}`);
    });
};

export default dbConnection;
