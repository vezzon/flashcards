const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const cardsRouter = require("./routes/cards.js");
const authRouter = require("./routes/auth.js");
const cookieParser = require("cookie-parser");

const app = express();

app.use(
  cors({
    origin: "*",
  })
);
app.use(morgan("dev"));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/cards", cardsRouter);
app.use(authRouter);

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(3000);
