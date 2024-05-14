import mongoose from "mongoose";
import app from "./app.js";
import config from "./app/config/index.js";


async function main() {
  const currentDate = new Date().toISOString();
  console.log(currentDate);

  const currentDate2 = new Date().toISOString().split('T')[0];
  console.log(currentDate2);
  
  await mongoose.connect(config.database_url);
  console.log("Connected to MongoDB");
  app.listen(config.port, () => {
    console.log(`Server running at port ${config.port}`);
  });
}
main();