const app = require("./app");
const mongoose = require("mongoose");

const DB = async function () {
  try {
    await mongoose.connect(process.env.DATABASE_LOCAL);
    console.log("Connected to the DB successfully!");
  } catch (err) {
    console.log(err);
  }
};
DB();

const port = process.env.PORT;
app.listen(port, function () {
  console.log(`Connected to port ${port} successfully...`);
});
