const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const CONNECTION_URL = process.env.CONNECTION_URL;

exports.dbConnect = async () => {
  return await mongoose.connect(CONNECTION_URL);
};
