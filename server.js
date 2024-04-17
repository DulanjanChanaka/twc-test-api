const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const Contact = require("./routes/contact");
const User = require("./routes/user");

app.use(cors());
app.use(express.json());

app.use("/api/contact", Contact);
app.use("/api/user", User);

app.get("/", (req, res) => res.status(200).json({ msg: "hello" }));

mongoose
  .connect(
    "mongodb+srv://busapp2024:fW9Ngy8aiXpx70rg@twc.00216pf.mongodb.net/?retryWrites=true&w=majority&appName=twc",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("DB Connected Successfull!");
    app.listen(process.env.PORT || 5000, () => {
      console.log("Backend server is running!");
    });
  })
  .catch((err) => {
    console.log(err);
  });
