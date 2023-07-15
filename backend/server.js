const express = require("express");
const dotenv = require("dotenv");
const { dbConnect } = require("./db/db");

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (_req, res) => {
  res.send("Hello World");
});

app.listen(PORT, async () => {
  try {
    const conn = await dbConnect();
    console.log(`Server Listening at http://localhost:${PORT}`);
    console.log(`MongoDB Conencted: ${conn.connection.host}`);
  } catch (error) {
    console.log(error.message);
    process.exit(0);
  }
});
