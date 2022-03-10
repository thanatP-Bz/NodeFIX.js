const express = require("express");
const app = express();
const connectDB = require("./connect/connect");
const route = require("./route/router");
require("dotenv").config();

const jwt = require("jsonwebtoken");

//middleware
app.use(express.static("./public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//route
app.use("/api/v2", route);

app.post("/login", (req, res, next) => {
  const { name, job } = req.body;
  if (name && job) {
    return res.status(200).send(`welcome ${name} the ${job}`);
  }
  res.status(401).send(`Please provide the information`);
  next();
});

const users = [
  {
    id: "1",
    username: "John",
    password: "1234",
    isAdmin: "true",
  },
  {
    id: "2",
    username: "Mike",
    password: "1234",
    isAdmin: "false",
  },
];

app.post("/login2", (req, res, next) => {
  const { username, password } = req.body;
  console.log(username, password);

  if (!username && !password) {
    res.status(401).json({ msg: `username and password are not provided` });
  }

  id = 1;
  const token = jwt.sign({ id, username }, process.env.SECRET_TOKEN);
  res.status(200).json({ msg: "token created", token });
  /*  const client = users.find((user) => {
    return user.username === username && user.password === password;
  });

  if (client) {
    const token = jwt.sign(
      { id: client.id, isAdmin: client.isAdmin },
      process.env.SECRET_TOKEN
    );
    res.json({
      username: client.username,
      password: client.password,
      token,
    });
  } else {
    res.status(400).json({ msg: "username or password is invalid" });
  } */
  next();
});

app.get("/login3", (req, res) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    res.status(401).json({ smg: "No token provided" });
  }
  const token = authHeader.split(" ")[1];
  console.log(token);
  try {
    const decoded = jwt.verify(token, process.env.SECRET_TOKEN);
    res.status(200).json({ smg: `Welcome ${decoded.id} ${decoded.username}` });
  } catch (err) {
    res.status(404).json("You are not authorized in this route");
  }
});
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
