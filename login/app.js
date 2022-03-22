require("dotenv").config();
const express = require("express");
const app = express();

const connectDB = require("./connect/connect");

//route
const authRouter = require("./routes/auth");
const jobsRouter = require("./routes/jobs");

//middleware
app.use(express.static("./public"));
app.use(express.json());

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/jobs", jobsRouter);

const port = 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log("listening to port 5000..");
    });
  } catch (error) {
    console.log(error);
  }
};

start();
