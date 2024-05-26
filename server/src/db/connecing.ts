import mongoose from "mongoose";


const main = async () => {
  
  try {
    await mongoose.connect(`${process.env.DB_CONNECING}`);
    console.log("mongoDB connected");
  } catch (err) {
    console.log(err);
  }
}

main().catch((err) => console.log(err));

export default main;
